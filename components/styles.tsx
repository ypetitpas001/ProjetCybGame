import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    accueil: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
        alignSelf: "center",
    },

    enigme: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },

    texte1: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },
    texte2: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 35,
        color: '#fff',
        fontSize: 14,
    },


    tableaudebord: {
        marginTop: 15,
        height: 200,
        width: 300,
        paddingHorizontal: 8,
        alignSelf: "center",
    },

    texte3: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    liste: {
        fontSize: 14,
        color: "lightgreen",
        marginLeft: 5,
    },

    ip: {
        marginLeft: 15,
        fontSize: 14,
        color: "lightgreen",
    },

    console: {
        marginLeft: 10,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    input: {
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 12,
        backgroundColor: "black",
        height: 65,
        width: 325,
        borderWidth: 2,
        borderColor: "#fff",
        color: "lightgreen",
        fontSize: 20,
    },


    but: {
        alignSelf: "center",
        height: 40,
        width: 80,
        marginTop: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
    },
    continuer: {
        alignSelf: "center",
        marginTop: 7,
        color: '#fff',
        fontSize: 14,
    },

    collapse: {
        marginTop: 7,
    },

    aide: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },
    aideCom: {
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5,
        color: "lightgreen",
    },
});

export default styles;