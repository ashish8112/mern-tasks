const express = require("express");
const router = express.Router();
const Post = require("../models/Post")
const User = require("../models/User")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/",async(req,res)=>{
    try{
        const posts = await Post.find({});
        res.status(200).json(posts);
    }
    catch(err)
    {
         return res.status(500).json({message:err.message})
    }
})

router.post("/",authMiddleware,async(req,res)=>{
    try{
        const {title,content,summary,coverImage,tags,status} = req.body;
        const post = new Post({title,content,summary,coverImage,tags,author:req.user.id,status})
        await post.save();
        return res.status(201).json({message:"Post "+status})
    }
    catch(err)
    {
        return res.status(500).json({message:err.message})
    }   
})

module.exports=router;