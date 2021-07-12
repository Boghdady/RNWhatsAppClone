import React from "react";
import { Text, View, Image } from "react-native";
import { ChatRoom, User } from "../../types";
import styles from "./style";
import moment from "moment";
import { TouchableOpacity } from "react-native-gesture-handler";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
  onPress: any;
};

export default function ChatListItem(props: ChatListItemProps) {
  const { chatRoom, onPress } = props;
  const user: User = chatRoom.users[1];
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
    </TouchableOpacity>
  );
}
