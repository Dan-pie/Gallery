import { SquareX } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function TermsService(){
    const navigate = useNavigate()

    return (
        <main className="bg-[#F2F0EF] dark:bg-[#1e1f28] dark:text-white w-full min-h-screen font-mono flexflex-col relative">
            <button className="absolute top-4 left-4 hover:cursor-pointer" onClick={() => navigate(-1)}><SquareX/></button>
            <div className="p-6 flex justify-center">
                <h1 className="text-3xl">Terms and Service</h1>
            </div>
            <hr />
            <div className="p-5 flex justify-center">
                <p className="w-3/4 text-center ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi commodi aspernatur in quis veniam pariatur sapiente modi vel atque deserunt illo accusantium repellendus, incidunt cumque soluta quisquam magnam ipsa nulla!</p>
            </div>
        </main>
    )
}