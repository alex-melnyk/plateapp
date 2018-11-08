import React, {Component} from 'react';
import {BaseNavigator, NavUtil} from "../navigation";

class App extends Component {
    render() {
        return (
            <BaseNavigator
                ref={NavUtil.setReference}
            />
        );
    }
}

export {App};