
const mongoose=require("mongoose")


const notesSchema=mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    author:{type:String},
    authorId:{type:String,required:true},
    category:{type:String,required:true}
})

const NotesModels=mongoose.model("notesall",notesSchema)

module.exports={
    NotesModels
}

