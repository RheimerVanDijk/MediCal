// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon, Content } from "native-base";
import AppointmentCard from "../components/dashboard/AppointmentCard";

// Classes
import utilsClass from "../classes/utils";

// Style
import Style from "../style/dashboard/style";

const dashboard = Style.dashbaord;
const dashboardHeader = Style.header;
const dashboardBody = Style.body;

// Init classes
const utils = new utilsClass();

export default function DashbaordPage({ navigation }: any) {
  function toAddApointment() {
    navigation.navigate("AddAppointment");
  }

  return (
    <Container style={dashboard.container}>
      <Container style={dashboardHeader.container}>
        <Container style={dashboardHeader.rowTop}>
          <Button full transparent>
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
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
            <AppointmentCard></AppointmentCard>
          </Content>
        </Content>
      </Container>
    </Container>
  );
}
