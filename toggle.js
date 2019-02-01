// toggle menu
$('.header .fas').on('click', function() {
    $('.header .fas').toggleClass('active');
    $('nav').toggleClass('toggle-menu');
})
// finish toggle menu. 


// scroll logo 

const imgLogo = document.querySelector('.header_logo img');
const scroll = window.scrollY;
const header = document.querySelector('.header');
document.addEventListener('scroll', () => {
 

if(window.scrollY > imgLogo.offsetTop){
  imgLogo.style.width = ('55%');
  header.style.width = ('60%');
  header.style.marginTop = ('0');
}
else {
  imgLogo.style.width = ('70%');
  header.style.width = ('70%');
  header.style.marginTop = ('5px');
}

})

// walidacja formularza

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e){
  const emailInput = document.querySelector('.email');
  const title = document.querySelector('.text_form');
  const textarea = document.querySelector('.textarea');


  if(emailInput.value === '' || title.value === '' || textarea.value === ''){  
    e.preventDefault();
    alert('uzupełnij wszystkie pola');
  } 
})
