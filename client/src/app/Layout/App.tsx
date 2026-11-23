import { useEffect, useState } from "react";
import type { Product } from "./Models/product";
import Catalog from "../../Features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  // Define the state for products, which is an array of objects with name, price, and description properties

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false); // State to manage dark mode

  const palletteType = darkMode ? "dark" : "light"; // Determine the palette type based on darkMode


  // Create a theme using MUI's createTheme function, setting the palette mode and background color based on the palette type
  const darkTheme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: (palletteType === "light") ? "#eaeaea" : "#121212", // Set background color based on palette type
      },
    },
  });


  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the darkMode state
  }

  // Use useEffect to fetch products from the API when the component mounts
  useEffect(() => {
    // Fetch products from the API when the component mounts
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NavBar toggleDarkMode={toggleDarkMode}  darkMode={darkMode}/>
        
        <Box
        
          sx={{
          
            minHeight: "100vh",
            background: darkMode 
            ? 'radial-gradient(circle, #1e3aBa, #111B27)' 
            : 'radial-gradient(circle, #baecf9, #f0f9ff)', // Set background color based on darkMode
             py: 4,
          }}>
          <Container maxWidth="xl" sx={{ mt: 9 }}>
            <Catalog products={products} />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
