import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/collection/Main';
import Helmet from '../components/collection/Helmet';

export default () => {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="展示物のご紹介" />
        <Main />
      </Layout>
    </>
  );
};
