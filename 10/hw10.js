// onMouseOver & onMouseOut
let mouseEl = document.querySelector('.area');
mouseEl.addEventListener('mouseover', function(){
    this.style.background = 'pink';
})
mouseEl.addEventListener('mouseout', function(){
    this.style.background = 'white';
})
