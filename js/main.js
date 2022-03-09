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
	generateMemberCard(team[i].image, team[i].name, team[i].role)
	console.log(team[i].name, team[i].role, team[i].image);
}

const newMemberName = document.getElementById('member-name');
const newMemberRole = document.getElementById('member-role');
const newMemberImage = document.getElementById('member-image');


document.getElementById('send-btn').addEventListener('click', function(){
	const newMember = {
		name: newMemberName.value,
		role: newMemberRole.value,
		image: newMemberImage.value,
	}
	team.push(newMember);
	console.log(team);
	generateMemberCard(newMember.image, newMember.name, newMember.role);
	newMemberName.value = '';
	newMemberRole.value = '';
	newMemberImage.value = '';
})

/**
 * Function that generate a new member card as a dom element
 * @param {*} imageFileName name of the new member image file
 * @param {*} memberName name of the new member
 * @param {*} memberRole role of the new member 
 */
function generateMemberCard( imageFileName, memberName, memberRole ) {
	document.querySelector('div.my-card-group').innerHTML += `
	<div class="team-member card col-6 col-md-3 col-md-2">
		<img class="card-img-top" src="img/${imageFileName}" alt="member photo"></i>
		<div class="card-body">
			<h5 class="card-title fw-bold">${memberName}</h5>
			<p class="card-text">${memberRole}</p>
		</div>
	</div>`
}