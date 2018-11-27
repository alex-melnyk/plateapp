import React, {Component} from 'react';
import {Animated, SafeAreaView, Dimensions, ScrollView, View} from 'react-native';
import Drawer from "react-native-drawer";

import i18n from '../i18n';
import {Card, DrawerContent, Header} from "./common";
import {Colors, getRandomColor} from "../utils";

const screenWidth = Dimensions.get('screen').width;

const CARDS_AMOUNT = 10;

class MainScreen extends Component {
    state = {
        drawerOpen: false,
        cards: []
    };

    renderCards = () => (
        this.state.cards.map((card, i) => {
            const position = this.animationValues[i].interpolate({
                inputRange: [0,1],
                outputRange: [-screenWidth, 0]
            });

            return (
                <Card
                    {...card}
                    style={{
                        left: position
                    }}
                />
            );
        })
    );

    componentDidMount() {
        const cards = [...new Array(CARDS_AMOUNT)].map((v, i) => ({
            key: `card_${i}`,
            color: getRandomColor()
        }));

        this.setState({cards});

        this.animationValues = [...new Array(CARDS_AMOUNT)].map(() => new Animated.Value(0));

        Animated.stagger(100, this.animationValues.map((value, index) => Animated.spring(value, {toValue: 1}))).start();
    }

    render() {
        if (!this.animationValues) {
            return null;
        }

        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                type="static"
                tapToClose={true}
                openDrawerOffset={120}
                styles={Styles.drawer}
                tweenHandler={(ratio) => ({
                    main: {
                        transform: [
                            {skewX: `${2 * ratio}deg`},
                            {scaleX: (1 - (0.25 * ratio))},
                            {scaleY: (1 - (0.25 * ratio))}
                        ],
                        borderRadius: 13,
                        borderLeftWidth: 5 * ratio,
                        borderLeftColor: 'rgba(0,0,0,0.2)',
                        borderBottomWidth: 5 * ratio,
                        borderBottomColor: 'rgba(0,0,0,0.2)'
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
                    <View style={{
                        backgroundColor: 'white'
                    }}>
                        <Header
                            bgColor={Colors.bgHeader}
                            tintColor={Colors.tintHeader}
                            title={i18n.t('screen_profile_head')}
                            onLeftPress={() => this.drawer.open()}
                        />
                        <ScrollView>
                            {this.renderCards()}
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Drawer>
        );
    }
}

const Styles = {
    container: {
        // left: -3,
        // bottom: -3.5,
        flex: 1,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: Colors.bgHeader
    },
    drawer: {
        drawer: {},
        main: {}
    }
};

export {MainScreen};