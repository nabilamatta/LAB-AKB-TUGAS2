import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Tahan splash screen hingga semua aset siap dimuat
SplashScreen.preventAutoHideAsync();

// Daftar font yang ingin digunakan dalam aplikasi
const customFontList = {
  // 5 Font Statis
  'Roboto-Regular': require('../assets/fonts/static/Roboto-Regular.ttf'),
  'Lato-Bold': require('../assets/fonts/static/Lato-Bold.ttf'),
  'Oswald-Regular': require('../assets/fonts/static/Oswald-Regular.ttf'),
  'Raleway-Bold': require('../assets/fonts/static/Raleway-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
  // 5 Font Variabel
  'Inter-Variable': require('../assets/fonts/variable/Inter-VariableFont_opsz,wght.ttf'),
  'WorkSans-Variable': require('../assets/fonts/variable/WorkSans-VariableFont_wght.ttf'),
  'Manrope-Variable': require('../assets/fonts/variable/Manrope-VariableFont_wght.ttf'),
  'SourceSans3-Variable': require('../assets/fonts/variable/SourceSans3-VariableFont_wght.ttf'),
  'Outfit-Variable': require('../assets/fonts/variable/Outfit-VariableFont_wght.ttf'),
};

export default function LayoutUtama() {
  const [fontSiap, kesalahanFont] = useFonts(customFontList);

  useEffect(() => {
    // Sembunyikan splash screen jika font sudah dimuat atau ada error
    if (fontSiap || kesalahanFont) {
      SplashScreen.hideAsync();
    }
  }, [fontSiap, kesalahanFont]);

  // Jika font belum dimuat dan tidak ada error, tampilkan splash screen saja
  if (!fontSiap && !kesalahanFont) {
    return null;
  }

  // Render navigasi utama setelah font tersedia
  return (
    <Stack>
      <Stack.Screen name="tugas4" options={{ headerShown: false }} />
    </Stack>
  );
}
