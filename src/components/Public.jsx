import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Elshafie !</span>
        </h1>
      </header>

      <main className="public__main">
        <p>
          Located in Kafr Elsheikh, Elshafie Repairs provides a trained staff
          ready to meet your tech repair needs.
        </p>

        <address className="public_addr">
          Elshafie <br />
          Kafr Elsheikh <br />
          Egypt <br />
          <a href="tel:+2010000000">(010) 00000000</a>
        </address>
        <br />
        <p>Owner: Elshafie</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;
