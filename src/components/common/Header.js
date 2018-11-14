import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
        paddingTop:15,
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowOpacity:0.2,
        // elevation: 100,
        // position: 'absolute'

    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export { Header };
