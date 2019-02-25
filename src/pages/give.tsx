import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/give/Main';
import Helmet from '../components/give/Helmet';

export default () => {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="当資料館からのお願い" />
        <Main />
      </Layout>
    </>
  );
};
