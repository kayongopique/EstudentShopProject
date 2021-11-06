import React from 'react';
import { TouchableWithoutFeedback, Image } from "react-native";



const BackArrow = ({onPress}) => {
    return ( 
        <TouchableWithoutFeedback
        onPress={onPress}
        >
            <Image source={require('../assets/images/Icon_Arrow-Left.png')} />
        </TouchableWithoutFeedback>
     );
}
 
export default BackArrow;