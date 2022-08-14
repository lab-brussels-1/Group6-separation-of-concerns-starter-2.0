import { CHOSE_EVENT, EVENT_ID } from '../../data/constants.js';
import { addItem, removeIt } from '../handlers/handler.js';

// The function listens all inputs in catalogue.
//  As one of them is clicked it runs callback 'addItem' handler
export const choseItem = (element) => element.addEventListener(CHOSE_EVENT, addItem);

// Listener for reset function
export const listenerClick = (clickMe) => clickMe.addEventListener(EVENT_ID, removeIt);
