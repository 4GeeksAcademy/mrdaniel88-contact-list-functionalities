import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Modal } from "./Modal";

export const Navbar = () => {
	const { actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#editModal-"+-1} >Add contact</button>
			</div>
			<Modal index={-1} />
		</nav>
	);
};
