import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/about/Main';
import Helmet from '../components/about/Helmet';

export default function About(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="資料館について" />
        <Main />
      </Layout>
    </>
  );
}
