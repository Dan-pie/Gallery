import { Bolt, Filter } from "lucide-react"
import { ArrowBigDown ,ArrowBigUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function Sidebar(props){
    
    const [filterV, setFilterV] = useState('')
    const [filterM, setFilterM] = useState(false)

    useEffect(() => props.filter(filterV, filterM),[filterV, filterM])


    return (
        <aside className="w-32 max-w-[200px] top-0 left-0 bottom-0  flex flex-col justify-between border-r fixed">
            <div className="w-full h-32 border-b flex justify-center items-center">
                <button><Bolt size={48} strokeWidth={1}/></button>
            </div>
            <div className="flex flex-col gap-3 p-2 items-start">
                <button onClick={() => props.showAdd(true)} className="hover:cursor-pointer">add a image</button>
                <select name="" id="" onChange={(e) => setFilterV(e.target.value)}>
                    <option value="">filter</option>
                    <option value="favorite">favorite</option>
                    <option value="date">date</option>
                    <option value="title">title</option>
                </select>
                <button onClick={() => setFilterM(!filterM)}>{filterM ? <ArrowBigUp/> : <ArrowBigDown/>}</button>
                
                
            </div>
            <div className="p-2">
                <p>developed <br /> by <em>dan</em></p>
            </div>
        </aside>
    )
}