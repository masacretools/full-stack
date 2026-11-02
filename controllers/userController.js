const UserService= require ("../services/userService")
const userService=new UserService()

exports.getAllUser=(req, res)=>{
    const users= userService.getAll()
    res.status(200).send(users)
}

exports.getUser=async(req, res)=>{
    const user= await userService.filterById(req.params.id)
    if(!user){
        return res.status(400).json ({"message":"usuario no encontrado"})
    }
    res.status(200).json(user)
}

exports.createUser = async (req, res) => {
    try {
    let data= req.body
    await userService.create(data)
    res.status(201).send("Usuario registrado")  
    } catch (error) {
        res.status(500).json({ "Error": error.message })
    }
}


//Actualizar y eliminar usuario
exports.updateUser=async(req, res)=>{ 
    let data= req.body
    const id=req.params.id
    const user= await userService.filterById(id)
    if(!user){
        return res.status(400).json({"message":"usuario no encontrado"})
    }
    await userService.updateUser(id, data)
    res.status(200).send("Se modificio el registro correctamente")
}
exports.deleateUser=async(req, res)=>{ 
    const id= req.params.id
    const user = await userService.filterById(id)
    if(!user){
        return res.status(400).json({"message":"Usuario no encontrado"})
    }
    await userService.delete(id)
    res.status(200).send("Se elimino el usuario registrado")
}