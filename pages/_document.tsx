import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>MBifenzi</title>
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

                </Head>
                <body>
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/Flip.min.js" integrity="sha512-byzUdBXaTSrgrlWDvkyU6TBkRSUUiI3EzVIdZtrYEUx1hFnsel9QmEs3QWpKo+8N+G9eOjSxQzFWF1PLq0+WVw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}