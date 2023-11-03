const SeguimientoEnvios = require('../Models/SeguimientosEnvios.js')

const postSeguimientoEnvios = async (req, res)=>{

    const {nombre, descripcion, fechaInicio,fechaFinalizacion} = req.body;
    const usuario = new SeguimientoEnvios({nombre, descripcion, fechaInicio,fechaFinalizacion});
    await usuario.save();
    res.json({
        "message":"post api",
        usuario
    })
}

const putSeguimientoEnvios = async (req, res)=>{
    const { id } = req.params;
    const { _id,...resto } = req.body;
    const usuario = await SeguimientoEnvios.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        usuario : usuario
    });
}


const deleteSeguimientoEnvios = async(req, res)=>{
    try {
        const {id} = req.params;
        const remove = await SeguimientoEnvios.findByIdAndRemove(id);
        if(!remove){
            return res.status(404).json("Usuario no encontrado")
        } 

        res.json({message:"SeguimientoEnvios borrado correctamente"})
    } catch (error) {
        res.status(404).json({error:"El error esta en deleteSeguimientoEnvios"})
    }
}


const obtenerSeguimientoEnvios = async(req,res) =>{
    try {
        const result = await SeguimientoEnvios.find().limit(100)
        res.json(result)
    } catch (error) {
        console.log("error");
        res.status(404).json('No Capturo')
    }
}

module.exports = {obtenerSeguimientoEnvios,postSeguimientoEnvios,deleteSeguimientoEnvios,putSeguimientoEnvios}
