function menuNavegacao() {
    var menuNav = `
    <!-- Fixed navbar -->
    <div class="navbar navbar-smak navbar-fixed-top " id="navbar" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><i
                        class="fa fa-bars"></i></button>
                <a class="navbar-brand animate" onclick="recarregar('../index.php')"><img src="../img/logo.png" alt="logo1"></a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-center animate">
                    <li class="nav-li"><a id="menu-1" onclick="recarregar('../index.php')"></a></li>
                    <li class="nav-li"><a id="menu-4" href="#"></a><div uk-dropdown="offset: 0">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li><a onclick="recarregar('../portfolio/casa-verde.html')">Casa Verde</a></li>
                                <li><a onclick="recarregar('../portfolio/esv.html')">ESV</a></li>
                                <li><a onclick="recarregar('../portfolio/di-petra.html')">Di Petra</a></li> 
                                <li><a onclick="recarregar('../portfolio/casa-do-norte-emporio-maria-amelia.html')">Casa do Norte e Empório Maria Amélia</a></li> 
                                <li><a onclick="recarregar('../portfolio/stella-bella-vita.html')">Stella Vita Bella Vita</a></li> 
                            </ul>
                        </div></li>
                    <!--<li class="nav-li"><a id="menu-5" onclick="recarregar('../pages/depoimentos.html')"></a></li>
                    <li class="nav-li"><a id="menu-6" onclick="recarregar('../contato.html')"></a></li>-->
                    <div class="agende-reuniao-botao">

						<a id="menu-7" class="uk-button uk-button-primary" href="#modal-center" uk-toggle></a>

						<div id="modal-center" class="uk-flex-top" uk-modal>
							<div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
						
								<button class="uk-modal-close-default" type="button" uk-close></button>
								<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScq8eeNeeAugkpHCmJk2Q3oHk0k7Gx0luzO-HHADP5jVw6njA/viewform?embedded=true" width="550" height="610" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
							</div>
						</div>
					</div>
					
					<div>
						<span id="idioma"><a onclick="lang_BR()" data-toggle="collapse" data-target=".navbar-collapse">BR</a>&nbsp;|&nbsp;
							<a onclick="lang_EN()" data-toggle="collapse" data-target=".navbar-collapse">EN</a></span>
					</div>
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </div>
    `,
        element = !!document.querySelector('#menunav'),
        el = document.querySelector('#menunav')
    if (element) {
        el.innerHTML = menuNav
    } else {
        console.log("O ID #menunav nao existe!")
    }
}

function banner() {
    var banner = `
    <div uk-slideshow="animation: fade;autoplay:true; autoplay-interval:7000;pause-on-hover:false">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 32.2">
                <li>
                    <img src="../img/Banner/banner1.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-1" class="uk-margin-remove"></h3>
                        <p id="banner-msg-1" class="uk-margin-remove"></p>
                    </div>
                </li>
                <li>
                    <img src="../img/Banner/banner2.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-2" class="uk-margin-remove"></h3>
                        <p id="banner-msg-2" class="uk-margin-remove"></p>
                    </div>
                </li>
                <li>
                    <img src="../img/Banner/banner3.png" alt="" uk-cover>
                    <div class="uk-overlay uk-overlay-default uk-position-bottom-right uk-position-small">
                        <h3 id="banner-3" class="uk-margin-remove"></h3>
                        <p id="banner-msg-3" class="uk-margin-remove"></p>
                    </div>
                </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous
                uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next
                uk-slideshow-item="next"></a>
        </div>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
            `,
        element = !!document.querySelector('#banner'),
        el = document.querySelector('#banner')
    if (element) {
        el.innerHTML = banner
    } else {
        console.log("O ID #banner nao existe!")
    }
}

