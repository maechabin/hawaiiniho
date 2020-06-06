import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/works/Main';
import Helmet from '../components/works/Helmet';

export default function Nihoshima(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="『ハワイ日本人移民史』のご案内" />
        <Main />
      </Layout>
    </>
  );
}
