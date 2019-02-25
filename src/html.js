<script src="/js/cb-fsss.min.js" defer />
<script
  dangerouslySetInnerHTML={{
    __html: `
    $(function () {
      $(".cover").cbFullScreenSlideShow({
        top: '0px',
        height: '440px',
        zindex: '100',
        img: [{
          src: "./assets/image/hawaiiniho2.jpg",
        },
        {
          src: "./assets/image/hawaiiniho4.jpg"
        },
        {
          src: "./assets/image/hawaiiniho3.jpg"
        },
        {
          src: "./assets/image/hawaiiniho1.jpg"
        }]
      });
    });
        `,
  }}
/>;
