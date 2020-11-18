const logic = new LogicApi()
const renderer = new Renderer()
const userData = () => logic.loadData()
$("#load-Data").on("click", userData)


const displayUser = function () {
	renderer.renderData(logic.user, "user" , "user" )
	renderer.renderData({ users: logic.friends}, "users", "users")
	renderer.renderData(logic.qoutes, "qoutes" , "qoutes")
	renderer.renderData(logic.pokemonProfileForUser , "pokemon", "pokemon" )
	
}
$("#display-Data").on("click", displayUser)