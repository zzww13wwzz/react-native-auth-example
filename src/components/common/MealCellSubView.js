import React from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import Box from './Box'

const MealCellSubView = ({meal}) => {
    const {title, price, image} = meal;
    const {
        imageStyle,
        imageViewStyle,
        textViewStyle,
        textStyle,
        buttonBackgroundStyle
    } = style;

    return (
        <Box>
            <View style={imageViewStyle}>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
                <Text>{title}</Text>
            </View>
            <View style={textViewStyle}>
                <Text style={textStyle}>Price = {price}$</Text>
            </View>
            <TouchableOpacity style={buttonBackgroundStyle} onPress={() => this.onPress}>
                <Text style={{color: '#fff'}}>buy</Text>
            </TouchableOpacity>

        </Box>
    );
};

const style = {
    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
    },
    imageStyle: {
        width: 100,
        height: 100,
    },
    textStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
        fontSize: 20,
    },
    textViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,

    },
    buttonBackgroundStyle: {
        width: 80,
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: 'deepskyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'deepskyblue',
    }
}

export { MealCellSubView };