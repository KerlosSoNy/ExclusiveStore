import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import { storeUser } from "./Helper";

const initialUser = {
    identifier : "",
    password : "" 
}


export default function LogIn(){
    const navi = useNavigate()
    const [user , setUser] = useState(initialUser)
    const handleChange = ({ target }) => {
        setUser((currentUser) => ({
            ...currentUser,
            [target.name]: target.value
        }));
    };
    const handleLogin = async (e) => {
        e.preventDefault()
        const url = 'https://fakestoreapi.com/auth/login'
        // const API_TOKEN = '4f4d16c991e0c22e2ed325909bc08b3fd0fe2856d41047bf0eda9c19bd0d5a7fa4e6f295dcb94ca640b7af66bae31b1ba74e2f09f2b3b19a721258d1915515c563ff20d81271439aa5cb9d8730aa4a094deb26ebb3d10846ab83917b1131660aa8783c102ac07bcd532ffb80e69179f89c2ec7f432d9f4cf1109090882aa2b75'; 
        axios({
            url : url ,
            method:'POST',
            data:{
                username: user.identifier,
                password: user.password
            }
        }).then(res=>{
            localStorage.setItem('Token', res.data.token );
            navi('/')
        }).then(
            data => console.log(data)
        )
        .catch(err => console.log(err))
    }

    return(
        <div>
        <div>
            <div class="h-screen w-screen bg-white flex items-center">
                <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                        <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                            <img src="https://static.vecteezy.com/system/resources/previews/022/055/521/large_2x/shopping-cart-on-mobile-phone-screen-blue-background-ai-photo.jpeg" class="" alt="Page not found"/>
                        </div>
                        
                        <div class="w-full lg:w-1/2 mx-8">
                            <div class="text-7xl text-[#88C9D5] font-dark font-extrabold mb-8">Log in to Exclusive</div>
                            
                            <form onSubmit={(e)=> e.preventDefault()} className="flex flex-col gap-10 w-[50%] mx-auto">
                            <p class="text-2xl md:text-3xl font-light leading-normal mb-1 mx-auto">
                            Enter your details below
                            </p>    
                                    <input 
                                    type="identifier"
                                    name="identifier"
                                    value={user.identifier}
                                    onChange={handleChange}
                                    placeholder="Enter your UserName"
                                    className="border-0 border-b-2 border-gray-600 p-3"
                                    />
                                    <input 
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="border-0 border-b-2  border-gray-600" 
                                    />
                                    <div className="flex flex-row gap-4">
                                    <button onClick={handleLogin} className="w-full bg-[#db4444] h-[56px] text-white">Log in</button>
                                    <button onClick={handleLogin} className="w-full bg-white h-[56px]">Forget Password ?</button>
                                    </div>
                            </form>
                        </div>
                    

                </div>
            </div>
        </div>
    </div>
    )
}