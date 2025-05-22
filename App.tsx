import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScanCodeBar from './src/ScanCodeBar';
import {RootStackParamList} from './types/RootStackParamList';
import {Button} from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('ScanCodeBar' as never)}>
        Go to scan
      </Button>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <Stack.Screen name="ScanCodeBar" component={ScanCodeBar} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
