import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import * as R from '../resources/staticResources';
import { OMText } from './OMText';

export const OMTextInput = (props) => (
    <View style={[styles.defaultRootStyle, props.style]}>
        {props.label && <OMText style={[styles.inputsLabel, props.labelStyle]}>{props.label}{props.required ? "*" : ""}</OMText>}
        <View style={[styles.containerStyle]}>
            {props.logoStart && <View style={{ marginStart: 10 }}>
                {props.logoStart}
            </View>}
            <TextInput
                placeholderTextColor={R.colors.hintColor}
                {...props}
                style={[styles.textInputStyle, props.inputTextStyle, props.editable === false && { color: R.colors.disabledTextColor }]}
                secureTextEntry={props.secureTextEntry}
            />
            {props.logoEnd && (
                <View style={{ position: 'absolute', top: 0, right: 0 }}>{props?.logoEnd}</View>
            )}
        </View>
    </View>


);

const styles = StyleSheet.create({

    defaultRootStyle: {
        marginTop: 15
    },
    inputsLabel: {
        marginBottom: 4,
        fontSize: 14,
        fontWeight: '400',
        // color: R.colors.textGray
    },
    containerStyle: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        // backgroundColor: R.colors.appDarkBackground,
        borderColor: R.colors.red
    },

    textInputStyle: {
        height: 40,
        flex: 1,
        fontSize: 14,
        alignSelf: 'flex-start',
        color: R.colors.red,
        paddingHorizontal: 12
    },
  
    
    

});