function portfolio() {
    var port = `
    <!-- Inicio partifolio -->
    <section id="more-port" style="margin-bottom: 30px;">
        <div class="uk-container uk-container-large">
            <div class="heading">
                <h1 id="port_titulo">Outros Projetos</h1>
                <div class="divider"><span></span></div>
                <p id="port_desc">Conheça todos os nossos projetos.</p>
            </div>

            <!--Uikit portifolio-->
            <div uk-slider>
                <div class="uk-position-relative">
                    <!-- lista Clientes -->
                    <div class="uk-slider-container">
                        <!-- uk-child-width-1-1@s ajuste resolucao maior que 640x; uk-child-width-1-6@l ajuste resolucao maior que 1200 -->
                        <ul id="projetos" class="uk-slider-items uk-child-width-1-1@s uk-child-width-1-6@l"> 
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="casa-verde.html"><img src="../img/portfolio/Casa Verde/Capa.JPG"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_2" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="../portfolio/casa-verde.html">Casa Verde</a>
                                        <p id="port_op_2_desc" class="txt-portilofolio-desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="esv.html"><img src="../img/portfolio/ESV/Capa.png"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_6" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="../portfolio/esv.html">ESV</a>
                                        <p id="port_op_6_desc" class="txt-portilofolio-desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="../portfolio/di-petra.html"><img src="../img/portfolio/Di Petra/Capa.png"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_8" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="../portfolio/di-petra.html">Di Petra</a>
                                        <p id="port_op_8_desc" class="txt-portilofolio-desc"></p>
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="casa-do-norte-emporio-maria-amelia.html"><img src="../img/portfolio/Emporio Maria Amelia/Capa.png"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_1" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="../portfolio/casa-do-norte-emporio-maria-amelia.html">Casa do Norte e Empório Maria Amélia</a>
                                        <!--<p id="port_op_1_desc" class="txt-portilofolio-desc"></p>-->
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="uk-transition-toggle" tabindex="0">
                                <div class="uk-card uk-card-default">
                                    <div class="uk-card-media-top">
                                        <a href="stella-bella-vita.html"><img src="../img/portfolio/Stella Bella Vita/Capa.jpeg"
                                                alt=""></a>
                                    </div>
                                    <div class="uk-card-body">
                                        <a id="port_op_3" class="uk-link-heading uk-button-text oc-heading-small"
                                            href="../portfolio/stella-bella-vita.html">Stella Vita Bella Vita</a>
                                        <!--<p id="port_op_3_desc" class="txt-portilofolio-desc"></p>-->
                                        <div class="uk-visible@l uk-margin-small-bottom">
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="youtube"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="facebook"></a>
                                            <a href="" class="uk-icon-button uk-margin-small-right"
                                                uk-icon="instagram"></a>
                                            <a href="" class="uk-icon-button " uk-icon="twitter"></a>
                                        </div>
                                    </div>
                                </div>
                            </li>





                        </ul>
                    </div>
                    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    <div class="uk-hidden@s uk-light">
                        <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous
                            uk-slider-item="previous"></a>
                        <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next
                            uk-slider-item="next"></a>
                    </div>

                    <div class="uk-visible@s">
                        <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous
                            uk-slider-item="previous"></a>
                        <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next
                            uk-slider-item="next"></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- FIM Portifolio-->
    `
    element = !!document.querySelector('#portfolio'),
        el = document.querySelector('#portfolio')
    if (element) {
        el.innerHTML = port
    } else {
        console.log("O ID #portfolio nao existe!")
    }
}

function contato() {
    var contato = `
    <a style="z-index:9999;" href="https://api.whatsapp.com/send?phone=5511942932035" target="_blank">
		<img class="pulse" src="../img/whatsaap.png" />
	</a>
            `,
        element = !!document.querySelector('#contato'),
        el = document.querySelector('#contato')
    if (element) {
        el.innerHTML = contato
    } else {
        console.log("O ID #contato nao existe!")
    }
}

function rodape() {
    var rodape = `
    <p id="copyright">©Copyright <a href='http://www.relta.com.br/'>Relta.com</a> 2020 All rights reserved<br />
    By: <a href="https://www.linkedin.com/in/omarcosta152">Omar Costa</a></p>
    <div class="uk-flex-inline">
        <div class="uk-margin-top">
            <a href="https://www.instagram.com/reltaarquitetura" target="_black" uk-icon="icon: instagram; ratio: 1.5" class="uk-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="instagram"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg></a>
        </div>
        <div class="uk-margin uk-margin-left">
            <a target="_black" uk-icon="icon: facebook; ratio: 1.5" class="uk-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="facebook"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></a>
        </div>
        <div class="uk-margin uk-margin-left">
            <a href="https://api.whatsapp.com/send?phone=5511942932035" target="_black" uk-icon="icon: whatsapp; ratio: 1.5" class="uk-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="whatsapp"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"></path></svg></a>
        </div>
        <div class="uk-margin uk-margin-left">
            <a target="_black" uk-icon="icon: youtube; ratio: 1.5" class="uk-icon"><svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="youtube"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg></a>
        </div>
    </div>
    <div class="uk-flex">
        <a href="#" style="margin:auto;" uk-totop uk-scroll></a>
    </div>
            `,
        element = !!document.querySelector('footer'),
        el = document.querySelector('footer')
    if (element) {
        el.innerHTML = rodape
    } else {
        console.log("A tag <footer> nao existe!")
    }
}

/* Controlador de paginas */

function validaComponente (id){
	var element = !!document.querySelector(id)
	if(element){
		return true
	} else {
		console.log("O ID "+id+" nao existe!")
	}
}

/* Chamada de componentes */
if(validaComponente('#menunav') === true){menuNavegacao()};
if(validaComponente('#banner') === true){banner()};
if(validaComponente('#portfolio') === true){portfolio()};
if(validaComponente('#contato') === true){contato()};
if(validaComponente('footer') === true){rodape()};