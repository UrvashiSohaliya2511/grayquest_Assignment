import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import "./UserCard.scss";
import Button from "../Button/Button";
import { BsBuilding } from "react-icons/bs";
const UserCard = (data) => {
  const navigate = useNavigate();
  const url = `https://randomuser.me/portraits/women/${data.id}.jpg`;
  const handleClick = () => {
    navigate(`/${data.id}`);
    localStorage.setItem("profile_Avatar", url);
  };

  return (
    <div className="container">
      <div className="Innercontainer">
        <img src={url} alt={data.username} />
        <div className="containerBox">
          <h2>{data.username}</h2>

          <div className="dataFlex">
            <MdLocationPin />
            <p>{data.address.city}</p>
          </div>
          <div className="dataFlex">
            <AiOutlineGlobal />
            <a href="#">{data.website}</a>
          </div>
          <div className="dataFlex">
            <BsBuilding />
            <p>{data.company.name}</p>
          </div>
        </div>
      </div>
      <Button handleClick={handleClick} text="view" />
    </div>
  );
};

export default UserCard;
