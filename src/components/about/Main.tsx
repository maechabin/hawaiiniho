import * as React from 'react';

export default function Main(): JSX.Element {
  const style = {
    main: {
      margin: '40px 0',
    } as React.CSSProperties,
    chapter: {
      padding: '16px 32px',
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
    } as React.CSSProperties,
    name: {
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
    } as React.CSSProperties,
  };
  return (
    <main style={style.main}>
      <div style={style.chapter}>
        <h3 style={style.title}>館長あいさつ</h3>

        <p style={style.name}>川崎壽（かわさきひろし）</p>
        <p style={style.paragraph}>
          私の父は、ハワイ島のヒロのプランテーションでサトウキビ列車の機関手として働いた経験を持ちます。兄１人・姉４人はハワイボーン、ハワイに永住しています。もちろん全員アメリカ人です。私は横浜生まれ、同じ兄弟でも生まれながらにして国籍を異にしています。
        </p>

        <p style={style.paragraph}>
          太平洋戦争の最中は敵と味方に分かれました。父の弟妹は５人もハワイに移民、全員が渡航以来定住し、それぞれの家庭を築いています。これらの家族は３・４・５世の時代を迎え、今やその人数は在日本の我が家系を遥かにしのいでいます。
        </p>

        <p style={style.paragraph}>
          当館のある旧仁保島村の周辺は、いとも簡単にハワイ移民と縁のある家を見つけることができる。それだけでなく多くのハワイ移民を誕生させた地域です。「おらが村の自慢のものは海外移民と盆踊り」、広島市と合併する直前に発刊された仁保村誌の記述は、移民が他の市町村より突出していたことを如実に示しています。
        </p>

        <p style={style.paragraph}>
          ハワイと広島の交流は、戦後のハワイ広島県人会が中心となった、広島への復興募金活動を境にして次第に薄くなってきました。「ハワイには日系人が多い」、若い人達ばかりか年配の人たちの中にもその理由がわからない人が増えています。なぜ、ハワイは移民を必要としたのか、広島からの移民が多い理由は何か、ハワイ移民の歴史を正しく後世に伝えたい、という願いから当館を開設しました。
        </p>
      </div>

      <div style={style.chapter}>
        <h3 style={style.title}>仁保とハワイ移民の歴史</h3>

        <p style={style.paragraph}>
          今、わが国では日系ブラジル人の里帰りを始めとする諸外国からの就労者や居住者も多くなり、急速な国際化への対応が大きな課題となっております。かつてハワイ移民は、日本人排斥運動・日本語学校への圧迫・太平洋戦争など大きな難問に直面しました。これらを見事に乗り越えたハワイ移民の歴史とその叡智は、多く国籍を持つ人たちとの共生が目前となった現在の日本に、様々な形の示唆を与えてくれます。
        </p>

        <p style={style.paragraph}>
          当館では、常に社会の理想を見つめながら、ハワイ移民の付託者としての自負と信念をもって、ニュースレターにほしまやテキストの発刊などのほか、館外での授業も積極的に展開してハワイ移民の理解に努力しています。
        </p>
      </div>

      <div style={style.chapter}>
        <h3 style={style.title}>スタッフ紹介</h3>
        <p style={{ ...style.paragraph, textAlign: 'center', marginBottom: 0 }}>
          <b>館長</b>
          <br />
          川崎壽（かわさきひろし)
        </p>
        <p style={{ ...style.paragraph, textAlign: 'center' }}>
          <b>東京在住スタッフ</b>
          <br />
          <a href="mailto:oyatsu@hawaiiniho.com">大谷津仁（おおやつひとし）</a>
        </p>
      </div>
    </main>
  );
}
