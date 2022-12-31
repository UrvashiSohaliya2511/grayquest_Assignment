import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchAllData } from "../../store/Actions";
import UserCard from "../../componants/UserCard/UserCard";
import "./Home.scss";
const Home = () => {
  const { loading, error, allUser, curruntUser } = useSelector(
    (state) => state.Users
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAllData);
  }, []);
  return (
    <div className="MainContainer">
      <h1 className="title">User Details</h1>
      <div className="userContainer">
        {allUser &&
          allUser.map((e) => {
            return <UserCard key={e.id} {...e} />;
          })}
      </div>
    </div>
  );
};

export default Home;
