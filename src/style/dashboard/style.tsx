import { StyleSheet } from "react-native";

const Style = {
  dashbaord: StyleSheet.create({
    container: {
      height: "100%",
    },
  }),

  header: StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "#3498DB",
      paddingTop: 40,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      flex: 1,
      maxHeight: 140,
      flexDirection: "column",
      justifyContent: "space-between",
    },

    rowTop: {
      flexDirection: "row",
      backgroundColor: "transparent",
      justifyContent: "space-between",
    },

    rowBottom: {
      flexDirection: "row",
      backgroundColor: "transparent",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },

    iconRight: {
      color: "#fff",
      fontSize: 28,
      marginRight: 0,
    },

    iconLeft: {
      color: "#fff",
      fontSize: 28,
      marginLeft: 0,
    },

    iconBottom: {
      color: "#fff",
      marginBottom: 0,
      marginRight: 0,
      fontSize: 28,
    },

    buttonBottom: {
      paddingBottom: 0,
      alignItems: "flex-end",
    },

    text: {
      color: "#fff",
      fontSize: 25,
    },
  }),

  body: StyleSheet.create({
    container: {
      flexDirection: "column",
    },

    list: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },
  }),
};

export default Style;
