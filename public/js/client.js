var navbar = document.getElementById('navbar');
var logoSmall = document.getElementById('logoSmall');
var main = document.getElementById('main');
var checkboxMenu = document.getElementById('checkboxMenu');
const tabBar = document.getElementById('tab-bar-border');

console.log(mezr.width(tabBar, 'content'))

// checkboxMenu.checked = true;

// function fadeEffect() {
//
//   // .className meni class pro dany element v DOM
//   btnOmne.className = "animated fadeOut";
//   logoBig.className = "animated fadeOut";
//
//   // setTimeout fce udela funkci az za specifikovanou dobu v milisekundach
//   // display: none uklidi logo a button, aby tam nedelali bordel
//   setTimeout(function() {
//     logoBig.style.display = "none";
//     btnOmne.style.display = "none";
//   }, 800);
//
//   // stejne tady, ale s tim, ze navbar a small Logo se zobrazi az za 1,1s
//   setTimeout(function() {
//     navbar.style.display = "block";
//     navbar.className = "animated bounceInDown";
//     logoSmall.style.display = "block";
//     logoSmall.className = "animated bounceInDown";
//
//   }, 1100);
// }


//funcke na presmerovani po kliknuti na male logo na stranku o omne
function goHome() {
  location.href = "omne.html";
}


function showMenu() {
  document.getElementsByClassName('druhyMenu')[0].style.opacity = 1;
}

//tohle je, kdyz je pri nacteni dana sirka < 930
// if(window.innerWidth < 930) {
//     window.addEventListener('scroll', scrollAndHide, false);
// }
//tahle funkce udela
// function scrollAndHide() {
//   navbar.style.animationDuration = "0.3s";
//
//   if(window.oldScroll > (window.scrollY || window.pageYOffset)) {
//     navbar.className = "animated fadeIn";
//   } else {
//     navbar.className = "animated fadeOut";
//   }
//   window.oldScroll = ( window.scrollY || window.pageYOffset);
// }
//
// window.addEventListener('resize', mediaWidth, false);
//
// function mediaWidth() {
//       var width = window.innerWidth;
//       if (width < 930) {
//         window.addEventListener('scroll', scrollAndHide, false);
//       } else {
//         window.removeEventListener('scroll', scrollAndHide, false);
//       }
// }

const smallHeader = document.getElementById('smallHeader');


// window.addEventListener('scroll', function()   {
//   if (window.scrollY > 200) {
//     smallHeader.style.opacity = 1;
//   } else{
//     smallHeader.style.opacity = 0;
//   }
// })
const firstBox = document.getElementById('first-box');
const firstBoxStyle = mezr.place({
  element: tabBar,
  target: firstBox,
  position: 'left top left bottom',
})
const firstWidth = mezr.width(firstBox, 'padding');
tabBar.style.left = `${firstBoxStyle.left}px`;
tabBar.style.top = `${firstBoxStyle.top}px`;
tabBar.style.width = `${firstWidth}px`;

function displayContent(e, masaz) {

 const styleBar = mezr.place({
    element: tabBar,
    target: e.currentTarget,
    position: 'left top left bottom',
  })
const targetWidth = mezr.width(e.currentTarget, 'padding');
  tabBar.style.left = `${styleBar.left}px`;
  tabBar.style.top = `${styleBar.top}px`;
  tabBar.style.width = `${targetWidth}px`;
  // tabBar.style.top = styleBar.top;
//  tabBar.style.displa

  console.log(tabBar.style);
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
