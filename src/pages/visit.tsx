import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/visit/Main';
import Helmet from '../components/visit/Helmet';

export default () => {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="ご利用案内" />
        <Main />
      </Layout>
    </>
  );
};
