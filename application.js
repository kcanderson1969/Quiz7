function weekSeven(){
  var itsATextbox = document.getElementById("itsATextbox");
  var content = document.getElementById("output");
  content.innerHTML = "";
  for(var i = 0; i<100; i++){
    content.innerHTML += "<div>" + itsATextbox.value + "</div>";
  }
}  