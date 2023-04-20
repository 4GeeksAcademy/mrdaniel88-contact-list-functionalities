import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";
import { Modal } from "../component/Modal";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store
	useEffect(() => {
		actions.getAgenda()
	},[])

	return (

		<div className="d-flex flex-column justify-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="list-group contact-list">
				{contacts.map((contact, index) =>
					<div key={index}>
						<ContactCard
							img={contact.img}
							full_name={contact.full_name}
							address={contact.address}
							email={contact.email}
							phone={contact.phone}
							onDelete={() => actions.delContact(contact.id)}
							index={contact.id}

						/>
						<Modal index={contact.id} />
					</div>
				)}
			</div>
		</div>
	)
};
