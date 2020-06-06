import * as React from 'react';

import { Helmet } from 'react-helmet';
import { STYLE } from '../../utils/constant';

export default function Head(): JSX.Element {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>『ハワイ日本人移民史』のご案内 - ハワイ移民資料館「仁保島村（にほじまむら）」</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="2020年3月31日、仁保島村館長・川崎壽の著書『ハワイ日本人移民史』が発刊されました。「移民は棄民ではありません」「貧乏だから移民したわけではありません」あくまでも史実に基づき刻明に記述しました。ぜひ、ご一読ください。"
      />
      <meta
        name="keywords"
        content="仁保島村（にほじまむら）, ハワイ移民資料館, ハワイ移民, 広島県広島市, nihojimamura"
      />
      <link rel="canonical" href="https://hawaiiniho.com/nihoshima/" />
      <style>{STYLE}</style>
    </Helmet>
  );
}
