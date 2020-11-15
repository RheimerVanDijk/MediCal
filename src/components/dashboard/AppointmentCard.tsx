// Components
import React, { useState } from "react";
import { Container, Text, Button, Icon } from "native-base";

// Style
import Style from "../../style/dashboard/appointmentCard";

const card = Style.card;

export default function AppointmentCard(props: any) {
  return (
    <Button style={card.button}>
      <Container style={card.container}>
        <Container style={card.rowTop}>
          <Text style={card.time}>
            {props.data.from} - {props.data.to}
          </Text>
          <Text style={card.room}>{props.data.location}</Text>
        </Container>
        <Container style={card.rowBottom}>
          <Text style={card.patient}>{props.data.patient}</Text>
          <Icon type="MaterialIcons" style={card.icon}>
            arrow_forward
          </Icon>
        </Container>
      </Container>
    </Button>
  );
}
