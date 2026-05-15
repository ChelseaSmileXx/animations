const initMainMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const headerEl = document.querySelector('.header')
    
    burgerBtn.addEventListener('click', () => {
        console.log(burgerBtn, headerEl)
        headerEl.classList.toggle('header--open')
    })
}

export { initMainMenu }