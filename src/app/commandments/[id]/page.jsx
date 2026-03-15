import React from "react";

import styles from "../[id]/styles.module.css";
import { title } from "process";

const content = {
  1: {
    title: "Заповеди.",
    qstwy:
      "Я, Всевышний Иисус Христос, Бог твой, Который Привёл тебя в Дом Свой как Клялся отцам твоим народу Моему Израилю. Да не будет у вас иных богов Пред Лицом Моим.",
    qsuxy: "Не прелюбодействуй.",
    qsuwz:
      "Не кради. Не желай дома ближнего твоего, ни поля его, ни раба его,ничего, что у ближнего твоего. Не желай чужого.",
    qsuwy: "Не произноси ложного свидетельства на ближнего твоего.",
    qsuxz:
      "Не произноси Имени Моего напрасно, ибо не Оставлю без наказания того кто произносит Имя Моё напрасно.",
    qsuyz:
      "Не делай себе кумира и никакого изображения того, что на небе и на земле; не поклоняйся им и не служи им, ибо Я, Всевышний Иисус Христос, Бог твой, Бог Ревнитель Наказывающий детей за вину отцов до третьего и четвёртого рода, ненавидящих Меня, и Творящий Милость до тысячи родов любящим Меня и соблюдающим Завет Мой Вечный.",
    qsvwx: "Почитай отца твоего и мать твою.",
    qsvwy:
      "Помни день субботний чтобы святить его; шесть дней работай и делай в них всякие дела твои, а день седьмой – суббота Всевышнему Иисусу Христу, Богу твоему: не делай в оный никакого дела.",
    qrxyz: "Заповедь новую Даю вам: любите друг друга как Я Полюбил вас.",
    qsuvz: "Не убивай ни человека, ни зверя. Ничего не убивай.",
  },
  2: {
    title: "وصايا.",
    qstwy: "أنا يسوع المسيح إلهكم، قد أدخلتكم إلى بيتي، كما أقسمت لآبائكم، شعبي إسرائيل. لا يكن لكم آلهة أخرى أمامي.",
    qsuxy: "وصية جديدة أعطيكم: أحبوا بعضكم بعضاً كما أحببتكم.",
    qsuwz: "لا تقتل أي إنسان أو حيوان. لا تقتل أي شيء.",
    qsuwy: "لا ترتكبوا الزنا.",
    qsuxz: "لا تسرق. لا تشتهِ بيت جارك، ولا حقله، ولا عبده، ولا شيئًا مما لجارك. لا تشتهِ ما ليس لك.",
    qsuyz: "لا تشهد زوراً على جارك.",
    qsvwx: "لا تنطق باسمي عبثاً، لأني لن أفلت من العقاب من ينطق باسمي عبثاً.",
    qsvwy: "لا تصنع لك تمثالاً منحوتاً ولا صورة شيء مما في السماء أو على الأرض، ولا تسجد لهن ولا تعبدهن، لأني أنا العلي يسوع المسيح إلهك إله غيور، أعاقب الأبناء على إثم الآباء في الجيل الثالث والرابع من الذين يبغضونني، وأصنع رحمة لألوف الأجيال من الذين يحبونني ويحفظون عهدي الأبدي.",
    qrxyz: "أكرم أباك وأمك.",
    qsuvz: "اذكر يوم السبت لتقدسه. ستة أيام تعمل وتنجز كل أعمالك، أما اليوم السابع فهو سبت للعلي يسوع المسيح إلهك، فلا تعمل فيه عملاً ما.",
  },
  3: {
    title: "Commandments.",
    qstwy:
      "1. I, the Most High Jesus Christ, your God, have brought you into My house, as I swore to your fathers, to My people Israel, “You shall have no other gods before Me.",
    qsuxy:
      "2. I give you a new commandment: love one another as I have loved you.",
    qsuwz: "3. Do not kill either man or beast. Do not kill anything.",
    qsuwy: "4. Do not commit adultery.",
    qsuxz:
      "5. You shall not steal. You shall not covet your neighbor's house, nor his field, nor his slave, nor anything that is your neighbor's. You shall not covet.",
    qsuyz: "6. You shall not bear false witness against your neighbor.",
    qsvwx:
      "7. Do not take My Name in vain, for I will not leave him unpunished who takes My Name in vain.",
    qsvwy:
      "8. You shall not make for yourself any graven image or any likeness of anything that is in heaven or on earth; you shall not bow down to them or serve them, for I, the Most High Jesus Christ your God, am a jealous God, visiting the iniquity of the fathers on the children to the third and fourth generation of those who hate Me, but showing mercy to thousands of generations of those who love Me and keep My Eternal Covenant.",
    qrxyz: "9. Honor your father and your mother.",
    qsuvz:
      "10. Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the Most High Jesus Christ your God: in it you shall not do any work.",
  },
};

const page = async({params}) => {
  console.log(await params)
  const id = (await params).id
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappe}>
        <div className={styles.wrae}>
          <h1>{content[id].title}</h1>
          <div className={styles.wraprrrp}>
            <div>{content[id].qstwy}</div>
            <div>{content[id].qsuxy}</div>
            <div>{content[id].qsuwz}</div>
            <div>{content[id].qsuwy}</div>
            <div>{content[id].qsuxz}</div>
            <div>{content[id].qsuyz}</div>
            <div>{content[id].qsvwx}</div>
            <div>{content[id].qsvwy}</div>
            <div>{content[id].qrxyz}</div>
            <div>{content[id].qsuvz}</div>
          </div>
        </div>
      </div>
      <button className={styles.buttonComma}>
        <a href="/">На страницу назад.</a>
      </button>
    </div>
  );
};

export default page;