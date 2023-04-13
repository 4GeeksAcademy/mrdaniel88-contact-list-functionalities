import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});

useEffect(()=>{
	if(props.index == -1){
		//Crear nuevo contacto
	}
	else if (props.index >= 0) {
		// Editar contacto
	}
	else {
		// Indice invalido
	}
},[])

	const { store, actions } = useContext(Context)
	const [name, setName] = useState(store.contacts[props.index]?.name)
	const [email, setEmail] = useState(store.contacts[props.index]?.email)
	const [phone, setPhone] = useState(store.contacts[props.index]?.phone)
	const [address, setAddress] = useState(store.contacts[props.index]?.address)
	const [img, setImg] = useState(store.contacts[props.index]?.img)


	return (
		<div className="modal fade" id={"editModal-"+props.index} tabindex="-1" aria-labelledby={"exampleModalLabel-"+props.index} aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Contacto {props.index}</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						)}
					</div>
					<div className="modal-body">
						<form>
							<>
								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">Full Name</label>
									<input type="text" class="form-control" id="fullName" placeholder="Full Name"
										value={name}
										onChange={(e) => setName(e.target.value)} />
								</div>

								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">Email address</label>
									<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)} />
									<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
								</div>

								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">Phone Number</label>
									<input type="text" class="form-control" id="phoneNumber" placeholder="123456789"
										value={phone}
										onChange={(e) => setPhone(e.target.value)} />
								</div>

								<div class="mb-3">
									<label for="exampleInputEmail1" class="form-label">Address</label>
									<input type="text" class="form-control" id="Address" placeholder="Address"
										value={address}
										onChange={(e) => setAddress(e.target.value)} />
								</div>
							</>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary"
							onClick={() => actions.editContact(props.index, {name: name, address: address, email: email, phone: phone, img: img})}>
							Save
						</button>
						{/* <button type="button" className="btn btn-secondary" data-dismiss="modal">
							Do it!
						</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	edit: PropTypes.func,
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
