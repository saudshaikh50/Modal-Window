'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const showModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++)
    btnsShowModal[i].addEventListener('click', showModal);

// modal.style.display='block';

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })
document.addEventListener('keydown', function(e) {
    // console.log('A key was pressed');
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // if (!modal.classList.contains('hidden'))
        //! Boolean
        closeModal();
    }
});