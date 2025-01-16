const navmore = document.getElementById('nav_more');
const navmenuflex =document.querySelector(".nav_menu_flex")
const container =document.querySelector(".container")

navmore.addEventListener('click',()=>{

    if (navmenuflex.style.display === 'none'){
        navmenuflex.style.display='block';
        navmore.innerHTML='<i class="ri-close-large-line"></i>'
    }else{
        navmenuflex.style.display='none';
        navmore.innerHTML='<i class="ri-align-justify"></i>'
    }

});
container.addEventListener('scroll',()=>{
    navmenuflex.style.display='none';
    navmore.innerHTML='<i class="ri-align-justify"></i>'
});

