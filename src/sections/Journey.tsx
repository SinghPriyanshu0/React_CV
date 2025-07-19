import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { Work, Timeline, ExpandMore, ExpandLess } from '@mui/icons-material';

const Journey = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardToggle = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const workExperience = [
    {
      id: 'persistent',
      company: 'Persistent Systems',
      role: 'Software Engineer Intern',
      duration: '2023 - 2023',
      logo: './images/Persistent_system.png',
      description: 'Trained in Python, Pandas, and NumPy to streamline data workflows and create efficient analytical solutions.',
      achievements: [
        'Developed data processing pipelines using Python, Pandas, and NumPy',
        'Created automated data cleaning and transformation workflows',
        'Collaborated with cross-functional teams for data-driven insights',
        'Implemented data validation and quality assurance practices'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      id: 'primathon',
      company: 'Primathon Technology',
      role: 'Software Engineer Intern',
      duration: '2023 - 2023',
      logo: '/images/Primathon.png',
      description: 'Analyzed data, built dashboards in Power BI/Excel, and delivered insights to support business decision-making.',
      achievements: [
        'Designed interactive dashboards using Power BI and Excel',
        'Performed comprehensive data analysis and trend identification',
        'Created automated reporting systems',
        'Delivered actionable insights to stakeholders'
      ],
      technologies: ['Power BI', 'Excel', 'Data Visualization', 'Reporting']
    },
    {
      id: 'bytepx',
      company: 'Bytepx Technology',
      role: 'Software Engineer',
      duration: '2024 - 2025',
      logo: './images/Bytepx_image.png',
      description: 'Built chatbot, dashboards, cleaned data, and mentored juniors using SQL, Power BI, and Excel.',
      achievements: [
        'Developed and deployed intelligent chatbot solutions',
        'Created comprehensive dashboards and reports',
        'Mentored junior team members',
        'Performed data cleaning and analysis using SQL'
      ],
      technologies: ['SQL', 'Power BI', 'Excel', 'Chatbot Development', 'Mentoring']
    }
  ];

  return (
    <Box id="journey" sx={{ 
      py: 12, 
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Container maxWidth="xl">
        <Box textAlign="center" mb={8}>
          <Timeline sx={{ fontSize: 60, color: 'white', mb: 2 }} />
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: 'white',
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            My Professional Journey
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              maxWidth: 600,
              mx: 'auto'
            }}
          >
            From internships to full-time roles, here's my path in software engineering and data analytics
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 4,
              backgroundColor: 'rgba(255,255,255,0.3)',
              transform: 'translateX(-50%)',
              zIndex: 1,
              display: { xs: 'none', md: 'block' }
            }}
          />
          
          <Grid container spacing={{ xs: 3, sm: 4, md: 4 }} justifyContent="center" alignItems="stretch">
            {workExperience.map((experience, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6}
                md={4} 
                key={experience.id}
                sx={{ 
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Timeline dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    top: 20,
                    width: 20,
                    height: 20,
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 3,
                    display: { xs: 'none', md: 'block' },
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}
                />
                
                <Card
                  sx={{
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    width: '100%',
                    minWidth: { md: 320 },
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
                    },
                    overflow: 'visible'
                  }}
                  onClick={() => handleCardToggle(experience.id)}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    {/* Company Logo */}
                    <Box
                      component="img"
                      src={experience.logo}
                      alt={`${experience.company} Logo`}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        mx: 'auto',
                        mb: 3,
                        border: '3px solid white',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        backgroundColor: 'white',
                        p: 1
                      }}
                    />
                    
                    {/* Duration */}
                    <Chip
                      label={experience.duration}
                      sx={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        fontWeight: 600,
                        mb: 2
                      }}
                    />
                    
                    {/* Company Name */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#1e293b',
                        mb: 1
                      }}
                    >
                      {experience.company}
                    </Typography>
                    
                    {/* Role */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#475569',
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {experience.role}
                    </Typography>
                    
                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.6,
                        mb: 3
                      }}
                    >
                      {experience.description}
                    </Typography>
                    
                    {/* Technologies */}
                    <Box sx={{ mb: 2 }}>
                      {experience.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#f1f5f9',
                            color: '#475569',
                            fontWeight: 500,
                            mr: 1,
                            mb: 1
                          }}
                        />
                      ))}
                    </Box>
                    
                    {/* Expand Button */}
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardToggle(experience.id);
                      }}
                      sx={{
                        backgroundColor: '#667eea',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#5a67d8'
                        }
                      }}
                    >
                      {expandedCard === experience.id ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </CardContent>
                  
                  {/* Expanded Content */}
                  {expandedCard === experience.id && (
                    <Box
                      sx={{
                        backgroundColor: '#f8fafc',
                        borderTop: '1px solid #e2e8f0',
                        p: 3,
                        borderRadius: '0 0 20px 20px'
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#1e293b',
                          fontWeight: 600,
                          mb: 2
                        }}
                      >
                        Key Achievements
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0 }}>
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <Typography
                            key={achievementIndex}
                            component="li"
                            variant="body2"
                            sx={{
                              color: '#475569',
                              mb: 1,
                              lineHeight: 1.6
                            }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Journey;
