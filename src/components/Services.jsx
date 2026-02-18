import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealingIcon from '@mui/icons-material/Healing';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { services } from '../config/content';
import { SectionWrapper, SectionDivider } from './Section';

const MotionDiv = motion.create('div');

const iconMap = {
  Restaurant: RestaurantIcon,
  Psychology: PsychologyIcon,
  Healing: HealingIcon,
  MonitorWeight: MonitorWeightIcon,
  Bloodtype: BloodtypeIcon,
  Diversity1: Diversity1Icon,
};

export default function Services() {
  if (!services?.length) return null;

  return (
    <SectionWrapper id="servicios" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionDivider />
          <Typography variant="h4" component="h2">
            Nuestros servicios
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {services.map(({ icon, title, text }, i) => {
            const IconComponent = iconMap[icon] || RestaurantIcon;
            return (
              <MotionDiv
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Box
                  sx={{
                    p: 3.5,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    height: '100%',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 20px rgba(0,137,123,0.08)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: 'rgba(0, 137, 123, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                    }}
                  >
                    <IconComponent sx={{ fontSize: 26, color: 'primary.main' }} />
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                </Box>
              </MotionDiv>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
