const User = require("../models/userModels");

class UserService {
    constructor() {}

    // Crear usuario
    async create(data) {
        const user = new User(data);
        return await user.save();
    }

    // Obtener todos los usuarios
    async getAll() {
        const users = await User.find();
        return users
    }

    // Buscar usuario por ID
    async filterById(id) {
        return await User.findById(id);
    }

    updateUser(id, data) {
        return User.findByIdAndUpdate({_id:id}, data)
}

async delete(id){
        return await User.deleteOne({_id:id})
    }
}

module.exports = UserService;