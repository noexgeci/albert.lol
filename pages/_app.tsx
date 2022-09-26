import 'styles/globals.scss'
import Head from 'next/head'

import { AppProps } from 'next/app'

export default function({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
               <title>pter</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}