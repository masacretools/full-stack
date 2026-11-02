const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController");

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.post("/:id", userController.updateUser);
router.post("/:id", userController.deleateUser);


module.exports=router 
//Primero los controladores, luego las rutas → app 