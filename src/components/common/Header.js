import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({bgColor, tintColor, title, onLeftPress}) => (
    <View style={[Styles.container, {
        backgroundColor: bgColor
    }]}>
        <View style={Styles.sideButtonContainer}>
            <TouchableOpacity
                onPress={() => onLeftPress && onLeftPress()}
            >
                <Icon
                    name="hamburger"
                    style={[Styles.sideButtonIcon, {
                        color: tintColor
                    }]}
                />
            </TouchableOpacity>
        </View>
        <View style={Styles.title}>
            <Text style={[Styles.titleText, {
                color: tintColor
            }]}>{title}</Text>
        </View>
        <View style={Styles.sideButtonContainer}>
        </View>
    </View>
);

const Styles = {
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sideButtonContainer: {
        flex: 0.2,
    },
    title: {
        flex: 1
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    sideButtonIcon: {
        fontSize: 24
    }
};

export {Header};