
let catalogBtn = document.querySelector('.catalog-btn');
let dop = document.querySelector('.dop');

catalogBtn.addEventListener('click', () => {
    console.log('123');
    if (catalogBtn.innerHTML === 'Показать еще') {
        dop.style.display = 'flex';
        catalogBtn.innerText = 'Скрыть';
    } else {
        dop.style.display = 'none';
        catalogBtn.innerText = 'Показать еще';
    }
});

let mainBtn = document.querySelector('#mainBtn');
let catalog = document.querySelector('#catalog');

mainBtn.addEventListener('click', () => {
    console.log('321');
    catalog.scrollIntoView();
})