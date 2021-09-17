import React, { useState } from 'react'
import { Keyboard, Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import firebase from '../../firebaseConnection'

export default function CreateAccount() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((value) => {
        Platform.OS === 'android' ?
          ToastAndroid.show(`Usuário criado: ${ value.user.email }`, ToastAndroid.SHORT)
          :
          alert(`Usuário criado: ${ value.user.email }`)
      })
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          alert('Sua senha deve ter pelo menos 6 caracteres');
          return;
        }
        if (error.code === 'auth/invalid-email') {
          alert('E-mail inválido');
          return;
        } else {
          alert('Ops... Algo deu errado! 😵')
          return;
        }
      })

    setEmail('');
    setPassword('');
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={ styles.container }>
        <Text style={ styles.texto }>E-mail</Text>
        <TextInput
          style={ styles.input }
          value={ email }
          onChangeText={ (texto) => setEmail(texto) }
        />

        <Text style={ styles.texto }>Senha</Text>
        <TextInput
          style={ styles.input }
          value={ password }
          onChangeText={ (texto) => setPassword(texto) }
        />

        <TouchableOpacity style={ styles.btn } onPress={ cadastrar }>
          <Text style={ styles.textBtn }>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 0,
    backgroundColor: '#f4f6f8',
  },
  texto: {
    fontSize: 20,
    color: '#262738',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c2c2c2',
    fontSize: 17,
    elevation: 2
  },
  btn: {
    width: '100%',
    height: 40,
    backgroundColor: '#1d19ff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  }
})
