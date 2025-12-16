import { Button } from '@/src/components/Button';
import { Colors, Spacing } from '@/src/theme/Theme';
import { Body, Caption } from '@/src/theme/Typography';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/tm-logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Body style={styles.tagline}>Din helsetjeneste – raskt og trygt</Body>

                <Button
                    title="Logg inn"
                    onPress={() => router.push('/(tabs)')}
                    style={styles.buttonStart}
                    textStyle={styles.buttonStartText}
                />
            </View>

            <View style={styles.footer}>
                <Caption style={styles.footerText}>Kontakt oss</Caption>
                <Caption style={styles.footerText}>E-post: post@tmklinikken.no</Caption>
                <Caption style={styles.footerText}>Tlf: 21 42 36 36</Caption>
                <Caption style={[styles.footerText, styles.alertText]}>Ved akutt fare ring 113</Caption>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary.sage,
    },
    content: {
        flex: 1,
        padding: Spacing.l,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: 60,
        marginBottom: Spacing.s,
        tintColor: Colors.neutral.white,
    },
    tagline: {
        color: Colors.neutral.white,
        marginBottom: Spacing.xl,
        opacity: 0.9,
    },
    buttonStart: {
        width: '100%',
        backgroundColor: Colors.neutral.white,
        marginBottom: Spacing.xl,
    },
    buttonStartText: {
        color: Colors.primary.sage,
    },
    footer: {
        padding: Spacing.l,
        alignItems: 'center',
        paddingBottom: Spacing.xl,
    },
    footerText: {
        color: Colors.neutral.white,
        opacity: 0.7,
        marginBottom: 4,
    },
    alertText: {
        color: '#FFD93D', // Warning color from theme
        fontWeight: 'bold',
        marginTop: Spacing.s,
        opacity: 1,
    },
});
