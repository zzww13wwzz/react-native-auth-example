import React from 'react';
import {View} from 'react-native';

const Box = (props) => {
    const {containerStyle, sectionStyle} = style;

    return (
        <View style={containerStyle}>
            <View style={sectionStyle}>
                {props.children}
            </View>
        </View>
    );
};

const style = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,

        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
    sectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export {Box};