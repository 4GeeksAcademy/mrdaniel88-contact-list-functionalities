import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context)
	const { contacts } = store


	return (

		<div className="d-flex flex-column justify-center mt-5">
			<h1>Hello Rigo!</h1>
			<div className="list-group contact-list">
				{contacts.map((contact, index) =>
					<ContactCard
						img={contact.img}
						name={contact.name}
						address={contact.address}
						email={contact.email}
						phone={contact.phone}
						onDelete={() => actions.delContact(index)}
						// edit={() => actions.editContact(index)}
						index={index}
						key={index}
					/>)}
			</div>
		</div>
	)
};
