import * as React from 'react';
import { withPrefix } from 'gatsby';

export default function Header() {
  const style = {
    header: {
      position: 'relative',
      zIndex: 100,
      height: '64px',
      backgroundColor: '#0277bd',
    } as React.CSSProperties,
    title: {
      margin: 0,
      padding: 0,
    } as React.CSSProperties,
    title__a: {
      lineHeight: '64px',
      textDecoration: 'none',
      color: '#fff',
      fontSize: '12px',
      fontWeight: 'normal',
      marginLeft: '16px',
    } as React.CSSProperties,
  };
  return (
    <header style={style.header}>
      <h1 style={style.title}>
        <a href="/" style={style.title__a}>
          ハワイ移民資料館
          <img
            src={withPrefix('/images/nihojimamura_logo.png')}
            style={{ verticalAlign: 'middle' }}
            width="120"
            alt="仁保島村（にほじまむら）- nihojimamura"
          />
        </a>
      </h1>
    </header>
  );
}
