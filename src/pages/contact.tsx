import * as React from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/layout/Breadcrumb';
import Main from '../components/contact/Main';
import Helmet from '../components/contact/Helmet';

export default function Contact(): JSX.Element {
  return (
    <>
      <Helmet />
      <Layout>
        <Breadcrumb title="お問い合わせ" />
        <Main />
      </Layout>
    </>
  );
}
