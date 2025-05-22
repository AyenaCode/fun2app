import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

export default function ScanCodeBar() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ScanCodeBar</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}
