import React, {Component} from 'react';
import {View} from "react-native";

class Card extends Component {
    render() {
        const {
            children,
            color
        } = this.props;

        return (
            <View style={[Styles.container, {
                backgroundColor: color
            }]}>
                {children}
            </View>
        );
    }
}

const Styles = {
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        minHeight: 180,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: '#F0F0F0',
        backgroundColor: '#FFFFFF'
    }
};

export {Card};