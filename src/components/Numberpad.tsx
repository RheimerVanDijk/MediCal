// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";

// Classes
import utilsClass from "../classes/utils";

// Style
import Style from "../style/login/style";
const pincodeContainer = Style.pincodeContainer;

// Init classes
const utils = new utilsClass();

// Types
import {
  type_numberpad_lastrow,
  type_numberpad_numbers_row,
  type_numberpad_numbers_num,
} from "../types/numberpad";

export default function Numberpad(props: any) {
  const numberArray = props.numberArray;
  const lastLine = props.lastLine;

  return (
    <Container style={pincodeContainer.pincodeField}>
      {numberArray.map((numRow: type_numberpad_numbers_row) => {
        return (
          <Container
            style={pincodeContainer.pincodeFieldRow}
            key={utils.uuid()}
          >
            {numRow.map((num: type_numberpad_numbers_num) => {
              return (
                <Button
                  style={pincodeContainer.button}
                  transparent
                  full
                  onPress={() => props.pincodeFunc(num)}
                  key={utils.uuid()}
                >
                  <Text style={pincodeContainer.buttonText}>{num}</Text>
                </Button>
              );
            })}
          </Container>
        );
      })}
      <Container style={pincodeContainer.pincodeFieldRow}>
        {lastLine.map((row: type_numberpad_lastrow) => {
          return (
            <Button
              style={pincodeContainer.button}
              transparent
              full
              key={utils.uuid()}
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
}
