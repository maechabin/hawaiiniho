import * as React from 'react';
import { withPrefix } from 'gatsby';

export default function Header() {
  return (
    <header className="header">
      <h1 className="title">
        <a href="/">
          ハワイ移民資料館
            src={withPrefix('/images/nihojimamura_logo.png')}
        </a>
      </h1>
    </header>
  );
}
