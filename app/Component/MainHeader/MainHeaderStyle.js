import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#00A0E1",
    flexShrink: 0
  },
  headerBody: {
    alignItems: "center",
    flex: 1
  },
  headerLeft: {
    flex: 1
  },
  headerRight: {
    flex: 1,
    flexDirection: "row"
  },
  headerLeftSide: {
    width: 80,
    height: 35,
    resizeMode: "contain"
  },
  headerRightSide: {
    width: 50,
    height: 35,
    resizeMode: "contain"
  },
  headerBodyImage: {
    width: 100,
    height: 40,
    resizeMode: "contain"
  },
  headerBodyContent: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold"
  },
  nextButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold"
  }
});

export default styles;
