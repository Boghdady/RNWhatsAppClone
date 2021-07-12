import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "grey",
  },

  date: {
    marginTop: 5,
    fontSize: 12,
    color: "grey",
    // marginBottom: 20,
  },
});

export default styles;
