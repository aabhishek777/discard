import React, { useState } from "react";
import { friendsInvitationApi } from "../api/api";

const FriendsInvitation = () => {
  const [email, setEmail] = useState("");
  const onChangeHandeller = (event) => {
    console.log(email);
    setEmail(event.target.value);
  };

  const onSubmitHandeller = (event) => {
    event.preventDefault();
    console.log(email);
    friendsInvitationApi(email);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandeller}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder={email}
          onChange={onChangeHandeller}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default FriendsInvitation;
