import * as React from 'react';
import { Helmet } from 'react-helmet';
import { STYLE } from '../common/constant';
import { withPrefix } from 'gatsby';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ハワイ移民資料館「仁保島村（にほじまむら）」- 広島県広島市</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="仁保島村（にほじまむら）は、広島県広島市にある私設ハワイ移民資料館（博物館）です。当館は、館長の川崎壽（かわさきひろし）によって平成7年（1995年）に旧仁保島村に開館したハワイ移民に関する資料館で、館長が自ら長年かけて集めた日本からハワイに移住した移民に関する資料を展示しています。"
        />
        <meta
          name="keywords"
          content="仁保島村（にほじまむら）, 移民資料館, ハワイ移民, 広島県広島市, nihojimamura"
        />
        <link rel="canonical" href="https://hawaiiniho.com" />
        <style>{STYLE}</style>
        <script src="/js/jquery.js" />
        <script src="/js/cb-fsss.min.js" />
        <script>
          {`
          window.addEventListener('load', function () {
            $(".cb-fsss").cbFullScreenSlideShow({
              top: '0px',
              height: '440px',
              zindex: '100',
              img: [{
                src: "/images/hawaiiniho2.jpg",
              },
              {
                src: "/images/hawaiiniho4.jpg"
              },
              {
                src: "/images/hawaiiniho3.jpg"
              },
              {
                src: "/images/hawaiiniho1.jpg"
              }]
            });
          });
        `}
        </script>
      </Helmet>
    </>
  );
};
