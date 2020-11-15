//Variaveis, cada texto tem uma variavel
var home = "Início",
	depoimentos = "Depoimentos", 
	services = "Serviços",
	portfolio = "Projetos Arquitetônicos",
	about = "Sobre",
	contact = "Orçamento",
	agenda = "Agende um bate papo",
	banner_1 = "Viva o novo",
	banner_msg_1 = "Relta Arquitetura",
	banner_2 = "Viva o novo",
	banner_msg_2 = "Relta Arquitetura",
	banner_3 = "Viva o novo",
	banner_msg_3 = "Relta Arquitetura",
	servico_titulo = "SERVIÇOS PRESTADOS",
	servico_msg = "Nossos profissionais são capacitados e possuem experiência tanto na área de reformas e construção quanto na área de Legislação, Certificações, Laudos e Gerenciamentos, trabalhando junto aos orgãos competentes de escala municipal à Federal, com o compromisso de satisfazer as necessidades dos nossos clientes e parceiros de maneira rápida e eficaz, sempre pensando na melhoria contínua através de ações preventivas e corretivas adequando todos os serviços e processos dentro dos padrões mais rigorosos de fiscalização e qualidade.",
	servico_1_titulo = "PREFEITURA",
	servico_1_desc = "Regularização</br>Desdobro de Lotes</br>Aprovação e Execução de Obras e Reformas</br>Licenças de Funcionamento</br>Adaptação às Normas de Segurança</br>Auto de Verificação de Segurança (AVS)</br>Alvará de Equipamentos</br>Anistia",
	servico_2_titulo = "PROJETOS",
	servico_2_desc = "Decoração e Interiores<br>Paisagísmo<br>Projetos Tridimensionais<br>Comunicação de Pequena Reforma<br>Laudo Para Condomínio (ABNT 16.280)<br>Laudo de Habitabilidade<br>Laudo de Viabilidade<br>As Built.",
	servico_3_titulo = "CORPO DE BOMBEIROS",
	servico_3_desc = "Instalação de Equipamentos</br>Pressurização de Escadas</br>Adaptação às Normas</br>AVCB inicial</br>Renovação</br>Pré Vistoria</br>FAT",
	port_titulo = "PORTIFÓLIO",
	port_desc = "Conheça todos os nossos projetos.",
	parceiro_titulo = "Parceiros",
	parceiro_desc = "",
	sobre_subtitulo = "Nossa História",
	sobre_msg = "Fundada pela Raquel Toni, a Relta Arquitetura desenvolve projetos de arquitetura e interiores no intuito de proporcionar a qualquer ambiente a transformação ideal para cada família. Visamos o contato com a natureza, através da biofilia e feng shui para cada espaço.",
	missao_titulo = "MISSÃO",
	missao_desc = "Proporcionar soluções ambientais sustentáveis buscando equilíbrio e consciência.",
	visao_titulo = "VISÃO",
	visao_desc = "Ser uma empresa em referência na arquitetura buscando atuar no mercado de forma transparente e ética.",
	valores_titulo = "VALORES",
	valores_desc = "Comprometimento, Praticidade e Sustentabilidade",
	equipe_titulo = "QUEM SOMOS",
	equipe_desc = "O escritório aposta em uma relação próxima com a natureza, em favor do conceito de verdadeira sustentabilidade. Todos os projetos realizados trabalham com materiais ecológicos, melhorando a luminosidade, a transparência e a fluidez dos espaços. Por meio dessa proposta, estabelecemos um  conceito de arquitetura brasileira, com a reapropriação do modernismo ligado ao meio ambiente.",
	equipe_p1_nome = "",
	equipe_p1_cargo = "",
	equipe_p1_cv = "",
	equipe_p2_nome = "Raquel Toni",
	equipe_p2_cargo = "Fundadora e Arquiteta",
	equipe_p2_cv = "Arquiteta desde 2016, atuou como estagiária no Hospital Israelita Albert Einstein no ano de 2012 realizando projetos de interiores hospitalares, posteriormente no ano de 2013 ingressou como estagiária na empresa Atthelie da Arquitetura, executando análise de processos e projetos junto a Prefeituras. Prestou serviços em 2015 à empresa PW Design - Arquitetura e Interiores, realizando o desenvolvimento de projetos residenciais e comerciais, bem como as definições de materiais e apresentação de projetos in loco. Além de ter iniciado sua profissão, com dois anos de participação na Prefeitura de São Paulo, para o cadastro fiscal e zoneamento da cidade."
		
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

