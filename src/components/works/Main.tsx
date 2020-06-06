import * as React from 'react';

export default function Main(): JSX.Element {
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
    figure: {
      textAlign: 'center',
    } as React.CSSProperties,
    div: {
      maxWidth: '624px',
      width: 'calc(100% - 80px)',
      margin: '8px auto',
      backgroundColor: '#eee',
      padding: '32px',
    } as React.CSSProperties,
    newsImageBook: {
      border: '2px solid #222',
      maxWidth: '160px',
      width: '100%',
      verticalAlign: 'middle',
      margin: '2px',
    } as React.CSSProperties,
    ul: {
      maxWidth: '624px',
      width: 'calc(100% - 80px)',
      margin: '48px auto',
    } as React.CSSProperties,
    button: {
      display: 'block',
      width: '240px',
      margin: '0 auto',
      borderRadius: '4px',
      padding: '8px 0',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: 'rgba(251,140,0 ,1)',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
    } as React.CSSProperties,
  };

  return (
    <main style={style.main}>
      <h2 style={style.title}>『ハワイ日本人移民史』のご案内</h2>
      <p style={style.paragraph}>
        2020年3月31日、仁保島村館長・川崎壽の著書<strong>『ハワイ日本人移民史』</strong>
        を発刊しました。「移民は棄民ではありません」「貧乏だから移民したわけではありません」あくまでも史実に基づき刻明に記述しました。ぜひ、ご一読ください。
      </p>
      <figure style={style.figure}>
        <figcaption style={{ fontSize: '16px' }}>
          <strong>『ハワイ日本人移民史 1868-1952（明治元年－昭和二十七年）』</strong>
        </figcaption>

        <div style={style.div}>
          <a href="/images/works/hawaii_japan_history.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の表紙"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_2.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_2.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_3.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_3.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_4.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_4.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_5.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_5.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_6.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_6.jpg"
              width="120"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_7.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_7.jpg"
              width="200"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_8.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_8.jpg"
              width="200"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
          <a href="/images/works/hawaii_japan_history_9.jpg" target="_blank">
            <img
              src="/images/works/hawaii_japan_history_9.jpg"
              width="200"
              alt="『ハワイ日本人移民史』の序"
              style={style.newsImageBook}
            />
          </a>
        </div>
      </figure>

      <ul style={style.ul}>
        <li>商品名: ハワイ日本人移民史 １８６８－１９５２ （明治元年－昭和二十七年）</li>
        <li>著者名: 川崎壽</li>
        <li>発行元: ハワイ移民資料館 仁保島村</li>
        <li>刊行年: 令和２年３月３１日</li>
        <li>状態: 新刊</li>
        <li>備考・コメント: Ａ４判、２４７Ｐ、帯付、図版満載。</li>
        <li>出版社: ハワイ移民資料館　仁保島村 (2020)</li>
        <li>言語: 日本語</li>
        <li>ISBN-10: 4600004019</li>
        <li>ISBN-13: 978-4600004019</li>
      </ul>
      <p style={style.paragraph}>
        本書をご購入される場合は、
        {/* <a
            href="https://www.amazon.co.jp/%E3%83%8F%E3%83%AF%E3%82%A4%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%BB%E6%B0%91%E5%8F%B2-%E3%83%8F%E3%83%AF%E3%82%A4%E7%A7%BB%E6%B0%91%E8%B3%87%E6%96%99%E9%A4%A8-%E4%BB%81%E4%BF%9D%E5%B3%B6%E6%9D%91/dp/4600004019"
            target="_blank">
            「Amazon.co.jp」からご注文くださいませ。
          </a> */}
        <a href="mailto:info@hawaiiniho.com">
          メールにて購入希望の旨をご連絡くださいますようお願いいたします。
        </a>
      </p>

      <div style={{ textAlign: 'center' }}>
        <a style={style.button} href="mailto:info@hawaiiniho.com">
          メールで購入希望する
        </a>
      </div>
    </main>
  );
}
