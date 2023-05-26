import React from "react";

const FriendsListItem = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <div key={Number(friend.id)}>
          {friend.id}
          {friend.userName}
        </div>
      ))}
    </div>
  );
};

export default FriendsListItem;
