import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={{ flexDirection: "row", marginTop:10, }}>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Text style={styles.Words}>아이디 찾기</Text>
      </TouchableOpacity>
        <View style={styles.verticleLine}/>
      <TouchableOpacity style={{ marginRight: 10 }}>
      <Text style={styles.Words}>비밀번호 찾기</Text>
      </TouchableOpacity>
        <View style={styles.verticleLine}/>
      <TouchableOpacity>
      <Text style={styles.Words}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    Words: {
      marginTop:15,
      fontSize:16,
      color:"grey",
      fontWeight:"bold"
    },
    verticleLine:{
      height: '50%',
      width: 1,
      backgroundColor: 'grey',
      marginTop:17,
      marginRight:"2.5%",
    },    
  });
  