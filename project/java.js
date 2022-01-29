var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

function chng1() {

    document.getElementById("p1").style.visibility = "visible";
    }
  
  function chng2() {
    document.getElementById("p1").style.visibility = "hidden";
  }
  
  function chng3() {
    document.getElementById("p2").style.visibility  = "visible";
    }
    function chng4() {
        document.getElementById("p2").style.visibility = "hidden";
       }
       function chng5() {

        document.getElementById("p3").style.visibility = "visible";
        }
      
      function chng6() {
        document.getElementById("p3").style.visibility = "hidden";
      }
      
      function chng7() {
        document.getElementById("p4").style.visibility  = "visible";
        }
        function chng8() {
            document.getElementById("p4").style.visibility = "hidden";
           }
           function chng9() {

            document.getElementById("p5").style.visibility = "visible";
            }
          
          function chng10() {
            document.getElementById("p5").style.visibility = "hidden";
          }
          
          function chng11() {
            document.getElementById("p6").style.visibility  = "visible";
            }
            function chng12() {
                document.getElementById("p6").style.visibility = "hidden";
               }
function myFunction(imgs) {
               
   var expandImg = document.getElementById("expandedImg");
               
  var imgText = document.getElementById("imgtext");
                
  expandImg.src = imgs.src;
                
  imgText.innerHTML = imgs.alt;
                
  expandImg.parentElement.style.display = "block";
    }
              