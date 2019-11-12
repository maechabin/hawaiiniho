import * as React from 'react';
import { Helmet } from 'react-helmet';
import { STYLE } from '../../utils/constant';

export default function Head(): JSX.Element {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>ご利用案内 - ハワイ移民資料館「仁保島村（にほじまむら）」</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="ハワイ移民資料館「仁保島村（にほじまむら）」は、館長の川崎壽（かわさきひろし）によって平成7年（1995年）に広島県広島市の旧仁保島村に開館したハワイ移民に関する私設資料館（博物館）です。館長が自ら長年かけて集めた日本からハワイに移住した移民に関する資料を展示しています。"
      />
      <meta
        name="keywords"
        content="仁保島村（にほじまむら）, ハワイ移民資料館, ハワイ移民, 広島県広島市, nihojimamura"
      />
      <link rel="canonical" href="https://hawaiiniho.com/visit/" />
      <style>{STYLE}</style>
    </Helmet>
  );
}
