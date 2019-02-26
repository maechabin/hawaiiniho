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

      <div style={style.exhibit}>{exibit}</div>
    </main>
  );
}
