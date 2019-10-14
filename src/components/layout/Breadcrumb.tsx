import * as React from 'react';
import { Link } from 'gatsby';

export default function Bredcrumb(props: { title: string }): JSX.Element {
  const { title } = props;
  const style = {
    breadcrumb: {
      padding: '8px 16px',
      margin: 0,
      backgroundColor: '#eee',
    },
    next: {
      padding: '0 8px',
    },
  };
  return (
    <p style={style.breadcrumb}>
      <span itemScope itemType="https://data-vocabulary.org/Breadcrumb">
        <Link to="/" itemProp="url">
          仁保島村トップページ
        </Link>
      </span>
      <span style={style.next}>></span>
      <b itemScope itemType="https://data-vocabulary.org/Breadcrumb">
        {title}
      </b>
    </p>
  );
}
