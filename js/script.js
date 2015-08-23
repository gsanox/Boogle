var seleccionadas = [];
        var parada = Math.floor(Math.random() * 26) ;
        var wc = 0;
        
        function eliminar(id){
            $("#"+id).hide("slow");
            var indice = seleccionadas.indexOf(parseInt(id));
            if (indice > -1) {
                seleccionadas.splice(indice, 1);
            }
            wc = $("#wc").html();
            if(wc>0){
                wc--;
                $("#wc").html(seleccionadas.length);
            }
        }

        var rouletter = $('div.roulette');
        
       var option = {
	speed : 20,
	duration : 1,
	stopImageNumber : parada,
	startCallback : function() {
        console.log('start');
	},
	slowDownCallback : function() {
		console.log('slowDown');
	},
	stopCallback : function($stopElm) {
		console.log('stop');
        var indice = $stopElm[0].src.indexOf("img/");
        var sauce = $stopElm[0].src.slice(indice,$stopElm[0].src.length);

        $("#selection").append('<img src="'+sauce+'" height="100" style="padding:5px;border:1px solid #CCC;display:none;" id="'+seleccionadas[seleccionadas.length-1]+'" onClick="eliminar(this.id);" />');
        $("#"+seleccionadas[seleccionadas.length-1]).show("slow");
        parada = Math.floor(Math.random() * 26) ;
        while(jQuery.inArray(parada,seleccionadas)>-1){
            parada = Math.floor(Math.random() * 26) ;
        }
        rouletter.roulette('option', stopImageNumber=parada);
        $("#wc").html(seleccionadas.length);
                               
	}
}
       rouletter.roulette(option);
        
        $('.start').click(function(){
		    rouletter.roulette('start');	
	   });