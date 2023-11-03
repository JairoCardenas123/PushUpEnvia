const Rutas = require('../Models/Rutas.js')

const postRutas =  async (req,res) =>{
    const {nombre,cantidad,proveedor,calidad} = req.body
    try {
        const Rutas = new Rutas({nombre,cantidad,proveedor,calidad})
        await Rutas.save()
        res.json({
            "message":"Si Sirvio El Post",
            Rutas
        })
    } catch (error) {
        res.status(404).json({message:"El error esta en postRutas"})
    }
}

const putRutas = async (req, res)=>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const Rutas = await Rutas.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        Rutas : Rutas
    });
}

const deleteRutas = async (req,res)=>{
    const {id} = req.params
    try {
        const remove = await Rutas.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro Rutas"})
        }

        res.json({message:"Rutas borrado correctamente"})
    } catch (error) {
        res.status(404).json({error:"Error en deleteRutas"})    }
}


const obtenerRutas = async(req,res) =>{
    try {
        const result = await Rutas.find().limit(100)
        res.json(result)
    } catch (error) {
        res.status(404).json('No Obtuvo, El problema es del controlador')
    }
}

module.exports = {obtenerRutas, deleteRutas, postRutas,putRutas}