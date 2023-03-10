import {useStateValue} from "../../context/stateProvideer.jsx";
import Button from "../Button/Button.jsx";
import './Settings.sass'
import {actionTypes} from "../../reducer.js";

const Settings = () => {
    const [{settingVisible, sessionValue, shortBreakValue, LongBreakValue}] = useStateValue();
    const [state, dispatch] = useStateValue();

    const applySettings = (event) => {
        event.preventDefault();

        dispatch ({
            ...state,
            type: actionTypes.CHANGE_SESSION_TIME,
            sessionValue: event.target.session.value
            })

    }
    if (settingVisible) {
        return (
            <>
                <div className="preferences preferences--visible">
                    <div className="preferences__pane">
                        <Button type="close" />
                        <h2>Settings</h2>
                        <form onSubmit={applySettings}>
                            <h3>Time (Minutes)</h3>
                            <div className="time-setting__form">
                                <div>
                                <label htmlFor="session">Pomodoro</label>
                                <input type="number" name="session" id="session" min="5" max="90" defaultValue={sessionValue}/>
                                </div>
                                <div>
                                <label htmlFor="short-break">Short Break</label>
                                <input type="number" name="shortBreak" id="short-break" min="1" max="15" defaultValue={shortBreakValue}/>
                                </div>
                                <Button type="apply" />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Settings;