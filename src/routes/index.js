import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from '../Pages/CreateAccount';
import { Ionicons } from '@expo/vector-icons';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        screenOptions={ {
          tabBarActiveTintColor: '#ff0000',
          tabBarInactiveTintColor: '#ffcc',
        } }
      >
        <AppTab.Screen
          name='Criar conta'
          component={ CreateAccount }
          options={ {
            headerShown: false,
            tabBarIcon: (({ size, color }) => (
              <Ionicons name="create" size={ size } color={ color } />
            ))
          } }
        />
      </AppTab.Navigator>
    </NavigationContainer>
  )
}

export default AuthRoutes;