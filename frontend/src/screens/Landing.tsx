 

import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button";

export const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-gray-100">
            <div className="relative h-screen">
                <img
                    src={"/ChessBoard.webp"}
                    alt="Chess Board"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold">
                        Play chess online on the <br /> #2 site!
                    </h1>
                    <div className="mt-4">
                        <Button onClick={() => {
                            navigate("/game")
                        }}>
                            Play Online 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// landing page 2

// export const Landing = () => {

//     const navigate = useNavigate();

//     return <div className="flex justify-center">
//         <div className="pt-8 max-w-screen-lg">
//             <div className="grid grid-cols-1 gap-4
//                 md:grid-cols-2" >

//                 <div className="flex justify-center " >
//                     <img src={"/ChessBoard.webp"} className="max-w-96" />
//                 </div>

//                 <div className="pt-16" >
//                     <div className="flex justify-center">
//                         <h1 className="text-4xl font-bold text-white display-flex"> Play chess online on the  #2 site!</h1>
//                     </div>

                    
//                     <div className="mt-4 flex justify-center">
//                         <Button onClick = {() => {
//                             navigate("/game")
//                         }}>
//                             Play Online
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// }
















