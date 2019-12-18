import React, { Component } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Box,
  BoxHeader,
  HeaderText,
  TextInput,
  TextContainer,
  BoxContent,
  TextLabel,
  Button,
  ButtonText,
  ButtonContainer,
} from './styles';

export default class login extends Component {
  render() {
    return (
      <Container>
        <Box>
          <BoxHeader>
            <HeaderText>Login</HeaderText>
          </BoxHeader>
          <BoxContent>
            <TextLabel>Email</TextLabel>
            <TextContainer>
              <TextInput placeholder="Digite seu email" />
            </TextContainer>
            <TextLabel>Senha</TextLabel>
            <TextContainer>
              <TextInput placeholder="Digite sua senha" />
            </TextContainer>
            <ButtonContainer>
              <Button>
                <ButtonText>Login</ButtonText>
              </Button>
              <Button>
                <ButtonText>Cadastrar</ButtonText>
              </Button>
            </ButtonContainer>
          </BoxContent>
        </Box>
      </Container>
    );
  }
}
