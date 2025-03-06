import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Mycolors } from '../theme/AppTheme';

interface Props {
    text: string
    onPress: () => void
}

export const RoundedButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={() => onPress()}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Mycolors.primary,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
