var navbar = document.getElementById('navbar');
var logoSmall = document.getElementById('logoSmall');
var main = document.getElementById('main');
var checkboxMenu = document.getElementById('checkboxMenu');
const tabBar = document.getElementById('tab-bar-border');
const tabs = document.getElementById('tabs');

//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}


// function showMenu() {
//   document.getElementsByClassName('druhyMenu')[0].style.opacity = 1;
// }

function displayContent(e, masaz) {

  let boxContent = document.getElementsByClassName('boxContent');
  for (i = 0; i < boxContent.length;i++){
    boxContent[i].style.display = "none";
  }
  let box = document.getElementsByClassName('box');
  for (i = 0; i < box.length; i++) {
    box[i].className = box[i].className.replace(" active", "");
  }
  const masazID = document.getElementById(masaz);

  masazID.style.display = "block";
  tabs.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  e.currentTarget.className += " active";
}
