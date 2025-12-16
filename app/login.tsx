import { Button } from '@/src/components/Button';
import { Colors, Spacing } from '@/src/theme/Theme';
import { Body, H1 } from '@/src/theme/Typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <H1 style={styles.title}>BankID</H1>
                <Body style={styles.subtitle}>Simulert BankID pålogging</Body>

                <View style={styles.spacer} />

                <Button
                    title="Fullfør pålogging"
                    onPress={() => router.replace('/(tabs)')}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    content: {
        flex: 1,
        padding: Spacing.l,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: Spacing.s,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: Spacing.xl,
    },
    spacer: {
        height: 50,
    },
});
