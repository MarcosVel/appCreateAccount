import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { Keyboard, Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import firebase from '../../firebaseConnection'

export default function Perfil({ route }) {
  const navigation = useNavigation();

  const [ user, setUser ] = useState(route.params);

  async function logout() {
    await firebase.auth().signOut()
      .then((value) => {
        setUser('');

        Platform.OS === 'android' ?
          ToastAndroid.show('Deslogado com sucesso', ToastAndroid.SHORT)
          :
          alert('Deslogado com sucesso')

        navigation.goBack();
      })
      .catch((error) => {
        alert('Ops... Algo deu errado! 😵')
        return;
      })
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
      <View style={ styles.container }>

        <Text style={ styles.user } >
          { user?.email }
        </Text>

        <TouchableOpacity style={ styles.btn } onPress={ logout }>
          <Text style={ styles.textBtn }>Deslogar</Text>
        </TouchableOpacity>

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
  user: {
    fontSize: 20,
    color: '#262738',
    textAlign: 'center'
  },
  btn: {
    marginTop: 50,
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
