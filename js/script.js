$(document).ready(function(){
  makeactive(1);
});


function makeactive(tab) { 
  document.getElementById("tab1").className = ""; 
  document.getElementById("tab2").className = ""; 
  document.getElementById("tab3").className = "";
  document.getElementById("tab"+tab).className = "active";
  $("#content").empty()

  switch(tab) {
    case 1:
        $("#content").append('<div class="description">Better remorse than regrets. Come and taste our exclusive endangered species specialties before its too late.</div>');
        break;
    case 2:
        $("#content").append('<div class="description"><ul><li>Sumatran Orangutan Stew</li><li>Mountain Gorilla Burger</li><li>Giant Panda\'s fried liver </li><li>Yangtze river dolphin carpaccio</li><li>Blue whale du chef</li></ul></div>');
        break;
    case 3:
        $("#content").append('<div class="description">See code on <a href="http://github.com/AtActionPark/odin_dom_manipulation_with_jquery">Github</a></div>');
        break;
    default:
        break;
  }
} 