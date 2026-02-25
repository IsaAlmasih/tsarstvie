import React from "react";

import styles from "../[id]/styles.module.css";
import { title } from "process";

const content = {
  1: {
    title: "Заповеди.",
    body: "Я, Всевышний Иисус Христос, Бог твой, Который Привёл тебя в Дом Свой как Клялся отцам твоим народу Моему Израилю. Да не будет у вас иных богов Пред Лицом Моим. Заповедь новую Даю вам: любите друг друга как Я Полюбил вас. Не убивай ни человека, ни зверя. Ничего не убивай. Не прелюбодействуй. Не кради. Не желай дома ближнего твоего, ни поля его, ни раба его,ничего, что у ближнего твоего. Не желай чужого. Не произноси ложного свидетельства на ближнего твоего. Не произноси Имени Моего напрасно, ибо не Оставлю без наказания того кто произносит Имя Моё напрасно. Не делай себе кумира и никакого изображения того, что на небе и на земле; не поклоняйся им и не служи им, ибо Я, Всевышний Иисус Христос, Бог твой, Бог Ревнитель Наказывающий детей за вину отцов до третьего и четвёртого рода, ненавидящих Меня, и Творящий Милость до тысячи родов любящим Меня и соблюдающим Завет Мой Вечный. Почитай отца твоего и мать твою. Помни день субботний чтобы святить его; шесть дней работай и делай в них всякие дела твои, а день седьмой – суббота Всевышнему Иисусу Христу, Богу твоему: не делай в оный никакого дела.",
  },
  2: {
    title: "الوصايا.",
    body: "أنا، يسوع المسيح العليّ، إلهكم، الذي أدخلتكم إلى بيتي، كما أقسمت لآبائكم، لشعبي إسرائيل. لا يكن لكم آلهة أخرى أمامي. وصية جديدة أعطيكم: أحبوا بعضكم بعضًا كما أحببتكم. لا تقتلوا إنسانًا ولا بهيمة. لا تقتلوا شيئًا. لا تزنوا. لا تسرقوا. لا تشتهوا بيت جاركم، ولا حقله، ولا عبده، ولا شيئًا مما لجاركم. لا تشتهوا ما ليس لجاركم. لا تشهدوا زورًا على جاركم. لا تنطق باسمي باطلاً، لأني لا أبرئ من ينطق باسمي باطلاً. لا تصنع لك تمثالاً منحوتاً ولا صورة شيء مما في السماء وما على الأرض. لا تسجد لهن ولا تعبدهن. لأني أنا، العلي يسوع المسيح إلهكم، إله غيور، أفتقد ذنوب الآباء في الأبناء في الجيل الثالث والرابع من الذين يبغضونني، وأصنع رحمة لألوف من الذين يحبونني ويحفظون عهدي الأبدي. أكرم أباك وأمك. اذكر يوم السبت لتقدسه. ستة أيام تعمل وتصنع كل عملك، أما اليوم السابع فسبت للعلي يسوع المسيح إلهكم، لا تصنع فيه عملاً ما"
  },
  3: {
    title: "Commandments.",
    body: "I, the Most High Jesus Christ, your God, who have brought you into My House, as I swore to your fathers, to My people Israel. You shall have no other gods before Me. A new commandment I give you: love one another as I have loved you. You shall not kill man or beast. You shall not kill anything. You shall not commit adultery. You shall not steal. You shall not covet your neighbor's house, his field, his slave, or anything that is your neighbor's. You shall not covet what is not your neighbor's. You shall not bear false witness against your neighbor. You shall not take My name in vain, for I will not hold him guiltless who takes My name in vain. You shall not make for yourself an idol or any likeness of anything that is in heaven or on earth. You shall not bow down to them or serve them. For I, the Most High Jesus Christ your God, am a jealous God, visiting the iniquity of the fathers on the children to the third and fourth generations of those who hate Me, but showing mercy to thousands of those who love Me and keep My everlasting covenant. Honor your father and your mother. Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the Most High Jesus Christ your God; in it you shall not do any work.",
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
          <div className={styles.wraprrrp}>{content[id].body}</div>
        </div>
      </div>
      <button className={styles.buttonComma}>
        <a href="/tsarstvie">На страницу назад.</a>
      </button>
    </div>
  );
};

export default page;
