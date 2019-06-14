import React from "react";
import {Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./TabViewStyle";


export class TabView extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 1};
    }

    render() {
        return (
            <View style={styles.tabViewContainer}>
                <View style={styles.itemContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tabIndex: 1})
                            this.props.selectedTab(1)
                        }}
                        style={this.state.tabIndex == 1 ? styles.tabActive : styles.tabInactive}>
                        <View>
                            <Image
                                style={this.state.tabIndex == 1 ? styles.iconActiveStyle : styles.iconInactiveStyle}
                                source={require("../../../../assets/all_active.png")}
                            />
                            <Text
                                style={this.state.tabIndex == 1 ? styles.selectedText : styles.unSelectedText}
                            >{'All'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tabIndex: 2})
                            this.props.selectedTab(2)
                        }}
                        style={this.state.tabIndex == 2 ? styles.tabActive : styles.tabInactive}>
                        <View>
                            <Image
                                style={this.state.tabIndex == 2 ? styles.iconActiveStyle : styles.iconInactiveStyle}
                                source={require("../../../../assets/event.png")}
                            />
                            <Text
                                style={this.state.tabIndex == 2 ? styles.selectedText : styles.unSelectedText}>{'Event'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tabIndex: 3})
                            this.props.selectedTab(3)
                        }}
                        style={this.state.tabIndex == 3 ? styles.tabActive : styles.tabInactive}>
                        <View>
                            <Image
                                style={this.state.tabIndex == 3 ? styles.iconActiveStyle : styles.iconInactiveStyle}
                                source={require("../../../../assets/food.png")}
                            />
                            <Text
                                style={this.state.tabIndex == 3 ? styles.selectedText : styles.unSelectedText}>{'Food'}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({tabIndex: 4})
                            this.props.selectedTab(4)
                        }}
                        style={this.state.tabIndex == 4 ? styles.tabActive : styles.tabInactive}>
                        <View>
                            <Image
                                style={this.state.tabIndex == 4 ? styles.iconActiveStyle : styles.iconInactiveStyle}
                                source={require("../../../../assets/food.png")}
                            />
                            <Text
                                style={this.state.tabIndex == 4 ? styles.selectedText : styles.unSelectedText}>{'Shop'}</Text>
                        </View>
                    </TouchableOpacity>


                </View>
                <TextInput
                    onChangeText={text => {
                        this.props.onSearchPress(text);
                    }}
                    style={styles.search}
                    placeholder='Search'
                />
            </View>
        );
    }
}

export default TabView;
