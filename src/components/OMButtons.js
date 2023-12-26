import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as R from '../resources/staticResources';
import { OMText } from './OMText';



export const DarkButton = ({ onPress, title, disable, iconAfter }) => {



    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disable}
        >
            <View style={[styles.containerCommon, styles.containerDark, disable && styles.darkButtonDisabled]}>
                <Text style={[styles.testStyleCommon, styles.darkButtonTextStyle]} >{title} </Text>
                {iconAfter && (<View>{iconAfter}</View>)}
            </View>
        </TouchableOpacity>
    )
};

export const LightButton = ({ onPress, title, style, iconLeft, iconLeftDisabled, disable }) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disable}>

        <View style={[styles.containerCommon, styles.containerLight, style, disable && styles.lightButtonDisabled]}>
            {disable ? iconLeftDisabled : iconLeft}
            <Text style={[styles.testStyleCommon, styles.lightButtonTextStyle, { marginStart: iconLeft ? 10 : 0 }, disable && styles.lightButtonTextDisabled]} >{title} </Text>
        </View>
    </TouchableOpacity>
);


export const EHRButton = ({ onPress, title, disable, buttonColor, textColor, style }) => {



    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disable}
        >
            <View style={[styles.containerCommon, {
                backgroundColor: buttonColor
            }, style, disable && styles.darkButtonDisabled]}>
                <OMText style={[styles.testStyleCommon, {
                    color: textColor
                }]} >{title} </OMText>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    // ...
    containerCommon: {
        borderRadius: 4,
        width: '100%',
        height: 40,
        justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
    },
    containerDark: {
        // backgroundColor: R.colors.darkButtonColor
        backgroundColor: R.colors.red

    },
    containerLight: {
        backgroundColor: R.colors.lightButtonColor,
        borderWidth: 1,
        borderColor: "#BBD5FC"

    },
    testStyleCommon: {
        fontSize: 14,
        alignSelf: "center",
        fontWeight: 500,
        fontFamily: "SemiBold"
    },
    darkButtonTextStyle: {
        color: R.colors.darkButtonTextColor
    },
    lightButtonTextStyle: {
        color: R.colors.lightButtonTextColor

    },
    darkButtonDisabled: {
        backgroundColor: R.colors.disabledButtonColor
    },
    lightButtonDisabled: {
        backgroundColor: R.colors.disabledButtonColor
    },
    lightButtonTextDisabled: {
        color: '#A0AAC0'
    },

});