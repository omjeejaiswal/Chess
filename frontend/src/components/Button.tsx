

// export const Button = ({onClick, children}: 
//     {
//         onClick: () => void,children: React.ReactNode 
//     } ) => {
//     return <button onClick={onClick} className="px-8 py-4 text-2xl bg-green-500
//         hover:bg-green-700 text-white font-bold py-2 px-4 rounded ">
//         {children}
//     </button>
// }


export const Button = ({onClick, children}: 
    {
        onClick: () => void,children: React.ReactNode 
    } ) => {
    return <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
    </button>
}
