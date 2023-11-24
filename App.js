import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { ImageBackground, StyleSheet } from 'react-native'
import MainDrawer from './src/navigation/AppStack'
export default function App() {
	const [fontsLoaded] = useFonts({
		'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
		'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf'),
		'Ubuntu-Medium': require('./assets/fonts/Ubuntu-Medium.ttf'),
		'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
	})
	if (!fontsLoaded) {
		return undefined
	}
	return (
		
			<NavigationContainer style={{ fontFamily: 'Ubuntu-Regular' }}>
				<MainDrawer />
			</NavigationContainer>
	)
}
