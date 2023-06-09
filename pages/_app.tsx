import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Head from 'next/head'

import { client } from '@/lib/context/apolloProvider'
import Page from '@/components/page'
import logo from '@/assets/gg-logo.jpg'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Going Gold Choreography</title>
                <meta
                    name="description"
                    content="Info about Going Gold Choreography"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={logo.src} />
            </Head>
            <ApolloProvider client={client}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ApolloProvider>
        </>
    )
}
