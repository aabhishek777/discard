import React from "react";
import FriendsListItem from "./FriendsListItem";

const FreindsList = () => {
  const friends = [
    {
      id: 1,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 2,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 3,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 10,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 4,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 5,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 6,
      userName: "abhisehk",
      isOnline: false,
    },
    {
      id: 7,
      userName: "abhisehk",
      isOnline: false,
    },
  ];
  // const friendss = [
  //   { id: 1, name: "John" },
  //   { id: 2, name: "Jane" },
  //   { id: 3, name: "Alice" },
  // ];

  return (
    <div>
      <h1>Friend List</h1>
      <FriendsListItem friends={friends} />
    </div>
  );
};

export default FreindsList;
