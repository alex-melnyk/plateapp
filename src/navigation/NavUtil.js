class NavUtil {
    static setReference(ref) {
        NavUtil.__ref = ref;
    }

    static navigate(routeName, params, actions, key) {
        NavUtil.__ref.dispatch(NavigationActions.navigate({
            routeName,
            params,
            actions,
            key: key
        }));
    }

    static reset(routeName, params, key, index = 0) {
        NavUtil.__ref.dispatch(StackActions.reset({
            index,
            actions: [NavigationActions.navigate({routeName, params})],
            key: key
        }));
    }

    static navres(routeName, params) {
        NavUtil.navigate(routeName, params, StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName, params})],
            key: uuid()
        }));
        // NavUtil.reset(routeName, params);
    }

    static setParams(params, key) {
        NavUtil.__ref.dispatch(NavigationActions.setParams({
            params,
            key: key || uuid()
        }));
    }

    static back() {
        NavUtil.__ref.dispatch(NavigationActions.back());
    }
}

export {NavUtil};