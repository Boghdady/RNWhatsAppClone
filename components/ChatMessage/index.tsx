import React from "react";
import { View, Text, Image } from "react-native";

import { Message } from "../../types";
import styles from "../ChatMessage/style";
import moment from "moment";

export type ChatMessageProps = {
  message: Message;
};

export function isMyMessage(message: Message) {
  return message.user.id === "u1";
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  return (
    <View
      style={[
        styles.container,
        isMyMessage(message) ? { marginLeft: 80 } : { marginRight: 80 },
        isMyMessage(message)
          ? { backgroundColor: "#DCF8C5" }
          : { backgroundColor: "#fff" },
      ]}
    >
      {isMyMessage(message) || (
        <Text style={styles.name}>{message.user.name}</Text>
      )}
      <Text style={styles.message}>{message.content}</Text>
      {message.img && <Image style={styles.image} source={message.img} />}
      <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default ChatMessage;
