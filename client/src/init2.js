import { BUTTON_ID } from '../data/constants.js';
import { listenerClick } from './listeners/listener.js';

// Calling the listener for resetting function
listenerClick(document.getElementById(BUTTON_ID));
