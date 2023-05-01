
const express=require("express")
const notes=express.Router()
const {NotesModels}=require("../model/notesmodel");

notes.post('/create',async(req,res)=>{
    console.log(req)
    try {
        let insert=new NotesModels(req.body)
        await insert.save()
        res.send({"msg":"Data has been Registered"})
    } catch (err) {
        res.send({"err":"issue is on create route","err": err.message})
    }
})




notes.get('/',async(req,res)=>{
    console.log(req.body)
    try {
        let insert=await NotesModels.find({authorid:req.body.authorId})
        res.status(200).send(insert)
    } catch (err) {
        res.status(400).send({"msg":"notes home issue"})
    }
})





notes.patch('/update/:id',async(req,res)=>{
    let {id}=req.params
    try {
        await NotesModels.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send(`The note is Update for id =${id}`)
    } catch (err) {
        res.status(400).send({"msg":err.message})
    }
})
notes.delete('/delete/:id',async(req,res)=>{
    let {id}=req.params
    try {
        await NotesModels.findByIdAndDelete({_id:id})
        res.status(200).send(`The note is Update for id =${id}`)
    } catch (err) {
        res.status(400).send({"msg":err.message})
    }
})


module.exports={notes}


