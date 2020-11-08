// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";

// Classes
import secureStoreClass from "../classes/secureStore";

// Style
import Style from "../style/login/style";

const loginContainer = Style.loginContainer;
const viewContainer = Style.viewContainer;
const pincodeContainer = Style.pincodeContainer;

// Variabelen
let pinArray: number[] = [];
const secureStore = new secureStoreClass();

export default function LoginPage() {
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
      function: () => pinLogin(),
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

  // Var that builds the numberpad
  const numberPad = (
    <Container style={pincodeContainer.pincodeField}>
      {numberArray.map((numRow, index) => {
        return (
          <Container style={pincodeContainer.pincodeFieldRow} key={index}>
            {numRow.map((num, index) => {
              return (
                <Button
                  style={pincodeContainer.button}
                  transparent
                  full
                  onPress={() => pinCode(num)}
                  key={index * 10}
                >
                  <Text style={pincodeContainer.buttonText}>{num}</Text>
                </Button>
              );
            })}
          </Container>
        );
      })}
      <Container style={pincodeContainer.pincodeFieldRow}>
        {lastLine.map((row, index) => {
          return (
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={row.function}
            >
              {row.type == "icon" ? (
                <Icon
                  style={row.style}
                  type="MaterialIcons"
                  name={row.name}
                ></Icon>
              ) : (
                <Text style={row.style}>{row.text}</Text>
              )}
            </Button>
          );
        })}
      </Container>
    </Container>
  );

  // map function that build the dots jsx
  const listDots = dotArray.map((dotState, index) => (
    <Container
      style={[
        viewContainer.pinDot,
        dotState ? viewContainer.pinFilled : viewContainer.pinNotFilled,
      ]}
      key={index}
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

  // Function to login on the app
  async function pinLogin() {
    await secureStore.setItem("testValue", "123456");
    console.log(await secureStore.getItem("testValue"));
    await secureStore.deleteItem("testValue");
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
            <Text>Enter your passcode</Text>
          </Container>
          <Container style={viewContainer.pinViewField}>{listDots}</Container>
        </Container>
      </Container>
      <Container style={pincodeContainer.Container}>{numberPad}</Container>
    </Container>
  );
}
