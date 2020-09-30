'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
  var fileChooser = document.querySelector('.img-upload__input');
  var preview = document.querySelector('.img-upload__preview img');
  var miniature = document.querySelectorAll('.effects__preview');

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });


    var setBackground = function (item) {
      item.style.backgroundImage = 'url(' + preview.src + ')';
    };

    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        preview.src = reader.result;
        miniature.forEach(setBackground);
      });

      reader.readAsDataURL(file);
    }
  });
})();
