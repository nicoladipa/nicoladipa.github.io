// Text perspective hover animation
(function() {
    // Init
    var container = document.getElementById("container"),
        inner = document.getElementById("inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 3);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 3);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //----------------------------------------------------
  
    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
    //----------------------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //----------------------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //--------------------------------------------------------
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  })();
  



// Shows logo at page loading
function showLogo() {
    $(".reveal").toggleClass("show");
}

// Smoothly scrolls to wanted section (ID)
function scrollToId(target_id) { 
    $('html, body').animate({
        scrollTop: $("#"+target_id).offset().top
    }, 2000);
}

// Smoothly scrolls to the top
function scrollToTop() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 2000);
}

window.addEventListener('load', function() {
  var loading = document.getElementById('loading');
  // Add a delay before starting the fade out animation
  setTimeout(function() {
      // Add the fade out class to start the animation
      loading.classList.add('fade-out');

      // When the animation ends, remove the loading overlay from the DOM
      loading.addEventListener('animationend', function() {
          loading.parentElement.removeChild(loading);
      });
  }, 2000); // Replace 5000 with the duration of your gif animation in milliseconds
});