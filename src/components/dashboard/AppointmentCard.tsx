// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";

// Style
import Style from "../../style/dashboard/appointmentCard";

const card = Style.card;

export default function AppointmentCard() {
  return (
    <Container style={card.container}>
      <Container style={card.rowTop}>
        <Text style={card.time}>09:00 - 10:00</Text>
        <Text style={card.room}>A1.02</Text>
      </Container>
      <Container style={card.rowBottom}>
        <Text style={card.patient}>Patient 1</Text>
        <Icon type="MaterialIcons" style={card.icon}>
          arrow_forward
        </Icon>
      </Container>
    </Container>
  );
}
