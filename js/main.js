const header = document.querySelector('.header');

window.onscroll = () =>{
    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
