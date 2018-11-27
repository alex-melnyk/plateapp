import React, {Component} from 'react';
import {Dimensions, SafeAreaView, ScrollView} from 'react-native';
import Drawer from "react-native-drawer";

import i18n from '../i18n';
import {DrawerContent, Card, Header} from "./common";
import {getRandomColor} from "../utils";

const {
    width: screenWidth,
    height: screenHeight
} = Dimensions.get('screen');

class MainScreen extends Component {
    state = {
        drawerOpen: false,
        cards: []
    };

    renderCards = () => (
        this.state.cards.map((card, i) => (
            <Card {...card}/>
        ))
    );

    componentDidMount() {
        const cards = [...new Array(10)].map((v, i) => ({
            key: `card_${i}`,
            color: getRandomColor()
        }));

        this.setState({cards});
    }

    render() {
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
                            {scaleX: (1 - (0.25* ratio))},
                            {scaleY: (1 - (0.25* ratio))}
                        ]
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
                    <Header
                        title={i18n.t('screen_profile_head')}
                        onLeftPress={() => this.drawer.open()}
                    />
                    <ScrollView>
                        {this.renderCards()}
                    </ScrollView>
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
        borderLeftWidth: 3,
        borderLeftColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 3.5,
        borderBottomColor: 'rgba(0,0,0,0.2)',
        backgroundColor: 'white'
    },
    drawer: {
        main: {

        }
    }
};

export {MainScreen};