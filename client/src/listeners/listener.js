// Listener for reset function
import { EVENT_ID } from '../../data/constants.js';
import { removeIt } from '../handlers/handler2.js';

export const listenerClick = (clickMe) => clickMe.addEventListener(EVENT_ID, removeIt);
