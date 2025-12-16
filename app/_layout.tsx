import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
    return (
        <SafeAreaProvider>
            <ActionSheetProvider>
                <>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="index" />
                        <Stack.Screen name="login" />
                        <Stack.Screen name="(tabs)" />
                    </Stack>
                    <StatusBar style="auto" />
                </>
            </ActionSheetProvider>
        </SafeAreaProvider>
    );
}
