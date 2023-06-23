import React from 'react';
import { StatusBar } from "expo-status-bar";
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';

export default function App() {
  return (
    <>
      <StatusBar hidden={false} translucent={true} style="light" />
      <Login />
      {/* <Cadastro /> */}
    </>
  );
}
