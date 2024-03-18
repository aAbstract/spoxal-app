import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/common/Themed';

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>
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