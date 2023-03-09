import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faXmark} from "@fortawesome/free-solid-svg-icons";
import {actionTypes} from "../../reducer.js";
import {useStateValue} from "../../context/stateProvideer.jsx";

const Button = ({type}) => {
    const [state, dispatch] = useStateValue();

    const toggleVisibility = () => {
        dispatch({
            ...state,
            type: actionTypes.SHOW_SETTING,
            settingState: true
        })
    };

    if (type === 'setting') {
        return (
            <button className="pomodoro-app__preferences" name="setting" title="show preferences pane"
                    onClick={toggleVisibility}>
                <FontAwesomeIcon icon={faGear}/>
            </button>
        );
    }
    if (type === "close") {
        return (
            <button className="pane__close-preferences" onClick={toggleVisibility}>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
        );
    }

    if (type === 'apply') {
        return (
            <button className="pane__apply-row">
                <input type="submit" value="Apply" className="pane__apply_preferences"/>
            </button>
        )
    }
}
export default Button;