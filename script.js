
const c = document.querySelector('.circle');
const bc = document.querySelector('.bcircle')
const cchoices = document.querySelector('.moodcontainer')
let shouldCircleBounce = true;

const animateit = function (e) {
    shouldCircleBounce = false
    console.log(e);

    let x = e.touches[0].clientX;
    const y = e.touches[0].clientY;

    const { offsetWidth: width, offsetHeight: height } = c


    //const xMove = x / width * (move * 2) - move
    // const yMove = y / height * (move * 2) - move;
    console.log(x);


    if (x > 50) {
        cchoices.style.visibility = 'visible'
        bc.style.transform = 'scale(1.6)'
    }

    else {
        cchoices.style.visibility = 'hidden'
        bc.style.transform = 'scale(0)'

    }
    if (x > 70) x = 70

    c.style.transform = `translate(${x}px, ${0}px)`;

};

c.addEventListener('touchmove', animateit)
c.addEventListener('touchend', function () {
    console.log('end');
    cchoices.style.visibility = 'hidden'

    c.style.transform = `translate(0px, ${0}px)`;
    bc.style.transform = 'scale(0)'

})

let tog = false;
let i = setInterval(() => {
    if (shouldCircleBounce) {
        tog = !tog
        if (tog)
            bc.style.transform = 'scale(.9)'
        else
            bc.style.transform = 'scale(0.8)'
    }
    else clearInterval(i)
}, 500);

