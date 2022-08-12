/* eslint-disable indent */
import { addToList, totalCalculation } from '../utils/list.js';
import { createList } from '../components/component.js';
import { storage } from '../../data/state.js';
import { BASKET_ID, TOTAL_OUTPUT } from '../../data/constants.js';

export const addItem = (event) => {
	// Getting name and chosen amount from 'clicked' item (event.target)
	const itemName = event.target.name;
	const itemAmount = parseInt(event.target.value, 10);

	// Updating a list of user inputs (storage.list)
	const newList = addToList(itemName, itemAmount);
	storage.list = newList;

	// Creating new UL with user inputs in li and display new UL in the basket
	const prodList = document.getElementById(BASKET_ID);
	const oldUl = prodList.firstElementChild;
	const newUl = createList(newList);
	prodList.replaceChild(newUl, oldUl);

	// Calculating total and displaying it in the basket
	const output = document.querySelector(TOTAL_OUTPUT).firstElementChild;
	const totalToPay = totalCalculation(newList);
	output.innerText = 'Total €'.concat(totalToPay);
};
