//calling global and jquery object. Variables needed to run
(function(global, $){
	'use strict';
	
	//generates a new object 
	var Greetr = function(firstName, lastName, language) {
		//use function constrctuor so you odn't have to always use new keyword
		
		return new Greetr.init(firstName, lastName, language );
		
	}
	
	var supportedLangs = ['en', 'es', 'fr'];
	
	//using object so we can reference greeting with string of language 
	var greetings = {
		en: 'Hello',
		es: 'Hola',
		fr: 'Salut'
	};
	
	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos',
		fr: 'Bonjour'
		
	};
	
	var logMessages = {
		en: 'Logged in',
		es: 'Inició sesión',
		fr: 'Connecté'
	};
	
	//methods you want to use
	Greetr.prototype = {
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},
		
		validate: function() {
			//whether langauge passed is in the supported array 
			if (supportedLangs.indexOf(this.language) === -1) {
				throw "Invalid Langauge";
			}
		},
		greeting: function() {
			return greetings[this.language] + ' ' + this.firstName;
		},
		
		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();  
		},
		
		  
        greet: function(formal) {
            var msg;
            
            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        },
        
        dynamicGreeting: function(selector, formal) {
	        if(!$) {
		        throw 'You need jQuery';
	        }
	        if(!selector) {
		        throw 'You need a jQuery selector';
	        }
	        
	        var msg;
	        
	        if (formal) {
		        msg = this.formalGreeting();
	        } else {
		        msg = this.greeting();
	        }
	        
	        $(selector).html(msg);
	        
	        return this;
        }
        
		
		
	};
	
	//initaite the Greetr object
	Greetr.init = function(firstName, lastName, language) {
		var self = this;
		//setting defaults if left blank
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		self.language = language || 'en';
		
		self.validate();
		     
	}
	
	 Greetr.init.prototype = Greetr.prototype;
	 
	 
	 //Setting G$ to global object
	 global.Greetr = global.G$ = Greetr
	
	
}(window, jQuery));