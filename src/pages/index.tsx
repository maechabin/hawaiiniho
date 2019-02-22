import * as React from 'react';
import Radium from 'radium';
import Layout from '../components/layout/Layout';

export default () => {
  const StyleRoot = Radium.StyleRoot;
  return (
    <StyleRoot>
      <Layout>
        <h1>Hello world!</h1>
        <main />
      </Layout>
    </StyleRoot>
  );
};
