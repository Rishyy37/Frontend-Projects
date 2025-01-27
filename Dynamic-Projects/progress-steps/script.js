
// const levels = document.querySelectorAll(".levels");
// let counter = 1;

// const buttons = document.querySelectorAll("button");

// buttons[0].addEventListener("click", function () {
//   if (counter > 1) {
//     counter--;
//   }
//   updateButton(counter)
//   removeActive();
//   updateLevels(counter);
//   console.log(counter);
// });

// buttons[1].addEventListener("click", function () {
//   if (counter < 4) {
//     counter++;
//   }
//   updateButton(counter)
//   removeActive();
//   updateLevels(counter);
//   console.log(counter);
// });

// function addActiveClasses(index) {
//   for (let i = 0; i < index; i++) {
//     levels[i].classList.add("active");
//   }
// }

// function updateLevels(counter){
//     for(let i=0;i<counter;i++){
//         levels[i].classList.add("active");
//     }
// }

// function removeActive(){
//     for(let i=0;i<levels.length;i++){
//         levels[i].classList.remove("active");
//     }
// }

// function updateButton(counter){
//     // buttons.classList.remove("invalid");
//     buttons[0].classList.remove("invalid");
//     buttons[1].classList.remove("invalid");
//     if(counter==1) buttons[0].classList.add("invalid");
//     if(counter==4) buttons[1].classList.add("invalid");
// }




const levels = document.querySelectorAll(".levels");
const buttons = document.querySelectorAll("button");
let counter = 1;

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    counter += index === 0 ? -1 : 1;
    counter = Math.min(Math.max(counter, 1), levels.length);
    updateUI();
    console.log(counter);
  });
});

function updateUI() {
  levels.forEach((level, i) => 
    level.classList.toggle("active", i < counter)
  );
  buttons[0].classList.toggle("invalid", counter === 1);
  buttons[1].classList.toggle("invalid", counter === levels.length);
}
