import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const daftarFontKustom = {
  // Font Statis
  'Roboto-Regular': require('../assets/fonts/static/Roboto-Regular.ttf'),
  'Lato-Bold': require('../assets/fonts/static/Lato-Bold.ttf'),
  'Oswald-Regular': require('../assets/fonts/static/Oswald-Regular.ttf'),
  'Raleway-Bold': require('../assets/fonts/static/Raleway-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
  // Font Variabel
  'Inter-Variable': require('../assets/fonts/variable/Inter-VariableFont_opsz,wght.ttf'),
  'WorkSans-Variable': require('../assets/fonts/variable/WorkSans-VariableFont_wght.ttf'),
  'Manrope-Variable': require('../assets/fonts/variable/Manrope-VariableFont_wght.ttf'),
  'SourceSans3-Variable': require('../assets/fonts/variable/SourceSans3-VariableFont_wght.ttf'),
  'Outfit-Variable': require('../assets/fonts/variable/Outfit-VariableFont_wght.ttf'),
};

export default function TataLetakAplikasi() {
  const [sudahSiapFont, gagalMuatFont] = useFonts(daftarFontKustom);

  useEffect(() => {
    if (sudahSiapFont || gagalMuatFont) {
      SplashScreen.hideAsync();
    }
  }, [sudahSiapFont, gagalMuatFont]);

  if (!sudahSiapFont && !gagalMuatFont) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
