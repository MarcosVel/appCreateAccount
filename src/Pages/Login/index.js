import React, { useState } from 'react'
import { Keyboard, Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import firebase from '../../firebaseConnection'

export default function Login() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ user, setUser ] = useState('');

  async function cadastrar() {
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        Platform.OS === 'android' ?
          ToastAndroid.show(`Bem-vindo: ${ value.user.email }`, ToastAndroid.SHORT)
          :
          alert(`Usuário criado: ${ value.user.email }`)

        setUser(value.user.email);
      })
      .catch((error) => {
        alert('Ops... Algo deu errado! 😵')
        return;
      })
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
          <Text style={ styles.textBtn }>Login</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, fontSize: 20, textAlign: 'center' }} >
          { user }
        </Text>

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
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
    backgroundColor: '#195aff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: '#fff',
    fontSize: 20,
  }
})
