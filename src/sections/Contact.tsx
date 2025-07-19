// src/components/Contact.tsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
  Paper,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { LinkedIn, Phone, Email, LocationOn, Send } from "@mui/icons-material";

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  userId: 'user_your_user_id' // Replace with your EmailJS user ID
};

// Fallback email service using Formspree (works immediately)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpzgwqzg'; // This is a demo endpoint - replace with your own

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize EmailJS
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_CONFIG.userId);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Please fill in all fields',
        severity: 'error'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Please enter a valid email address',
        severity: 'error'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Try EmailJS first (if configured)
      if (EMAILJS_CONFIG.serviceId !== 'service_your_service_id' && window.emailjs) {
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'theanshu415@gmail.com'
        };

        await window.emailjs.send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          templateParams
        );
      } else {
        // Fallback: Use Formspree or direct email
        const emailContent = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
        `;

        // Create mailto link with pre-filled content
        const mailtoLink = `mailto:theanshu415@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailContent)}`;
        
        // Open email client
        window.open(mailtoLink, '_blank');
      }

      // Show success message
      setSnackbar({
        open: true,
        message: EMAILJS_CONFIG.serviceId !== 'service_your_service_id' 
          ? 'Message sent successfully! I\'ll get back to you soon.'
          : 'Email client opened! Please send the email to complete your message.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Fallback to mailto if EmailJS fails
      const emailContent = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `;

      const mailtoLink = `mailto:theanshu415@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailContent)}`;
      window.open(mailtoLink, '_blank');

      setSnackbar({
        open: true,
        message: 'Email client opened! Please send the email to complete your message.',
        severity: 'success'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10, lg: 12 }, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, sm: 6, md: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 800,
              color: 'white',
              mb: { xs: 1, sm: 2 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem', lg: '1.3rem' },
              maxWidth: { xs: '100%', sm: 500, md: 600 },
              mx: 'auto',
              fontWeight: 400,
              px: { xs: 2, sm: 0 }
            }}
          >
            Let's connect and discuss how we can work together
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center" alignItems="stretch">
          {/* Contact Info */}
          <Grid item xs={12} md={5} sx={{ order: { xs: 2, md: 1 }, mb: { xs: 2, md: 0 }, display: { xs: 'none', md: 'block' } }}>
            <Paper
              elevation={12}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: { xs: 'auto', md: '100%' },
                display: 'flex',
                flexDirection: 'column',
                mb: { xs: 2, md: 0 }
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#1e293b',
                  fontWeight: 700,
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: { xs: 1.5, sm: 3 },
                flex: 1,
                justifyContent: 'space-around'
              }}>
                {/* Email */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '12px', sm: '16px' },
                    background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)'
                    }
                  }}
                  component="a"
                  href="mailto:theanshu415@gmail.com"
                >
                  <IconButton
                    sx={{
                      backgroundColor: '#667eea',
                      color: 'white',
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      '&:hover': {
                        backgroundColor: '#5a67d8'
                      }
                    }}
                  >
                    <Email sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </IconButton>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ 
                      color: '#1e293b', 
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      Email
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      wordBreak: 'break-word'
                    }}>
                      theanshu415@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Phone */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '12px', sm: '16px' },
                    background: 'linear-gradient(135deg, #10b98115, #05966915)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(16, 185, 129, 0.2)'
                    }
                  }}
                  component="a"
                  href="tel:+916205644980"
                >
                  <IconButton
                    sx={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      '&:hover': {
                        backgroundColor: '#059669'
                      }
                    }}
                  >
                    <Phone sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </IconButton>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ 
                      color: '#1e293b', 
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}>
                      +91 6205644980
                    </Typography>
                  </Box>
                </Box>

                {/* LinkedIn */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '12px', sm: '16px' },
                    background: 'linear-gradient(135deg, #0077b515, #0056b315)',
                    border: '1px solid rgba(0, 119, 181, 0.2)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 119, 181, 0.2)'
                    }
                  }}
                  component="a"
                  href="https://www.linkedin.com/in/priyanshu-singh-365760223/"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton
                    sx={{
                      backgroundColor: '#0077b5',
                      color: 'white',
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      '&:hover': {
                        backgroundColor: '#0056b3'
                      }
                    }}
                  >
                    <LinkedIn sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </IconButton>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ 
                      color: '#1e293b', 
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      LinkedIn
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}>
                      Connect with me
                    </Typography>
                  </Box>
                </Box>

                {/* Location */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    borderRadius: { xs: '12px', sm: '16px' },
                    background: 'linear-gradient(135deg, #f59e0b15, #d9770615)',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}
                >
                  <IconButton
                    sx={{
                      backgroundColor: '#f59e0b',
                      color: 'white',
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 }
                    }}
                  >
                    <LocationOn sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </IconButton>
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography variant="subtitle2" sx={{ 
                      color: '#1e293b', 
                      fontWeight: 600,
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}>
                      Location
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#64748b',
                      fontSize: { xs: '0.75rem', sm: '0.875rem' }
                    }}>
                      Jaipur, Rajasthan, India
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7} sx={{ order: { xs: 1, md: 2 }, mb: { xs: 2, md: 0 } }}>
            <Paper
              elevation={12}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                height: { xs: 'auto', md: '100%' },
                display: 'flex',
                flexDirection: 'column',
                mb: { xs: 2, md: 0 }
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#1e293b',
                  fontWeight: 700,
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: { xs: 2, sm: 3 },
                flex: 1,
                justifyContent: 'space-between'
              }}>
                <Grid container spacing={{ xs: 1, sm: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      required
                      disabled={isSubmitting}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          '&:hover fieldset': {
                            borderColor: '#667eea'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#667eea'
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      value={formData.lastName}
                      onChange={handleInputChange('lastName')}
                      required
                      disabled={isSubmitting}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          '&:hover fieldset': {
                            borderColor: '#667eea'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#667eea'
                          }
                        }
                      }}
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  required
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea'
                      }
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  value={formData.subject}
                  onChange={handleInputChange('subject')}
                  required
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea'
                      }
                    }
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formData.message}
                  onChange={handleInputChange('message')}
                  required
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea'
                      }
                    }
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <Send />}
                  disabled={isSubmitting}
                  sx={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '12px',
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #5a67d8, #6b46c1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                    },
                    '&:disabled': {
                      background: '#ccc',
                      transform: 'none',
                      boxShadow: 'none'
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
