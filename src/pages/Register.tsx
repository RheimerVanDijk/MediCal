// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";
import Numberpad from "../components/Numberpad";

// Classes
import secureStoreClass from "../classes/secureStore";
import utilsClass from "../classes/utils";

// Style
import Style from "../style/login/style";

const loginContainer = Style.loginContainer;
const viewContainer = Style.viewContainer;
const pincodeContainer = Style.pincodeContainer;

// Variabelen
let pinArray: number[] = [];

// init classes
const secureStore = new secureStoreClass();
const utils = new utilsClass();

export default function RegisterPage({ navigation }: any) {
  // state for geen check class
  let [acceptClass, setAcceptClass] = useState(false);

  // state for red delete button class
  let [deleteClass, setDeleteClass] = useState(false);

  // State for dots class
  let [dotArray, setDotArray] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // Pincode states
  let [pincodeNum, setPincode] = useState("");
  let [repeatPincodeNum, setRepeatPincode] = useState("");

  let [codeMsg, setCodeMsg] = useState("Enter a 6 number pincode");

  // const that holds the numberpad to make the code shorter
  const numberArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  // const that holds the settings for the last line of the numberpad
  const lastLine = [
    {
      type: "icon",
      style: [
        pincodeContainer.buttonText,
        acceptClass ? pincodeContainer.pinAccept : null,
      ],
      function: () => pinRegister(),
      name: "done",
    },
    {
      type: "text",
      style: pincodeContainer.buttonText,
      function: () => pinCode(0),
      text: "0",
    },
    {
      type: "icon",
      style: [
        pincodeContainer.buttonText,
        deleteClass ? pincodeContainer.deleteColor : null,
      ],
      function: () => removePinNum(),
      name: "backspace",
    },
  ];

  // map function that build the dots jsx
  const listDots = dotArray.map((dotState, index) => (
    <Container
      style={[
        viewContainer.pinDot,
        dotState ? viewContainer.pinFilled : viewContainer.pinNotFilled,
      ]}
      key={utils.uuid()}
    ></Container>
  ));

  function pinCode(number: number) {
    // Adds number to pincode array and calls function to color the dots
    if (pinArray.length <= 5) {
      pinArray.push(number);
      controlDots();
    }
    checkAcceptClass();
    checkDeleteClass();
  }

  // funnction that fills in the dots on login
  function controlDots() {
    let newDotArray = [false, false, false, false, false, false];
    for (let i = 0; i < pinArray.length; i++) {
      newDotArray[i] = true;
    }

    setDotArray(newDotArray);
  }

  // function to handles the onPress on the delete button, deletes last number of filled in pin
  function removePinNum() {
    pinArray.pop();
    controlDots();
    checkAcceptClass();
    checkDeleteClass();
  }

  // function that handels state of acceptClass
  function checkAcceptClass() {
    if (pinArray.length == 6) {
      setAcceptClass(true);
    } else {
      setAcceptClass(false);
    }
  }

  // function that handels state of deleteClass
  function checkDeleteClass() {
    if (pinArray.length != 0) {
      setDeleteClass(true);
    } else {
      setDeleteClass(false);
    }
  }

  // Function that makes pincode
  function pinRegister() {
    if (pincodeNum == "") {
      // pin step 1
      const firstPin = pinArray.join("");
      setPincode(firstPin);
      setCodeMsg("Repeat previous pincode");
      clearPincode();
    } else {
      // pin step 2
      const secondPin = pinArray.join("");
      if (pincodeNum == secondPin) {
        clearPincode();
        regPincode(secondPin);
      } else {
        resetPincode();
      }
    }
  }

  function clearPincode() {
    pinArray = [];
    controlDots();
    checkAcceptClass();
    checkDeleteClass();
  }

  function resetPincode() {
    pinArray = [];
    setPincode("");
    setRepeatPincode("");
    controlDots();
    checkAcceptClass();
    checkDeleteClass();
    setCodeMsg("Your pins didn't match, try again");
  }

  async function regPincode(pincode: string) {
    secureStore.setItem("pincode", pincode);
    navigation.navigate("Login");
  }

  return (
    <Container style={loginContainer.Container}>
      <Container style={viewContainer.Container}>
        <Container style={viewContainer.viewField}>
          <Container style={viewContainer.viewCircle}>
            <Icon
              type="MaterialIcons"
              name="lock"
              style={viewContainer.iconColor}
            />
          </Container>
          <Container style={viewContainer.pinText}>
            <Text>{codeMsg}</Text>
          </Container>
          <Container style={viewContainer.pinViewField}>{listDots}</Container>
        </Container>
      </Container>
      <Container style={pincodeContainer.Container}>
        <Numberpad
          numberArray={numberArray}
          lastLine={lastLine}
          pincodeFunc={pinCode}
        ></Numberpad>
      </Container>
    </Container>
  );
}
