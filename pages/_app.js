
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className='response'>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp;
