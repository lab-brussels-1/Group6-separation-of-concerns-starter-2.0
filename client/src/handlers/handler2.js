/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable no-restricted-globals */
export const removeIt = () => {
  const resetting = document.getElementById('products-list').innerHTML = 'Basket is empty!';
  const resetTotal = document.getElementById('total').innerHTML = '';
  setTimeout(() => {
    location.reload(1);
  }, 2000);
};
