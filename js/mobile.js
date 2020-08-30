var AjustPortMobile = function() {
    var MaxLargura = 600; /* Largura maxima da tela do dispositivo*/
    var LarguraDispositivo = screen.width;

    if (LarguraDispositivo <= MaxLargura) {
        var n = 1; 
        var totalPort = 10 /* Total de portifolio*/
        while (n < totalPort) {
            var idPort = `#port-${n}`
            var element = !!document.querySelector(idPort)
            if(element){
                remAtributo(idPort, 'style')
            } 
            n++
        }    
    }
 }();