var Ajaxulate;
Ajaxulate = {
	i: [],
	c: function(){return;}
};

Ajaxulate.init = function(i,c){
	c = c || function(){return;};
	i = i || [];
	Ajaxulate.i = i;
	Ajaxulate.c = c;
}

Ajaxulate.search = function(i,c){
	c = c || Ajaxulate.c;
	i = i || Ajaxulate.i;
	document.getElementsByTagName('a').forEach(function(o){
		Ajaxulate.i.forEach(function(i){
			// todo if(o.getAttribute('data-ajaxulate').indexOf(i.url))	
		});
	});
}
