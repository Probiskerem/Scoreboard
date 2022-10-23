
let homepoint = 0
let guestPoint = 0
document.getElementById("home-el").textContent = homepoint
document.getElementById("guest-el").textContent = guestPoint
function add1Home() {
   homepoint += 1
   document.getElementById("home-el").textContent = homepoint
}
function add2Home() {
     homepoint += 2
     document.getElementById("home-el").textContent = homepoint
}
function add3Home() {
   homepoint += 3
   document.getElementById("home-el").textContent = homepoint
}
function add1Guest() {
  guestPoint += 1
  document.getElementById("guest-el").textContent = guestPoint
}
function add2Guest(){
  guestPoint += 2
   document.getElementById("guest-el").textContent = guestPoint 
}

function add3Guest(){
   guestPoint += 3
    document.getElementById("guest-el").textContent = guestPoint
}

