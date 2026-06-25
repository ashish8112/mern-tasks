import { useState,useEffect } from "react"
import API from "../api/axios";
import {useNavigate} from "react-router-dom"
export default function Home(){
    const [posts,setPost] = useState([]);
    const [loading,setLoading]=useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        async function postFetch(){
            try{
                const post=await API.get("/posts/")
                setPost(post.data)
            }
            catch(err){
                alert(err.response?.data?.message||"Fetch post if failed")
            }
            finally{
                setLoading(false);
            }
        }
        postFetch();
    },[])
    async function handleLike(postId){
        try{
            const { data } = await API.post(`/posts/${postId}/like`);
            setPost(posts.map((p)=>(
                (p._id===postId)?{...p,likes:data.likes}:p
            )))
        }
        catch(err){
            alert(err.response?.data?.message || "Like failed");
            navigate("/login");
        }
    }
    if(loading)
        return <p>loading...</p>
    return(
        <div>
       {posts.map((post,index)=>(
        <div key={post._id}> Post {index+1} 
        <img src= {post.coverImage} height={200} width={200} />
        <p onClick={()=>navigate(`/post/${post._id}`)} style={{cursor:"pointer",color:"blue"}}>{post.title}</p>
        <p>{post.content}</p>
        <p>{post.summary}</p>
        <p>{post.author}</p>
        <button onClick={() => handleLike(post._id)}>Like ({post.likes.length})</button>
        </div>
       ))}
       </div>
    )
}