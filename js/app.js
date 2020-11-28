function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
  }
let timesClicked = 0;
function myFunction2() {
    
    var elemenet2 = document.getElementById("myPhoto");
    if (timesClicked == 0){ 
        elemenet2.classList.add("rotate");
        timesClicked ++;
        

    }
    else {
        elemenet2.classList.remove("rotate");
        elemenet2.classList.add("rotate2");
        timesClicked --;   
            
        }
        
    }
    
  
  

