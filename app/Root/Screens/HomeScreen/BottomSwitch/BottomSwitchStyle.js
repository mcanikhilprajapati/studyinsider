import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    bottomView: {

        backgroundColor: '#fff',
        borderRadius: 35,
        zIndex: 3,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
        elevation: 0.1,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemView: {
        width: 35,
        height: 35,
        backgroundColor: 'white',
    },
    selectedIconStyle: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: '#00A0E1',

    },
    unselectedIconStyle: {
        height: 35,
        width: 35,
        resizeMode: 'contain',
        tintColor: '#00B4FD'
    },
    viewWithBorder: {
        borderRadius: 35,
        borderWidth: 1,
        borderColor: '#00A0E1'
    }
});

export default styles;
