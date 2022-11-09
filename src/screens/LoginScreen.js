import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { nameValidator } from '../helpers/nameValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import axios from 'axios'

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })  
  const [password, setPassword] = useState({ value: '', error: '' })
  const baseURL="http://localhost:8080/process-sms-back-web-services"

  const onLoginPressed = () => {
    const nameError = nameValidator(name.value)
    const passwordError = passwordValidator(password.value)
    if (nameError || passwordError) {
      setName({ ...name, error: nameError })
      setPassword({ ...password, error: passwordError })
      return
    }
    const params = JSON.stringify({      
      "username": name.value,
      "password": password.value
    })
    axios({
      method: 'post',
      url: baseURL+'/api/v1/auth/signin',
      data: {
        username: name.value,
        password: password.value
      },
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).catch(error => {
      console.log('error catch: ',error);
    }).then(response => {
        // this is now called!
        if(response.status==200){
          console.log(response);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
          })
        } else {
          console.log(response);
          <div>
            <b1>Error en Login</b1>
          </div>
        }
    });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
