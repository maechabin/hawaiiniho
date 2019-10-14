import * as React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

export default function Nav(): JSX.Element {
  const pages = [
    { name: '資料館について', path: '/about' },
    { name: '展示物のご紹介', path: '/collection' },
    { name: '来館者の声', path: '/comment' },
    { name: 'ご利用案内', path: '/visit' },
    { name: 'お問い合わせ', path: '/contact' },
  ];
  const style = {
    nav__ul: {
      padding: 0,
      margin: 0,
      display: 'flex',
      '@media (max-width: 800px)': {
        display: 'block',
      },
    },
    nav__li: css`
      box-sizing: border-box;
      width: calc(100% / ${pages.length});
      text-align: center;
      background-color: #d32f2f;
      padding: 16px;
      list-style-type: none;
      @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 2px;
      }
    `,
    nav__li_a: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#fff',
      '&:hover': {
        textDecoration: 'none',
      },
    } as any,
  };
  const links = pages.map(pages => {
    return (
      <li css={style.nav__li} key={pages.path}>
        <Link to={pages.path} css={css(style.nav__li_a)}>
          {pages.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className="nav">
      <ul css={css(style.nav__ul)}>{links}</ul>
    </nav>
  );
}
