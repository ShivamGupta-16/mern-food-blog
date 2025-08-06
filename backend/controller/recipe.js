const Recipes=require("../models/recipe")
const multer = require("multer");
// const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.fieldname
    cb(null, filename)
  }
})

const upload = multer({ storage: storage })

const getRecipes= async (req, res)=> {
    const recipes = await Recipes.find()
    return res.json(recipes)
}
const getRecipe= async(req, res)=> {
    const recipe= await Recipes.findById(req.params.id)
    res.json(recipe)
}

const editRecipe=async (req, res)=> {
    const {title,ingredients,coverImage,time,instructions} = req.body;
    let recipe = await Recipes.findById(req.params.id)
    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json({title,ingredients,instructions,time})
        }
    }
    catch(err){
        return res.status(400).json({message:"errorf"})
    }
}

const addRecipe= async(req, res)=> {
    const {title,ingredients,coverImage,time,instructions} = req.body;

    if(!title || !ingredients || !instructions){
        res.json({message:"Required fields can't be empty"})
    }
    
    const newRecipe = await Recipes.create({
        title,ingredients,time,instructions,coverImage: req.file.filename,
        createdBy: req.user.id
    })

    return res.json(newRecipe)
}

const deleteRecipe= async(req, res)=> {
    await res.json({message:"Helo"})
}

module.exports = {getRecipes, getRecipe, addRecipe,editRecipe,deleteRecipe,upload}