import {Link} from 'react-router-dom'

function Header(props){
    return(
        <div>
            <nav className="header">
                <div className="header__container justify-content-start align-center">
                    <Link className="header__brand nav-link active fw-bold" to="/">React Shop</Link>
                    <div>
                        <ul className="d-flex flex-row navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ps-3">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ps-3">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item ps-3">
                                <Link className="nav-link active" aria-current="page" to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export {Header};