import Carousel from 'react-bootstrap/Carousel';
import Card from './TestimonialCard';

function UncontrolledExample() {
  return (
    <div style={{paddingBottom: "50px"}}>
    <Carousel>
      <Carousel.Item>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: "100%"}}>
        <Card name={"John Dae"} desc={"The service techicians showed up, cleaned our Airbnb apartment. Left it in pristine condition. We can truly recommend them to everyone who is currently looking for a detailed and reliable company."}/>
        {/* <Card /> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: "100%"}}>
        <Card name={"Marcus B"} desc={"I used Spotless Clean by Peter twice. Each time I booked, arrived home to a brand new looking apartment. The service technicians that arrived, did an excellent job! I signed up for bi-weekly cleanings, looking forward to having my sanctuary spotless."}/>
        {/* <Card /> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: "100%"}}>
        <Card name={"Jasmine"} desc={"This is the most reliable and extremely detailed cleaning service you can count on! I chose to sign up for there weekly bookings at my apartment. I get to do more productive things instead of cleaning. Thank you."}/>
        {/* <Card /> */}
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;