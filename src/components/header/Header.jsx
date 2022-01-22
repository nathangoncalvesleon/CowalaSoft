import './header.css';
import logo from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo}/>
            <img src={logo2}/>
        </div>
     );
}
 
export default Header;