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


for ( let i = 0 ; i < team.length; i ++){
	generateMemberCard(team[i].name, team[i].role, 'img/'+team[i].image);
	console.log(team[i].name, team[i].role, team[i].image);
}


document.getElementById('add-btn').addEventListener('click', function(){
	const inputElements = document.querySelectorAll('input');
	memberData = [];
	for ( let i = 0; i < inputElements.length; i++){
		memberData.push(inputElements[i].value);
		inputElements[i].value = '';
	}
	generateMemberCard(memberData[0], memberData[1], memberData[2]);
})


/**
 * Function that generates a new member card as a dom element
 * @param {*} imageFileName name of the new member image file
 * @param {*} memberName name of the new member
 * @param {*} memberRole role of the new member 
 */
function generateMemberCard(memberName, memberRole, imageUrl) {
	if (imageUrl != '' && memberName != '' && memberRole!= ''){
		document.querySelector('div.my-card-group').innerHTML += `
		<div class="team-member card col-6 col-md-3 col-md-2">
			<img class="card-img-top mx-auto" src="${imageUrl}" alt="member photo"></img>
			<div class="card-body">
				<h5 class="card-title fw-bold">${memberName}</h5>
				<p class="card-text">${memberRole}</p>
			</div>
		</div>`;
	}
}