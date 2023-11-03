const Paises = require('../Models/Paises.js')

const postPaises = async (req,res)=>{
    try {
        const {nombre,direccion,telefono} = req.body;
        const empresa = new Paises({nombre,direccion,telefono})
        await empresa.save()
        res.json({
            "message":"Se posteo la empressa",
            empresa
        })
    } catch (error) {
        
    }
}


const putPaises = async (req, res)=>{
    const { id } = req.params;
    const { _id, ...resto } = req.body;

    const Paises = await Paises.findByIdAndUpdate( id, resto, {new:true});
    res.json({
        msg:"Usuario Actualizado",
        Paises : Paises
    });
}

const deletePaises = async (req,res)=>{
    const {id} = req.params
    try {
        const remove = await Paises.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message: 'Paises not found'})
        }

        res.json({message: 'Empresa Borrada Correctamente'})
    } catch (error) {
        res.status(404).json({erro:"El error esta en deletePaises "})
    }
}


const obtenerPaises = async(req,res) =>{
    try {
        const result = await Paises.find().limit(100)
        res.json(result)
    } catch (error) {
        res.status(404).json("No capto, el error esta en el controlador")
    }
}

module.exports = {obtenerPaises,deletePaises,postPaises,putPaises}