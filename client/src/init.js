/* eslint-disable boundaries/no-unknown-files */
import { choseItem, listenerClick } from './listeners/chose.js';
import { INPUT_CLASS, BUTTON_ID } from '../data/constants.js';

// Call listener for all items in catalogue
for (const Input of document.querySelectorAll(INPUT_CLASS)) {
  choseItem(Input);
}

// Calling the listener for resetting function
listenerClick(document.getElementById(BUTTON_ID));