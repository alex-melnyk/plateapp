import React, {Component} from 'react';
import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import Drawer from "react-native-drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerContent} from "./common";

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get('screen');

class MainScreen extends Component {
    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                type="static"
                tapToClose={true}
                openDrawerOffset={120}
                tweenHandler={(ratio) => ({
                    drawer: {
                        paddingLeft: 20 * ratio,
                    },
                    main: {
                        top: screenHeight * (0.125 * ratio),
                        width: screenWidth * (1 - (0.25 * ratio)),
                        height: screenHeight * (1 - (0.25 * ratio)),
                        borderRadius: 10 * ratio,
                        shadowOffset: {width: -5, height: 0},
                        padding: 10 * ratio,
                    }
                })}
                styles={{
                    main: {
                        overflow: 'hidden',
                        shadowColor: '#000000',
                        shadowOpacity: 0.05,
                        shadowRadius: 3,
                    }
                }}
                content={<DrawerContent/>}
            >
                <SafeAreaView style={{
                    flex: 1,
                    borderRadius: 10,
                    overflow: 'hidden',
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity
                        style={Styles.menuButton}
                        onPress={() => {
                            this.drawer.open();
                        }}
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