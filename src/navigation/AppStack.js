import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Image } from 'react-native'
import CustomNav from '../Component/CustomNav'
import Help from '../Component/Help'
import Lists from '../Component/PageLists'
import Profile from '../Component/Profile'
import Profit from '../Component/Profit'

const Drawer = createDrawerNavigator()

const ListsIcon = ({ focused, color, size }) => (
	<Image
		source={require('../../assets/icons/menu/lists.png')}
		size={size}
		color={color}
	/>
)
const ReceptIcon = ({ focused, color, size }) => (
	<Image
		source={require('../../assets/icons/menu/recept.png')}
		size={size}
		color={color}
	/>
)
const AiIcon = ({ focused, color, size }) => (
	<Image
		source={require('../../assets/icons/menu/ai.png')}
		size={size}
		color={color}
	/>
)
const SettingIcon = ({ focused, color, size }) => (
	<Image
		source={require('../../assets/icons/menu/settings.png')}
		size={size}
		color={color}
	/>
)

const ExitIcon = ({ focused, color, size }) => (
	<Image
		source={require('../../assets/icons/menu/exit.png')}
		size={size}
		color={color}
	/>
)

const MainDrawer = () => {
	return (
		<Drawer.Navigator
			screenOptions={{ headerShown: false }}
			drawerContent={props => <CustomNav {...props} />}
		>
			<Drawer.Screen
				name='Списки'
				component={Lists}
				options={{ drawerIcon: ListsIcon }}
			/>
			<Drawer.Screen
				name='Рецепты'
				component={Profile}
				options={{ drawerIcon: ReceptIcon }}
			/>
			<Drawer.Screen
				name='Спросить ИИ'
				component={Help}
				options={{ drawerIcon: AiIcon }}
			/>
			<Drawer.Screen
				name='Настройки'
				component={Profit}
				options={{ drawerIcon: SettingIcon }}
			/>
			<Drawer.Screen
				name='Выйти'
				component={Profit}
				options={{
					drawerIcon: ExitIcon,
					drawerItemStyle: {
						marginTop: 74,
					},
				}}
			/>
		</Drawer.Navigator>
	)
}

export default MainDrawer
