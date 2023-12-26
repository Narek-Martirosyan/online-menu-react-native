import React from 'react';
import { StyleSheet, Text } from "react-native";
// import * as R from '../../res/staticResources'

export const OMText = (props) => (

    <Text {...props} style={[styles.normalTextStyle, props?.disabled && styles.disabledTextStyle, props?.style]}  >{props.children}</Text>

);

const styles = StyleSheet.create({

    normalTextStyle: {
        fontSize: 15,
        alignSelf: "flex-start",
        // color: R.colors.appDarkColor
    },
    disabledTextStyle: {
        // color: R.colors.greyText
    }

});