import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',

        },
        progressContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff', padding: 25
        },
        cardView: {
            padding: 10,
            margin: 5,
            backgroundColor: '#ffffff',
            borderColor: '#d0d0d0',
            borderWidth: 0.5,
            elevation: 5

        },
        shadow: {
            backgroundColor: '#2E9298',
            borderRadius: 10,
            padding: 10,
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0
        },
        imageContainer: {
            flex: 1,
            alignItems: 'center',
            marginBottom: 10,
            justifyContent: 'center',
            backgroundColor: '#ffffff',
        },
        bottomViewContainer: {
            position: 'absolute',
            bottom: 10,
            left: 10,
        },
        mapStyle: {
            width: '100%',
            height: '100%',
            flexGrow: 1,
        },
        markerText: {
            fontFamily: 'lato_bold',
            fontSize: 14
        },
        markerImage: {
            width: 30, height: 30, resizeMode: 'contain', tintColor: '#000'
        }
    })
;


export default styles;
