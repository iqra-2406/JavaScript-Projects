const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
      case "white":
      case "blue":
      case "yellow":
            body.style.backgroundColor = e.target.id;        
        break;
    
      default:
                          body.style.backgroundColor = "purple";

        break;
    }
     


    }
    
  )
  
})
