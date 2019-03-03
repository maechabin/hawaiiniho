import * as React from 'react';
import Layout from '../components/layout/Layout';
import Main from '../components/index/Main';
import Helmet from '../components/index/Helmet';

export default function Index(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Main />
      </Layout>
    </>
  );
}
