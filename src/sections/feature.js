/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Gestión de la Cadena de Abastecimiento',
    title: 'Gestión de la Cadena de Abastecimiento',
    text:
      'La plataforma de soluciones KBI permite a las empresas optimizar operaciones grandes y complejas.'
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Gestión de Procesos Productivos de Fruta Fresca',
    title: 'Gestión de Procesos Productivos de Fruta Frescan',
    text:
      'Herramienta tecnológica que proporciona los canales de información necesarios para la eficiencia en el flujo de datos inherente a los proceso que van desde estimaciones de cosecha hasta el embarque.'
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Call Center',
    title: 'Call Center',
    text: 'Esta plataforma, porvee una herramienta para gestionar cartera de clientes.'
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Estimación de Cosechas',
    title: 'Estimación de Cosechas',
    text:
      'Herramienta de apoyo para la gestión de los campos, permitiendo tomar deciciones a tiempo.'
  }
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id="proyectos">
      <Container>
        <SectionHeader slogan="Quality Features" title="Amazing useful features" />

        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)']
  }
};
