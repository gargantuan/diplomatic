import { useEffect, useState } from "react";
import { db } from "../services/firebase";

export default function useMessages(chatId: string) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(chatId)
      .onSnapshot(
        doc => {
          setLoading(false);
          setMessages(doc.data()!.messages);
        },
        err => {
          setError(err);
        }
      );

    return unsubscribe;
  }, [chatId]);

  return {
    error,
    loading,
    messages
  };
}
