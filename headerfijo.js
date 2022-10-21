window.onscroll = function() {headerfijo()};

var header = document.getElementById("micabecera");
var sticky = header.offsetTop;

function headerfijo() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    }
}