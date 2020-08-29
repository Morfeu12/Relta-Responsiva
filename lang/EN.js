//Variaveis, cada texto tem uma variavel
var home = "Home",
	depoimentos = "Depoimentos",
	blog = "Blog", 
	services = "Services",
	portfolio = "Portfolio",
	about = "Our Story",
	contact = "Contact", 
	banner_1 = "Live the new",
	banner_msg_1 = "Relta Arquitetura",
	banner_2 = "Live the new",
	banner_msg_2 = "Relta Arquitetura",
	banner_3 = "Live the new",
	banner_msg_3 = "Relta Arquitetura",
	servico_titulo = "SERVICES PROVIDED",
	servico_msg = "Our professionals are qualified and have experience in the area of ​​renovation and construction, as well as in the area of ​​Legislation, Certifications, Reports and Management, working with the competent organs of municipal to Federal scale, with the commitment to satisfy the needs of our clients and partners. fast and effective way, always thinking of continuous improvement through preventive and corrective actions adjusting all services and processes within the most rigorous standards of inspection and quality.",
	servico_1_titulo = "TOWN HALL",
	servico_1_desc = "Regularization<br>Approval and Execution of Works<br>Approval and Execution of Reforms<br>Operating Licenses<br>Unfolding and Reminding Lot<br>Accessibility Project<br>Adaptation to Safety Standards<br>Executive / New Construction<br>CADAN<br>Tanks and pumps<br>Equipment License<br>Auto Security Verification (AVS)<br>Amnesty",
	servico_2_titulo = "TECHNICAL PROJECTS",
	servico_2_desc = "Decoration and Interiors<br>Landscaping<br>Three-dimensional projects<br>Small Reform Communication<br>Report for Condominium (ABNT 16.280)<br>Habitability Report<br>Feasibility Report<br>As Built.",
	servico_3_titulo = "FIRE DEPARTMENT",
	servico_3_desc = "Adaptation to Fire Department Rules<br>Equipment installation<br>Pressurization of stairs<br>Initial AVCB<br>Renovation<br>Pre Survey<br>FAT.",
	port_titulo = "PORTIFOLIO",
	port_desc = "know all our projects",
	parceiro_titulo = "Partners",
	parceiro_desc = "",
	sobre_titulo = "WHO WE ARE",
	sobre_subtitulo = "Our Story",
	sobre_msg = "Founded by Felipe Alves and Raquel Freitas, Relta Arquitutra develops projects in dialogue with nature and in contact with the right intentions, targeting all the needs of its clients. Felipe and Raquel have been working together since 2014, but only in 2016 do they decide to found the corporate society.",
	missao_titulo = "MISSION",
	missao_desc = "Provide sustainable environmental solutions to its customers, partners and society, seeking balanced and conscious environmental development.",
	visao_titulo = "VISION",
	visao_desc = "Be a reference company in consulting solutions, projects and constructions seeking to operate in the market in a transparent and ethical manner.",
	valores_titulo = "VALUES",
	valores_desc = "Commitment, Focus, Objectivity, Practicality, Sustainability, Ethics, Punctuality, Transparency, Quality and Innovation.",
	equipe_titulo = "THE TEAM",
	equipe_desc = "The office bets on a close relationship with nature, in favor of the concept of true sustainability. Realized projects that work with ecological materials, making wide use of elements such as brightness, transparency, the fluidity of spaces and structural lightness. Through this proposal, establishing a concept of Brazilian architecture, with the reappropriation of modernism in dialogue with the environment.",
	equipe_p1_nome = "Felipe Alves",
	equipe_p1_cargo = "Architect and Founder",
	equipe_p1_cv = "He joined the market in 2010 as an architecture intern while doing freelance projects. In 2011 he worked with architect Roberto Montenegro where he gained experience with decorations and renovations, later in 2012 he joined the company Atthelie da Arquitetura, where he gained experience in Approvals, Cetesb, Covisa, Fire Department, Sanitary Surveillance, Monitoring. and Construction Management. In 2014, he opened the company as an individual entrepreneur, moving to the market on his own.",
	equipe_p2_nome = "Raquel Toni",
	equipe_p2_cargo = "Co-Founder and architect",
	equipe_p2_cv = "Architect since 2016, worked as a trainee at Hospital Israelita Albert Einstein in 2012 doing interior design projects, later in 2013 joined as a trainee at Atthelie da Arquitetura, performing process and project analysis with City Halls. Provided services in 2015 to the company PW Design - Arquitetura e Interiores, performing the development of residential and commercial projects, as well as the definitions of materials and presentation of projects on site. In addition to having started his profession, with two years of participation in the City of São Paulo, for tax registration and zoning of the city."
	
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
this.validaID('#menu-7', blog);
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
this.validaID('#sobre_titulo', sobre_titulo);
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