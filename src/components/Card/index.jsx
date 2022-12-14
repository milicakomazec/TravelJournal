import React from "react";
import "./Card.css";
import moment from "moment";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

const Card = ({ title, location, dateFrom, dateTo, text, img, link }) => {
  // console.log(dateFrom, dateTo);
  const isMobile = useMediaQuery({
    //true kad je manji 480px
    query: "(max-width: 480px)",
  });
  return (
    <div className="card">
      <div className="card--wrapper">
        <img
          src={img}
          alt=""
          className="location-img"
          height={270}
          width={230}
        ></img>
        <div className="card--right-side">
          {!isMobile && (
            <div className="location--container">
              <div className="location--wrapper">
                <img
                  src="../../media/location.png"
                  alt="location icon"
                  className="location--icon"
                ></img>
                <div className="location">{location.toUpperCase()}</div>
              </div>
              <div className="location--maps-link">
                <a href={link} style={{ textDecoration: "none" }}>
                  View on Google Maps
                </a>
              </div>
            </div>
          )}
          <div className="card--title">{title}</div>
          <div className="date-wrapper">
            <div style={{ fontWeight: "600" }}>
              {moment(dateFrom).format("DD MMM, YY")} -{" "}
              {moment(dateTo).format("DD MMM, YY")}{" "}
            </div>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
      {isMobile && (
        <div className="location--container">
          <div className="location--wrapper">
            <img
              src="../../media/location.png"
              alt="location icon"
              className="location--icon"
            ></img>
            <div className="location">{location.toUpperCase()}</div>
          </div>
          <div className="location--maps-link">
            <a href={link} style={{ textDecoration: "none" }}>
              View on Google Maps
            </a>
          </div>
        </div>
      )}
      <div className="horizontal-line"></div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  dateFrom: PropTypes.string,
  dateTo: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  title: "",
  location: "",
  dateFrom: "",
  dateTo: "",
  text: "",
  img: "",
  link: "",
};
export default Card;
