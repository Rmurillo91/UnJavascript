
//esto es una libreria similar a jQuery en cuanto a sintaxis
;(function(global, $){


var saludador = function(nombre, apellido, idioma) {
    return new saludador.init(nombre, apellido,idioma);
    //esto se hace para no tener que usar siempre el "new" para crear el objeto (sintaxis jQuery)
}

saludador.prototype = {
    nombrecompleto: function() {
        return this.nombre + " " + this.apellido;
    },

    validador: function() {
        if (lenguajes.indexOf(this.idioma) === -1) {
            //esto mira si nuestro idioma esta en lenguajes
            throw "Lenguaje no admitido"
        }
    },

    saludito: function() {
        return saludoin[this.idioma] + " " + this.nombre;
    },

    saludotop: function() {
        return saludofor[this.idioma] + " " + this.apellido;
    },

    saludar: function(formal) {
        var mensaje;
        if (formal) {
            mensaje = this.saludito();
        } else {
            mensaje = this.saludotop();
        }

        if (console) {
            console.log(mensaje);
        }
        return this;

    },

    log: function() {
        if (console) {
            console.log(logeo[this.idioma] + " " + this.nombrecompleto());
        }

        return this;
    },

    cambiarLengua: function(lang) {
        this.idioma = lang;
        this.validador();

        return this;

    },
    HTMLsal: function(selector, formal) {
        if (!$) {
            throw "Error en jQuery";
            //esto es por si no tenemos el selector jquery
        } 
        if (!selector) {
            throw "Falta selector jQuery";
        }

        var mensaje;
        if (formal) {
            mensaje = this.saludito();
        } else {
            mensaje = this.saludotop();
        }


        $(selector).html(mensaje);

        return this;

        
        
        
        
        
    }

    //return this para que sean encadenables.

    
};
//creamos el prototipo para vincularlo al del init. 

var lenguajes = ["en","es"];
//podemos configurarlo asi para un mayor control


var saludoin = {
    en : "Hi",
    es : "Hola"

};

var saludofor = {
    en : "Hi, I'm ",
    es : "Hola, soy "
};

var logeo = {
    en : "You are logged",
    es : "Estas logeado"
}
//creamos objetos relacionados con los lenguajes. con var, sin definir global, hacemos que queden protegidas


saludador.init = function(nombre, apellido, idioma) {
    var self = this;
    //esto lo hacemos para asegurar que apunta a la funcion
    self.nombre = nombre || "Introduce Nombre";
    self.apellido = apellido || "Introduce Apellido";
    self.idioma = idioma || "en";
    self.validador();
    

}

saludador.init.prototype = saludador.prototype;
//con esto vinculamos ambos prototipos

global.saludador = global.S$ = saludador;
//con esto establecemos que podamos usarlo con "saludador" o con "S$"












































}(window,jQuery));