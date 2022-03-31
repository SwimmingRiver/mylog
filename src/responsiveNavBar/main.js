const toggleBtn = document.querySelector('.navBarToogleBtn');
const menu = document.querySelector('.navBarMenu');
const icons = document.querySelector('.navBarIcons');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    toggleBtn.classList.toggle('active');
})