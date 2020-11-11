import { StyleSheet } from "react-native";

const Style = {
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

    iconLeft: {
      color: "#fff",
      fontSize: 28,
      marginLeft: 0,
    },

    text: {
      color: "#fff",
      fontSize: 25,
    },
  }),

  body: StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
    },

    form: {
      marginBottom: 50,
    },
    //#666666
    buttonTitle: {
      width: "100%",
      alignItems: "flex-end",
    },

    buttonTitleText: {
      color: "#666666",
      marginTop: 0,
      marginBottom: 0,
      fontSize: 15,
    },

    buttonTime: {
      width: "100%",
      borderBottomColor: "#DDD9DF",
      borderBottomWidth: 1,
      alignItems: "flex-start",
    },

    buttonTimeText: {
      color: "#000",
    },

    buttonTimeDone: {
      width: 140,
      borderRadius: 20,
      backgroundColor: "#3498DB",
      alignItems: "center",
      justifyContent: "center",
    },

    doneButton: {
      width: 140,
      borderRadius: 20,
      backgroundColor: "#3498DB",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
};

export default Style;
