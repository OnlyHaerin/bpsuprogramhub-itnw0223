/*DOM AUTOMATIC SLIDESHOW*/
document.addEventListener("DOMContentLoaded", function() {
  var images = [
    
    "CBA.JPG",
    "img1.png",
    "CEA.JPG",
    "CICT.JPG",
    "CNM.JPG",
    "CTEC.JPG",
    "DOAS.JPG"
  ];

  var currentIndex = 0;
  var imageContainer = document.getElementById("image-container");
  var imageElement = document.createElement("img");
  imageContainer.appendChild(imageElement);

  function changeImage() {
    imageElement.style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.onload = function() {
      imageElement.style.opacity = 1;
    };
  }

  setInterval(changeImage, 2000);
});

/*GALLERY ANIMATION EFFECT*/
var galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'lightgray';
});

  item.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'transparent';
  });
});



