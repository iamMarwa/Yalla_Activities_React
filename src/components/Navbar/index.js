import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(props) {
    return(
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img width="64" src={logo} />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link 
                                to={props.link1.path} 
                                className="nav-link px-2 text-white">
                                    {props.link1.label}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to={props.link2.path} 
                                className="nav-link px-2 text-white">
                                    {props.link2.label}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to={props.link3.path} 
                                className="nav-link px-2 text-white">
                                    {props.link3.label}
                            </Link>
                        </li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                    </form>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                        <Link to={props.signUp.path} type="button" className="btn btn-warning">{props.signUp.label}</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar;