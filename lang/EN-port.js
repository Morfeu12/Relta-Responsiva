//Variaveis, cada texto tem uma variavel
var home = "Home",
	depoimentos = "Depoimentos",
	blog = "Blog",
	agenda = "Schedule your meeting",
	services = "Services",
	portfolio = "Portfolio",
	about = "Our Story",
	contact = "Contact", 
	banner_1 = "",
	banner_msg_1 = "",
	banner_2 = "",
	banner_msg_2 = "",
	banner_3 = "",
	banner_msg_3 = "",
	desc_CasaVerde = "Construction of a single-family residence to better accommodate a foreign family. We carry out the projects for the execution, from the foundation until the conclusion of the work.",
	desc_CasaGP = "Development and execution of a residential reform for a family, with a back office serving as an office, with a walkway on the upper floor between home and house.",
	desc_ccsp = "Development and execution of interior renovation of the São Paulo Country Club Nursery area.",
	desc_esv = "Interior renovation due to the change of company headquarters. We had the need to meet all the requested spaces with a designer vision and entertainment in the workspaces. An especially laid back company!",
	desc_guarulhos = "Development and execution of interior refurbishment of an apartment for family accommodation in Guarulhos, with an air-conditioned cellar with access to the kitchen and a view to the living room.",
	desc_vilamadalena = "Development and execution of interior renovation of an apartment for the accommodation of a Jewish lady with her two sons. Mixing the Rustic and the Modern, the Slab was kept in its original color and texture, just finishing it.",
	desc_dipetra = "xxxxx",
	txtlocation = "Location:",
	txtproject = "Project Date:",
	txtarea = "Area:",
	txtarquiterura = "Architecture:",
	txtinteriores = "Interiors:",
	txtteam = "Team:",
	port_titulo = "PORTIFOLIO",
	port_desc = "know all our projects",
	port_op_1_desc = desc_CasaGP.substr(0,115) + " ..." + " <a href='casa-gp.html' class='saiba-mais-port'>Learn more</a>",
	port_op_2_desc = desc_CasaVerde.substr(0,99) + "..." + " <a href='casa-verde.html' class='saiba-mais-port'>Learn more</a>",
	port_op_3_desc = desc_ccsp.substr(0,140) + "..." + "<a href='ccsp.html' class='saiba-mais-port'>Learn more</a>",
	port_op_4_desc = desc_guarulhos.substr(0,93) + "..." + " <a href='guarulhos.html' class='saiba-mais-port'>Learn more</a>",
	port_op_5_desc = desc_vilamadalena.substr(0,85) + "..." + " <a href='vila-madalena.html' class='saiba-mais-port'>Learn more</a>",
	port_op_6_desc = desc_esv.substr(0,92) + "..." + "<a href='esv.html' class='saiba-mais-port'>Learn more</a>";
	
//Funcao verifica e altera o valor do elemnto HTML
function validaID (id, valor){
	var element = !!document.querySelector(id)
	if(element){
		document.querySelector(id).innerHTML = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaMetaDados (id, nome, desc){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.dataset.title = nome
		el.dataset.description = desc
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

function validaBtn (id, valor){
	var element = !!document.querySelector(id)
	var el = document.querySelector(id)
	if(element){
		el.value = valor
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

//Atribui o valor da variavel no ID (html)
this.validaID('#menu-1', home);
this.validaID('#menu-2', about);
this.validaID('#menu-3', services);
this.validaID('#menu-4', portfolio);
this.validaID('#menu-5', depoimentos);
this.validaID('#menu-6', contact);
this.validaID('#menu-7', agenda);
this.validaID('#banner-1', banner_1);
this.validaID('#banner-2', banner_2);
this.validaID('#banner-3', banner_3);
this.validaID('#banner-msg-1', banner_msg_1);
this.validaID('#banner-msg-2', banner_msg_2);
this.validaID('#banner-msg-3', banner_msg_3);
this.validaID('#desc_CasaVerde', desc_CasaVerde);
this.validaID('#desc_esv', desc_esv);
this.validaID('#desc_dipetra', desc_dipetra);
/*this.validaID('#desc_CasaGP', desc_CasaGP);
this.validaID('#desc_ccsp', desc_ccsp);
this.validaID('#desc_guarulhos', desc_guarulhos);
this.validaID('#desc_vilamadalena', desc_vilamadalena);*/
this.validaID('#txtlocation', txtlocation);
this.validaID('#txtproject', txtproject);
this.validaID('#txtarea', txtarea);
this.validaID('#txtarquiterura', txtarquiterura);
this.validaID('#txtinteriores', txtinteriores);
this.validaID('#txtteam', txtteam);
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);
this.validaID('#port_op_1_desc', port_op_1_desc);
this.validaID('#port_op_2_desc', port_op_2_desc);
this.validaID('#port_op_3_desc', port_op_3_desc);
this.validaID('#port_op_4_desc', port_op_4_desc);
this.validaID('#port_op_5_desc', port_op_5_desc);
this.validaID('#port_op_6_desc', port_op_6_desc);
this.validaID('#port_op_8_desc', port_op_8_desc);