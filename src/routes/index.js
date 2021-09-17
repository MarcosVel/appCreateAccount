import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from '../Pages/CreateAccount';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Login from '../Pages/Login';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={ {
          tabBarActiveTintColor: '#195aff',
          tabBarInactiveTintColor: '#757575',
        } }
      >
        <AppTab.Screen
          name='Criar conta'
          component={ CreateAccount }
          options={ {
            headerShown: false,
            tabBarIcon: (({ size, color }) => (
              <Ionicons name="create-outline" size={ size } color={ color } />
            ))
          } }
        />
        <AppTab.Screen
          name='Login'
          component={ Login }
          options={ {
            headerShown: false,
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons name="login" size={ size } color={ color } />
            ))
          } }
        />
      </AppTab.Navigator>
    </NavigationContainer>
  )
}

export default AuthRoutes;