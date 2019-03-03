import * as React from 'react';
import Nav from './Nav';

export default function Main(): JSX.Element {
  const style = {
    slideShow: {
      textAlign: 'center',
      height: '440px',
      position: 'relative',
    } as React.CSSProperties,
    title: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      width: '100%',
      height: '100%',
      zIndex: 1000,
      position: 'absolute',
      top: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center' /* 横方向の中央揃え */,
      flexDirection: 'column',
    } as React.CSSProperties,
    logo: {
      maxWidth: '540px',
      width: '100%',
    },
    address: {
      fontWeight: 'bold',
      fontSize: '18px',
      margin: '0 auto',
    } as React.CSSProperties,
  };
  const el = React.useRef(null);

  React.useEffect(() => {
    ($('.cb-fsss') as any).cbFullScreenSlideShow({
      top: '0px',
      height: '440px',
      zindex: '100',
      img: [
        {
          src: '/images/hawaiiniho2.jpg',
        },
        {
          src: '/images/hawaiiniho4.jpg',
        },
        {
          src: '/images/hawaiiniho3.jpg',
        },
        {
          src: '/images/hawaiiniho1.jpg',
        },
      ],
    });
  });
  return (
    <>
      <div className="cb-fsss" ref={el} style={style.slideShow}>
        <div style={style.title}>
          <h2>
            <img
              src="/images/nihojimamura.png"
              width="540"
              alt="ハワイ移民資料館仁保島村（にほじまむら）- nihojimamura"
              style={style.logo}
            />
          </h2>
          <p style={style.address}>広島県広島市南区仁保3-17-6</p>
        </div>
      </div>
      <Nav />
    </>
  );
}
