const header = document.querySelector('.header');
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('fa-xmark');
  nav.classList.toggle('active');
});

window.onscroll = () =>{
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
