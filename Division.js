import React from "react";
import { StyleSheet, View, Text } from 'react-native';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>소셜 계정을 통해 로그인</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: "10%",
        justifyContent: 'space-round',
    },
    line: {
        height: 1,
        width: 350,
        backgroundColor: 'grey',
        
    },
    
    text: {
        position: 'absolute',
        top: -10, // 수직 정렬을 위해 적절한 값을 설정
        backgroundColor:"white",
        paddingHorizontal:13,
    }
});
