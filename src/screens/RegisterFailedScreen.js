import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function RegisterFailedScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Registo Fallido!</Header>
      <Paragraph>
        Correo o Usuario Existente.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'RegisterScreen' }],
          })
        }
      >
        Registrarse
      </Button>
    </Background>
  )
}
