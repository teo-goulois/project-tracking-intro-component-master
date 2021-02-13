const btn = document.getElementById('btn');
const nav = document.querySelector('.navigation');

btn.addEventListener('click', function() {
    
    if(nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.firstChild.src = "images/icon-hamburger.svg";
       // btn.firstChild.src = "images/icon-close.svg";
        console.log('if');
    }
    else {
        nav.classList.add('open');
       // btn.firstChild.src = "images/icon-hamburger.svg";
        btn.firstChild.src = "images/icon-close.svg";
        console.log('else');
    }
})