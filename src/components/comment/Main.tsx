import * as React from 'react';
import { css } from '@emotion/core';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import { firestore, useFirestoreDoc, useFirestoreQuery } from "gatsby-theme-firebase";
import { cpuCoreCount } from 'gatsby-core-utils';

interface Comment {
  id: string;
  name: string;
  comment: string;
  allowDisplay: boolean;
  visitDate: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
  imageUrl: string;
}

export default function Main(): JSX.Element {
  const [comments, isLoading] = useFirestoreQuery(
    firestore.collection('comments').orderBy('createdAt', 'desc'),
  );

  React.useEffect(() => {
    console.log(comments);
  });

  const style = {
    main: {
      margin: '40px 0',
    } as React.CSSProperties,
    title: {
      margin: '0',
      fontSize: '40px',
      textAlign: 'center',
    } as React.CSSProperties,
    paragraph: {
      color: '#333',
      margin: '16px auto',
      maxWidth: '880px',
      fontSize: '22px',
      lineHeight: 1.8,
      textAlign: 'justify',
      marginBottom: '32px',
      padding: '0 32px',
    } as React.CSSProperties,
    ul: {
      listStyleType: 'none',
      padding: '16px 32px',
    } as React.CSSProperties,
    li: {

    } as React.CSSProperties,
    name: {
      maxWidth: '880px',
      margin: '16px auto',
      fontSize: '20px',
    } as React.CSSProperties,
    comment: {
      maxWidth: '880px',
      fontSize: '18px',
      margin: '0 auto 64px',
      whiteSpace: 'pre-wrap',
      lineHeight: 2.2,
      textAlign: 'justify',
      paddingBottom: '64px',
      borderBottom: '1px solid #aaa'
    } as React.CSSProperties,
    figure: {
      margin: '16px auto 0',
      textAlign: 'center',
      maxWidth: '880px',
    } as React.CSSProperties,
    img: {
      width: '100%',
    } as React.CSSProperties,
  };

  const commentElement = comments && comments.map(comment => {
    return (
      <li key={comment.id} style={style.li}>
        <p style={style.name}>{comment.name} さま（{comment.visitDate}来館）</p>
        <pre style={style.comment}>{comment.comment}</pre>
        {comment.imageUrl && <figure style={style.figure}><img src={comment.imageUrl} alt={comment.name} style={style.img} /></figure>}
      </li>
    )
  });

  return (
    <main style={style.main}>
      <h2 style={style.title}>来館者の声</h2>
      <p style={style.paragraph}>当館「仁保島村」へ来館くださったお客さまからたくさんの声をいただいております。誠にありがとうございます。スタッフ一同励みとなっております。いただいたコメントの中から一部ご紹介いたします。</p>

      <div>
        <ul style={style.ul}>
          {commentElement}
        </ul>
      </div>
    </main>
  )
}