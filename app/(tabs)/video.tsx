import { Colors, Spacing } from '@/src/theme/Theme';
import { Body, H1, H2, H3 } from '@/src/theme/Typography';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VideoScreen() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Header */}
                <View style={styles.header}>
                    <H1 style={{ color: Colors.primary.deep }}>Videokonsultasjon</H1>
                    <Body style={{ color: Colors.neutral.darkGray, marginTop: 4 }}>
                        Snakk med legen din hvor som helst.
                    </Body>
                </View>

                {/* Status Card */}
                <View style={styles.statusCard}>
                    <View style={styles.iconCircle}>
                        <Ionicons name="videocam" size={32} color={Colors.primary.deep} />
                    </View>
                    <H3 style={styles.statusTitle}>Klar for videotime?</H3>
                    <Body style={styles.statusText}>
                        Har du mottatt lenke på SMS? Du kan også logge inn for å starte.
                    </Body>

                    {/* Primary Action: Go to Pasientsky */}
                    <TouchableOpacity
                        style={styles.bookButton}
                        onPress={() => Linking.openURL('https://my.pasientsky.no/no')}
                    >
                        <Body style={styles.bookButtonText}>Start videotime (Pasientsky)</Body>
                    </TouchableOpacity>

                    {/* Secondary Action: Book new */}
                    <TouchableOpacity
                        style={[styles.testButton, { marginTop: Spacing.m, borderWidth: 0 }]}
                        onPress={() => router.push('/(tabs)/appointments')}
                    >
                        <Body style={{ color: Colors.primary.deep, fontWeight: '600' }}>Bestill ny time</Body>
                    </TouchableOpacity>
                </View>

                {/* Information Section */}
                <View style={styles.infoSection}>
                    <H2 style={styles.sectionTitle}>Slik fungerer Pasientsky Video</H2>

                    <InfoRow
                        icon="chatbox-ellipses-outline"
                        title="1. Motta lenke"
                        text="Du mottar en lenke på SMS før timen starter."
                    />
                    <InfoRow
                        icon="phone-portrait-outline"
                        title="2. Logg inn"
                        text="Klikk på lenken eller logg inn via knappen over."
                    />
                    <InfoRow
                        icon="videocam-outline"
                        title="3. Vent på legen"
                        text="Du blir plassert i et digitalt venterom til legen er klar."
                    />
                </View>

                {/* Test Equipment Button */}
                <TouchableOpacity style={styles.testButton} onPress={() => Linking.openURL('https://whereby.com/user/get-access?role=host')}>
                    {/* Using a generic test link or just a placeholder action */}
                    <Ionicons name="settings-outline" size={20} color={Colors.primary.deep} />
                    <Body style={styles.testButtonText}>Test lyd og bilde</Body>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

// Helper Component for Info Rows
function InfoRow({ icon, title, text }: { icon: any, title: string, text: string }) {
    return (
        <View style={styles.infoRow}>
            <View style={styles.infoIconContainer}>
                <Ionicons name={icon} size={24} color={Colors.primary.deep} />
            </View>
            <View style={styles.infoTextContainer}>
                <H3 style={styles.infoTitle}>{title}</H3>
                <Body style={styles.infoBody}>{text}</Body>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background.main,
    },
    scrollContent: {
        padding: Spacing.m,
        paddingBottom: 40,
    },
    header: {
        marginBottom: Spacing.l,
    },
    statusCard: {
        backgroundColor: Colors.primary.light, // Using light sage/mint
        borderRadius: 20,
        padding: Spacing.l,
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: Colors.neutral.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: Spacing.m,
    },
    statusTitle: {
        color: Colors.primary.deep,
        marginBottom: Spacing.xs,
        textAlign: 'center',
    },
    statusText: {
        color: Colors.primary.dark,
        textAlign: 'center',
        marginBottom: Spacing.m,
    },
    bookButton: {
        backgroundColor: Colors.primary.deep,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
    },
    bookButtonText: {
        color: Colors.neutral.white,
        fontWeight: 'bold',
    },
    sectionTitle: {
        color: Colors.primary.deep,
        marginBottom: Spacing.m,
    },
    infoSection: {
        backgroundColor: Colors.neutral.white,
        borderRadius: 16,
        padding: Spacing.m,
        marginBottom: Spacing.l,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: Spacing.m,
        alignItems: 'flex-start',
    },
    infoIconContainer: {
        width: 40,
        alignItems: 'center',
        marginRight: Spacing.s,
        marginTop: 2,
    },
    infoTextContainer: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 16,
        color: Colors.neutral.darkGray,
        marginBottom: 2,
    },
    infoBody: {
        fontSize: 14,
        color: Colors.neutral.darkGray,
        opacity: 0.8,
    },
    testButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.m,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.primary.sage,
        backgroundColor: 'transparent',
    },
    testButtonText: {
        color: Colors.primary.deep,
        fontWeight: '600',
        marginLeft: Spacing.s,
    },
});
