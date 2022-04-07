import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, BackHandler } from "react-native";


export default class head extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: "center", }}>
                    {/*<TouchableOpacity style={{ alignSelf: "flex-start" }}>
                        <Image source={require('../assets/back.png')} resizeMode='contain' style={{ borderRadius: 15, height: 35, width: 35, marginTop: 18, }} />
        </TouchableOpacity>*/}
                    <Text style={styles.titre}>CybGame</Text>
                </View>
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