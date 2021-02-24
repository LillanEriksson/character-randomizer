import React, { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
	const [randomNames, setRandomNames] = useState([]);
	const [myCharacters, setMyCharacters] = useState([]);
	const [newCharacter, setNewCharacter] = useState();
	const [showNewCharacter, setShowNewCharacter] = useState(false);
	const [showCharacterSheet, setShowCharacterSheet] = useState(false);

	const randomSelector = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	};

	//dice function
	const rollDices = () => {
		return Math.floor(Math.random() * 16) + 3;
	};

	//sadly I could not find a api with only swedish names
	const API_URL =
		'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((names) => {
				const justTheNames = names.map((item) => item.first);
				setRandomNames(justTheNames);
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
		const randomName = randomSelector(randomNames);

		const randomRace = () => randomSelector(races);

		const randomKlass = () => randomSelector(klasses);

		const randomFaith = () => randomSelector(faith);

		//and a looots of conditionals here because reasons
		//make each variabel to a function with conditionals
		//ex if race === Smallpeople {strength -7} ish

		const strength = rollDices();

		const dexterity = rollDices();

		const physics = rollDices();

		const perception = rollDices();

		const willpower = rollDices();

		const appearance = rollDices();

		const randomStartFunds = () => randomSelector(startFunds);

		const character = {
			name: randomName,
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
		console.log(character);
		return setNewCharacter(character);
	};

	const saveCharacter = () =>
		setMyCharacters((myCharacters) => [...myCharacters, newCharacter]);

	return (
		<div className="randomizer-container">
			<h1>Swedish roleplay-character randomizer</h1>

			<div>
				{' '}
				<button
					onClick={() => {
						generateCharacter();
						setShowNewCharacter(true);
					}}>
					Generate new character
				</button>
			</div>
			<div>
				{showNewCharacter && (
					<div className="character">
						<p>Name: {newCharacter.name}</p>
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
						<button
							onClick={() => {
								saveCharacter();
								setShowNewCharacter(false);
								setShowCharacterSheet(true);
							}}>
							Save this character to my character-sheet?
						</button>
					</div>
				)}
			</div>

			{showCharacterSheet && (
				<div className="my-characters">
					<h1>Character sheet</h1>
					<div className="character-sheet">
						{myCharacters.map((item, index) => (
							<div key={index} className="character">
								<p>Name: {item.name}</p>
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
				</div>
			)}
		</div>
	);
};
