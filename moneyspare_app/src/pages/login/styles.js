import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a9a9a9;
`;

export const Box = styled.View`
  width: 300px;
  height: 380px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const BoxHeader = styled.View`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #40fa84;
  height: 65px;
  align-items: center;
  justify-content: center;
`;

export const BoxContent = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderText = styled.Text`
  font-size: 24;
  font-weight: bold;
  color: #fff;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 20px;
  background-color: #d3d3d3;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const TextLabel = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #696969;
`;

export const TextInput = styled.TextInput`
  text-align: center;
  font-size: 16;
  width: 100%;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableHighlight`
  background-color: #40fa84;
  height: 50px;
  width: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #fff;
`;
