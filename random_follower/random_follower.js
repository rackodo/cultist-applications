`https://cotl.xl0.org/v1/follower/Fox?colour_set=&animation=Avatars%2Favatar-normal&start_time=0&format=png&only_head=true`

class Follower {
	constructor(name, species, color) {
		this.name = name,
		this.species = species,
		this.color = color
	}
}

function pickFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

let species = [
	"Axolotl",
	"Axolotl2",
	"Axolotl3",
	"Bat",
	"Bat2",
	"Bat3",
	"BatDemon",
	"BatDemon2",
	"BatDemon3",
	"Bear",
	"Bear2",
	"Bear3",
	"Bee",
	"Bee2",
	"Bee3",
	"Beetle",
	"Beetle2",
	"Beetle3",
	"Bison",
	"Bison2",
	"Bison3",
	"Boss Beholder 1",
	"Boss Beholder 2",
	"Boss Beholder 3",
	"Boss Beholder 4",
	"Boss Burrow Worm",
	"Boss Charger",
	"Boss Death Cat",
	"Boss Egg Hopper",
	"Boss Flying Burp Frog",
	"Boss Mama Maggot",
	"Boss Mama Worm",
	"Boss Millipede Poisoner",
	"Boss Mortar Hopper",
	"Boss Scorpion",
	"Boss Scuttle Turret",
	"Boss Spider Jump",
	"Boss Spiker",
	"Capybara",
	"Capybara2",
	"Capybara3",
	"Cat",
	"Cat2",
	"Cat3",
	"Cow",
	"Cow2",
	"Cow3",
	"Crab",
	"Crab2",
	"Crab3",
	"Crocodile",
	"Crocodile2",
	"Crocodile3",
	"Crow",
	"Crow2",
	"Crow3",
	"Cthulhu",
	"Cthulhu2",
	"Cthulhu3",
	"Deer",
	"Deer2",
	"Deer3",
	"DeerSkull",
	"DeerSkull2",
	"DeerSkull3",
	"Deer_ritual",
	"Deer_ritual2",
	"Deer_ritual3",
	"Dog",
	"Dog2",
	"Dog3",
	"Elephant",
	"Elephant2",
	"Elephant3",
	"Fennec Fox",
	"Fennec Fox2",
	"Fennec Fox3",
	"Fish",
	"Fish2",
	"Fish3",
	"Fox",
	"Fox2",
	"Fox3",
	"Frog",
	"Frog2",
	"Frog3",
	"Giraffe",
	"Giraffe2",
	"Giraffe3",
	"Hedgehog",
	"Hedgehog2",
	"Hedgehog3",
	"Hippo",
	"Hippo2",
	"Hippo3",
	"Hooded",
	"Horse",
	"Horse2",
	"Horse3",
	"Lion",
	"Lion2",
	"Lion3",
	"MassiveMonster",
	"MassiveMonster2",
	"Monkey",
	"Monkey2",
	"Monkey3",
	"Narwal",
	"Narwal2",
	"Narwal3",
	"Nightwolf",
	"Nightwolf2",
	"Nightwolf3",
	"Otter",
	"Otter2",
	"Otter3",
	"Pangolin",
	"Pangolin2",
	"Pangolin3",
	"Penguin",
	"Penguin2",
	"Penguin3",
	"Pig",
	"Pig2",
	"Pig3",
	"Poop",
	"Poop2",
	"Rabbit",
	"Rabbit2",
	"Rabbit3",
	"Red Panda",
	"Red Panda2",
	"Red Panda3",
	"Seahorse",
	"Seahorse2",
	"Seahorse3",
	"Shrew",
	"Shrew2",
	"Shrew3",
	"Snail",
	"Snail2",
	"Snail3",
	"Starfish",
	"Starfish2",
	"Starfish3",
	"Tapir",
	"Tapir2",
	"Tapir3",
	"Turtle",
	"Turtle2",
	"Turtle3",
	"TwitchCat",
	"TwitchCat2",
	"TwitchCat3",
	"TwitchDog",
	"TwitchDogAlt",
	"TwitchMouse",
	"TwitchMouse2",
	"TwitchMouse3",
	"TwitchPoggers",
	"Unicorn",
	"Unicorn2",
	"Unicorn3"
]

let namePartsBeginning = ["Ar","Bre","Gre","Jul","Mer","Na","No","Tre","Ty","Al","Fe","Fi","Ha","He","Hu","Ja","Joo","Ma","Pa","Pu","The","Thor","Yar","An"]
let namePartsMiddle = ["Ar","Bre","Gre","Jul","Mer","Na","No","Tre","Ty","An"]
let namePartsEnding = ["Ar","Bre","Gre","Jul","Mer","Na","No","Tre","Ty","On"]

function generateFollowerName() {
	let name = ""

	name += pickFromArray(namePartsBeginning)
	if (Math.round(Math.random())) { name += pickFromArray(namePartsMiddle).toLowerCase()}
	name += pickFromArray(namePartsEnding).toLowerCase();

	return name;
}

let latestFollower;

function generateFollower() {
	if (latestFollower) {
		pastFollowers.push(latestFollower)
	}
	document.querySelector("#follower").src = 'loading.gif'
	document.getElementById("name").innerText = "Loading..."
	latestFollower = new Follower(generateFollowerName(), pickFromArray(species), Math.round(Math.random() * 25))
	
	var href = `https://cotl.xl0.org/v1/follower/${latestFollower.species}?colour_set=${latestFollower.color}&animation=Avatars%2Fidle&format=png`

	var img = new Image();

	img.id = 'follower'
	img.src = href
	img.decode().then(() => {
		document.querySelector("#follower").replaceWith(img);
		document.getElementById("name").innerText = latestFollower.name
	})
	console.log(pastFollowers)
}

let pastFollowers = []