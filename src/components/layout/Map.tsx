import * as React from 'react';
import Radium from 'radium';

function Map() {
  const style = {
    map: {
      display: 'flex',
      backgroundColor: '#eee',
      '@media (max-width: 800px)': {
        display: 'block',
      },
    } as React.CSSProperties,
    map__googlemap: {
      width: '50%',
      height: '400px',
      border: 0,
      '@media (max-width: 800px)': {
        width: '100%',
      },
    } as React.CSSProperties,
    map__address: {
      padding: '24px 40px',
    } as React.CSSProperties,
    map__address_dd: {
      marginBottom: '16px',
    } as React.CSSProperties,
  };
  return (
    <div style={style.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.3097276786298!2d132.49487021522333!3d34.36804188052122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa1c6cce7e7fd%3A0x1db825fa7376644b!2z44CSNzM0LTAwMjYg5bqD5bO255yM5bqD5bO25biC5Y2X5Yy65LuB5L-d77yT5LiB55uu77yR77yX4oiS77yW!5e0!3m2!1sja!2sjp!4v1539792629623"
        className="google-map"
        style={style.map__googlemap}
      />
      <div style={style.map__address}>
        <p style={{ fontSize: '20px' }}>
          <strong>ハワイ移民資料館 仁保島村（にほじまむら）</strong>
        </p>
        <dl>
          <dt>
            <b>住所</b>
          </dt>
          <dd style={style.map__address_dd}>〒734-0026 広島県広島市南区仁保3-17-6</dd>
          <dt>
            <b>連絡先</b>
          </dt>
          <dd style={style.map__address_dd}>
            <ul>
              <li>
                <a href="tel:082-286-6331">082-286-6331</a>（電話 / FAX）
              </li>
              <li>
                <a href="tel:090-3745-6250">090-3745-6250</a>（携帯電話）
              </li>
              <li>
                <a href="mailto:info@hawaiiniho.com">info@hawaiiniho.com</a>（メール）
              </li>
            </ul>
          </dd>
          <dt>
            <b>ご案内</b>
          </dt>
          <dd style={style.map__address_dd}>
            <p>私設資料館のため事前連絡を必ずお願いします。</p>
            <ul>
              <li>入館料: 無料</li>
              <li>刊行物: 無料</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Radium(Map);
