let playfield = document.querySelector('.playfield');
let obj = document.querySelector('.obj');
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function(event){
    switch (event.key) {
        case 'ArrowUp':
            posY = Math.max(0, posY-10);
            break;
            case 'ArrowDown':
                posY = Math.min(playfield.clientHeight-obj.clientHeight, posY+10);
                break;
                case 'ArrowRight':
            posX = Math.min(playfield.clientWidth-obj.clientWidth, posX+10);
            break;
            case 'ArrowLeft':
            posX = Math.max(0, posX-10);
            break;
        default:
            break;
    }
    obj.style.top = posY + 'px';
    obj.style.left = posX + 'px';
})