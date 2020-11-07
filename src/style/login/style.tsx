import { StyleSheet } from "react-native";

const Style = {
  loginContainer: StyleSheet.create({
    Container: {
      backgroundColor: "#3498DB",
      paddingTop: 40,
    },
  }),

  viewContainer: StyleSheet.create({
    Container: {
      backgroundColor: "transparent",
    },

    viewField: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },

    viewCircle: {
      width: 120,
      height: 120,
      borderTopLeftRadius: 200,
      borderTopRightRadius: 200,
      borderBottomRightRadius: 200,
      borderBottomLeftRadius: 200,
      flex: 0,
      alignItems: "center",
      justifyContent: "center",
    },

    iconColor: {
      color: "#676767",
      fontSize: 35,
    },

    pinText: {
      backgroundColor: "transparent",
      maxHeight: 50,
      alignItems: "center",
      justifyContent: "center",
    },

    pinViewField: {
      height: 20,
      width: 150,
      flex: 0,
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      flexDirection: "row",
    },

    pinDot: {
      maxWidth: 15,
      height: 15,
      borderTopLeftRadius: 200,
      borderTopRightRadius: 200,
      borderBottomRightRadius: 200,
      borderBottomLeftRadius: 200,
    },

    pinNotFilled: {
      backgroundColor: "#FFFFFF",
    },

    pinFilled: {
      backgroundColor: "#676767",
    },
  }),

  pincodeContainer: StyleSheet.create({
    Container: {
      backgroundColor: "transparent",
      height: 340,
    },

    pincodeField: {
      flex: 1,
      backgroundColor: "#fff",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,

      paddingTop: 47,
      paddingBottom: 47,
      paddingLeft: 28,
      paddingRight: 28,
    },

    pincodeFieldRow: {
      flexDirection: "row",
    },

    button: {
      flex: 1,
      alignSelf: "center",
    },

    buttonText: {
      color: "#676767",
      fontSize: 23,
    },

    pinAccept: {
      color: "#8CEF74",
    },

    deleteColor: {
      color: "#EF7479",
    },
  }),
};

export default Style;
