import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Person } from '@mui/icons-material';

const pages = ['about', 'journey', 'skills', 'contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed"  
      sx={{ 
        mb: 1, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }} 
    >
      <Container maxWidth="xl">
        <Toolbar>
          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large" 
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ 
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component="a"
                  href={`#${page}`}
                  onClick={handleCloseNavMenu}
                  sx={{
                    '&:hover': {
                      background: 'linear-gradient(135deg, #667eea15, #764ba215)'
                    }
                  }}
                >
                  <Typography 
                    textAlign="center" 
                    sx={{ 
                      textTransform: 'capitalize',
                      color: '#1e293b',
                      fontWeight: 600
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
        
          {/* Desktop Nav Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page}`}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  textTransform: 'capitalize',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600, 
                  fontSize: '1rem',
                  mx: 1,
                  px: 2,
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* User section */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Priyanshu Singh">
              <a href="#hero" aria-label="Go to Home" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1,
                    borderRadius: '20px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.2)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  <Person sx={{ color: 'white', fontSize: 20 }} />
                  <Typography   
                    sx={{ 
                      color: 'white', 
                      textTransform: 'capitalize',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600, 
                      fontSize: '0.9rem'
                    }}
                  >
                    Priyanshu Singh
                  </Typography>
                </Box>
              </a>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

