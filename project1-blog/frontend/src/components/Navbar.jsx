import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const {user,logout} = useAuth();
    const navigate = useNavigate();
    if(user)
    {
        return(
            <nav style={{margin:"10px 30px",display:"flex",justifyContent:"space-between"}}>
            <div>
                <img onClick={()=>navigate("/")} src="https://images-workbench.99static.com/F5Mqto6RVGKC9hn49ZYk-ZrKfqE=/99designs-contests-attachments/72/72489/attachment_72489428" style={{height:"50px",width:"50px",borderRadius:"50%", cursor:"pointer"}}></img>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/")}>Home</button>
            </div>
            <div>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/create")}>Create Post</button>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>logout()}>Logout</button>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/dashboard")}>Dashboard</button>
            </div>
            </nav>
        )
    }
    return(
        <nav style={{margin:"10px 30px",display:"flex",justifyContent:"space-between"}}>
            <div>
                <img onClick={()=>navigate("/")} src="https://images-workbench.99static.com/F5Mqto6RVGKC9hn49ZYk-ZrKfqE=/99designs-contests-attachments/72/72489/attachment_72489428" style={{height:"50px",width:"50px",borderRadius:"50%", cursor:"pointer"}}></img>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/")}>Home</button>
            </div>
            <div>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/login")}>Login</button>
            <button style={{padding:"10px 20px",cursor:"pointer"}} onClick={()=>navigate("/register")}>Register</button>
            </div>
        </nav>
    )
}