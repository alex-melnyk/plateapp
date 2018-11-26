import React, {Component} from 'react';
import {Animated, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import i18n from '../../i18n';

import ProfilePicture from '../../assets/img/profile_user.jpg';

const MENU_ITEMS = [
    i18n.t('menu_item_profile'),
    i18n.t('menu_item_plate_history'),
    i18n.t('menu_item_payment'),
    i18n.t('menu_item_rewards'),
];

class DrawerContent extends Component {
    logOutPressed = () => {
    };

    menuItemPressed = ({index}) => {
    };

    renderMenuItems = () => {
        if (!this.animationValues) {
            return null;
        }

        return MENU_ITEMS.map((item, index) => {
            const leftPos = this.animationValues[index].interpolate({
                inputRange: [0, 1],
                outputRange: [-200, 0]
            });

            return (
                <TouchableOpacity
                    key={`MenuItem_${index}`}
                    onPress={() => this.menuItemPressed({item, index})}
                >
                    <Animated.View style={[Styles.menuItemWrapper, {
                        left: leftPos
                    }]}>
                        <Text style={Styles.menuItemText}>
                            {item}
                        </Text>
                    </Animated.View>
                </TouchableOpacity>
            );
        })
    };

    componentWillReceiveProps(nextProps) {
        Animated.stagger(100, this.animationValues.map((value, index) =>
            Animated.spring(value, {
                toValue: nextProps.open ? 1 : 0
            }))
        ).start();
    }

    componentDidMount() {
        this.animationValues = [...new Array(MENU_ITEMS.length)]
            .map(() => new Animated.Value(0));
    }

    render() {
        return (
            <SafeAreaView style={Styles.container}>
                <View style={Styles.profilePictureContainer}>
                    <Image
                        style={Styles.profilePictureImage}
                        source={ProfilePicture}
                    />
                </View>
                <View style={Styles.profileDetailsContainer}>
                    <Text style={Styles.profileDetailsName}>
                        {i18n.t('profile_name')}
                    </Text>
                    <Text style={Styles.profileDetailsLocation}>
                        {i18n.t('profile_location')}
                    </Text>
                </View>
                <View style={Styles.menuContainer}>
                    {this.renderMenuItems()}
                </View>
                <TouchableOpacity
                    style={[Styles.menuItemWrapper, Styles.logOutWrapper]}
                    onPress={this.logOutPressed}
                >
                    <Text style={Styles.menuItemText}>
                        {i18n.t('logout')}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const Styles = {
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        paddingLeft: 20,
    },
    profilePictureContainer: {
        marginTop: 100,
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profilePictureImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    profileDetailsContainer: {
        marginTop: 30,
        alignItems: 'flex-start'
    },
    profileDetailsName: {
        fontFamily: 'Helvetica Neue',
        fontSize: 18,
        fontWeight: '600',
    },
    profileDetailsLocation: {
        fontFamily: 'Helvetica Neue',
        fontSize: 14,
        fontWeight: '400',
    },
    menuContainer: {
        flex: 1,
        marginTop: 40
    },
    menuItemWrapper: {},
    menuItemText: {
        lineHeight: 50,
        fontSize: 16,
    },
    logOutWrapper: {
        marginBottom: 50
    }
};

export {DrawerContent};