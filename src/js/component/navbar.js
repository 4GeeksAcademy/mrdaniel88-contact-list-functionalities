import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Navbar = () => {
	const { actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<button onClick={() => actions.addContact({
					name: "Daniel",
					address: "Colombia",
					email: "daniel@daniel.com",
					phone: "123456789",
					img: rigoImage
				})} className="btn btn-primary">Add contact</button>
			</div>
		</nav>
	);
};
