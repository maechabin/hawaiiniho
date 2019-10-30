import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/comment/Main';
import Helmet from '../components/comment/Helmet';

export default function collection(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="来館者の声" />
        <Main />
      </Layout>
    </>
  );
}