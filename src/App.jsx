import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Gallery from "./components/Gallery"
import ModalAdd from "./components/Modals/ModalAdd"
import { useEffect, useState } from "react"

export default function App(){
  const [images, setImages] = useState(JSON.parse(localStorage.getItem('imgs')) || [])

  useEffect(() => {
    localStorage.setItem('imgs', JSON.stringify(images))
  },[images])
  const [showAdd, setShowAdd] = useState(false)

  function filter(type, mode){
    let sortedImages = [...images]

    if(type === "favorite"){
        const factor = mode ? -1 : 1
        sortedImages.sort((a, b) => factor*((b.favorite ? 1 : 0) - (a.favorite ? 1 : 0)))
    } else if(type === "date"){
        const factor = mode ? -1 : 1
        sortedImages.sort((a, b) => factor*(new Date(a.date) - new Date(b.date)))
    } else if(type === "title"){
        const factor = mode ? -1 : 1
        sortedImages.sort((a, b) => factor*(a.title.localeCompare(b.title)))
    }

    setImages(sortedImages)
  }

  function onTrashClick(id){
    const newImagesList = images.filter((imgs) => imgs.id != id)

    setImages(newImagesList)
  }

  return(
    <div className="bg-[#F2F0EF] w-full min-h-screen font-mono flex relative">
      <Sidebar showAdd={setShowAdd} filter={filter}/>
      {showAdd && <ModalAdd showAdd={setShowAdd} images={images} setImages={setImages}/>}

      <div className="flex flex-col w-full pl-32">
        <Header/>
        <Gallery images={images} onTrashClick={onTrashClick}/>
      </div>
    </div>
  )
}