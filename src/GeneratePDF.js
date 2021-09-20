import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '000000',
	},
	section: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		margin: 10,
		padding: 10,
	},
	textBox: {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		width: '30vw',
		padding: '10px',
		margin: '10px',
		border: '1px',
		borderColor: '000000',
	},
	textRow: {
		fontSize: 15,
	},
});

export const GeneratePDF = ({ characters }) => {
	console.log(characters);

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					{characters.map((item, index) => (
						<Text key={index} style={styles.textBox}>
							<View style={styles.textRow}>
								Name: {item.name}
								{'\n'}{' '}
							</View>
							<View style={styles.textRow}>
								Race: {item.race}
								{'\n'}{' '}
							</View>
							<Text style={styles.textRow}>
								Class: {item.klass}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Faith: {item.faith}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Strength: {item.strength}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Dexterity: {item.dexterity}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Physics: {item.physics}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Perception: {item.perception}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Willpower: {item.willpower}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Appearance: {item.appearance}
								{'\n'}{' '}
							</Text>
							<Text style={styles.textRow}>
								Start funds: {item.startFunds}{' '}
							</Text>
						</Text>
					))}
				</View>
			</Page>
		</Document>
	);
};
