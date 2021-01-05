// burger

const burger = document.querySelector('.my-works__burger');
const windowModal = document.querySelector('.window-modal');

console.log(burger);
console.log(windowModal);

burger.addEventListener('click', function() {
	windowModal.classList.toggle('show');
	console.log('hello');
});

