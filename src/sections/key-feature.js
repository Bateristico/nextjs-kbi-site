/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Genexus',
    title: 'Herramienta de desarrollo',
    text:
      'GeneXus es la primera herramienta inteligente para crear, desarrollar y mantener, en forma automática aplicaciones multiplataforma de misión crítica, que fácilmente se adaptan a los cambios del negocio y a las nuevas posibilidades brindadas por la evolución tecnológica.'
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'GXplorer & GXQuery',
    title: 'Business Inteligence',
    text:
      'GXplorer es la suite de Business Intelligence para realizar sus procesos de toma de decisiones en forma eficaz y económica. GXplorer le permite construir y mantener Data Warehouses dinámicas basadas en la información empresarial ya registrada, evitando el uso de herramientas costosas y largos tiempos de implementación.'
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'GXFlow',
    title: 'Business Process Management & Workflow',
    text:
      'GXFlow es una solución para modelar, automatizar, administrar y optimizar sus procesos negocio en forma integral, que permite integrar aplicaciones de misión crítica y procesos de negocios de una manera sencilla, efectiva y eficiente, separando el siempre cambiante aspecto del proceso, del resto de la aplicación.'
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'GXPortal',
    title: 'CMS',
    text:
      'GXportal es una herramienta full web que se ajusta a los requerimientos de sitios de todos los tamaños y ofrece una plataforma única para las necesidades de visibilidad, gestión de contenidos así como intranets corporativas.'
  }
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="servicios">
      <Container>
        <SectionHeader slogan="nuestra ventaja" title="Casa de software a medida" />
        <Grid sx={styles.grid}>
          {data.map(item => (
            <FeatureCardColumn
              key={item.id}
              imgSrc={item.imgSrc}
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};
