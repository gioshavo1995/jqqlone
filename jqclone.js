(function(window, document) {
	
	function _(selector){
	var jQClone = {};
	jQClone.selector = selector;
	if(typeof selector === 'object'){
		jQClone.element = jQClone.selector
	} else{
		var elementebi = document.querySelectorAll(jQClone.selector);
		if(elementebi.length == 1) {jQClone.element = document.querySelector(jQClone.selector);
		} else { jQClone.elements = elementebi; }
	}
  

   
	jQClone.html = function(){ 
		return jQClone.elements || jQClone.element;
	}

	jQClone.attr = function(name,value){ 
		if(!value) { return jQClone.element.getAttribute(name);
		} else if(jQClone.elements){
			for (var i=0; i < jQClone.elements.length; i++){
				jQClone.elements[i].setAttribute(name,value);
			}
		} else{
			jQClone.element.setAttribute(name,value);
		} return jQClone;
	}

	jQClone.first = function(){
		if(jQClone.elements) {jQClone.element = jQClone.elements[0];}
		return jQClone;
	}

	
	}
	//add css directly
	jQClone.css = function(name,value){ 
		if(jQClone.elements){
			for (var i=0; i < jQClone.elements.length; i++){
				jQClone.elements[i].style[name] = value;
			}
		} else{
			if(!value) return jQClone.element.style[name];
			jQClone.element.style[name] = value;
		} return jQClone;
	}
	
  jQClone.class = function(className){ 		
	  	if(!className) return jQClone.element.getAttribute('class');
		else if(jQClone.elements){
			for (var i=0; i < jQClone.elements.length; i++){
				jQClone.elements[i].className += ' ' + className;
			}
		} else{
			jQClone.element.className += ' ' + className;		
		} return jQClone;
	}

   jQClone.removeClass = function(className){
		if(jQClone.elements){
			for (var i=0; i < jQClone.elements.length; i++){
				var otherClasses = jQClone.elements[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
				jQClone.elements[i].setAttribute('class', otherClasses);
			}
		}
		else{
			var otherClasses = jQClone.element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
			jQClone.element.setAttribute('class', otherClasses);
		} return jQClone;
	}
   jQClone.toggleClass = function(className){ //toggle a class
		if (jQClone.element.classList) { 
			jQClone.element.classList.toggle(className);
		} else {
			var classes = jQClone.element.className.split(' ');
			var existingIndex = classes.indexOf(className);
			if (existingIndex >= 0) {
				classes.splice(existingIndex, 1);
			} else { classes.push(className);
				jQClone.element.className = classes.join(' ');
			}
		} return jQClone;
	}
  





