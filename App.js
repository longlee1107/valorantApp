import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { screen } from './src/constants/screen';
import { components } from './src/constants/components';
import { Provider } from 'react-redux';
import { store } from './src/features/configureStore.js';
import registerNNPushToken from 'native-notify';
const Stack = createNativeStackNavigator();

export default function App() {
    registerNNPushToken(3527, 'ilgRiKyF9YZdM8dUV5VEev');
    return (
        <>
            <Provider store={store}>
                <NavigationContainer>
                    <TailwindProvider>
                        <Stack.Navigator backBehavior="none" screenOptions={{ headerShown: false }} initialRouteName="ShowLogo">
                            <Stack.Screen options={{gestureEnabled: false}} name="ShowLogo"  component={screen.ShowLogo} />
                            <Stack.Screen options={{gestureEnabled: false}} name="Home" component={screen.Home} />
                        </Stack.Navigator>
                    </TailwindProvider>
                    <Toast />
                </NavigationContainer>
            </Provider>
        </>
    );
}