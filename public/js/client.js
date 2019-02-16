var navbar = document.getElementById('navbar');
var logoSmall = document.getElementById('logoSmall');
var pageHeader = document.getElementById('pageHeader');
var checkboxMenu = document.getElementById('checkboxMenu');
const tabBar = document.getElementById('tab-bar-border');
const tabs = document.getElementById('tabs');

//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}

function displayContent(e, masaz) {

  const boxContent = document.getElementsByClassName('boxContent');
  const box = document.getElementsByClassName('box');
  if(e.currentTarget.className.indexOf('active') > 0) {
    for (i = 0; i < boxContent.length;i++){
      boxContent[i].style.display = "none";
    }
    for (i = 0; i < box.length; i++) {
      box[i].className = box[i].className.replace(" active", "");
    }
    return
  }
  for (i = 0; i < boxContent.length;i++){
    boxContent[i].style.display = "none";
  }
  for (i = 0; i < box.length; i++) {
    box[i].className = box[i].className.replace(" active", "");
  }

  const masazID = document.getElementById(masaz);
  
  masazID.style.display = "block";
  tabs.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  e.currentTarget.className += " active";
}
