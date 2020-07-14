// ensure all pages have Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Crud</title>
      </Head>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
