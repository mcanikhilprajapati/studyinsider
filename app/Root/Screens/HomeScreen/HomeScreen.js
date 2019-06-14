import React, {Component} from 'react';
import {Dimensions, Image, Text, View, Animated} from 'react-native';
import styles from './HomeScreenStyle'
import {connect} from "react-redux";
import {Container} from "native-base";
import MainHeader from "../../../Component/MainHeader/MainHeader";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import BottomSwitch from "./BottomSwitch"
import TabView from "./TabView"
import {mapStyle} from '../../../Constants'

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 60;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
var jsonQuery = require('json-query');


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.mapRef = null;
        this.state = {
            markerList: props.data.dummyMarkers,
            hideView: false
        }
        this.nextAction = this.nextAction.bind(this);
        this.homeButton = this.homeButton.bind(this);
        this.callButton = this.callButton.bind(this);
        this.locationButton = this.locationButton.bind(this);
        this.onSearchPress = this.onSearchPress.bind(this);
        this.selectedTab = this.selectedTab.bind(this);
        this.animatedTop = new Animated.Value(0);
        this.animatedBottom = new Animated.Value(35);
    }

    animatedBox = () => {
        if (!this.state.hideView) {
            Animated.timing(this.animatedTop, {
                toValue: -200,
                duration: 600
            }).start()
            Animated.timing(this.animatedBottom, {
                toValue: -100,
                duration: 600
            }).start()
        } else {
            Animated.timing(this.animatedTop, {
                toValue: 0,
                duration: 600
            }).start()
            Animated.timing(this.animatedBottom, {
                toValue: 35,
                duration: 600
            }).start()
        }
    };

    selectedTab = (index) => {
        if (index === 1) {
            this.setState({markerList: this.props.data.dummyMarkers})
        } else if (index === 2) {
            const d = jsonQuery('dummyMarkers[*type=EVENT]', {
                data: this.props.data
            })
            this.setState({markerList: d.value})
        } else if (index === 3) {
            const d = jsonQuery('dummyMarkers[*type=FOOD]', {
                data: this.props.data
            })
            this.setState({markerList: d.value})
        } else if (index === 4) {
            const d = jsonQuery('dummyMarkers[*type=SHOP]', {
                data: this.props.data
            })
            this.setState({markerList: d.value})
        }

    };
    nextAction = () => {
        alert("Menu Pressed")
    };
    homeButton = () => {
        alert("homeButton Pressed")
    };
    callButton = () => {
        alert("callButton Pressed")
    };
    locationButton = () => {
        alert("locationButton Pressed")
    };
    onSearchPress = text => {
        if (text.length > 2) {
            const d = jsonQuery('dummyMarkers[*name=' + text + ']', {
                data: this.props.data
            })
            this.setState({markerList: d.value})
        }
    };


    render() {

        return (
            <Container>
                <MainHeader
                    leftIcon={require("../../../assets/si_logo.png")}
                    rightIcon={require("../../../assets/menu.png")}
                    nextAction={this.nextAction}
                />

                <Animated.View style={{marginTop: this.animatedTop}}>
                    <TabView onSearchPress={this.onSearchPress}
                             selectedTab={this.selectedTab}
                    />
                </Animated.View>
                <Animated.View style={{
                    position: 'absolute',
                    left: 50,
                    right: 50, bottom: this.animatedBottom
                }}>
                    <BottomSwitch
                        homeButton={this.homeButton}
                        callButton={this.callButton}
                        locationButton={this.locationButton}
                    /></Animated.View>
                <MapView
                    customMapStyle={mapStyle}
                    ref={(ref) => {
                        this.mapRef = ref
                    }}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    style={styles.mapStyle}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 39.78825,
                        longitude: -80.4324,
                        longitudeDelta: LONGITUDE_DELTA,
                        latitudeDelta: LATITUDE_DELTA,
                    }}
                    onPress={(e) => {
                        this.setState({hideView: !this.state.hideView}, this.animatedBox())

                    }}
                >
                    {this.state.markerList.map(marker => (
                        <Marker
                            coordinate={marker.latlang}
                            title={marker.name}
                            description={marker.address}
                        >
                            <View>
                                {marker.type === 'FOOD' &&
                                <Image source={require('../../../assets/silverware_spoon.png')}
                                       style={styles.markerImage}/>}
                                {marker.type === 'SHOP' &&
                                <Image source={require('../../../assets/cart_outline.png')}
                                       style={styles.markerImage}/>}
                                {marker.type === 'EVENT' &&
                                <Image source={require('../../../assets/calendar_check_black.png')}
                                       style={styles.markerImage}/>}
                                <Text style={styles.markerText}>{marker.discount} </Text>


                            </View>
                        </Marker>
                    ))}

                </MapView>


            </Container>

        );
    }
}

const mapActionCreators = {};

const mapStateToProps = state => {

    return {
        isLoading: state.home.loading,
        data: state.home.data,
        message: state.home.message
    };
};
export default connect(mapStateToProps, mapActionCreators)(HomeScreen);
