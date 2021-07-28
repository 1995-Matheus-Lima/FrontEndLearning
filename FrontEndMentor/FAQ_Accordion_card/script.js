const list = document.querySelectorAll('li h2')

list.forEach(item => {
    item.addEventListener('click', () => { 
        item.classList.toggle('active');
        item.children[0].classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    })
})