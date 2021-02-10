import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    root: {
      backgroundColor: '#fff',
      flex: 1,
      // alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      // alignSelf: 'center',
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    heading: {
      fontSize: 18,
      marginBottom: 10,
      fontWeight: '600',
    },
    input: {
      height: 60,
      marginBottom: 10,
    },
    btn: {
      height: 60,
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: 18,
    },
    btnContent: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
    },
});