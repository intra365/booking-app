import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider,extendTheme} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
const theme = extendTheme({
  colors: {
    brand: {
      100: "#51A54F22",
      200: "#51A54F44",
      300: "#51A54F66",
      400: "#51A54F88",
      5100: "#51A54FAA",
      600: "#51A54FCC",
      700: "#51A54FDD",
      800: "#51A54FEE",
      900: "#51A54F",
    },
    primary: mode('brand', 'pink.100') // for light and dark color mode
  },
})


function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
  <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
