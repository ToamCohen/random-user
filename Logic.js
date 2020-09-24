class LogicApi {

	constructor() {
		this.user = {},
			this.friends = [],
			this.qoutes = [],
			this.pokemonProfileForUser

	}

	loadData = () => {
		this.getQoutes()
		this.getUsers()
		this.getPokemons()

	}


	getUsers = () => {

		$.ajax({
			method: "GET",
			url: `https://randomuser.me/api/?page=${Math.floor(Math.random() * 100)}&results=7&seed=abc`,
			success: (users) => {
				const user = users.results[0]
				this.user = {
					firstName: user.name.first,
					lastName: user.name.last,
					city: user.location.city,
					state: user.location.state,
					url: user.picture.large
					//console.log(one random user in index 0 )
				}
				users.results.splice(0, 1)
				this.friends.splice(0)
				this.friends.push(...users.results.map(r => `${r.name.first} - ${r.name.last}`))
			},
			error: function (xhr, text, err) {
				console.log(text)
				alert(`sorry cant load data please try again to prass this button load-data`)
			}
		})
	}

	getQoutes = () => {
		$.ajax({
			method: "GET",
			url: `https://api.kanye.rest?format=text`,
			success: (KanyeQoutes) => {
				this.qoutes.splice(0)
				this.qoutes.push(`Kanye West: ${KanyeQoutes} `)
			},
			error: function (xhr, text, err){
				console.log(text)
			}
		})
		
	}

	getPokemons = () => {
		$.ajax({
			method: "GET",
			url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 750 + 1)}`,
			success: (pokemonsProfile) => {
				this.pokemonProfileForUser = {
					pokemonName: pokemonsProfile.name,
					pokemonPicture: pokemonsProfile.sprites.front_default
				}
			},
			error: function (xhr, text, err){
				console.log(text)
			}
		})
	}

}

