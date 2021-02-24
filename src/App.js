import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
	const [characterName, setCharacterName] = useState([]);
	const [myCharacters, setMyCharacters] = useState([]);
	const [newCharacter, setNewCharacter] = useState();

	const randomSelector = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	};

	//dice function
	const rollDices = () => {
		return Math.floor(Math.random() * 18) + 3;
	};

	//sadly I could not find a api with only swedish names
	const API_URL =
		'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((names) => {
				const randomName = randomSelector(names);
				setCharacterName(randomName);
			});
	}, []);

	//different races in the game
	const races = [
		'Human',
		'Insectoid',
		'Mutant',
		'Rese',
		'Robot',
		'Smallpeople',
		'Underground',
		'Ancient',
	];

	//can't use class because it's a reserved keyword
	const klasses = ['Warrior', 'Magician', 'Thief'];

	//faith, translated from the swedish word 'ödesmakt'
	const faith = ['Order', 'Chaos', 'Balance'];

	const startFunds = [
		'A handful worthless pinecones and stones',
		' 3 km',
		'1 sm',
		'5 sm',
		'10 sm',
		'15 sm',
		'20 sm',
		'30 sm',
	];

	const generateCharacter = () => {
		const randomRace = () => randomSelector(races);

		const randomKlass = () => randomSelector(klasses);

		const randomFaith = () => randomSelector(faith);

		const strength = rollDices();

		const dexterity = rollDices();

		const physics = rollDices();

		const perception = rollDices();

		const willpower = rollDices();

		const appearance = rollDices();

		const randomStartFunds = () => randomSelector(startFunds);

		const character = {
			name: characterName,
			race: randomRace(),
			klass: randomKlass(),
			faith: randomFaith(),
			strength: strength,
			dexterity: dexterity,
			physics: physics,
			perception: perception,
			willpower: willpower,
			appearance: appearance,
			startFunds: randomStartFunds(),
		};

		return setNewCharacter(character);
	};

	const saveCharacter = () =>
		setMyCharacters((myCharacters) => [...myCharacters, newCharacter]);

	console.log(newCharacter);
	console.log(myCharacters);

	return (
		<div className="randomizer-container">
			<h1>Swedish roleplay-character randomizer</h1>
			<button onClick={() => generateCharacter()}>
				Generate new character
			</button>

			<div>
				<p>
					Name: {newCharacter.name.first} {newCharacter.name.last}
				</p>
				<p>Race: {newCharacter.race}</p>
				<p>Class: {newCharacter.klass}</p>
				<p>Faith: {newCharacter.faith}</p>
				<p>Strength: {newCharacter.strength}</p>
				<p>Dexterity: {newCharacter.dexterity}</p>
				<p>Physics: {newCharacter.physics}</p>
				<p>Perception: {newCharacter.perception}</p>
				<p>Willpower: {newCharacter.willpower}</p>
				<p>Appearance: {newCharacter.appearance}</p>
				<p>Start funds: {newCharacter.startFunds}</p>
			</div>
			<button onClick={() => saveCharacter()}>
				Save this character to my character-sheet?
			</button>

			{myCharacters.map((item) => (
				<div>
					<h1>Character sheet</h1>
					<p>
						Name: {item.name.first} {item.name.last}
					</p>
					<p>Race: {item.race}</p>
					<p>Class: {item.klass}</p>
					<p>Faith: {item.faith}</p>
					<p>Strength: {item.strength}</p>
					<p>Dexterity: {item.dexterity}</p>
					<p>Physics: {item.physics}</p>
					<p>Perception: {item.perception}</p>
					<p>Willpower: {item.willpower}</p>
					<p>Appearance: {item.appearance}</p>
					<p>Start funds: {item.startFunds}</p>
				</div>
			))}
		</div>
	);
};
