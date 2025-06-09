import { SquareX, Trash } from "lucide-react"
import { useState } from "react"


const MAGNIFY_SIZE = 200
const MAGNIFY_HALF = MAGNIFY_SIZE/2

export default function ModalImg({imgs, setSelectImg, onTrashClick}){
    
    const [magnify, setMagnify] = useState({'backgroundImage' : `url(${imgs.ImgUrl})`})
    function handleMouseMove(e){
        const {offsetX, offsetY, target} = e.nativeEvent
        const {offsetWidth, offsetHeight} = target

        const xPercentage = (offsetX / offsetWidth) *100
        const yPercentage = (offsetY / offsetHeight) *100

        setMagnify((prev) => ({...prev, 'backgroundPosition' : `${xPercentage}% ${yPercentage}%`, 'top' : `${offsetY - MAGNIFY_HALF}px`, 'left' : `${offsetX - MAGNIFY_HALF}px`, 'display': 'block'}))
    }
    function handleMouseLeave(e){
        setMagnify((prev) => ({...prev, 'display' : 'none'}))
    }



    return (
        <>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-black/66 w-screen h-full backdrop-blur-xs z-1"></div>
            <div className="fixed top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center gap-5 z-2">
                <button className="text-white hover:cursor-pointer" onClick={() => setSelectImg()}><SquareX/></button>
                <figure className="aspect-auto relative w-5/6">
                    <img src={imgs.ImgUrl} alt={imgs.title} draggable={false} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="cursor-none"/>

                    <div className={`absolute bg-no-repeat border-2 border-white w-[${MAGNIFY_SIZE}px] h-[${MAGNIFY_SIZE}px] bg-size-[800%] bg-center pointer-events-none rounded-full hidden`} style={magnify}></div>

                    <div className="text-white flex justify-between">
                        <figcaption>{imgs.title}</figcaption> 
                        <button onClick={() => {
                            onTrashClick(imgs.id)
                            setSelectImg()
                            }}><Trash/></button> 
                        <p>{imgs.date}</p>
                    </div>
                </figure>
            </div>
        </>
    )
}