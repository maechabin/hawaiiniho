import * as React from 'react';
import { Link } from 'gatsby';

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
    news: {
      padding: '32px',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      fontSize: '20px',
      lineHeight: 1.8,
      textAlign: 'justify',
    } as React.CSSProperties,
    newsImage: {
      border: '2px solid #222',
      maxWidth: '450px',
      width: '100%',
      verticalAlign: 'middle',
    } as React.CSSProperties,
    newsImageBook: {
      border: '2px solid #222',
      maxWidth: '240px',
      width: '100%',
      verticalAlign: 'middle',
      margin: '2px',
    } as React.CSSProperties,
    report: {
      padding: '0 32px 32px',
      maxWidth: '800px',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      fontSize: '20px',
      lineHeight: 1.8,
      textAlign: 'justify',
    } as React.CSSProperties,
    hr: {
      margin: '48px auto',
      width: '280px',
    } as React.CSSProperties,
    button: {
      display: 'block',
      width: '240px',
      margin: '0 auto',
      borderRadius: '4px',
      padding: '8px 0',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: 'rgba(251,140,0 ,1)',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
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
  }, []);
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
      <div style={style.news}>
        <h3 style={{ textAlign: 'center' }}>ニュース</h3>

        <p>
          2020年3月31日、仁保島村館長・川崎壽の著書<strong>『ハワイ日本人移民史』</strong>
          が発刊されました。「移民は棄民ではありません」「貧乏だから移民したわけではありません」あくまでも史実に基づき刻明に記述しました。ぜひ、ご一読ください。
        </p>
        <figure style={{ textAlign: 'center' }}>
          <a href="/images/hawaii_japan_history_2.jpg" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/hawaii_japan_history.jpg"
              width="200"
              alt="『ハワイ日本人移民史』の表紙"
              style={style.newsImageBook}
            />
            <img
              src="/images/hawaii_japan_history_2.jpg"
              width="200"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <figcaption style={{ fontSize: '14px' }}>
            <span>『ハワイ日本人移民史 1868-1952（明治元年－昭和二十七年）』</span>
            <br />
            （ハワイ移民資料館 仁保島村 / 2020年3月 / 247頁 / 4,180円）
          </figcaption>
        </figure>
        <p>
          本書をご購入される場合は、
          {/* <a
            href="https://www.amazon.co.jp/%E3%83%8F%E3%83%AF%E3%82%A4%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%BB%E6%B0%91%E5%8F%B2-%E3%83%8F%E3%83%AF%E3%82%A4%E7%A7%BB%E6%B0%91%E8%B3%87%E6%96%99%E9%A4%A8-%E4%BB%81%E4%BF%9D%E5%B3%B6%E6%9D%91/dp/4600004019"
            target="_blank">
            「Amazon.co.jp」からご注文くださいませ。
          </a> */}
          <a href="mailto:info@hawaiiniho.com">
            メールにて購入希望の旨をご連絡くださいますようお願いいたします。
          </a>
        </p>

        <div style={{ textAlign: 'center' }}>
          <a style={style.button} href="mailto:info@hawaiiniho.com">
            メールで購入希望する
          </a>
        </div>

        <hr style={style.hr} />
        <p>
          2020年5月に『にほしま』最新号となる
          <a href="/pdf/nihoshima_23.pdf" target="_blank" rel="noopener noreferrer">
            『にほしま第23号 その昔、ホノルルは水田だった ハワイ米物語』
          </a>
          を発刊しました。ぜひお読みください。
        </p>
        <figure style={{ textAlign: 'center' }}>
          <a href="/pdf/nihoshima_23.pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/nihoshima_23.png"
              width="450"
              alt="『にほしま第23号 その昔、ホノルルは水田だった ハワイ米物語』"
              style={style.newsImage}
            />
          </a>
          <figcaption style={{ fontSize: '14px' }}>
            にほしま第23号（令和2年5月）（PDFファイル）
          </figcaption>
        </figure>

        <p style={{ fontSize: '16px', textAlign: 'center' }}>
          <Link to="/nihoshima/">『にほしま』のバックナンバーを見る</Link>
        </p>
      </div>

      <div style={style.report}>
        <h3 style={{ textAlign: 'center' }}>活動報告</h3>
        <p style={{ textAlign: 'center' }}>2019年8月4日</p>
        <p>
          館長 川﨑壽が
          <a
            href="https://www.town.suo-oshima.lg.jp/event/evt3161.html"
            target="_blank"
            rel="noopener">
            山口県周防大島町の教育委員会・日本ハワイ移民資料館の招きにより講演しました
          </a>
          。
        </p>
        <p>
          題目は<strong>『知られざるハワイ移民史』</strong>
        </p>
        <p>
          先のJICA横浜 海外移住資料館での講演と同名ですが、今回は移民の本場
          周防大島町とあって、新たにご当地資料10点を収集して披露。
        </p>
        <p>
          伊藤博文、井上馨の山口県への想いを古文書から特別扱いとなった地租改正の秘話など内容は豊富でした！本人曰く今回は30％増量のレベルアップだと申しております。
        </p>
        <p>
          反響は、周防大島町内広報
          <a href="/images/suouoshima21.jpg" target="_blank" rel="noopener">
            『あそぶ・まなぶ・かたる 第27号』
          </a>
          に掲載されました。
        </p>
      </div>
    </>
  );
}
