import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface SuivantProps {
    navigation: any;
    page: string;
}

export default function suivant(props: SuivantProps) {

    return (
        <View>
            <TouchableOpacity style={styles.but}
                onPress={() => props.navigation.navigate(props.page)}>
                <Text style={styles.continuer}>Continuer</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
    },

    but: {
        alignItems: "center",
        height: 40,
        width: 80,
        marginTop: 55,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
    },

    continuer: {
        marginTop: 7,
        color: '#fff',
        fontSize: 14,
    },

});