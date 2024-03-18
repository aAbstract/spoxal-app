import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const theme = {
  ...MD3LightTheme,
  roundness: 1,
  colors: {
    "primary": "rgb(0, 108, 77)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(110, 251, 195)",
    "onPrimaryContainer": "rgb(0, 33, 21)",
    "secondary": "rgb(77, 99, 88)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(207, 233, 217)",
    "onSecondaryContainer": "rgb(9, 32, 22)",
    "tertiary": "rgb(62, 99, 116)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(193, 232, 252)",
    "onTertiaryContainer": "rgb(0, 31, 41)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(251, 253, 249)",
    "onBackground": "rgb(25, 28, 26)",
    "surface": "rgb(251, 253, 249)",
    "onSurface": "rgb(25, 28, 26)",
    "surfaceVariant": "rgb(219, 229, 221)",
    "onSurfaceVariant": "rgb(64, 73, 68)",
    "outline": "rgb(112, 121, 115)",
    "outlineVariant": "rgb(191, 201, 194)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(46, 49, 47)",
    "inverseOnSurface": "rgb(239, 241, 237)",
    "inversePrimary": "rgb(77, 222, 168)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(238, 246, 240)",
      "level2": "rgb(231, 241, 235)",
      "level3": "rgb(223, 237, 230)",
      "level4": "rgb(221, 236, 228)",
      "level5": "rgb(216, 233, 225)"
    },
    "surfaceDisabled": "rgba(25, 28, 26, 0.12)",
    "onSurfaceDisabled": "rgba(25, 28, 26, 0.38)",
    "backdrop": "rgba(42, 50, 46, 0.4)"
  }
};

function RootLayoutNav() {
  return (
    <PaperProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
