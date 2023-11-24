import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const screenHeight = Dimensions.get('window').height
const CustomNav = props => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.userContainer}>
				<Image
					source={{
						uri: 'https://cdn.leroymerlin.ru/lmru/image/upload/v1507765943/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/kIbBPi7_5EqT_fFEAOFjYw/18829028.jpg',
					}}
					style={styles.userImage}
				/>
				<Text style={styles.userName}>Максим</Text>
			</View>

			{/* Список пунктов меню */}
			<DrawerContentScrollView
				{...props}
				contentContainerStyle={styles.menuContainer}
			>
				<DrawerItemList
					{...props}
					itemStyle={styles.menuItem}
					labelStyle={styles.menuItemText}
				/>
			</DrawerContentScrollView>

			{/* Черта и надписи внизу */}
			<View style={styles.bottomContainer}>
				<View style={styles.line} />
				<Text style={styles.premiumText}>Купить премиум версию</Text>
				<Text style={styles.supportText}>Техническая поддержка</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	userContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	userImage: {
		width: 40,
		height: 40,
		borderRadius: 20,
		marginRight: 12,
	},
	userName: {
		fontSize: 16,
	},
	menuContainer: {
		backgroundColor: 'transparent',
	},
	menuItem: {
		// Ваши стили для пунктов меню
		borderRadius: 8,
		marginVertical: 4,
	},
	menuItemText: {
		// Ваши стили для текста пунктов меню
	},
	bottomContainer: {
		padding: 16,
		backgroundColor: 'transparent',
	},
	line: {
		height: 1,
		backgroundColor: '#ccc',
		marginVertical: 8,
	},
	premiumText: {
		textAlign: 'center',
		marginTop: 27,
		color: '#0B4673',
	},
	supportText: {
		textAlign: 'center',
		marginTop: 32,
		marginBottom: 136,
		color: '#0B4673',
	},
})

export default CustomNav
