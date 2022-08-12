export const removeIt = () => {
	const resetting = (document.getElementById('products-list').innerHTML =
		'Basket is empty!');
	const resetTotal = (document.getElementById('total').innerHTML = '');
	setTimeout(function () {
		location.reload(1);
	}, 2000);
};
