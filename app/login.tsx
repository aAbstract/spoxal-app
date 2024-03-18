import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export default function ModalScreen() {
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput label="Email" value={text} onChangeText={text => setText(text)} />
            <Button icon="camera" mode="elevated" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
            {/* <Text style={styles.title}>Login Page</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});