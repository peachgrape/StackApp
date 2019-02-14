import React, { Component } from 'react';
import {Constants} from 'expo';
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <Header>
          <Body>
            <Title>Stuck Web</Title>
          </Body>
        </Header>
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>

          <Button full primary style={{ paddingBottom: 4, marginTop: 50, marginBottom:10 }}>
            <Text> Login </Text>
          </Button>
          <Button full light primary><Text> Sign Up </Text></Button>
        </Form>
      </Container>
    );
  }
}