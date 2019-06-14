import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    tabViewContainer: {
        backgroundColor: '#fff',
        padding: 10
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 25,
        marginLeft: 25,
        marginBottom: 10
    },
    itemView: {
        width: 45,
        height: 45,
        backgroundColor: 'white',

    },
    iconInactiveStyle: {
        height: 20,
        width: 20,
        padding: 5,
        margin: 5,
        resizeMode: 'contain',
        tintColor: '#c8c8c8',
    },
    iconActiveStyle: {
        height: 20,
        width: 20,
        padding: 5,
        margin: 5,
        tintColor: '#00A0E1',
        resizeMode: 'contain'
    },
    tabActive: {
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        paddingTop: 5,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    tabInactive: {
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#f6f6f6',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    selectedText: {
        textAlign: 'center',
        color: '#00A0E1',
        fontFamily: 'lato_bold'
    },
    unSelectedText: {
        textAlign: 'center',
        color: '#c8c8c8',
        fontFamily: 'lato_bold'
    },
    search: {
        backgroundColor: '#e5e9f2',
        margin: 5,
        height: 40,
        borderRadius: 5,
        textAlign: 'center',
        fontFamily: 'lato_bold'
    }


});

export default styles;
