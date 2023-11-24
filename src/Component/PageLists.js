import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
	Button,
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Appbar } from 'react-native-paper'
import ListsServices from '../services/ListsServices'

const LeftContent = props => <Avatar.Icon {...props} icon='folder' />

export default function Lists() {
	const navigation = useNavigation()
	const [data, setData] = useState([])
	const [lists, setLists] = useState([])
	const [text, onChangeText] = useState('')

	// Пример данных для графика (замените этими данными своими данными)
	const sampleData = [
		{ day: '2023-11-20', count: 1 },
		{ day: '2023-11-21', count: 2 },
		{ day: '2023-11-22', count: 4 },
		// Добавьте другие точки данных
	]

	const loadData = async () => {
		const data = await (await ListsServices.getAll()).data
		setLists(data)
	}

	useEffect(() => {
		// Загрузка данных с сервера или хранилища
		loadData()
		setData(sampleData)
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('../../assets/background.jpg')}
				style={styles.backgroundImage}
			>
				<Appbar.Header>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<Image
							source={require('../../assets/icons/menu/menu.png')}
							style={styles.menuIcon}
						/>
					</TouchableOpacity>
					<Appbar.Content />
				</Appbar.Header>
				<View style={styles.container}>
					<Text style={styles.main_title}>Запас ресурсов</Text>
					{data.length > 0 && (
						<LineChart
							data={{
								labels: data.map(item => item.day),
								datasets: [
									{
										data: data.map(item => item.count),
									},
								],
							}}
							width={350}
							height={200}
							chartConfig={{
								backgroundColor: 'transparent', // Transparent background
								backgroundGradientFrom: '#eff3ff',
								backgroundGradientTo: '#efefef',
								decimalPlaces: 0,
								color: (opacity = 1) => `rgba(26, 232, 206, ${opacity})`, // Line color
								labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
								style: {
									borderRadius: 16,
								},
								propsForDots: {
									r: '0', // No dots
								},
							}}
							bezier
							style={styles.chart}
							withVerticalLines={false} // Hide vertical grid lines
							withHorizontalLines={false} // Hide horizontal grid lines
							yAxisLabel={''} // Hide the y-axis label
							yAxisSuffix={''} // Hide the y-axis suffix
							hidePointsAtIndex={[]} // Hide points on the line
						/>
					)}
					<View style={styles.lists}>
						<View style={styles.addItem}>
							<Text>Название</Text>
							<TextInput
								style={styles.input}
								onChangeText={onChangeText}
								value={text}
							/>
							<Button
								title='Установить'
								color='#841584'
								accessibilityLabel='Learn more about this purple button'
							/>
						</View>
						{lists.length <= 0 && (
							<View style={styles.listsEmpty}>
								<Text style={styles.listsEmptyTitle}>
									Начните планировку ресурсов с нами!
								</Text>
								<Text style={styles.listsEmptyDesc}>
									Чтобы создать новый список нажмите на плюс в нижней части
									экрана
								</Text>
							</View>
						)}
					</View>
					<TouchableOpacity
						style={styles.addList}
						onPress={() => navigation.openDrawer()}
					>
						<Image source={require('../../assets/icons/menu/add.png')} />
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	addItem: {
		justifyContent: 'flex-start',
	},
	listsEmpty: {
		alignSelf: 'center',
		marginTop: '40%',
	},
	listsEmptyTitle: {
		fontWeight: '400',
		fontSize: 16,
		textAlign: 'center',
	},

	listsEmptyDesc: {
		fontWeight: '300',
		fontSize: 14,
		textAlign: 'center',
	},
	main_title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		marginTop: 18,
		marginBottom: 17,
	},
	lists: {
		alignSelf: 'end',
		width: '100%',
		height: '100%',
		backgroundColor: '#fff',
		borderRadius: 16,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},

	container: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	chart: {
		marginVertical: 8,
		borderRadius: 16,
		alignSelf: 'center',
	},
	menuIcon: {
		width: 30,
		height: 30,
		marginLeft: 10, // Adjust as needed
	},
	addList: {
		zIndex: 89,
		position: 'absolute',
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		borderColor: '#1A87DCc',
		borderWidth: 2,
		bottom: 50,
		right: 0,
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'stretch',
	},
})
