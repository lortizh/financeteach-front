import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function RegisterSuccessScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Registo Exitoso!</Header>
      <Paragraph>
        Inicia sesión para empezar a controlar tus finanzas.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        }
      >
        Login
      </Button>
    </Background>
  )
}
