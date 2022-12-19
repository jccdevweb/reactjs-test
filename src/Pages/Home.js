import React from "react";
import MemberListing from "../components/crud-reactjs/MemberListing";
import "../styles/Home.css";

const Home = () => {
  return (
    <> <MemberListing/>
    <div className=" main-home">
      <div className="content content-left">
        <div className="content-container">
        <img className="logo-content" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/House-Logo-Design.jpg"/>
          <p className="content-p1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
        <div className="container-sub">
          <img
            className="image"
            src="https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
          />
          <img
            className="image"
            src="https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
          />
        </div>
        <form class="container-form row g-3">
          <div class="col-auto">
            <input
              type="email"
              class="form-control"
              id="email-input"
              placeholder=" Lorem Ipsum"
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
            Ipsum
            </button>
          </div>
        </form>
      </div>

      <div className="content content-right">
        <div className="sub-container">
        <img className="image-right"src="https://images.adsttc.com/media/images/58f8/19f6/e58e/ceac/3100/0789/newsletter/baan_puripuri-01.jpg?1492654572"/>
      </div>
      </div>
    </div>
    </>);
};

export default Home;
