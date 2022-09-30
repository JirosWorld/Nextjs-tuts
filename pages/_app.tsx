import { AppProps } from 'next/app';
import "../styles/global.css"
// this file was named _app.js before turning into Typescript

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
/* // This App component is the top-level component which will be common across all the different pages. 
You can use this App component to keep state when navigating between pages, for example.
*/
/* In Next.js, you can add global CSS files by importing them from pages/_app.js. 
You can NOT import global CSS anywhere else. */
