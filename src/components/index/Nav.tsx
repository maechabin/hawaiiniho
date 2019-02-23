import * as React from 'react';
import { css } from '@emotion/core';

export default function Nav() {
  const style = {
    nav__ul: {
      padding: 0,
      margin: 0,
      display: 'flex',
    },
    nav__li: css`
      box-sizing: border-box;
      width: calc(100% / 5);
      text-align: center;
      background-color: #d32f2f;
      line-height: 48px;
      list-style-type: none;
    `,
  };
  return (
    <nav className="nav">
      <ul css={css(style.nav__ul)}>
        <li css={style.nav__li}>
          <a href="./about/">資料館について</a>
        </li>
        <li css={style.nav__li}>
          <a href="./collection/">展示物のご紹介</a>
        </li>
        <li css={style.nav__li}>
          <a href="./visit/">ご利用案内</a>
        </li>
        <li css={style.nav__li}>
          <a href="./give/">当資料館からのお願い</a>
        </li>
        <li css={style.nav__li}>
          <a href="./contact/">お問い合わせ</a>
        </li>
      </ul>
    </nav>
  );
}
