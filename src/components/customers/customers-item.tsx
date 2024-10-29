import React, { Component } from "react";
import Img1 from "../../assets/customers/brunao.png";
import Img2 from "../../assets/customers/betinho.png";
import Img3 from "../../assets/customers/maylao.png";
import Division from "../division/division";
import StarRating from "./customers-stars";
type ICostumersItem = { img: string; alt?: string; name:string; description:string};

const CustomersItem = (props:ICostumersItem) => {
  return (
      <section className="">
        <div className="container mx-auto justify-center w-2/3 flex rounded-lg shadow-lg">
          <div className="p-8">
            <img
              className="rounded-full shadow-lg max-h-40 mix-blend-multiply"
              src={props.img}
              alt={props.alt}
            />
            <p className="font-serif-black font-black">{props.name}</p>
            <span className="">{props.description}</span>
            <StarRating></StarRating>
          </div>
        </div>
      </section>
  );
};

export default CustomersItem;
