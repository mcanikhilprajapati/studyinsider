import React from "react";
import {Image, TouchableOpacity} from "react-native";
import {Body, Header, Left, Right, Text} from "native-base";
import styles from "./MainHeaderStyle";

export class MainHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Header style={styles.headerStyle}>
                <Left style={styles.headerLeft}>
                    {this.props.leftIcon && (
                        <TouchableOpacity onPress={this.props.backAction}>
                            <Image
                                source={this.props.leftIcon}
                                style={styles.headerLeftSide}
                            />
                        </TouchableOpacity>
                    )}
                </Left>

                <Body style={styles.headerBody}>
                {this.props.bodyImage && (
                    <Image
                        source={this.props.bodyImage}
                        style={styles.headerBodyImage}
                    />
                )}
                {this.props.bodyContent && (
                    <Text style={styles.headerBodyContent} numberOfLines={1}>
                        {this.props.bodyContent}
                    </Text>
                )}
                </Body>
                <Right style={styles.headerRight}>
                    {!!this.props.rightText && (
                        <TouchableOpacity onPress={this.props.nextAction}>
                            <Text style={styles.nextButtonText}>{this.props.rightText}</Text>
                        </TouchableOpacity>
                    )}
                    {!!this.props.rightIcon && (
                        <TouchableOpacity onPress={this.props.nextAction}>
                            <Image
                                source={this.props.rightIcon}
                                style={styles.headerRightSide}
                            />
                        </TouchableOpacity>
                    )}
                </Right>
            </Header>
        );
    }
}

export default MainHeader;
