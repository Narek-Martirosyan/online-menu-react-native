import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { OMTextInput } from '../components/OMTextInput';
import { OMText } from '../components/OMText';

export const HomeScreen = () => {
    const [text, setText] = useState('');
    return(
        <View>
            <OMText>Home screen</OMText>
            <OMText>{text}</OMText>
            <OMTextInput
                label='dsf'
                onChangeText={(text) => {setText(text)}}
                // required={true}
            />
        </View>
    )
}
