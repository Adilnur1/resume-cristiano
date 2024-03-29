import React from "react";
import Layout from "./Layout";
import img from "../image/pngwing.com.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="header-left">
          <h1>
            Cristiano <strong>Ronaldo</strong> 7
          </h1>
          <p>
            Родился 5 февраля 1985 года в городе Фуншал на острове Мадейра. Был
            четвёртым ребёнком в семье повара Марии Долореш душ Сантуш Авейру
            (род. 1954) и садовника Жозе Диниша Авейру (1954—2005). Также у
            Криштиану есть старший брат Угу (род. 1975), сёстры Элма (род. 1974)
            и Лилиана Катя[es] (род. 1977). Катя Авейру стала певицей, выступает
            в Португалии под сценическим именем Ronalda[22]. Назвать мальчика
            Криштиану предложила сестра матери[23]. Второе имя, данное ему при
            рождении — Роналду — родители выбрали в честь Рональда Рейгана, так
            как отец Криштиану был поклонником находившегося в то время у власти
            американского президента[22]. Играть в футбол Криштиану начал в
            возрасте 2-3 лет. В шесть лет пошёл в местную начальную школу, а
            средние классы посещал в школе «Баррейруш», преимущественно получал
            хорошие оценки[24], любил естествознание, но не любил английский. В
            14 лет Роналду был исключён из школы за то, что он бросил стулом в
            учителя[25].
          </p>
          <Link to="/about">
            <button>Читать дальше</button>
          </Link>
        </div>
        <div className="header-right">
          <img src={img} alt="" />
        </div>
      </div>
      <Layout />
    </>
  );
};

export default HomePage;
