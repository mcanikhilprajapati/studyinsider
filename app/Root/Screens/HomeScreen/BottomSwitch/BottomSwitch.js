import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./BottomSwitchStyle";


export class BottomSwitch extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.bottomView}>
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        onPress={this.props.callButton}
                        style={styles.itemView}>
                        <Image
                            style={styles.unselectedIconStyle}
                            source={require("../../../../assets/face_agent.png")}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this.props.homeButton}
                        style={styles.itemView}>
                        <Image
                            style={styles.unselectedIconStyle}
                            source={require("../../../../assets/home.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.props.locationButton}
                        style={styles.itemView}>
                        <View style={styles.viewWithBorder}>
                            <Image
                                style={styles.selectedIconStyle}
                                source={require("../../../../assets/map_marker.png")}
                            />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default BottomSwitch;
