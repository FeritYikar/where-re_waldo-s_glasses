import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const header = 'Finder-Keeper';
    const subHeader = <Text style={styles.subHeaderStyle}>Where are Waldo`s Glasses?</Text>;
    const name = 'Ferit';
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.headerStyle}>{header}</Text>
            {subHeader}
            <Text tyle={styles.nameStyle}>made by {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    },
    nameStyle: {
        fontSize: 15
    }
});

export default ComponentsScreen;

