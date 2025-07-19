// src/components/About.tsx
import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Chip, Paper, Divider } from '@mui/material';
import { Person, Code, Analytics, School, TrendingUp, Psychology } from '@mui/icons-material';

const About = () => {
  const skills = [
    { icon: <Code />, label: 'Frontend Development', color: '#3b82f6' },
    { icon: <Analytics />, label: 'Data Analytics', color: '#10b981' },
    { icon: <TrendingUp />, label: 'Business Intelligence', color: '#f59e0b' },
    { icon: <Psychology />, label: 'Problem Solving', color: '#8b5cf6' },
    { icon: <School />, label: 'Mentoring', color: '#ef4444' },
  ];

  return (
    <Box 
      id="about" 
      sx={{ 
        py: 12, 
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: 'white',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 300
            }}
          >
            Bridging the gap between data insights and user experience
          </Typography>
        </Box>

        {/* Full Width Content */}
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} justifyContent="center">
          <Grid item xs={12} md={11} lg={10}>
            <Paper
              elevation={12}
              sx={{
                borderRadius: '24px',
                p: 6,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)'
                }
              }}
            >
              {/* Skills Chips */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#1e293b',
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  Core Expertise
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skills.map((skill, index) => (
                    <Chip
                      key={index}
                      icon={skill.icon}
                      label={skill.label}
                      sx={{
                        backgroundColor: `${skill.color}15`,
                        color: skill.color,
                        fontWeight: 600,
                        border: `1px solid ${skill.color}30`,
                        '&:hover': {
                          backgroundColor: `${skill.color}25`,
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Short summary for mobile only */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    fontSize: '1rem',
                    fontWeight: 400
                  }}
                >
                  Data Analyst & Frontend Developer skilled in React, SQL, Power BI, and Python. I turn complex data into insights and build user-friendly interfaces. Passionate about mentorship, problem-solving, and creating value for users and businesses.
                </Typography>
              </Box>

              {/* Divider and full story for md+ only */}
              <Divider sx={{ my: 3, borderColor: 'rgba(0,0,0,0.1)', display: { xs: 'none', md: 'block' } }} />
              <Box sx={{ lineHeight: 1.8, display: { xs: 'none', md: 'block' } }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    fontSize: '1.1rem',
                    mb: 3,
                    fontWeight: 400
                  }}
                >
                  I'm a passionate Data Analyst and Frontend Developer with a unique blend of technical skills and business acumen. My journey in technology began with a curiosity about how data can drive meaningful decisions, and it has evolved into a comprehensive skill set that spans both data analysis and web development.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    fontSize: '1.1rem',
                    mb: 3,
                    fontWeight: 400
                  }}
                >
                  With expertise in <strong>React</strong>, <strong>SQL</strong>, <strong>Power BI</strong>, and <strong>Python</strong>, I specialize in transforming complex data into actionable insights while creating intuitive user interfaces that make those insights accessible to everyone. My approach combines analytical thinking with creative problem-solving, ensuring that every solution is both technically sound and user-friendly.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    fontSize: '1.1rem',
                    mb: 3,
                    fontWeight: 400
                  }}
                >
                  I believe in the power of mentorship and knowledge sharing, having guided numerous professionals in their data and development journeys. My goal is to continue building solutions that not only solve immediate problems but also create lasting value for businesses and users alike.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#374151',
                    fontSize: '1.1rem',
                    fontWeight: 400
                  }}
                >
                  When I'm not coding or analyzing data, you'll find me exploring new technologies, contributing to open-source projects, or sharing insights with the developer community. I'm always excited to take on new challenges and collaborate on innovative projects that push the boundaries of what's possible.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
