import React, { useEffect, useState, EffectCallback } from "react";
import useMessages from "./hooks/useMessages";
import { db } from "./services/firebase";
import firebase from "firebase";

const chatId = "R0C6QmpGyBxf2RqbSX4i";

function writeNewMessage(chatId: string, text: string) {
  const newMessage = {
    author: "Tom",
    time: new Date().toISOString(),
    text
  };

  db.collection("chats")
    .doc(chatId)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion(newMessage)
    });
}

const App: React.FC = () => {
  const { messages } = useMessages(chatId);
  const [newMessage, setNewMessage] = useState("");

  const handleMessageChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const handleSend = (e: React.FormEvent<HTMLButtonElement>) => {
    setNewMessage("");
    writeNewMessage(chatId, newMessage);
  };

  return (
    <div>
      <h1>Chat</h1>
      <ul>
        {messages.map((m: any) => (
          <li>{m.text}</li>
        ))}
      </ul>
      <input type="text" value={newMessage} onChange={handleMessageChange} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default App;
