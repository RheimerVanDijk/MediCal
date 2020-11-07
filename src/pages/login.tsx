import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";

// Style
import Style from "../style/login/style";

const loginContainer = Style.loginContainer;
const viewContainer = Style.viewContainer;
const pincodeContainer = Style.pincodeContainer;

let pinArray: number[] = [];

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
      <Container style={pincodeContainer.Container}>
        <Container style={pincodeContainer.pincodeField}>
          <Container style={pincodeContainer.pincodeFieldRow}>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(1)}
            >
              <Text style={pincodeContainer.buttonText}>1</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(2)}
            >
              <Text style={pincodeContainer.buttonText}>2</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(3)}
            >
              <Text style={pincodeContainer.buttonText}>3</Text>
            </Button>
          </Container>
          <Container style={pincodeContainer.pincodeFieldRow}>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(4)}
            >
              <Text style={pincodeContainer.buttonText}>4</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(5)}
            >
              <Text style={pincodeContainer.buttonText}>5</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(6)}
            >
              <Text style={pincodeContainer.buttonText}>6</Text>
            </Button>
          </Container>
          <Container style={pincodeContainer.pincodeFieldRow}>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(7)}
            >
              <Text style={pincodeContainer.buttonText}>7</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(8)}
            >
              <Text style={pincodeContainer.buttonText}>8</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(9)}
            >
              <Text style={pincodeContainer.buttonText}>9</Text>
            </Button>
          </Container>
          <Container style={pincodeContainer.pincodeFieldRow}>
            <Button style={pincodeContainer.button} transparent full>
              <Icon
                style={[
                  pincodeContainer.buttonText,
                  acceptClass ? pincodeContainer.pinAccept : null,
                ]}
                type="MaterialIcons"
                name="done"
              />
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => pinCode(0)}
            >
              <Text style={pincodeContainer.buttonText}>0</Text>
            </Button>
            <Button
              style={pincodeContainer.button}
              transparent
              full
              onPress={() => removePinNum()}
            >
              <Icon
                style={[
                  pincodeContainer.buttonText,
                  deleteClass ? pincodeContainer.deleteColor : null,
                ]}
                type="MaterialIcons"
                name="backspace"
              />
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
