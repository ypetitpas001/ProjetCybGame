import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LayoutChangeEvent } from 'react-native';

interface aideProps {
    texte: string;
}

export default class aide extends React.Component<aideProps> {
    state: { aide: boolean } = { aide: false }
    aideViewInfo: null | LayoutChangeEvent = null;
    render() {
        return (
            <View onLayout={(view) => this.aideViewInfo = view}>
                <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                    {this.props.texte}
                </Text>

            </View>

        );

    }

}

const styles = StyleSheet.create({


    aide: {
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },

});