type ButtonType = "Primary" | "Secondary"

export default function Button (props : {text: String, type? : ButtonType})
{
    return (
        <div className={`py-2.5 px-4 ${props.type === "Secondary" ? "bg-white" : "bg-red-800"} rounded-full justify-center items-center gap-2 inline-flex`}>
            <div className={`text-very-light-grey ${props.type === "Secondary" ? "text-red-900" : "text-white"} text-xs font-normal`}>{props.text}</div>
        </div>    
    )
}