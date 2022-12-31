import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
//icons
import { BsBuilding, BsGlobe, BsTelephone, BsPerson } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
//componants & Functions
import Button from "../../componants/Button/Button";
import { FetchUserData } from "../../store/UserReducer";
//css
import "./User.scss";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, curruntUser } = useSelector((state) => state.Users);
  const { id } = useParams();
  const url = localStorage.getItem("profile_Avatar");
  useEffect(() => {
    dispatch(FetchUserData(id));
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="detailContainer">
      {loading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <>
          <h1>{error}</h1>
          <Button handleClick={handleClick} text="Go Back" />
        </>
      ) : (
        <>
          <div>
            <img src={url} alt={curruntUser.username} />
            <h1>{curruntUser.username}</h1>
          </div>
          <div>
            <div className="details">
              <BsPerson />
              <p>{curruntUser.name}</p>
              <MdOutlineMailOutline />
              <p>{curruntUser.email}</p>
              <BsTelephone />
              <p>{curruntUser.phone}</p>
              <BsGlobe />
              <a href="#">{curruntUser.website}</a>
              <BsBuilding />
              {/* <p><Company></p> */}
              <div>
                <h3>{curruntUser?.company?.name}</h3>
                <p>{curruntUser?.company?.catchPhrase}</p>
                <p>{curruntUser?.company?.bs}</p>
              </div>
              <GoLocation />
              <div>
                <p>
                  {curruntUser?.address?.suite} , {curruntUser?.address?.street}
                </p>

                <p>
                  {curruntUser?.address?.city} , {curruntUser?.address?.zipcode}
                  .
                </p>
              </div>
            </div>
            <Button handleClick={handleClick} text="Go Back" />
          </div>
        </>
      )}
    </div>
  );
};

export default User;
