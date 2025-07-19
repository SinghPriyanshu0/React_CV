import React from 'react';
import { Box, Typography, Grid, Container, Paper, Chip } from '@mui/material';
import { 
  Code, 
  Storage, 
  Web, 
  Analytics, 
  CleaningServices, 
  Cloud, 
  Psychology, 
  DataObject, 
  Dashboard 
} from '@mui/icons-material';

const skills = [
  { name: "Python", icon: <Code />, color: "#3776ab", bgColor: "#3776ab15", description: "Data Analysis & Automation" },
  { name: "SQL", icon: <Storage />, color: "#336791", bgColor: "#33679115", description: "Database Management" },
  { name: "Frontend Development", icon: <Web />, color: "#61dafb", bgColor: "#61dafb15", description: "React & MUI" },
  { name: "Power BI", icon: <Analytics />, color: "#f2c811", bgColor: "#f2c81115", description: "Data Visualization" },
  { name: "Data Cleaning & Transformation", icon: <CleaningServices />, color: "#10b981", bgColor: "#10b98115", description: "ETL Processes" },
  { name: "Snowflake", icon: <Cloud />, color: "#29b5e8", bgColor: "#29b5e815", description: "Cloud Data Warehouse" },
  { name: "Problem Solving", icon: <Psychology />, color: "#8b5cf6", bgColor: "#8b5cf615", description: "200+ Problems Solved" },
  { name: "Pandas & NumPy", icon: <DataObject />, color: "#130654", bgColor: "#13065415", description: "Data Manipulation" },
  { name: "Dashboard Development", icon: <Dashboard />, color: "#ef4444", bgColor: "#ef444415", description: "Interactive Reports" }
];

const SkillsSection = () => {
  return (
    <Box 
      id="skills"
      sx={{ 
        py: 12, 
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        zIndex: 1
      }
    }}>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#1e293b',
              mb: 2,
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Core Skills
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#64748b',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 600,
              mx: 'auto',
              fontWeight: 400
            }}
          >
            A comprehensive skill set built through years of hands-on experience across operations, technology, and education.
          </Typography>
        </Box>

        {/* Mobile Layout - Horizontal Scrollable Cards */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            overflowX: 'auto', 
            pb: 2,
            px: 1,
            '&::-webkit-scrollbar': {
              height: 6
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(0,0,0,0.1)',
              borderRadius: 3
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(102, 126, 234, 0.3)',
              borderRadius: 3,
              '&:hover': {
                background: 'rgba(102, 126, 234, 0.5)'
              }
            }
          }}>
            {skills.map((skill, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  minWidth: 200,
                  p: 2.5,
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${skill.bgColor}, ${skill.bgColor}30)`,
                  border: `2px solid ${skill.color}30`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 20px ${skill.color}30`,
                    borderColor: skill.color,
                    '& .skill-icon': {
                      transform: 'scale(1.05)',
                      backgroundColor: skill.color,
                      color: 'white'
                    },
                    '& .skill-name': {
                      color: skill.color
                    }
                  }
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  {/* Icon */}
                  <Box
                    className="skill-icon"
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 1.5,
                      transition: 'all 0.3s ease',
                      border: `2px solid ${skill.color}30`
                    }}
                  >
                    {React.cloneElement(skill.icon, {
                      sx: {
                        fontSize: 24,
                        color: skill.color,
                        transition: 'all 0.3s ease'
                      }
                    })}
                  </Box>
                  
                  {/* Skill Name */}
                  <Typography
                    className="skill-name"
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#1e293b',
                      mb: 0.5,
                      transition: 'color 0.3s ease',
                      fontSize: '0.95rem'
                    }}
                  >
                    {skill.name}
                  </Typography>
                  
                  {/* Description */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#64748b',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      lineHeight: 1.3
                    }}
                  >
                    {skill.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Desktop Layout - Grid Cards */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container spacing={3} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid
                item
                key={index}
                md={4}
                lg={3}
                display="flex"
                justifyContent="center"
              >
                <Paper
                  elevation={0}
                  sx={{
                    width: '100%',
                    maxWidth: 320,
                    p: 3,
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${skill.bgColor}, ${skill.bgColor}30)`,
                    border: `2px solid ${skill.color}30`,
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: `0 12px 30px ${skill.color}30`,
                      borderColor: skill.color,
                      '& .skill-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        backgroundColor: skill.color,
                        color: 'white'
                      },
                      '& .skill-name': {
                        color: skill.color
                      },
                      '&::before': {
                        transform: 'scaleX(1)'
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'left'
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    {/* Icon */}
                    <Box
                      className="skill-icon"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        border: `2px solid ${skill.color}30`
                      }}
                    >
                      {React.cloneElement(skill.icon, {
                        sx: {
                          fontSize: 28,
                          color: skill.color,
                          transition: 'all 0.3s ease'
                        }
                      })}
                    </Box>
                    
                    {/* Skill Name */}
                    <Typography
                      className="skill-name"
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: '#1e293b',
                        mb: 1,
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {skill.name}
                    </Typography>
                    
                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    >
                      {skill.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Skills Summary */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #667eea15, #764ba215)',
              border: '2px solid rgba(102, 126, 234, 0.2)',
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#667eea',
                fontWeight: 700,
                mb: 2
              }}
            >
              Technical Proficiency
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#475569',
                lineHeight: 1.6
              }}
            >
              From data analysis with Python and SQL to building responsive web applications with React, 
              I combine technical expertise with creative problem-solving to deliver impactful solutions.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;
