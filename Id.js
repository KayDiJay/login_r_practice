import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default () => {
  const [Id, setId] = useState('');
  const [password, setPassword] = useState('');

  const submitBtn = () => {
    // 로그인 버튼 클릭 시 실행될 동작
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="아이디를 입력해 주세요"
        placeholderTextColor="grey"
        value={Id}
        onChangeText={setId}
      />

      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해 주세요"
        placeholderTextColor="grey"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      
      <TouchableOpacity onPress={submitBtn} activeOpacity={0.8} style={styles.button}>
        <Text style={styles.buttonText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: 350,
    height: 205,
  },
  input: {
    marginVertical: 5,
    height: 50,
    width: '100%',
    paddingLeft: 16,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'yellow',
  },
  button: {
    backgroundColor: '#2D4B8E',
    padding: 10,
    height: 50,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    
  },
});
