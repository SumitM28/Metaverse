import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';
import Diversity1Icon from '@mui/icons-material/Diversity1';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Searchbar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'none',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  // backgroundColor: 'white',
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{
          display: { xs: 'none', sm: 'block' }
        }}>Metaverse</Typography>

        <Diversity1Icon sx={{
          display: { xs: 'block', sm: 'none' }
        }} />

        <Searchbar color={'text.primary'}>
          <InputBase placeholder='Search...' sx={{
            color:'black'
          }} />
        </Searchbar>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon color="white" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="white" />
          </Badge>

          <Avatar alt="User" src="https://avatars.githubusercontent.com/u/96680613?v=4"
            sx={{ width: 30, height: 30 }}
            onClick={(e)=>setOpen(!open)}
          />
        </Icons>

        <UserBox>
          <Avatar alt="User" src="https://avatars.githubusercontent.com/u/96680613?v=4"
            sx={{ width: 30, height: 30 }}
            onClick={(e)=>setOpen(!open)}
          />
          <Typography variant='span'>Sumit</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar