const MetodoEnvio = require('../Models/MetodoEnvios.js');



const postMetodoEnvio = async (req, res)=>{

    const {nombre, apellido, fechaNacimiento,direccion,celular,correoElectronico,empresa} = req.body;
    const MetodoEnvio = new MetodoEnvio({nombre, apellido, fechaNacimiento, direccion,celular,correoElectronico,empresa});
    // Guardar en MONGODB
    await MetodoEnvio.save();
    res.json({
        "message":"post api",
        MetodoEnvio
    })
}

const putMetodoEnvio = async (req, res)=>{
    const { id } = req.params;

    const { _id, ...resto } = req.body;
    const MetodoEnvio = await MetodoEnvio.findByIdAndUpdate( id, resto, {new:true});

    res.json({
        msg:"Usuario Actualizado",
        MetodoEnvio : MetodoEnvio
    });
}



const deleteMetodoEnvio = async(req,res)=>{
    const {id} = req.params;
    try {
        const remove = await MetodoEnvio.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro MetodoEnvio"})
        }
        res.json({message:"Borrado correctamente MetodoEnvio"})
    } catch (error) {
        res.status(404).json({error:"Fallo en deleteMetodoEnvio"})
    }
}


const obtenerMetodoEnvio = async (req,res)=>{
    try {
        const catalogo = await MetodoEnvio.find().limit(100); // Limita a 100 resultados
        res.json(catalogo)

    } catch (error) {
        console.log("error");
    }
}
module.exports = {obtenerMetodoEnvio,postMetodoEnvio,deleteMetodoEnvio,putMetodoEnvio}
