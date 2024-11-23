let containerEl = document.querySelector('.container');
console.log(containerEl);
let header = document.createElement('header');
header.innerHTML = 'Hello';
containerEl.appendChild(header);
header.setAttribute('style','padding: 50px; background: yellow; text-align: center;');

const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
];
menuData.forEach((item)=>{
    const linkEl = document.createElement('a');
    linkEl.innerHTML = item.name;
    linkEl.setAttribute('href', item.url);
    header.appendChild(linkEl);
})
let newLink = document.querySelectorAll('header a');
newLink.forEach(newLink=>newLink.setAttribute('target', '_blank'));

let block = document.createElement('div');
block.style.display = 'flex';
for (let i = 1; i <= 50; i++) {
    let childblock = document.createElement('div');
    childblock.style.borderRadius = '20px';
    childblock.style.width = '50px';
    childblock.style.height = '50px';
    childblock.style.backgroundColor = 'pink';
    block.appendChild(childblock);
}
document.body.appendChild(block);
console.log(block);

let [... circleEl] = document.querySelectorAll('div div');
circleEl.forEach(element =>{
    element.classList.add('circle-element');
})

const elementsArray = [
    { text: 'Елемент 1', usePrepend: true },
    { text: 'Елемент 2', usePrepend: false },
    { text: 'Елемент 3', usePrepend: true }
]
let section = document.createElement('section');
section.innerHTML = 'test';
document.body.appendChild(section);
elementsArray.forEach(item=>{
    let p = document.createElement('p');
    p.innerHTML = item.text;
    if(item.usePrepend){
        section.before(p);
    }
        else{
            section.after(p);
    }
})