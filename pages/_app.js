import '../styles/globals.css'
import 'antd/dist/antd.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return <><Navbar/><Component {...pageProps} /><Footer/></>
}

export default MyApp
