export const removeIt = () => {
  const resetting = (document.getElementById('products-list').innerHTML = 'Basket is empty!');
  const resetTotal = (document.getElementById('total').innerHTML = '');
  setTimeout(() => {
    location.reload(1);
  }, 2000);
};
