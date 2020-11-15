// Components
import React, { useState } from "react";
import {
  Container,
  Text,
  Button,
  Icon,
  Content,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";

// Classes
import DBclass from "../classes/database";

// Style
import Style from "../style/addAppointment/style";

const appointmentHeader = Style.header;
const appointmentBody = Style.body;

// Init class
const DB = new DBclass();

export default function AddAppointmentPage({ navigation }: any) {
  // from states
  const [fromDate, setFromDate] = useState(new Date());
  const [fromTime, setFromTime] = useState("00:00");
  const [fromShow, setFromShow] = useState(false);
  const fromMode = "time";

  function fromChange(event: any, selectedDate: any) {
    const date = new Date(selectedDate);
    setFromDate(date);
    setFromTime(
      `${date.getHours()}:${
        date.getMinutes() >= 0 && date.getMinutes() < 10 ? "0" : ""
      }${date.getMinutes()}`
    );
  }

  function fromShowMode(value: boolean) {
    setFromShow(value);
  }

  // to states
  const [toDate, setToDate] = useState(new Date());
  const [toTime, setToTime] = useState("00:00");
  const [toShow, setToShow] = useState(false);
  const toMode = "time";

  function toChange(event: any, selectedDate: any) {
    const date = new Date(selectedDate);
    setToDate(date);
    setToTime(
      `${date.getHours()}:${
        date.getMinutes() >= 0 && date.getMinutes() < 10 ? "0" : ""
      }${date.getMinutes()}`
    );
  }

  function toShowMode(value: boolean) {
    setToShow(value);
  }

  // Input states
  const [Alocation, setALocation] = useState("");
  const [patient, setPatient] = useState("");

  function toDashboardPage() {
    navigation.navigate("Dashbaord");
  }

  async function addAppointment() {
    if (await DB.addAppointment(fromTime, toTime, Alocation, patient)) {
      console.log("scucces");
      navigation.navigate("Dashbaord");
    }
  }

  return (
    <Container>
      <Container style={appointmentHeader.container}>
        <Container style={appointmentHeader.rowTop}>
          <Button transparent full onPress={() => toDashboardPage()}>
            <Icon type="MaterialIcons" style={appointmentHeader.iconLeft}>
              arrow_back
            </Icon>
          </Button>
        </Container>
        <Container style={appointmentHeader.rowBottom}>
          <Text style={appointmentHeader.text}>Add appointment</Text>
        </Container>
      </Container>
      <Container>
        <Content>
          <Content style={appointmentBody.container}>
            <Form style={appointmentBody.form}>
              <Button
                style={appointmentBody.buttonTitle}
                onPress={() => fromShowMode(true)}
                transparent
              >
                <Text style={appointmentBody.buttonTitleText}>From:</Text>
              </Button>
              <Button
                transparent
                style={appointmentBody.buttonTime}
                onPress={() => fromShowMode(true)}
              >
                <Text style={appointmentBody.buttonTimeText}>{fromTime}</Text>
              </Button>
              {fromShow && (
                <Container>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={fromDate}
                    mode={fromMode}
                    is24Hour={true}
                    display="default"
                    onChange={fromChange}
                  />
                  <Button
                    style={appointmentBody.buttonTimeDone}
                    onPress={() => fromShowMode(false)}
                  >
                    <Text>Done</Text>
                  </Button>
                </Container>
              )}
              <Button
                style={appointmentBody.buttonTitle}
                onPress={() => fromShowMode(true)}
                transparent
              >
                <Text style={appointmentBody.buttonTitleText}>To:</Text>
              </Button>
              <Button
                transparent
                style={appointmentBody.buttonTime}
                onPress={() => toShowMode(true)}
              >
                <Text style={appointmentBody.buttonTimeText}>{toTime}</Text>
              </Button>
              {toShow && (
                <Container>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={toDate}
                    mode={toMode}
                    is24Hour={true}
                    display="default"
                    onChange={toChange}
                  />
                  <Button
                    style={appointmentBody.buttonTimeDone}
                    onPress={() => toShowMode(false)}
                  >
                    <Text>Done</Text>
                  </Button>
                </Container>
              )}
              <Item stackedLabel last>
                <Label>Patient name:</Label>
                <Input
                  onChangeText={(patient) => setPatient(patient)}
                  defaultValue={patient}
                />
              </Item>
              <Item stackedLabel last>
                <Label>Location/ Room:</Label>
                <Input
                  onChangeText={(Alocation) => setALocation(Alocation)}
                  defaultValue={Alocation}
                />
              </Item>
            </Form>
            <Button
              style={appointmentBody.doneButton}
              onPress={() => addAppointment()}
            >
              <Text>Add</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    </Container>
  );
}
