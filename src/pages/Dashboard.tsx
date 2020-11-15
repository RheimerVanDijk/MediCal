// Components
import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Container, Text, Button, Icon, Content } from "native-base";
import AppointmentCard from "../components/dashboard/AppointmentCard";
import { useFocusEffect } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

// Classes
import utilsClass from "../classes/utils";
import DBclass from "../classes/database";

// Style
import Style from "../style/dashboard/style";

const dashboard = Style.dashbaord;
const dashboardHeader = Style.header;
const dashboardBody = Style.body;

// Init classes
const utils = new utilsClass();
const DB = new DBclass();

export default function DashbaordPage({ navigation }: any) {
  const [cards, setCards] = useState<object[]>([]);

  function toAddApointment() {
    navigation.navigate("AddAppointment");
  }

  useEffect(() => {
    console.log("effect");
    async function getCards() {
      if (cards.length == 0) {
        setCards(await DB.getAllAppointments());
      }
    }

    getCards();
  }, []);

  useFocusEffect(() => {
    async function getCards() {
      setCards(await DB.getAllAppointments());
    }
    getCards();
  });

  function deleteDay() {
    Alert.alert(
      "Refresh day",
      "Are you sure you want to delete al the data of this day?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: async () => {
            if (await DB.deleteAllAppointments()) {
              setCards([]);
            }
          },
        },
      ]
    );
  }

  return (
    <Container style={dashboard.container}>
      <Container style={dashboardHeader.container}>
        <Container style={dashboardHeader.rowTop}>
          <Button full transparent onPress={() => deleteDay()}>
            <Icon type="MaterialIcons" style={dashboardHeader.iconLeft}>
              refresh
            </Icon>
          </Button>
          <Button full transparent>
            <Icon type="MaterialIcons" style={dashboardHeader.iconRight}>
              settings
            </Icon>
          </Button>
        </Container>
        <Container style={dashboardHeader.rowBottom}>
          <Text style={dashboardHeader.text}>{utils.textDate()}</Text>
          <Button
            full
            transparent
            style={dashboardHeader.buttonBottom}
            onPress={() => toAddApointment()}
          >
            <Icon type="MaterialIcons" style={dashboardHeader.iconBottom}>
              add_circle_outline
            </Icon>
          </Button>
        </Container>
      </Container>
      <Container style={dashboardBody.container}>
        <Content>
          <Content style={dashboardBody.list}>
            {cards.map((el) => (
              <AppointmentCard data={el} key={utils.uuid()}></AppointmentCard>
            ))}
          </Content>
        </Content>
      </Container>
    </Container>
  );
}
