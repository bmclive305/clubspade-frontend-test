import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout/Layout';
import { useRouter } from "next/router";




function App({ Component, pageProps }: AppProps) {

  const router = useRouter();
  

  return (
      <Layout>
        <>
          <Component {...pageProps}  key={router.asPath} />
        </>
      </Layout>
  )
}


export default App;