let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let for2 = document.getElementById('for2');
let ccc = document.getElementById('ccc');
let ddd = document.getElementById('ddd');

window.addEventListener('scroll', () =>{
        let value = window.scrollY;

        text.style.marginTop = value * 2.5 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        for2.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 1 + 'px';
        ccc.style.left = value * -1.5 + 'px';
        ddd.style.left = value * 1.5 + 'px';
    }
)