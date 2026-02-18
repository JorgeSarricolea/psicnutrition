import { Box, Container, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { contact } from '../config/content';
import { SectionWrapper, SectionDivider } from './Section';

const MotionDiv = motion.create('div');

function ContactCard({ Icon, title, children, delay = 0 }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            bgcolor: 'rgba(0, 137, 123, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
          }}
        >
          <Icon sx={{ color: 'primary.main' }} />
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </MotionDiv>
  );
}

export default function Contact() {
  return (
    <SectionWrapper id="contacto" bg="background.default">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <SectionDivider />
          <Typography variant="h4" component="h2">
            Contacto
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 5,
          }}
        >
          {contact.phone && (
            <ContactCard Icon={PhoneIcon} title="Teléfono" delay={0}>
              <Link
                href={contact.phoneTel}
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                {contact.phone}
              </Link>
            </ContactCard>
          )}

          {contact.whatsapp && (
            <ContactCard Icon={WhatsAppIcon} title="WhatsApp" delay={0.05}>
              <Link
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Enviar mensaje
              </Link>
            </ContactCard>
          )}

          {contact.email && (
            <ContactCard Icon={EmailIcon} title="Correo" delay={0.1}>
              <Link
                href={`mailto:${contact.email}`}
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' }, wordBreak: 'break-all' }}
              >
                {contact.email}
              </Link>
            </ContactCard>
          )}

          {contact.facebook && (
            <ContactCard Icon={FacebookIcon} title="Facebook" delay={0.15}>
              <Link
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.primary"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                PsicNutritionMID
              </Link>
            </ContactCard>
          )}
        </Box>

        {contact.address && (
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <MotionDiv
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PlaceIcon sx={{ color: 'primary.main', fontSize: 28, mb: 0.5 }} />
              <Typography variant="body1" color="text.secondary">
                {contact.address}
              </Typography>
            </MotionDiv>
          </Box>
        )}
      </Container>
    </SectionWrapper>
  );
}
