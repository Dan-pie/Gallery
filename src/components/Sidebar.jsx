import { Bolt } from "lucide-react"
import { ArrowBigDown ,ArrowBigUp } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation, Trans } from "react-i18next"


export default function Sidebar(props){
    
    const [filterV, setFilterV] = useState('')
    const [filterM, setFilterM] = useState(false)
    const {t} = useTranslation()
    useEffect(() => props.filter(filterV, filterM),[filterV, filterM])


    return (
        <aside className="w-32 max-w-[200px] top-0 left-0 bottom-0  flex flex-col justify-between border-r fixed">
            <div className="w-full h-32 border-b flex justify-center items-center">
                <button><Bolt size={48} strokeWidth={1}/></button>
            </div>
            <div className="flex flex-col gap-3 p-2 items-start">
                <button onClick={() => props.showAdd(true)} className="hover:cursor-pointer">{t("sidebar.addImage")}</button>
                <select name="" id="" onChange={(e) => setFilterV(e.target.value)}>
                    <option value="">{t("sidebar.filter")}</option>
                    <option value="favorite">{t("sidebar.favorite")}</option>
                    <option value="date">{t("sidebar.date")}</option>
                    <option value="title">{t("sidebar.title")}</option>
                </select>
                <button onClick={() => setFilterM(!filterM)}>{filterM ? <ArrowBigUp/> : <ArrowBigDown/>}</button>
                
                
            </div>
            <div className="p-2">
                <p>
                    <Trans i18nKey={'sidebar.developed'}>
                        developed <br />  <em>dan</em>
                    </Trans>
                </p>
            </div>
        </aside>
    )
}