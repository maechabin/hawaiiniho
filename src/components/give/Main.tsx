import * as React from 'react';

export default function Main() {
  const style = {
    prepare: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '64px',
      padding: '128px 0',
      margin: 0,
    } as React.CSSProperties,
  };
  return <p style={style.prepare}>準備中</p>;
}
