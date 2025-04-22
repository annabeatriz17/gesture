import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Anna")}>
                <Image style={styles.image} source={{
                    uri: "https://petitgato.com.br/img/webp/gatos-persas-em-sao-paulo-img-3780.webp",
                }} 
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
});