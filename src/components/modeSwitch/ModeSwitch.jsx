import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { useDarkMode } from "../../components/darkmode/Darkmode";


export default function ModeSwitch({showLinks}) {
    const { isDarkMode, setIsDarkMode } = useDarkMode();

    const toggleTheme = (e) => {
        setIsDarkMode(e.target.checked);
    };

    return (
        <div className={`dark_mode ${showLinks ? "none" : "visible"}`}>
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                defaultChecked={isDarkMode}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <IoSunnyOutline className="sun" />
                <GoMoon className="moon" />
            </label>
        </div>
    );
}
