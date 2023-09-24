export default function Button (props : {text: String})
{
    return (
        <div className="py-2.5 px-4 bg-red-800 rounded-full justify-center items-center gap-2 inline-flex">
            <div className="text-very-light-grey text-xs font-normal">{props.text}</div>
        </div>    
    )
}