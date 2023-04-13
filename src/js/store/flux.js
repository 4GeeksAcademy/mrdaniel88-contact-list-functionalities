import rigoImage from "../../img/rigo-baby.jpg";
import { useState } from "react";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{ name: "Daniel", address: "Colombia", email: "daniel@daniel.com", phone: "123456789", img: rigoImage },
				{ name: "Alejandro", address: "Colombia", email: "daniel@daniel.com", phone: "123456789", img: rigoImage },
				{ name: "Ricardo", address: "Colombia", email: "daniel@daniel.com", phone: "123456789", img: rigoImage },
				{ name: "Andres", address: "Colombia", email: "daniel@daniel.com", phone: "123456789", img: rigoImage }
			]
		},
		actions: {
			addContact: (contact) => {
				let store = getStore()
				let newContacts = [...store.contacts, contact]
				setStore({ contacts: newContacts })
			},
			delContact: (index) => {
				let newContacts = [...getStore().contacts]
				newContacts.splice(index, 1)
				setStore({ contacts: newContacts })
			},
			editContact: (index, obj) => {
				console.log(index)
				console.log(obj)
				let store = getStore()
				let arrTemp = [...store.contacts];

				arrTemp[index] = obj;
				setStore({ ...store, contacts: arrTemp });


			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
