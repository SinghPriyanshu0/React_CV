import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Paper,
} from "@mui/material";
import React from "react";
import { LinkedIn, Phone, Email, LocationOn, Download, ArrowDownward } from "@mui/icons-material";

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{ 
        py: { xs: 6, sm: 8, md: 10, lg: 12 }, 
        mt: 0,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '100vh', sm: '100vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 1,
          animation: 'float 6s ease-in-out infinite'
        }
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {/* Greeting */}
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500,
                  mb: 2,
                  fontSize: '1.1rem',
                  fontFamily: 'Inter, sans-serif',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                👋 Hello, I'm
              </Typography>

              {/* Name */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem', xl: '5.5rem' },
                  fontWeight: 800,
                  color: 'white',
                  mb: 2,
                  textShadow: '3px 3px 6px rgba(0,0,0,0.4)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.1,
                  background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Priyanshu Singh
              </Typography>

              {/* Title */}
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.95)',
                  mb: 3,
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: 1.2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Data Analyst & Frontend Developer
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  lineHeight: 1.6,
                  fontFamily: 'Inter, sans-serif',
                  maxWidth: 600,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Transforming data into insights and building beautiful user experiences. 
                Expert in React, SQL, Power BI, and Python. Passionate about creating 
                impactful solutions that bridge technology and business needs.
              </Typography>

              {/* CTA Buttons */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: 4
              }}>
                <Paper
                  component="a"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.2))',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                      textDecoration: 'none',
                      color: 'white'
                    }
                  }}
                >
                  Get In Touch
                </Paper>

                <Paper
                  component="a"
                  href="#journey"
                  sx={{
                    px: 4,
                    py: 2,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.3)',
                      textDecoration: 'none',
                      color: 'white'
                    }
                  }}
                >
                  View My Work
                </Paper>
              </Box>

              {/* Social Links */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                <IconButton
                  component="a"
                  href="https://www.linkedin.com/in/priyanshu-singh-365760223/"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-3px) scale(1.1)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <LinkedIn />
                </IconButton>

                <IconButton
                  component="a"
                  href="tel:+916205644980"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-3px) scale(1.1)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <Phone />
                </IconButton>

                <IconButton
                  component="a"
                  href="mailto:theanshu415@gmail.com"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.25)',
                      transform: 'translateY(-3px) scale(1.1)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  <Email />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Profile Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' },
              position: 'relative'
            }}>
              <Paper
                elevation={16}
                sx={{
                  borderRadius: { xs: '20px', sm: '25px', md: '30px' },
                  width: { xs: 280, sm: 320, md: 380, lg: 420, xl: 450 },
                  height: { xs: 350, sm: 400, md: 480, lg: 520, xl: 550 },
                  background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                  border: { xs: '2px solid rgba(255,255,255,0.3)', md: '3px solid rgba(255,255,255,0.3)' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(25px)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: { xs: '0 15px 30px rgba(0,0,0,0.3)', md: '0 20px 40px rgba(0,0,0,0.3)' },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 120,
                    height: 120,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.2), transparent)',
                    borderRadius: '50%',
                    zIndex: 1
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -30,
                    left: -30,
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)',
                    borderRadius: '50%',
                    zIndex: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src="./images/Priyanshu-image.jpeg"
                  alt="Priyanshu Profile"
                  sx={{
                    width: '85%',
                    height: '85%',
                    borderRadius: '25px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    border: '4px solid rgba(255,255,255,0.4)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                    position: 'relative',
                    zIndex: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 16px 50px rgba(0,0,0,0.5)'
                    }
                  }}
                />
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Scroll Indicator */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 30, 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 3
        }}>
          <IconButton
            component="a"
            href="#about"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: 50,
              height: 50,
              transition: 'all 0.3s ease',
              animation: 'bounce 2s infinite',
              '&:hover': {
                color: 'white',
                borderColor: 'rgba(255,255,255,0.6)',
                transform: 'translateY(-5px)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            <ArrowDownward />
          </IconButton>
        </Box>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
