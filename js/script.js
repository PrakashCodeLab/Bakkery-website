const headMobileHam=document.querySelector('.header__hamburger');

 
const headMobileNav=document.querySelector('.header__navbar__section');

const body=document.querySelector('.body')

headMobileHam.addEventListener('click',()=>{
    
    headMobileNav.classList.toggle('head__mobile__nav');
    
body.classList.toggle('body__nav') ;  
    
})


 
 
