let text = document.getElementById('text');
let leaf = document.getElementById('bird');
let hill1 = document.getElementById('hill1');
let elephants = document.getElementById('elephants');
let tiger = document.getElementById('tiger');

window.addEventListener('scroll', () =>{
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        bird.style.top = value * -1.5 + 'px';
        bird.style.left = value * 1.5 + 'px';
        tiger.style.left = value * 1.5 + 'px';
        elephants.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
    }
)