import { Asterisk } from "lucide-react"
import ModalImg from "./Modals/ModalImg"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Gallery(props){
    const [selectImg, setSelectImg] = useState(null)
    const { t } = useTranslation()

    function closeModal(){
        setSelectImg(null)
    }
    return( 
        <main className="w-full overflow-auto flex flex-wrap justify-center p-5 gap-8">
            {selectImg && <ModalImg setSelectImg={closeModal} imgs={selectImg} onTrashClick={props.onTrashClick}/>}
            {props.images.legnth != 0 ? props.images.map((imgs)=>{
                return(
                    <article key={imgs.id} onClick={() => setSelectImg(imgs)} className=" w-full sm:w-1/2 md:w-1/5 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition-all z-0">
                        <figure className="aspect-square overflow-hidden rounded-sm shadow-md">
                            <img src={imgs.ImgUrl} alt={imgs.title} className="size-full object-cover object-center "/>
                        </figure>
                        <p className="text-sm">{new Date(imgs.date).toLocaleDateString(t('configs.dateConfig'))}</p>
                        <h2 className="text-xl flex items-center">{imgs.favorite && <Asterisk/>}{imgs.title}</h2>

                    </article>
                )
            }) : <p>nada aqui</p>}
        </main>
    )
}