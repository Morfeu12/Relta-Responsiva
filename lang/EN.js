//Variaveis, cada texto tem uma variavel
var home = "Home",
	depoimentos = "Depoimentos",
	services = "Services",
	portfolio = "Projects",
	about = "About",
	contact = "Budget", 
	agenda = "Schedule your meeting",
	banner_1 = "Live the new",
	banner_msg_1 = "Relta Arquitetura",
	banner_2 = "Live the new",
	banner_msg_2 = "Relta Arquitetura",
	banner_3 = "Live the new",
	banner_msg_3 = "Relta Arquitetura",
	servico_titulo = "SERVICES PROVIDED",
	servico_msg = "Our professionals are qualified and have experience in the area of ​​renovation and construction, as well as in the area of ​​Legislation, Certifications, Reports and Management, working with the competent organs of municipal to Federal scale, with the commitment to satisfy the needs of our clients and partners. fast and effective way, always thinking of continuous improvement through preventive and corrective actions adjusting all services and processes within the most rigorous standards of inspection and quality.",
	servico_1_titulo = "TOWN HALL",
	servico_1_desc = "Regularization </br> Breakdown of Lots </br> Approval and Execution of Works and Reforms </br> Operating Licenses </br> Adaptation to Safety Standards </br> Security Verification Auto (AVS) </ br > Equipment Permit </br> Amnesty",
	servico_2_titulo = "PROJECTS",
	servico_2_desc = "New Construction </br> Interior Decoration </br> Three-dimensional Projects </br> Small Renovation Communication </br> Report for Condominium (ABNT 16.280) </br> Habitability / Viability Report </br> Landscaping </br> As Built",
	servico_3_titulo = "FIRE DEPARTMENT",
	servico_3_desc = "Equipment Installation </br> Stair Pressurization </br> Adaptation to Standards </br> Initial AVCB </br> Renovation </br> Pre Inspection </br> FAT",
	port_titulo = "PORTIFOLIO",
	port_desc = "know all our projects",
	parceiro_titulo = "Partners",
	parceiro_desc = "Provide sustainable environmental solutions seeking balance and awareness.",
	sobre_subtitulo = "Our Story",
	sobre_msg = "Founded by Raquel Toni, a Relta Arquitetura, architectural and interior projects in order to provide any environment with an ideal transformation for each family. We aim at contact with nature, through biophilia and feng shui for each space.",
	missao_titulo = "MISSION",
	missao_desc = "Provide sustainable environmental solutions seeking balance and awareness.",
	visao_titulo = "VISION",
	visao_desc = "To be a company in reference in architecture, seeking to operate in the market in a transparent and ethical manner.",
	valores_titulo = "VALUES",
	valores_desc = "Commitment, Practicality and Sustainability",
	equipe_titulo = "WHO WE ARE",
	equipe_desc = "The firm is committed to a close relationship with nature, in favor of the concept of true sustainability. All projects carried out work with ecological materials, improving the brightness, transparency and fluidity of the spaces. Through this proposal, we established a concept of Brazilian architecture, with the reappropriation of modernism linked to the environment.",
	equipe_p1_nome = "",
	equipe_p1_cargo = "",
	equipe_p1_cv = "",
	equipe_p2_nome = "Raquel Toni",
	equipe_p2_cargo = "Founder and architect",
	equipe_p2_cv = "Architect since 2016, she worked as an intern at Hospital Israelita Albert Einstein in 2012 carrying out hospital interior projects, later in 2013 she joined as an intern at Atthelie da Arquitetura, performing process analysis and projects with City Halls. In 2015, he provided services to the company PW Design - Arquitetura e Interiores, carrying out the development of residential and commercial projects, as well as the definitions of materials and presentation of projects in loco. In addition to having started his profession, with two years of participation in the City of São Paulo, for the tax registration and zoning of the city."
	
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
this.validaID('#servico_titulo', servico_titulo);
this.validaID('#servico_msg', servico_msg);
this.validaID('#servico_1_titulo', servico_1_titulo);
this.validaID('#servico_1_desc', servico_1_desc);
this.validaID('#servico_2_titulo', servico_2_titulo);
this.validaID('#servico_2_desc', servico_2_desc);
this.validaID('#servico_3_titulo', servico_3_titulo);
this.validaID('#servico_3_desc', servico_3_desc);
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);
this.validaID('#parceiro_titulo', parceiro_titulo);
this.validaID('#parceiro_desc', parceiro_desc);
this.validaID('#sobre_subtitulo', sobre_subtitulo);
this.validaID('#sobre_msg', sobre_msg);
this.validaID('#missao_titulo', missao_titulo);
this.validaID('#missao_desc', missao_desc);
this.validaID('#visao_titulo', visao_titulo);
this.validaID('#visao_desc', visao_desc);
this.validaID('#valores_titulo', valores_titulo);
this.validaID('#valores_desc', valores_desc);
this.validaID('#equipe_titulo', equipe_titulo);
this.validaID('#equipe_desc', equipe_desc);
this.validaID('#equipe_p1_nome', equipe_p1_nome);
this.validaID('#equipe_p1_cargo', equipe_p1_cargo);
this.validaID('#equipe_p1_cv', equipe_p1_cv);
this.validaID('#equipe_p2_nome', equipe_p2_nome);
this.validaID('#equipe_p2_cargo', equipe_p2_cargo);
this.validaID('#equipe_p2_cv', equipe_p2_cv);
this.validaID('#port_titulo', port_titulo);
this.validaID('#port_desc', port_desc);