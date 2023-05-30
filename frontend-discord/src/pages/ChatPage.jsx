// import React, { useEffect, useState } from "react";
// import io from "socket.io-client";

// const ChatPage = () => {
//   const [socket, setSocket] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [userId, setUserId] = useState("");
//   const [recipientId, setRecipientId] = useState("");
//   const [message, setMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   useEffect(() => {
//     const socket = io("http://localhost:9999");
//     setSocket(socket);

//     socket.on("connect", () => {
//       console.log("Connected to server");
//     });

//     socket.on("disconnect", () => {
//       console.log("Disconnected from server");
//     });

//     socket.on("privateMessage", (data) => {
//       console.log("Received private message:", data);
//       setChatHistory((prevHistory) => [...prevHistory, data]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleLogin = () => {
//     socket.emit("login", userId);
//     setLoggedIn(true);
//   };

//   const handleSendMessage = () => {
//     if (recipientId && message) {
//       socket.emit("privateMessage", {
//         senderId: userId,
//         recipientId,
//         message,
//       });
//       setMessage("");
//     }
//   };

//   return (
//     <div>
//       {!loggedIn ? (
//         <div>
//           <input
//             type="text"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             placeholder="Enter User ID"
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       ) : (
//         <div>
//           <h3>User ID: {userId}</h3>
//           <div>
//             <h4>Chat History</h4>
//             {chatHistory.map((message, index) => (
//               <div key={index}>
//                 <strong>{message.senderId}: </strong>
//                 {message.message}
//               </div>
//             ))}
//           </div>
//           <div>
//             <input
//               type="text"
//               value={recipientId}
//               onChange={(e) => setRecipientId(e.target.value)}
//               placeholder="Enter Recipient ID"
//             />
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Enter Message"
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatPage;
// import { Box } from "@chakra-ui/layout";
// import { useState } from "react";
// import Chatbox from "../components/Chatbox";
// import MyChats from "../components/MyChats";
// import SideDrawer from "../components/SideDrawer";
// import { ChatState } from "../Context/ChatProvider";

// const Chatpage = () => {
//   const [fetchAgain, setFetchAgain] = useState(false);
//   const { user } = ChatState();

//   return (
//     <div style={{ width: "100%" }}>
//       {user && <SideDrawer />}
//       <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
//         {user && <MyChats fetchAgain={fetchAgain} />}
//         {user && (
//           <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
//         )}
//       </Box>
//     </div>
//   );
// };

// export default Chatpage;
