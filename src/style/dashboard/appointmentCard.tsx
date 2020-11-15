import { StyleSheet } from "react-native";

const Style = {
  card: StyleSheet.create({
    button: {
      marginBottom: 20,
      height: 95,
      maxHeight: 95,
      backgroundColor: "transparent",
    },

    container: {
      height: 95,
      maxHeight: 95,
      borderColor: "#eee",
      borderWidth: 1,
      justifyContent: "space-between",
      paddingTop: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 15,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.26,
      shadowRadius: 4.46,
      elevation: 8,
    },

    rowBottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },

    rowTop: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },

    time: {
      fontSize: 23,
    },

    room: {
      fontSize: 16,
    },

    patient: {
      fontSize: 16,
    },

    icon: {
      fontSize: 24,
    },
  }),
};

export default Style;
