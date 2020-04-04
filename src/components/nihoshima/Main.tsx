import * as React from 'react';

export default function Main(): JSX.Element {
  const style = {
    main: {
      margin: '40px 0',
    } as React.CSSProperties,
    title: {
      margin: '0',
      fontSize: '40px',
      textAlign: 'center',
    } as React.CSSProperties,
    paragraph: {
      color: '#333',
      margin: '16px auto',
      maxWidth: '880px',
      fontSize: '22px',
      lineHeight: 1.8,
      textAlign: 'justify',
      marginBottom: '32px',
      padding: '0 32px',
    } as React.CSSProperties,
    newsImage: {
      border: '2px solid #222',
      maxWidth: '450px',
      width: '100%',
      verticalAlign: 'middle',
    } as React.CSSProperties,
  };

  return (
    <main style={style.main}>
      <h2 style={style.title}>『にほしま』のご案内</h2>
      <p style={style.paragraph}>
        当資料館「仁保島村」では、館内報『にほしま』を発行しています。これまでに発行したバックナンバーをご覧ください（画像をクリックするとPDFファイルが開きます）。
      </p>
      <figure style={{ textAlign: 'center' }}>
        <a href="/pdf/nihoshima_22.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/nihoshima_22.png"
            width="450"
            alt="『にほしま第22号 ザ・ビッグアイランド柳行李を訪ねて』"
            style={style.newsImage}
          />
        </a>
        <figcaption style={{ fontSize: '14px' }}>
          にほしま第22号（令和2年2月）
          <br />
          「ザ・ビッグアイランド柳行李（やなぎこうり）を訪ねて」
        </figcaption>
      </figure>
      <figure style={{ textAlign: 'center' }}>
        <a href="/pdf/nihoshima_21.pdf" target="_blank">
          <img
            src="/images/nihoshima_21.png"
            width="300"
            alt="にほしま第21号 ねじ曲げられた移民という表現 その差別と偏見と闘う"
            style={style.newsImage}
          />
        </a>
        <figcaption style={{ fontSize: '14px' }}>
          にほしま第21号（令和元年8月）
          <br />
          「ねじ曲げられた移民という表現 その差別と偏見と闘う」
        </figcaption>
      </figure>
    </main>
  );
}
