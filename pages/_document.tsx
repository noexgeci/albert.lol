import Document, { Html, Head, Main, NextScript } from 'next/document'

class AppDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='preconnect' href='https://vitals.vercel-insights.com' />
                    <meta name='title' content='pter' />
                    <meta name='theme-color' content='#000000' />
                    <meta property='og:image' content='/favicon.ico' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
        </Html>
        )
    }
}

export default AppDocument