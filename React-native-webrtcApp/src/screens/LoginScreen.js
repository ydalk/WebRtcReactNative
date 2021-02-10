import React, {useState} from 'react';
import {View} from 'react-native';

/** Dependencies */
import {Text} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {Button} from 'react-native-paper';

/** Styles */
import { styles } from '../assets/styles/login-screen';

/** Functional Component */
export default function LoginScreen(props) {

  /** Define State */
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      await AsyncStorage.setItem('userId', userId);
      setLoading(false);
      props.navigation.push('Call');
    } catch (err) {
      console.log('Error', err);
      setLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Text style={styles.heading}>Enter your id</Text>
        <TextInput
          label="Your  ID"
          onChangeText={text => setUserId(text)}
          mode="outlined"
          style={styles.input}
        />

        <Button
          mode="contained"
          onPress={onLogin}
          loading={loading}
          style={styles.btn}
          contentStyle={styles.btnContent}
          disabled={userId.length === 0}>
          Login
        </Button>
      </View>
    </View>
  );
}
