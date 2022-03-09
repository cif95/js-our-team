const team = [
	{
		name: 'Wayne Barnett',
		role: 'Founder & CEO',
		image: 'wayne-barnett-founder-ceo.jpg',
	},
	{
		name: 'Angela Caroll',
		role: 'Chief Editor',
		image: 'angela-caroll-chief-editor.jpg',
	},
	{
		name: 'Walter Gordon',
		role: 'Office Manager',
		image: 'walter-gordon-office-manager.jpg',
	},
	{
		name: 'Angela Lopez',
		role: 'Social Media Manager',
		image: 'angela-lopez-social-media-manager.jpg',
	},
	{
		name: 'Scott Estrada',
		role: 'Developer',
		image: 'scott-estrada-developer.jpg',
	},
	{
		name: 'Barbara Ramos',
		role: 'Graphic Designer',
		image: 'barbara-ramos-graphic-designer.jpg',
	},
];

// Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede


for ( let i = 0 ; i < team.length; i ++){
	document.querySelector('div.my-card-group').innerHTML += `
	<div class="team-member card col-6 col-md-3 col-md-2">
		<img class="card-img-top" src="img/${team[i].image}" alt="member photo"></i>
		<div class="card-body">
			<h5 class="card-title fw-bold">${team[i].name}</h5>
			<p class="card-text">${team[i].role}</p>
		</div>
	</div>`;
	console.log(team[i].name, team[i].role, team[i].image);
}

// Aggiungi in fondo all'esercizio un form con nome, ruolo e un link all'immagine 
// che con un bottone consentano di aggiungere un team member per volta in più a quelli già presenti.


document.getElementById('send-btn').addEventListener('click', function(){
	const newMember = {
		name: document.getElementById('member-name').value,
		role: document.getElementById('member-role').value,
		image: document.getElementById('member-image').value,
	}
	team.push(newMember);
	console.log(team);
	document.querySelector('div.my-card-group').innerHTML += `
	<div class="team-member card col-6 col-md-3 col-md-2">
		<img class="card-img-top" src="img/${newMember.image}" alt="member photo"></i>
		<div class="card-body">
			<h5 class="card-title fw-bold">${newMember.name}</h5>
			<p class="card-text">${newMember.role}</p>
		</div>
	</div>`;
})