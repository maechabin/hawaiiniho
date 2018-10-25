var jQuery = require('jquery');
require('cbfsss');

const cover = jQuery('.cb-fsss');

cover.cbFullScreenSlideShow({
  img: [
    {
      src: '../image/hawai.jpg',
      alt: '画像1',
    },
  ],
});
