import {useStateValue} from "../../context/stateProvideer.jsx";
import Button from "../Button/Button.jsx";
import './Settings.sass'

const Settings = () => {
    const [{settingState, sessionValue, shortBreakValue, LongBreakValue}] = useStateValue();

    const applySettings = (event) => {
        event.preventDefault();
    }
    if (settingState) {
        return (
            <>
                <div className="preferences preferences--visible">
                    <div className="preferences__pane">
                        <Button type="close" />
                        <h2>Settings</h2>
                        <form onSubmit={applySettings}>
                            <h3>Time (Minutes)</h3>
                            <div className="time-setting__form">
                                <label htmlFor="pomodoro">Pomodoro</label>
                                <input type="number" name="pomodoro" id="pomodoro" min="5" max="90" defaultValue={sessionValue}/>
                                <label htmlFor="short-break">Short Break</label>
                                <input type="number" name="shortBreak" id="short-break" min="1" max="15" defaultValue={shortBreakValue}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Settings;