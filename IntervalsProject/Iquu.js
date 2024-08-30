// generate random colors

const randomColors = function () {
  let hexa = "0123456789ABCDEF";
  let color = "#";
for (let i = 0; i < 6; i++) {
  color += hexa[Math.floor(Math.random() * 16)]
}
return color;

};

let stopinterval                      ;
const startChangeColor = () =>{
if (!stopinterval) {
  stopinterval = setInterval(changeBg, 1000);
}
function changeBg() {
  document.body.style.backgroundColor = randomColors();

}
};

const stopChangeColor = () =>{
clearInterval(stopinterval)
stopinterval = null;
};


document.querySelector("#start").addEventListener('click', startChangeColor);

document.querySelector("#stop").addEventListener('click', stopChangeColor);