import React from 'react';
import './App.css';

export const App = () => {
	const randomSelector = (array) => {
		return array[Math.floor(Math.random() * array.length)];
	};
	//folkslag
	const race = [
		'Human',
		'Insektoid',
		'Mutant',
		'Rese',
		'Robot',
		'Smallpeople',
		'Underground',
		'Ancient',
	];

	const randomRace = () => randomSelector(race);

	//can't use class because it's a reserved keyword
	const klass = ['Warrior', 'Magician', 'Thief'];

	const randomKlass = () => randomSelector(klass);
	//ödesmakt
	const faith = ['Order', 'Chaos', 'Balance'];

	const randomFaith = () => randomSelector(faith);
	//styrka
	const strenght = Math.floor(Math.random() * 18) + 3;
	//smidighet
	const dexterity = Math.floor(Math.random() * 18) + 3;
	//fysik
	const physics = Math.floor(Math.random() * 18) + 3;
	//perception
	const perception = Math.floor(Math.random() * 18) + 3;
	//viljestyrka
	const willpower = Math.floor(Math.random() * 18) + 3;
	//utstrålning
	const appearance = Math.floor(Math.random() * 18) + 3;
	//startkapital
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
	const randomStartFunds = () => randomSelector(startFunds);

	return (
		<div>
			<h1>Swedish roleplay-character randomizer</h1>
			<p>Race: {randomRace()}</p>
			<p>Class: {randomKlass()}</p>
			<p>Faith: {randomFaith()}</p>
			<p>Strenght: {strenght}</p>
			<p>Dexterity: {dexterity}</p>
			<p>Physics: {physics}</p>
			<p>Perception: {perception}</p>
			<p>Willpower: {willpower}</p>
			<p>Appearance: {appearance}</p>
			<p>Starting funds: {randomStartFunds()}</p>
		</div>
	);
};
