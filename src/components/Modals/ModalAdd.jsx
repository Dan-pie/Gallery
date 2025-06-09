import { SquareX } from "lucide-react"
import { SquareArrowRight } from "lucide-react"
import { useState } from "react"
import { v4 } from "uuid"

export default function ModalAdd(props){
    const [title, setTitle] = useState('')
    const [urlImg, setUrlImg] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [imgValid, setImgValid] = useState(null)

    function today(){
        const today = new Date

        return today.toLocaleDateString('en-US')
    }

    function onSubmitClick(title, ImgUrl, favorite ,valid){
        

        if(!title.trim() || !ImgUrl.trim()){
           return alert('fields invalid!') 
        }else if(valid != true){
            return alert('url invalid try again')
        }
        
        props.setImages([...props.images, {
            id: v4(),
            title,
            ImgUrl,
            favorite,
            date: today(),
        }])

        props.showAdd(false)
    }   

    return(
        <>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-black/66 w-screen h-full backdrop-blur-xs z-1"></div>


            <aside className="bg-[#f2f2f2] w-3/5 h-1/2 h-min-300px fixed top-1/2 left-1/2 -translate-1/2 z-10 flex flex-col justify-between md:flex-row">

                <button 
                    onClick={() => props.showAdd(false)}
                    className="absolute right-2 top-2 hover:cursor-pointer"
                ><SquareX/>
                </button>
                
                <div className="flex flex-col gap-2 py-6 px-3 w-full h-2/3 relat md:w-1/2 md:h-full md:p-6 md:gap-7 ">
                    <h2 className="text-4xl">Image</h2>


                    <div className="w-full">
                        <input type="text" maxLength="20" required placeholder="title" className="border-b p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <input type="text" placeholder="url link" required className="border-b p-2  w-full" value={urlImg} onChange={(e) => setUrlImg(e.target.value)}/>
                    </div>


                    <div className="flex gap-2">
                        <input type="checkbox" name="favorite" id="favorite" checked={favorite} onChange={() => setFavorite(!favorite)} className="accent-black "/>
                        <label htmlFor="favorite">favorite</label>
                    </div>


                    <button onClick={() => onSubmitClick(title, urlImg, favorite, imgValid)}><SquareArrowRight size={50} strokeWidth={1}/></button>
                </div>


                <figure className="h-1/3 md:h-full md:w-1/2 p-10">
                    {urlImg && (
                        <>
                            <img 
                                src={urlImg} 
                                alt="validating" 
                                className="hidden"
                                onLoad={() => setImgValid(true)}
                                onError={() => setImgValid(false)}
                                />
                            {imgValid === true ? (
                                    <img
                                    src={urlImg}
                                    alt="preview"
                                    className="w-full h-full object-cover object-center"/>
                                ) 
                            : imgValid === false ? (
                                    <p className="w-full h-full flex justify-center items-center text-red-500">Url invalid</p>
                                ) 
                            : 
                                <p>validating...</p>}

                        </>  
                    )}
                </figure>
            </aside>
        </>
    )
}