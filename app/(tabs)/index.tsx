import { Colors, Spacing } from '@/src/theme/Theme';
import { Body, H2, H3 } from '@/src/theme/Typography';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState('Lege');

    // Handle Tab Press
    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
        if (tab === 'TM Klinikken') {
            router.push({ pathname: '/webview', params: { url: 'https://www.tmklinikken.no', title: 'TM Klinikken' } });
        } else if (tab === 'Nyheter') {
            router.push({ pathname: '/webview', params: { url: 'https://tmlegetjenester.no/nyheter-fagartikler/', title: 'Nyheter & Fagartikler' } });
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Header Section */}
                <View style={styles.headerCentered}>
                    <Body style={styles.greeting}>Hei, Ola Nordmann 👋</Body>
                    <H2 style={styles.mainQuestion}>Hva kan vi hjelpe deg med?</H2>
                </View>

                {/* Tab Selector */}
                <View style={styles.tabContainer}>
                    <View style={styles.tabList}>
                        {['Lege', 'Vektnedgang', 'Hud', 'Nyheter', 'TM Klinikken'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                style={[styles.tabButton, selectedTab === tab && styles.tabButtonActive]}
                                onPress={() => handleTabPress(tab)}
                            >
                                <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Main Cards Stack */}
                <View style={styles.cardStack}>

                    {/* Legetime Card */}
                    <ServiceCard
                        title="Legetime"
                        subtitle="Alt fra allmenne problemstillinger til spesialistvurdering"
                        image={require('@/assets/images/illustrations/doctor_v2.png')}
                        buttonText="Bestill time"
                        onPress={() => router.push('/(tabs)/appointments')}
                    />

                    {/* Medisinsk Vektnedgang Card */}
                    <ServiceCard
                        title="Medisinsk vektnedgang"
                        subtitle="Vi hjelper deg med varig vektreduksjon"
                        image={require('@/assets/images/illustrations/vektnedgang.png.webp')}
                        buttonText="Bestill time"
                        onPress={() => router.push('/(tabs)/appointments')}
                    />

                    {/* Generell Akne Card */}
                    <ServiceCard
                        title="Hudproblemer"
                        subtitle="Sliter du med kviser? Få hjelp i dag"
                        image={require('@/assets/images/illustrations/hud_akne.png.webp')}
                        buttonText="Bestill time"
                        onPress={() => router.push('/(tabs)/appointments')}
                    />

                    {/* Nyheter & Fagartikler Card (Optional redundant link if in tabs, but good for visibility) */}
                    {/* User asked to replace 'Annet' with 'Nyheter' in Tabs, but didn't explicitly say remove the card.
                         However, "Annet kan du erstatte med nyheter...".
                         I'll keep the card as it's a nice footer content.  */}
                    <ServiceCard
                        title="Nyheter & fagartikler"
                        subtitle="Hold deg oppdatert med våre artikler"
                        image={require('@/assets/images/illustrations/hjerteflimmer.png.webp')}
                        buttonText="Gå til artikler"
                        onPress={() => router.push({ pathname: '/webview', params: { url: 'https://tmlegetjenester.no/nyheter-fagartikler/', title: 'Nyheter & Fagartikler' } })}
                    />

                    {/* Information Link Card */}
                    <TouchableOpacity style={styles.infoCard} onPress={() => router.push({ pathname: '/webview', params: { url: 'https://tmlegetjenester.no/om-oss/', title: 'Om Oss' } })}>
                        <View style={styles.infoIcon}>
                            <Ionicons name="information-circle-outline" size={24} color={Colors.primary.dark} />
                        </View>
                        <View style={styles.infoContent}>
                            <H3 style={{ fontSize: 16 }}>Om TM Legetjenester</H3>
                            <Body style={{ fontSize: 13, color: Colors.neutral.darkGray }}>Les mer om klinikken og våre leger.</Body>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color={Colors.neutral.darkGray} />
                    </TouchableOpacity>

                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

// --- Subcomponents ---

const ServiceCard = ({ title, subtitle, image, buttonText, onPress, variant = 'sage' }:
    { title: string, subtitle: string, image: any, buttonText: string, onPress?: () => void, variant?: 'sage' | 'light' }) => (
    <View style={[styles.card, variant === 'light' && styles.cardLight]}>
        <View style={styles.cardImageContainer}>
            <Image source={image} style={[styles.cardImage, variant === 'light' && { opacity: 0.8 }]} contentFit="contain" />
        </View>
        <View style={styles.cardContent}>
            <H3 style={[styles.cardTitle, variant === 'sage' && { color: Colors.neutral.white }]}>{title}</H3>
            <Body style={[styles.cardSubtitle, variant === 'sage' && { color: Colors.neutral.lightGray, opacity: 0.9 }]}>{subtitle}</Body>

            {/* Price section removed as requested */}

            <TouchableOpacity style={[styles.cardButton, variant === 'sage' ? styles.cardButtonSage : styles.cardButtonLight]} onPress={onPress}>
                <Text style={[styles.cardButtonText, variant === 'sage' ? { color: Colors.primary.dark } : { color: Colors.primary.dark }]}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFBF7',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    // Header
    headerCentered: {
        alignItems: 'center',
        paddingVertical: Spacing.xl,
        paddingHorizontal: Spacing.m,
    },
    greeting: {
        color: Colors.primary.dark,
        marginBottom: Spacing.xs,
        fontSize: 16,
        // @ts-ignore - fontDesign is available in recent RN versions
        fontDesign: 'rounded',
    },
    mainQuestion: {
        color: '#4A2B29',
        textAlign: 'center',
        fontSize: 22,
        // @ts-ignore
        fontDesign: 'rounded',
    },
    // Tabs
    tabContainer: {
        marginBottom: Spacing.l,
        paddingHorizontal: Spacing.m,
    },
    tabList: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: Spacing.xs,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    tabButtonActive: {
        backgroundColor: Colors.primary.deep,
    },
    tabText: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.neutral.darkGray,
        opacity: 0.6,
        // @ts-ignore
        fontDesign: 'rounded',
    },
    tabTextActive: {
        color: Colors.neutral.white,
        fontWeight: 'bold',
        opacity: 1,
    },
    // Card Stack
    cardStack: {
        paddingHorizontal: Spacing.m,
        gap: Spacing.l,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: Colors.primary.sage,
        borderRadius: 24,
        overflow: 'hidden',
        height: 160,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    cardLight: {
        backgroundColor: Colors.neutral.white,
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    cardImageContainer: {
        width: '35%',
        // Removed backgroundColor for blending
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardContent: {
        flex: 1,
        padding: Spacing.m,
        justifyContent: 'center',
    },
    cardTitle: {
        color: Colors.neutral.white,
        marginBottom: 6,
        fontSize: 18,
        // @ts-ignore
        fontDesign: 'rounded',
    },
    cardSubtitle: {
        color: Colors.neutral.lightGray,
        marginBottom: Spacing.m,
        fontSize: 13,
        lineHeight: 18,
        // @ts-ignore
        fontDesign: 'rounded',
    },
    // Price Style Removed
    cardButton: {
        paddingVertical: 10,
        borderRadius: 12,
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
    },
    cardButtonSage: {
        backgroundColor: Colors.neutral.white,
    },
    cardButtonLight: {
        backgroundColor: Colors.primary.light,
    },
    cardButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
        // @ts-ignore
        fontDesign: 'rounded',
    },
    // Info Link
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.neutral.white,
        padding: Spacing.m,
        borderRadius: 12,
        marginBottom: Spacing.s,
    },
    infoIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.m,
    },
    infoContent: {
        flex: 1,
    },
});
