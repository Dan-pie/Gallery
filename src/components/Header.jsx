import { useTranslation } from "react-i18next"
import useDarkMode from '../hooks/useDarkMode';
import { useNavigate } from "react-router-dom";

export default function Header(){
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()
    const { changeTheme } = useDarkMode()
    function onLanguageChange(e){
        i18n.changeLanguage(e.target.value)
    }

    return (
        <header className="h-32 w-full border-b border-black dark:border-white flex items-center justify-between px-10">
            <nav className="w-full">
                <ul className="flex w-full justify-between">
                    <select onChange={onLanguageChange} name="change_language" id="lang_select" className="appearance-none hover:cursor-pointer">
                        <option value="">Languages</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                    </select>
                    <button className="hover:cursor-pointer" onClick={changeTheme}>{t('header.theme')}</button>
                    <button className="hover:cursor-pointer" onClick={() => navigate("/Terms&Service")}>{t('header.termsService')}</button>
                </ul>
            </nav>
        </header>
    )
}