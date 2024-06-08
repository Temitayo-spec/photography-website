import {
  ServicesSectionWrapper,
  ServicesSectionInner,
  ServicesLeftCtn,
  ServicesRightCtn,
  ServicesCtn,
} from './styles';

const services = [
  {
    title: 'Photo Shooting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Video Editing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Art Direction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const ServicesSection = () => {
  return (
    <ServicesSectionWrapper>
      <ServicesSectionInner>
        <ServicesLeftCtn>
          <div />
          <p>Services</p>
        </ServicesLeftCtn>
        <ServicesRightCtn>
          {services.map((service, index) => (
            <ServicesCtn key={index}>
              <h2>0{index + 1}</h2>
              <div>
                <p>{service.title}</p>
                <p>{service.description}</p>
              </div>
            </ServicesCtn>
          ))}
        </ServicesRightCtn>
      </ServicesSectionInner>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
