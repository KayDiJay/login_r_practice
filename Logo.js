import { Image } from "react-native";

export default () => {
    return(
        <Image
        source={require('./assets/home.png')}
        
        style={{ 
            width: 150, 
            height: 150,  
            marginBottom: 60,
        }}
        />
    )
}