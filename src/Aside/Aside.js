
import telegram from './icon/telegram.png';
import person from './icon/person.png';
import settings from './icon/settings.png';
import key from './icon/key.png';
function Aside() {
    return (
        <div className="aside">
         <div>
            <img className="telegram" src={telegram} alt="logo"/>
            <hr />
            <h3>Great concept</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>consectetur adipisicing elit.</p>
        </div>
    <div>
        <img className="person" src={person} alt="logo"/>
        <hr />
        <h3>User Friendly</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipisicing elit.</p>
    </div>
    <div>
        <img className="settings" src={settings} alt="logo"/>
        <hr />
        <h3>Easy to Costmize</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipisicing elit.</p>
    </div>
    <div>
        <img className="key" src={key} alt="logo"/>
        <hr />
        <h3>Secure Page</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>consectetur adipisicing elit.</p>
    </div>
        </div>
    )
}

export default Aside;