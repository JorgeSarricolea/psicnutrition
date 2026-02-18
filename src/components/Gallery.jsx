import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { galleryImages } from '../config/content';
import { SectionWrapper, SectionDivider } from './Section';

const MotionDiv = motion.create('div');

export default function Gallery() {
  if (!galleryImages?.length) return null;

  return (
    <SectionWrapper id="galeria" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionDivider />
          <PhotoLibraryIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1.5 }} />
          <Typography variant="h4" component="h2">
            Nuestras instalaciones
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          {galleryImages.map(({ src, alt }, i) => (
            <MotionDiv
              key={src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Box
                component="img"
                src={src}
                alt={alt}
                loading="lazy"
                sx={{
                  width: '100%',
                  height: { xs: 240, sm: 280, md: 260 },
                  objectFit: 'cover',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 4px 20px rgba(0,137,123,0.1)',
                  },
                }}
              />
            </MotionDiv>
          ))}
        </Box>
      </Container>
    </SectionWrapper>
  );
}
