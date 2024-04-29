import { useState } from "react"
import LogoutModal from "./LogoutModal";
import { useNavigate } from "react-router-dom";
export const Appbar = () => {
    const [modalData,setModalData] = useState(null);
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token");
        navigate('/signin')
    }
    return <div className="shadow h-14 flex justify-between w-screen">
        <div className="flex flex-col justify-center h-full ml-4 p-4 bg-gradient-to-r from-purple-400 to-pink-500 font-bold text-white rounded-xl">
            PayKro 
        </div>
        <div className="flex justify-center items-center ">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
            <button onClick={()=>{
                setModalData({
                    text1:"Are you really want to logout",
                    btntxt1:"Clear",
                    btntxt2:"Logout",
                    clearfun:()=>{setModalData(null)},
                    logountfun:()=>{logout()}
                })
            }} className="p-1 px-2 h-10 border-2 border-red-300 bg-red-600 text-white rounded-xl font-semibold">
                Log Out
            </button>
        </div>
        <div  className={` ${modalData ? ('backdrop-blur-sm fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10'):(' hidden')}`}>
        {
           modalData && <LogoutModal modalData={modalData} />
        }
        </div>
        
    </div>
}