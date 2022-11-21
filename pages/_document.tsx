import { Html, Head, Main, NextScript } from 'next/document'
import About from '../components/About'
import Header from '../components/Header'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact'
// import '../styles/globals.css'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>Mbifenzi</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}