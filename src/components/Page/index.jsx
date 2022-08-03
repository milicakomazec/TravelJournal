import "./Page.css";
import Header from "../Header";
import data from "../../data.js";
import Card from "../Card";

const Page = () => {
  //   console.log(data);
  return (
    <div className="page">
      <Header />
      {data.map((card) => {
        return (
          <Card
            id={card.id}
            link={card.link}
            title={card.title}
            location={card.location}
            dateFrom={card.dateFrom}
            dateTo={card.dateTo}
            text={card.text}
            img={card.img}
          />
        );
      })}
    </div>
  );
};

export default Page;
