import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import Layout from "./components/layout/Layout"
import ScrollToTop from "./ScrollToTop";
import Home from './pages/Home'
import Shop from './pages/Shop'
import PlantDetail from "./pages/PlantDetail";
import ProductDesc from "./components/Plants/ProductDesc";
import Reviews from "./components/Plants/Reviews";

const theme = createTheme({
  palette: {
    primary: {
      main: '#46A358', // Your custom primary color
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/green-shop/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<PlantDetail />}>
              <Route index element={<ProductDesc />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App