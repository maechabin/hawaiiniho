import * as React from 'react';
import { css } from '@emotion/core';

export default function Map(): JSX.Element {
  const style = {
    map: {
      display: 'flex',
      backgroundColor: '#eee',
      '@media (max-width: 800px)': {
        display: 'block',
      },
    },
    map__googlemap: {
      width: '50%',
      height: 'inherit',
      minHeight: '400px',
      border: 0,
      '@media (max-width: 800px)': {
        width: '100%',
      },
    },
    map__address: {
      textAlign: 'center',
      width: '50%',
      boxSizing: 'border-box',
      padding: '24px 40px',
      '@media (max-width: 800px)': {
        width: '100%',
      },
    } as any,
    map__address_table: {
      width: '100%',
      borderCollapse: 'collapse',
    } as React.CSSProperties,
    map__address_th: {
      padding: '16px',
      border: '1px solid #eee',
      backgroundColor: '#fafafa',
    } as React.CSSProperties,
    map__address_td: {
      textAlign: 'left',
      padding: '16px',
      border: '1px solid #eee',
      backgroundColor: '#fff',
    } as React.CSSProperties,
    map__ul: {
      margin: 0,
      padding: 0,
      textIndent: '1em',
    } as React.CSSProperties,
    map__ol: {
      margin: 0,
      padding: '0 0 0 1em',
      textAlign: 'justify',
    } as React.CSSProperties,
  };
  return (
    <div css={css(style.map)}>
      <iframe
        title="ハワイ移民資料館「仁保島村」周辺のアクセスマップ"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.3097276786298!2d132.49487021522333!3d34.36804188052122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa1c6cce7e7fd%3A0x1db825fa7376644b!2z44CSNzM0LTAwMjYg5bqD5bO255yM5bqD5bO25biC5Y2X5Yy65LuB5L-d77yT5LiB55uu77yR77yX4oiS77yW!5e0!3m2!1sja!2sjp!4v1539792629623"
        css={css(style.map__googlemap)}
      />
      <div css={css(style.map__address)}>
        <p style={{ fontSize: '20px', margin: '0 16px 16px' }}>
          <strong>ハワイ移民資料館 仁保島村（にほじまむら）</strong>
        </p>

        <table style={style.map__address_table}>
          <tbody>
            <tr>
              <th style={style.map__address_th}>住所</th>
              <td style={style.map__address_td}>〒734-0026 広島県広島市南区仁保3-17-6</td>
            </tr>
            <tr>
              <th style={style.map__address_th}>連絡先</th>
              <td style={style.map__address_td}>
                <ul style={style.map__ul}>
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
              </td>
            </tr>
            <tr>
              <th style={style.map__address_th}>ご案内</th>
              <td style={style.map__address_td}>
                <p style={{ margin: 0 }}>私設資料館のため「事前連絡」を必ずお願いします。</p>
                <ul style={style.map__ul}>
                  <li>
                    入館料: <b>無料</b>
                  </li>
                  <li>
                    刊行物: <b>無料</b>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th style={style.map__address_th}>アクセス方法</th>
              <td style={style.map__address_td}>
                <ol style={style.map__ol}>
                  <li>
                    広島駅南口を出ましたら、向かって右奥のバス乗り場4番から
                    <a href="http://hiroden.co.jp/bus/route/c-4.html" target="_blanek">
                      「広島電鉄バス4-1 広島駅→仁保車庫行き」
                    </a>
                    にお乗りください（乗車時間約23分 / 運賃230円）。
                  </li>
                  <li>
                    <strong>「上柞木（かみほうそぎ）」</strong>
                    で下車し、山に向かって徒歩3分のところに当館がございます。
                  </li>
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
