import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className='shadow'>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        
        <div className="container-fluid">
        
          <Link className="navbar-brand" to="/">{props.title}</Link>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about_text}</Link>
              </li>

            </ul>
            {/* using ternary operator to handle the search bar */}
            {props.search ?
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              : null}
            <div className="color_tab m-2">
              <input type="color" className='border-0' name="choose_color" id="choose_color"  style={{cursor:"pointer"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Custom Body Color" onChange={(e)=>{props.toggle_body_color(e.target.value)}}/>
            </div>
            <div class="form-check form-switch my-3">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle_function} />
              <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </nav>);
}

// setting proptypes
Navbar.propTypes = {
  title: PropTypes.string,
  about_text: PropTypes.string,
  search: PropTypes.bool.isRequired // we have to provide otherwise we will get error in the console
}

// if isRequired present we have to provide value either by props or by default props

// Setting default title
Navbar.defaultProps = {
  title: "Set title here",
  about_text: "About text here"
}