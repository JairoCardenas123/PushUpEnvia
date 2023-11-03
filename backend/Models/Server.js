

const express = require("express");
const cors = require("cors");
const routeContinentes = require("../routes/continentes.routes.js")
const routeCotizaciones = require("../routes/cotizaciones.routes.js")
const routeEmpleados = require('../routes/empleados.routes.js')
const routeEnvios = require('../routes/envios.routes.js')
const routeMetodoenvios = require('../routes/metodoenvios.routes.js')
const routeMunicipios = require('../routes/municipios.routes.js')
const routePaises = require('../routes/paises.routes.js')
const routeRutas = require('../routes/rutas.routes.js')
const routeSeguimientoenvios = require('../routes/seguimientoenvios.routes.js')
const routeUsuarios = require('../routes/usuarios.routes.js')

class Server{


    constructor(){
        this.app = express();
        
        this.port = process.env.PORT;
        this.continentesPath = "/api/continentes"
        this.cotizacionesPath = "/api/cotizaciones"
        this.empleadossPath = "/api/empleados"
        this.enviosPath = "/api/envios"
        this.metodoenviosPath = "/api/metodoenvios"
        this.municipiosPath = "/api/municipios"
        this.paisesPath = "/api/paises"
        this.rutasPath = "/api/rutas"
        this.seguimientoenviosPath = "/api/seguimientoenvios"
        this.usuariosPath = "/api/usuarios"


        // ! Middleware
        this.middlewares();
 

        //! Routes
        this.routes();
    }

    middlewares(){

        //! Cors
        this.app.use(cors());

        // ? PUBLIC DIRECTORY
        this.app.use(express.static('public'));

        //! EXPRESS JSON
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.continentesPath,routeContinentes)
        this.app.use(this.cotizacionesPath, routeCotizaciones)
        this.app.use(this.empleadossPath, routeEmpleados)
        this.app.use(this.enviosPath, routeEnvios)
        this.app.use(this.metodoenviosPath, routeMetodoenvios)
        this.app.use(this.municipiosPath,routeMunicipios)
        this.app.use(this.paisesPath,routePaises)
        this.app.use(this.rutasPath,routeRutas)
        this.app.use(this.seguimientoenviosPath,routeSeguimientoenvios)
        this.app.use(this.usuariosPath,routeUsuarios)

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server: ${this.port} `);
        })
    }
}


module.exports = Server;

