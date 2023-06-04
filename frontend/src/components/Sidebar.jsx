import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function Sidebar({ isOpen, onClose, title, data }) {
    return (
        <div className={"sidebar " + (isOpen ? 'open' : '')}>
            <button className="close icon" onClick={onClose}>
                <i className="ri-close-line" />
            </button>
            <div className="govuk-grid-row" style={{ textAlign: 'center', alignItems: 'center' }}>
                <div className="govuk-grid-column-one-third">
                    <Logo />
                </div>
                <div className="govuk-grid-column-two-thirds">
                    <h1 className="govuk-heading-m">{title}</h1>
                </div>
            </div>
            <ul className="side-nav">
                {data.map((item, index) => (
                    <NavLink to={item.url} onClick={onClose} className="nav-item" key={index}>
                        {/* <NavLink >{item.name}</NavLink> */}
                        {item.name}
                    </NavLink>
                ))}
                {/* <li className="nav-item">
                    <NavLink>Home</NavLink>
                </li>
                <li className="nav-item menu">
                    <NavLink>Menu</NavLink>
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink>Submenu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink>Submenu</NavLink>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>
    );
}