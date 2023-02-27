import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import IncomeExpenses from './IncomeExpenses'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Resumen de Gastos e Ingresos</Header>
      <IncomeExpenses></IncomeExpenses>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  )
}
