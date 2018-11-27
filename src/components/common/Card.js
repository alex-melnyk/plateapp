import React, {Component} from 'react';
import {Animated} from "react-native";

class Card extends Component {
    render() {
        const {
            children,
            color,
            style
        } = this.props;

        return (
            <Animated.View style={[Styles.container, {
                backgroundColor: color
            }, style]}>
                {children}
            </Animated.View>
        );
    }
}

const Styles = {
    container: {
        marginHorizontal: 15,
        marginVertical: 5,
        minHeight: 180,
        borderRadius: 15,
        borderWidth: 4,
        borderColor: '#F0F0F0',
        backgroundColor: '#FFFFFF'
    }
};

export {Card};