import "@/styles/globals.css";

import { Navbar, Footer } from "../Components";

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
