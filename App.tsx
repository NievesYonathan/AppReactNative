import { HomeScreen } from './src/views/home/home';
import { RegisterScreen } from './src/views/register/register';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator <RootStackParamList> ();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Stack.Screen name="RegisterScreen" 
          component={RegisterScreen}
          options={{
            title: 'Registro',
            headerShown: true,
          }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;