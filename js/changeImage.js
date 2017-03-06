'use strict';

(function () {

  //srset est fait pour charger la même image dans différentes résolutions
  //srset n'est pas adapter dans notre cas car l'image change en fonction de la résolution

  function changeMainImage() {
    var imgInf768 = document.getElementById('main-image-small');
    var imgSup768 = document.getElementById('main-image-large');

    var width = document.body.clientWidth;
    if (width >= 768) {
      imgInf768.style.display = 'none';
      imgSup768.style.display = 'block';
    } else {
      imgSup768.style.display = 'none';
      imgInf768.style.display = 'block';
    }
  }

  // changeMainImage();

  window.addEventListener('resize', function (event) {
    changeMainImage();
  });

  window.onload = changeMainImage;
})();