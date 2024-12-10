import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import { ButtonTheme } from "../Button/button-theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <ButtonTheme onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> 
                <FontAwesomeIcon icon={faMoon} /> 
            </ButtonTheme>
        </div>
    );
}
