import { CHOSE_EVENT } from '../../data/constants.js';
import { addItem } from '../handlers/handler.js';

// The function listens all inputs in catalogue.
//  As one of them is clicked it runs callback 'addItem' handler
export const choseItem = (element) => element.addEventListener(CHOSE_EVENT, addItem);
