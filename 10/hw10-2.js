let img = document.querySelector('img');
img.addEventListener('mouseover', function(){
    this.style.boxShadow = '30px 30px 50px rgba(0, 0, 0, 0.5)';
    this.style.transform = 'scale(1.2)';
})
img.addEventListener('mouseout', function(){
    this.style.boxShadow = 'none';
    this.style.transform = 'scale(1)';
})
