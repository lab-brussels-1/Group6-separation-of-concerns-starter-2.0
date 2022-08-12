import { choseItem } from './listeners/chose.js';
import { INPUT_CLASS } from '../data/constants.js';

// Call listener for all items in catalogue
for (const Input of document.querySelectorAll(INPUT_CLASS)) {
  choseItem(Input);
}
