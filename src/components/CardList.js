import Card from "./Card";
import React from "react";

const CardList = ({ robots }) => {
  const robotsList = robots.map((robot) => {
    return (
      <Card
        name={robot.name}
        email={robot.email}
        id={robot.id}
        key={robot.id}
      />
    );
  });
  return <div>{robotsList}</div>;
};

export default CardList;
