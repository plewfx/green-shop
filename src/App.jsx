import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import Layout from "./components/layout/Layout"
import Home from './pages/Home'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App