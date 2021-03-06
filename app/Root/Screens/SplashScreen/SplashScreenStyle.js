import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    progressView: {
        height: 100, width: 100, marginTop: 100
    },
    createdBy: {
        marginTop: 100
    },
    text: {
        padding: 10
    },
    logo: {tintColor: '#00A0E1', alignSelf: 'center', height: 60, resizeMode: 'contain'}
});
export default styles;

