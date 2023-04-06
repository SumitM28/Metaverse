import React, { useState } from 'react'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'

const App = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,

    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        {/* navbar */}
        <Navbar />
        <Stack
          direction="row"
          // spacing={2}
          justifyContent="space-between"
        // sx={{ width: '100%' }}
        >
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>

  )
}

export default App