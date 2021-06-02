var like = "Do you like books?Yes or No?";
var wlc = "Welcome to Cool guys Group!";
var out = "out now!";
var fav= "My favorite novel “Re:Zero − Starting Life in Another World”. It is a is a Japanese light novel series written by Tappei Nagatsuki.The story centres on Subaru Natsuki, Subaru Natsuki who suddenly finds himself transported to another world on his way home from the convenience store!, Now tell me what is your favorite novel or book?" 
var ans = prompt(like)
if (ans.toUpperCase() === "YES") {
  alert(wlc = "Welcome to the Group") ;}
else{alert(out = "out now!") ;}
var ans2 = prompt(fav)
function myFunction() {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      alert("' Luster' by Raven Leilani");
        break;
    case 1:
      alert("' The Underground Railroad' by Colson Whitehead");
        break;
    case 2:
      alert("'Waterland' by Graham Swift");
      break;
    case 3:
      alert("A Promised Land' by Barack Obama");
        break;
    case 4:
      alert("' Still Life' by Louise Penny");
        break;
    default:
      alert("no chance for default");
            }
            
            }

document.write("<h2>" + ans2 + "</h2>" );





