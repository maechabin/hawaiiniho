import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/nihoshima/Main';
import Helmet from '../components/nihoshima/Helmet';

export default function Nihoshima(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="『にほしま』のご案内" />
        <Main />
      </Layout>
    </>
  );
}
