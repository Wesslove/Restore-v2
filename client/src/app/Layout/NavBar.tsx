import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

// Define the Props type for the NavBar component, which includes a toggleDarkMode function and a darkMode boolean
type Props = {
  toggleDarkMode: () => void; // Function to toggle dark mode
  darkMode: boolean; // Boolean indicating whether dark mode is enabled

};

export default function NavBar({ toggleDarkMode, darkMode }: Props) {
  return (
   <AppBar position="fixed" sx={{mb: 4}}>
      <Toolbar>
        <Typography variant="h6" >
            RE-STORE
        </Typography>

         <IconButton onClick={toggleDarkMode} >
           {darkMode ? <DarkMode/> : <LightMode sx={{ color: 'yellow' }}/>}
         </IconButton>
     
      </Toolbar>
    </AppBar>
  )
}
