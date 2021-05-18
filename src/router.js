const { Router } = require("express");

const routes = Router();

//////////////////////////////////
// Controllers 
/////////////////////////////////

const userController = require("./controllers/userController");

//////////////////////////////////
// User Routes
/////////////////////////////////

routes.post("/login", userController.Login);
routes.post("/register", userController.Register);

// Rotas autenticadas

routes.get("/getimages", userController.GetImages);
routes.patch("/update", userController.Update);
routes.post("/upload", userController.Upload);
routes.delete("/delete", userController.Delete);


module.exports = routes;