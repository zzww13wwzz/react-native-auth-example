import React from  'react';
import { Text, TouchableOpacity } from 'react-native';


const BuyButton = ({onPressBuy}) => {
    const {buttonBackgroundStyle, textStyle} = styles;

    return (
        <TouchableOpacity style={buttonBackgroundStyle} onPress={onPressBuy}>
            <Text style={textStyle}>+</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonBackgroundStyle: {
        width: 50,
        height:50,

        marginTop: 35,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'deepskyblue',
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25
    }
}

export  { BuyButton };
