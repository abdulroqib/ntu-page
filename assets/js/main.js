var buttonSearch = document.querySelector('.button-search');

buttonSearch.addEventListener('click', function(e) {
  e.preventDefault();
  var search = document.querySelector('.search');
  search.classList.toggle('open');
});

var openMenu = document.querySelector('.burger-menu');

openMenu.addEventListener('click', function(e) {
  e.preventDefault();
  var search = document.querySelector('.nav-mobile');
  search.classList.add('open');
});

var closeMenu = document.querySelector('.nav-mobile .burger-menu');

closeMenu.addEventListener('click', function(e) {
  e.preventDefault();
  var search = document.querySelector('.nav-mobile');
  search.classList.remove('open');
});

var nav = document.querySelector("nav");
var minNav = nav.offsetTop;

var content = document.querySelector("content");
var socialMedia = document.querySelector(".social-media");
var minFourty = content.offsetTop;

function sticky() {
  if (window.pageYOffset > minNav) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }

  if (window.pageYOffset > minFourty) {
    socialMedia.classList.add("sticky");
  } else {
    socialMedia.classList.remove("sticky");
  }
}

window.onscroll = function() {
  sticky();
}

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("cselect");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

$("#us-map path, #us-map circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("#us-map path, #us-map circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();