const image = ['img/1.png', 'img/2.jpg', 'img/3.png', 'img/4.jpg', 'img/5.jpg'];
const dragSlider = document.querySelector('.dragSlider');
const slider = document.querySelector('.dragSlider .slider');
const sliderItem = document.querySelectorAll('.dragSlider .slider .item');
const sliderRadio = document.querySelectorAll('.inputs input');
let current = 0;
let mouseX;
let dragBool = false;

for (let i = 0; i < image.length; i++) {
    sliderItem[i].style.backgroundImage = `url(${image[i]})`;
}

next.onclick = () => {
    current -= 100;
    let x = current.toString()[1];
    x == image.length ? (current = 0, x = 0) : '';
    slider.style.left = current + '%';
    sliderRadio[x].checked = true;
    console.log(x);
    // for (let i = 0; i < image.length; i++) {
    //     sliderRadio[i].onchange ? 
    // }
};

prev.onclick = () => {
    current += 100;
    current > 0 ? current = -(image.length-1 + '00'): '';
    slider.style.left = current + '%';
    let x = current != 0 ? current.toString()[1] : 0;
    sliderRadio[x].checked = true;
};

dragSlider.onmousedown = e => {
    if (e.button == 0) {
        mouseX = e.x;
        dragBool = true;
        console.log(dragBool);
    }
};
// button 0 dzax 1 meshtex 2 achklik
dragSlider.onmouseup = () => dragBool = false;

dragSlider.onmousemove = e => {
    if (dragBool) {
        if (e.x < mouseX) {
            current -= 100;
            let x = current.toString()[1];
            x == image.length ? (current = 0, x = 0) : '';
            slider.style.left = current + '%';
            dragBool = false;
            sliderRadio[x].checked = true;
        } else if (e.x > mouseX) {
            current += 100;
            current > 0 ? current = -(image.length-1 + '00') : '';
            slider.style.left = current +'%';
            dragBool = false;
            let x = current != 0 ? current.toString()[1] : 0;
            sliderRadio[x].checked = true;
        }
    }
};

// tnayin, e.x e.y, elementi texasharjum 


for (let i = 0; i < sliderRadio.length; i++) {
    sliderRadio[i].onmousedown = e => {
        e.stopPropagation();
        current = +(-i + '00');
        slider.style.left = current + '%';
    }
}



















