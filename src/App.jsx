import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Gallery from "./components/Gallery"
import ModalAdd from "./components/Modals/ModalAdd"
import { useEffect, useState } from "react"

export default function App(){
  const [images, setImages] = useState(() => {
    try{
      return JSON.parse(localStorage.getItem('imgs'))
    } catch{
      return []
    }
     
  })

  useEffect(() => {
    localStorage.setItem('imgs', JSON.stringify(images))
  },[images])
  const [showAdd, setShowAdd] = useState(false)

  function filter(type, ascending = true) {
  const factor = ascending ? 1 : -1
  const sorted = [...images].sort((a, b) => {
    if (type === "favorite") {
      return factor * ((b.favorite ? 1 : 0) - (a.favorite ? 1 : 0))
    }
    if (type === "date") {
      return factor * (new Date(a.date) - new Date(b.date))
    }
    if (type === "title") {
      return factor * a.title.localeCompare(b.title)
    }
    return 0
  })
  setImages(sorted)
  }

  function onTrashClick(id){
    const newImagesList = images.filter((imgs) => imgs.id !== id)

    setImages(newImagesList)
  }

  return(
    <div className="bg-[#F2F0EF] dark:bg-[#1e1f28] dark:text-white w-full min-h-screen font-mono flex relative">
      <Sidebar showAdd={setShowAdd} filter={filter}/>
      {showAdd && <ModalAdd showAdd={setShowAdd} images={images} setImages={setImages}/>}

      <div className="flex flex-col w-full pl-32">
        <Header/>
        <Gallery images={images} onTrashClick={onTrashClick}/>
      </div>
    </div>
  )
}