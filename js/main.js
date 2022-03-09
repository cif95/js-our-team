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


for ( let i = 0 ; i < team.length; i ++){
	document.querySelector('div.card-group').innerHTML += `
	<div class="team-member card">
		<img class="card-img-top" src="img/${team[i].image}" alt="member photo"></i>
		<div class="card-body">
			<h5 class="card-title">${team[i].name}</h5>
			<p class="card-text">${team[i].role}</p>
		</div>
	</div>`;
	console.log(team[i].name, team[i].role, team[i].image);
}

/* <div class="card">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
	<h5 class="card-title">Card title</h5>
	<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
	<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
</div>
</div> */


// BONUS 2:
// organizzare i singoli membri in card/schede
