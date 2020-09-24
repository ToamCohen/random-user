const logic = new LogicApi()
const renderer = new Renderer()
const userData = () => logic.loadData()
$("#load-Data").on("click", userData)


const displayUser = function () {
	renderer.userRender(logic.user)
	renderer.usersRender(logic.friends)
	renderer.qoutesRender(logic.qoutes)
	renderer.pokemonRender(logic.pokemonProfileForUser)
	
}
$("#display-Data").on("click", displayUser)