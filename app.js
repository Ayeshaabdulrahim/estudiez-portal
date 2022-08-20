
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);


  $( "#basic-form" ).submit(function( event ) {
    window.location.replace("./thankyou.html");
    event.preventDefault();
  });

  $( "#basic-formt" ).submit(function( event ) {
    window.location.replace("./thankyouteacher.html");
    event.preventDefault();
  });


  $( "#basic-formp" ).submit(function( event ) {
    window.location.replace("./thankyouparent.html");
    event.preventDefault();
  });


  $("document").ready(function(){
            

$("#getusername").keyup(function(){
   var username = $("#getusername").val();
      
       sessionStorage.setItem("username", username);
    
})
})

document.getElementById("username").innerHTML = sessionStorage.getItem("username");




