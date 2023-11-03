const Municipio = require('../Models/Municipios.js')

const postMunicipio = async (req,res) =>{
    try {
        const {nombre,cargo,salario} = req.body
        const Municipios = await Municipio({nombre,cargo,salario})
        await Municipios.save()
        res.json({
            "message":"Se posteo empresa",
            Municipios
        })

    } catch (error) {
        
    }
}

const putMunicipios = async (req, res)=>{
      const { id } = req.params;

      const { _id, ...resto } = req.body;
      const Municipios = await Municipio.findByIdAndUpdate( id, resto, {new:true});
      res.json({
          msg:"Usuario Actualizado",
          Municipios : Municipios
      });
  }

const deleteMunicipio = async(req,res)=>{
    const {id} = req.params
    try {
        const remove = await Municipio.findByIdAndRemove(id)
        if(!remove){
            return res.status(404).json({message:"No se encontro Municipio"})
        }
        res.json({message:"Se elimino correctamnte"})
    } catch (error) {
        res.status(404).json({error:"Fallo en delete Municipio"})
    }
}

const obtenerMunicipios = async (req,res) =>{
    try {
        const Municipios = await Municipio.find().limit(1000)
        res.json(Municipios)
    } catch (error) {
        res.status(404).json("No salio nada socio")
    }

}

module.exports = {obtenerMunicipios,deleteMunicipio,postMunicipio,putMunicipios}