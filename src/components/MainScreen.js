import React, {Component} from 'react';
import {Dimensions, SafeAreaView, TouchableOpacity, View} from 'react-native';
import Drawer from "react-native-drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerContent} from "./common";

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get('screen');

class MainScreen extends Component {
    state = {
        drawerOpen: false
    };

    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                type="static"
                tapToClose={true}
                openDrawerOffset={120}
                styles={Styles.drawer}
                tweenHandler={(ratio) => ({
                    drawer: {
                        paddingLeft: 20 * ratio,
                    },
                    main: {
                        top: screenHeight * (0.125 * ratio),
                        width: screenWidth * (1 - (0.25 * ratio)),
                        height: screenHeight * (1 - (0.25 * ratio)),
                        transform: [{
                            skewX: `${2 * ratio}deg`
                        }]
                    }
                })}
                onOpenStart={() => this.setState({drawerOpen: true})}
                onCloseStart={() => this.setState({drawerOpen: false})}
                content={(
                    <DrawerContent
                        open={this.state.drawerOpen}
                    />
                )}
            >
                <SafeAreaView style={Styles.container}>
                    <TouchableOpacity
                        style={Styles.menuButton}
                        onPress={() => this.drawer.open()}
                    >
                        <Icon
                            name="hamburger"
                            style={Styles.menuButtonIcon}
                        />
                    </TouchableOpacity>
                </SafeAreaView>
            </Drawer>
        );
    }
}

const Styles = {
    container: {
        left: -3,
        bottom: -3.5,
        flex: 1,
        borderRadius: 10,
        // overflow: 'hidden',
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 3.5,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'white'
    },
    drawer: {
        main: {

        }
    },
    menuButton: {
        marginLeft: 20,
        marginTop: 10,
    },
    menuButtonIcon: {
        fontSize: 24,
        color: '#0F1524'
    }
};

export {MainScreen};