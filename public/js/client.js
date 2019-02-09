var navbar = document.getElementById('navbar');
var logoSmall = document.getElementById('logoSmall');
var main = document.getElementById('main');
var checkboxMenu = document.getElementById('checkboxMenu');
const tabBar = document.getElementById('tab-bar-border');

//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}


function showMenu() {
  document.getElementsByClassName('druhyMenu')[0].style.opacity = 1;
}

const firstBox = document.getElementById('first-box');
const firstBoxStyle = mezr.place({
  element: tabBar,
  target: firstBox,
  position: 'left top left bottom',
})
const firstWidth = mezr.width(firstBox, 'padding');
tabBar.style.left = firstBoxStyle.left + "px";
tabBar.style.top = firstBoxStyle.top + "px";
tabBar.style.width = firstWidth + "px";

function displayContent(e, masaz) {

  const styleBar = mezr.place({
    element: tabBar,
    target: e.currentTarget,
    position: 'left top left bottom',
  })
  const targetWidth = mezr.width(e.currentTarget, 'padding');
  tabBar.style.left = styleBar.left + "px";
  tabBar.style.top = styleBar.top + "px";
  tabBar.style.width = targetWidth + "px";

  let boxContent = document.getElementsByClassName('boxContent');
  for (i = 0; i < boxContent.length;i++){
    boxContent[i].style.display = "none";
  }
  let box = document.getElementsByClassName('box');
  for (i = 0; i < box.length; i++) {
    box[i].className = box[i].className.replace(" active", "");
  }

  document.getElementById(masaz).style.display = "block";
  e.currentTarget.className += " active";
}
