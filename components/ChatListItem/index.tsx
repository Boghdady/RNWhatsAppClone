import React from "react";
import { Text, View, Image } from "react-native";
import { ChatRoom, User } from "../../types";
import styles from "./style";
import moment from "moment";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

export default function ChatListItem(props: ChatListItemProps) {
  const { chatRoom } = props;
  const user: User = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.content}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.date}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>
    </View>
  );
}
