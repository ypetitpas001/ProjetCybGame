import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, BackHandler } from "react-native";


export default class head extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.barre} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
    },

    barre: {
        marginTop: 25,
        width: 300,
        height: 1,
        backgroundColor: "white",

    },

    titre: {
        marginTop: 10,
        color: '#fff',
        fontSize: 32,
    },

});