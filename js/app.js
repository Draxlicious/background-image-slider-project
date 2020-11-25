// immediate invoked function expression
let cars = [
    "contBcg-0.jpeg",
    "contBcg-1.jpeg",
    "contBcg-2.jpeg",
    "contBcg-3.jpeg",
    "contBcg-4.jpeg" 
]

  //select both left and right button. Add event listeners
let imgElement = document.querySelector(".img-container")
let i = 0;

let buttons = document.querySelectorAll(".btn")

buttons.forEach((btn)=>{
  btn.addEventListener('click', function(){
    if(btn.classList.contains("btn-right")){
        i++
        if(i > cars.length - 1){
          i = 0
        }
        imgElement.style.backgroundImage = `url(../img/${cars[i]}`;
      }

    if(btn.classList.contains("btn-left")){
      i--
      if(i < 0){
        i = cars.length - 1
      }
      imgElement.style.backgroundImage = `url(../img/${cars[i]}`;
    }
    console.log(i)
  })
})