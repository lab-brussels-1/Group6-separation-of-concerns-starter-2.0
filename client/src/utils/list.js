// eslint-disable-next-line boundaries/element-types
import { catalogue, storage } from '../../data/state.js';

export const addToList = (str, num) => {
  debugger;

  // The function first checks inputted value, if value=0 then it removes the item from th list
  const newList = [...storage.list];
  if (num === 0) {
    return newList.filter((element) => element.id !== str);
  }
  // Seconde, it checks if the item is already in the list, then only the value is changed
  for (const obj of newList) {
    if (obj.id === str) {
      obj.value = num;
      return newList;
    }
  }
  // Third, if the item is not in the list yet, it adds the item details into the storage.list
  const newItemObj = catalogue.find((element) => element.id === str);
  newItemObj.value = num;
  newList.push(newItemObj);
  return newList;
};

// Calculation total amount to pay
export const totalCalculation = (array) => {
  let sum = 0;
  for (const each of array) {
    sum += each.value * each.price;
  }
  const roundedSum = Math.round((sum + Number.EPSILON) * 100) / 100;
  return roundedSum.toString();
};
