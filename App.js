import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Logo from "./Logo";
import Id from "./Id";
import Id_Pw_Sign from "./Id_Pw_Sign";
import Division from './Division';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.inputContainer}>
          <Id />
          <Id_Pw_Sign />
        </View>
        <Division />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20, // 로고와 입력란 사이 간격 조정
    marginTop:150,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
