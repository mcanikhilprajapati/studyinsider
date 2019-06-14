import {ActivityIndicator, AppRegistry, View, Text, Image} from "react-native";
import React, {Component} from "react";
import styles from './SplashScreenStyle'
import {NavigationActions, StackActions} from "react-navigation";


export default class SplashScreen extends Component {

    componentWillMount() {

        //Check for login status and switch screen accordingly

        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'HomeScreen'})],
            });
            this.props.navigation.dispatch(resetAction);

        }, 3000);

    }

    render() {
        return (
            <View style={styles.container1}>
                <View style={styles.container}>
                    <Image source={require('../../../assets/si_logo.png')}
                           style={styles.logo}/>
                    <ActivityIndicator size="large" style={styles.progressView}/>

                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('SplashScreen', function () {
    return SplashScreen;
});


