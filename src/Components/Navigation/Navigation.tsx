import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navbar bg-dark p-3 border-bottom border-bottom-1">
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <NavLink to="/" className="text-decoration-none">
                        <span className="navbar-brand mb-0 text-white fs-3">Portfolio</span>
                    </NavLink>
                </div>

                <div className="ms-auto">
                    <div className="navbar navbar-nav d-flex flex-row align-items-center gap-4">
                        <NavLink className="text-white text-decoration-none" to="/">Home</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/about">About me</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/projects">Projects</NavLink>
                        <NavLink className="text-white text-decoration-none" to="/contacts">Contacts</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;








