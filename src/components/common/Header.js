import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title, onLeftPress}) => (
    <View style={Styles.container}>
        <View style={Styles.sideButtonContainer}>
            <TouchableOpacity
                onPress={() => onLeftPress && onLeftPress()}
            >
                <Icon
                    name="hamburger"
                    style={Styles.sideButtonIcon}
                />
            </TouchableOpacity>
        </View>
        <View style={Styles.title}>
            <Text style={Styles.titleText}>{title}</Text>
        </View>
        <View style={Styles.sideButtonContainer}>
        </View>
    </View>
);

const Styles = {
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    sideButtonContainer: {
        flex: 0.2,
    },
    title: {
        flex: 1,
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#1A1A1A'
    },
    sideButtonIcon: {
        fontSize: 24,
        color: '#0F1524'
    }
};

export {Header};