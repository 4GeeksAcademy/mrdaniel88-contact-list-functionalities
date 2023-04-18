import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


export const Modal = props => {

	const { store, actions } = useContext(Context)
	// const [name, setName] = useState(store.contacts[props.index]?.name)
	// const [email, setEmail] = useState(store.contacts[props.index]?.email)
	// const [phone, setPhone] = useState(store.contacts[props.index]?.phone)
	// const [address, setAddress] = useState(store.contacts[props.index]?.address)
	// const [img, setImg] = useState(store.contacts[props.index]?.img)

	const [full_name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const [img, setImg] = useState(store.contacts[props.index]?.img)

	useEffect(() => {
		if (props.index == -1) {
			//Crear nuevo contacto
		}
		else if (props.index >= 0) {
			// Editar contacto
			let updateContact = store.contacts.find(contact=>contact.id==props.index)
			setAddress(updateContact.address)
			setPhone(updateContact.phone)
			setEmail(updateContact.email)
			setName(updateContact.full_name)
			
		}
		else {
			// Indice invalido
		}
	}, [])


	function guardar() {
		let newContact ={
			full_name:full_name,
			email:email,
			phone:address,
			address:address,
			
		}
		if (props.index == -1) {
			//Crear nuevo contacto
			actions.addContact(newContact)
			// setAddress("")
			// setPhone("")
			// setEmail("")
			// setName("")
		}
		else if (props.index >= 0) {
			// Editar contacto
			actions.editContact(props.index, newContact)
		}
		else {
			// Indice invalido
		}
	}

	return (
		<div className="modal fade" id={"editModal-" + props.index} tabIndex="-1" aria-labelledby={"exampleModalLabel-" + props.index} aria-hidden="true">
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
								<div className="mb-3">
									<label htmlFor="nameInput" className="form-label">Full Name</label>
									<input type="text" className="form-control" id="nameInput" placeholder="Full Name"
										value={full_name}
										onChange={(e) => setName(e.target.value)} />
								</div>

								<div className="mb-3">
									<label htmlFor="emailInput" className="form-label">Email address</label>
									<input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="email@email.com"
										value={email}
										onChange={(e) => setEmail(e.target.value)} />
									<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
								</div>

								<div className="mb-3">
									<label htmlFor="phoneInput" className="form-label">Phone Number</label>
									<input type="text" className="form-control" id="phoneInput" placeholder="123456789"
										value={phone}
										onChange={(e) => setPhone(e.target.value)} />
								</div>

								<div className="mb-3">
									<label htmlFor="addressInput" className="form-label">Address</label>
									<input type="text" className="form-control" id="addressInput" placeholder="Address"
										value={address}
										onChange={(e) => setAddress(e.target.value)} />
								</div>
							</>
						</form>
					</div>
					<div className="modal-footer">
						<button data-bs-dismiss="modal" data-bs-target={"editModal-" + props.index} type="button" className="btn btn-primary"
							onClick={guardar}>
							Save
						</button>
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
	index: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
