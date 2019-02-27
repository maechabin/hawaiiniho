import * as React from 'react';
import { css } from '@emotion/core';

export default function Main() {
  const exhibis = [
    {
      url: '/images/collections/dsc_2574.jpg',
      thumb: '/images/collections/thumb/dsc_2574_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物1',
    },
    {
      url: '/images/collections/dsc_2579.jpg',
      thumb: '/images/collections/thumb/dsc_2579_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物2',
    },
    {
      url: '/images/collections/dsc_2580.jpg',
      thumb: '/images/collections/thumb/dsc_2580_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物3',
    },
    {
      url: '/images/collections/dsc_2581.jpg',
      thumb: '/images/collections/thumb/dsc_2581_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物4',
    },
    {
      url: '/images/collections/dsc_2587.jpg',
      thumb: '/images/collections/thumb/dsc_2587_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物5',
    },
    {
      url: '/images/collections/dsc_2659.jpg',
      thumb: '/images/collections/thumb/dsc_2659_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物6',
    },
    {
      url: '/images/collections/dsc_2661.jpg',
      thumb: '/images/collections/thumb/dsc_2661_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物7',
    },
    {
      url: '/images/collections/dsc_2663.jpg',
      thumb: '/images/collections/thumb/dsc_2663_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物8',
    },
    {
      url: '/images/collections/dsc_2673.jpg',
      thumb: '/images/collections/thumb/dsc_2673_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物9',
    },
    {
      url: '/images/collections/dsc_2676.jpg',
      thumb: '/images/collections/thumb/dsc_2676_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物10',
    },
    {
      url: '/images/collections/dsc_2678.jpg',
      thumb: '/images/collections/thumb/dsc_2678_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物11',
    },
    {
      url: '/images/collections/dsc_2679.jpg',
      thumb: '/images/collections/thumb/dsc_2679_thumb.jpg',
      alt: 'ハワイ移民資料館の展示物12',
    },
  ];
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
    } as React.CSSProperties,
    exhibit: {
      textAlign: 'center',
      margin: '32px auto',
    } as React.CSSProperties,
    exhibit__img: css`
      width: 100%;
      max-width: 320px;
      height: auto;
      vertical-align: middle;
      @media (max-width: 800px) {
        max-width: 100%;
        margin-bottom: 8px;
      }
    `,
  };
  const exibit = exhibis.map(exhibit => {
    return (
      <a href={exhibit.url} target="_blank" key={exhibit.url}>
        <img src={exhibit.thumb} alt={exhibit.alt} css={css(style.exhibit__img)} />
      </a>
    );
  });

  return (
    <main style={style.main}>
      <h2 style={style.title}>展示物のご紹介</h2>
      <p style={style.paragraph}>展示資料の多くは、ハワイ移民が持ち帰ったものを中心にして、広島からの移民がなぜ多いのか、ハワイでの生活ぶりはどうであったか、資料に語らせる手法をとっています。資料の中には、ハワイやアメリカの資料館でも見ることができないものもあり、解説は移民当事者の視点を大切にしております。</p>
      <p style={style.paragraph}>移民の歴史は個人のプライバシーに関するものが多く、ホームページでは全部を公開することができません。このようなことから、館内での解説や説明もその目的や背景によって対応を変えていきます。</p>
      <p style={style.paragraph}>”語り部”と共にあるというものも当資料館の最大の特色です。</p>
      <p style={style.paragraph}>ハワイの縁故者や移民研究家・教育関係者の人たちからの寄贈や、当資料館が収集した所蔵品資料については、ニュースレターの発刊などにより順次公開の予定であります。</p>

      <div style={style.exhibit}>{exibit}</div>
    </main>
  );
}
