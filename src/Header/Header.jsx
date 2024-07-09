import './Header.css'
import Icon from './icon.jpeg'

function Header(){
    return(
        <header>
            <div className="logo">
                <div className="photo">
                    <img src={Icon} />
                </div>
                <div className="name">
                    <h1>Samukinha</h1>
                    <h3>Designer | Developer</h3>
                </div>
            </div>
            
            <div className="linktree">
                <div className="line_area">
                    <div className="line"></div>
                    <h1>Linktree</h1>
                </div>
            </div>
        </header>
    )
}

export default Header