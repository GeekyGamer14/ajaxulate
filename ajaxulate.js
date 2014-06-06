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
			if(o.getAttribute('data-ajaxulate').indexOf(i.url) !== -1 && i.absolute === false
			|| o.getAttribute('data-ajaxulate') === i.url && i.absolute){
				o.addEventListener('click', function(e){
					e.preventDefault();
					// todo add things
				});
			}	
		});
	});
}
