
// // use this if want to use this 

// import React from 'react';

// export const Landing = () => {
//     return (
//         <div className="relative min-h-screen bg-gray-100">
//             <div className="relative h-screen">
//                 <img
//                     src={"/ChessBoard.webp"}
//                     alt="Chess Board"
//                     className="object-cover w-full h-full"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
//                     <h1 className="text-5xl font-bold">
//                         Play chess online on the <br /> #2 site!
//                     </h1>
//                     <div className="mt-4">
//                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                             Play Online
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };









export const Landing = () => {
    return <div>
        <div className="pt-8">
            <div className="grid grid-cols-1 gap-4
                md:grid-cols-2" >

                <div className="flex justify-center " >
                    <img src={"/ChessBoard.webp"} className="max-w-96" />
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-white display-flex"> Play chess online on the <br /> #2 site!</h1>
                    <div className="mt-4">
                        <button className="bg-blue-500
                        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                            Play Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
















