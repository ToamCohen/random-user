class Renderer {
	

	userRender(user) {
		$("#container").empty()
		const source = $("#user-template").html()
		const template = Handlebars.compile(source)
		const userHTML = template(user)
		$("#container").append(userHTML)
	}

	usersRender(friends) {
		
		const source = $("#users-template").html()
		const template = Handlebars.compile(source)
		const usersHTML = template({ users: friends })
		$("#container").append(usersHTML)
	}

	qoutesRender(qoutes){
	
		const source = $("#qoutes-template").html()
		const template = Handlebars.compile(source)
		const qoutesHTML = template({kanye:qoutes})
		$("#container").append(qoutesHTML)
	
	}

	pokemonRender(pokemon){
	
		const source = $("#pokemon-template").html()
		const template = Handlebars.compile(source)
		const pokemonHTML = template(pokemon)
		$("#container").append(pokemonHTML) 

	}

}