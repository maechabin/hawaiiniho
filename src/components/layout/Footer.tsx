import * as React from 'react';
import { Link } from 'gatsby';

export default function Footer(): JSX.Element {
  const style = {
    footer: {
      padding: '80px',
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
    } as React.CSSProperties,
    copy: {
      fontSize: '14px',
      fontStyle: 'normal',
    } as React.CSSProperties,
  };
  return (
    <footer style={style.footer}>
      <address style={style.copy}>
        &copy; 1997-{new Date().getFullYear()}
        <Link to="/" style={{ color: '#fff', marginLeft: '8px' }}>
          <img
            style={{ verticalAlign: 'top' }}
            src="/images/nihojimamura_logo.png"
            width="72"
            alt="仁保島村（にほじまむら / Nihojimamura）"
          />
        </Link>
        .
      </address>
    </footer>
  );
}
