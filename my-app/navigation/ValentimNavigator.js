import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Valentim from "../screens/Valentim";
import Ribeiro from "../screens/Ribeiro";

const Stack = createNativeStackNavigator();

export default function ValentimNavigator() {
    return (
        <Stack.Navigator initialRouteName="Valentim" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Valentim" component={Ribeiro} />
            <Stack.Screen name="Ribeiro" component={Valentim} />
        </Stack.Navigator>
    );
}