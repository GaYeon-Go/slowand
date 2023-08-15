/* footer.js */
window.addEventListener('load', () => {
    // footer
    const tel = document.querySelector('a.tel_view');
    const hidden = document.querySelector('address.hidden');

    tel.addEventListener('click', (e) => {
        e.preventDefault();
        tel.classList.toggle("active");
        hidden.classList.toggle("active");
    });
});