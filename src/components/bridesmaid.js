import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Afua from "../assets/afua.png";
import Diana from "../assets/diana.png";
import Edwina from "../assets/edwina.png";
import Eli from "../assets/eli.png";
import Hamdiya from "../assets/Hamdiya.png";
import Jemima from "../assets/Jemima.png";
import Rachael from "../assets/rachael.png";
import Sandra from "../assets/sandra.png";
import Selina from "../assets/selina.png";
import Thelma from "../assets/thelma.png";
import "../styles/bridemaid.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
class Bridesmaid extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Afua",
        imageUrl: Afua,
      },
      { id: 2, title: "Diana", imageUrl: Diana },
      { id: 3, title: "Edwina", imageUrl: Edwina },
      { id: 4, title: "Eli", imageUrl: Eli },
      { id: 5, title: "Hamdiya", imageUrl: Hamdiya },
      {
        id: 6,
        title: "Jemima",
        imageUrl: Jemima,
      },
      {
        id: 7,
        title: "Rachael",
        imageUrl: Rachael,
      },
      {
        id: 8,
        title: "Sandra",
        imageUrl: Sandra,
      },
      {
        id: 9,
        title: "Selina",
        imageUrl: Selina,
      },
      {
        id: 10,
        title: "Thelma",
        imageUrl: Thelma,
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className="bg-[#E6D9BF]">
        <div
          className="max-w-7xl py-4 mx-auto px-4 sm:px-6 lg:px-8"
          id="bridesmaid"
        >
          <h2 className="max-w-lg mb-6 text-gray-900  text-3xl text-center leading-none tracking-tight sm:text-4xl md:mx-auto">
            Bridesmaid
          </h2>
          <Carousel breakPoints={breakPoints} itemPadding={[0, 20]}>
            {items.map((item) => (
              <div key={item.id}>
                <img
                  className="object-cover shadow-lg rounded-lg food"
                  src={item.imageUrl}
                  alt=""
                />
                <p className="text-center text-[#713C25]"> {item.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}
export default Bridesmaid;
