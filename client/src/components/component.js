// The function creates a new UL with a li for each chosen item

export const createList = (array) => {
  const newUl = document.createElement('ul');
  for (const each of array) {
    const newLi = document.createElement('li');
    const itemPrice = each.value * each.price;
    const roundedPrice = Math.round((itemPrice + Number.EPSILON) * 100) / 100;
    const stringPrice = roundedPrice.toString();
    newLi.innerText = each.name.concat(' €', stringPrice);
    newUl.appendChild(newLi);
  }
  return newUl;
};
