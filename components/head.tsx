import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function head() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>CybGame</Text>
            </View>
            <View>
                <View style={styles.barre} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
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