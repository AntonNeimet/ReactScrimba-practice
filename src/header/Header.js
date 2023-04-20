import "./Header.css"
import Logo from "./Logo"
import HeaderText from "./HeaderText"

function Header() {
    return(
        <div className="header">
            <Logo/>
            <HeaderText/>
        </div>
    )
}

export default Header