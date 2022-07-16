import './styles.css';
import iphone from  './icon/iphone.png';
import elsta from  './icon/elsta.png';
function Header() {

    return (
        <div className="header">
            <img className="elsta" src={elsta} alt="logo" />
            <div>
            <h2>Awesome Design</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores, vero. Veniam
                tenetur laudantium facilis est quia eveniet
                suscipit nihil quis id aliquam nesciunt, iure
                ipsa provident.</p> <br/>
            <p><b>DOWNLOAD</b></p>
            </div>
            <img className="iphone" src={iphone}  alt="logo"/>
        </div>
    );
}

export default Header;