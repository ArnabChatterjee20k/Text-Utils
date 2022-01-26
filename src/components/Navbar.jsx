import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className='shadow'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about_text}</a>
              </li>
            </ul>
            {/* using ternary operator to handle the search bar */}
            {props.search ?
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              : null}
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