import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './tabRoutes';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from '../Pages/Perfil';

const stackRoutes = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <stackRoutes.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stackRoutes.Screen
          name='Criar conta'
          component={ TabRoutes }
        />
        <stackRoutes.Screen
          name='Login'
          component={ TabRoutes }
        />
        <stackRoutes.Screen
          name='Perfil'
          component={ Perfil }
        />
      </stackRoutes.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes;