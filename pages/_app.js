import "../styles/globals.css";
import global from "../styles/global.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={global.main}>
        <h1 className={global.title}>
          <span className={global.brand}>The Spread Eagle</span>
          <span className={global.brandSpacer}> &amp; </span>
          <span className={global.brand}>Banarasi Kitchen</span>
        </h1>
        <Component {...pageProps} />

        <footer className={global.footer}>
          <div className="">
            <h3 className={global.footerHeader}>Connect with Us</h3>
            <ul className={global.footerItems}>
              <li>
                <a
                  href="https://www.instagram.com/banarasi-kitchen/"
                  target="_blank"
                  rel="noopener">
                  <i className="fab fa-instagram"></i> Like us on Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/banarasi-kitchen/"
                  target="_blank"
                  rel="noopener">
                  <i className="fab fa-facebook-f"></i> Follow us on Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/banarasi-kitchen/"
                  target="_blank"
                  rel="noopener">
                  <i className="fab fa-twitter"></i> Follow us on Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.co.uk/banarasi-kitchen/"
                  target="_blank"
                  rel="noopener">
                  <i className="fab fa-pinterest-p"></i> Pin us on Pinterest
                </a>
              </li>
              <li>
                <a
                  href="https://banarasi-kitchen.tumblr.com/"
                  target="_blank"
                  rel="noopener">
                  <i className="fab fa-tumblr"></i> Follow us on Tumblr
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  );
}

export default MyApp;
