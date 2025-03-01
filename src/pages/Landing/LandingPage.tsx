// ** Components
import AboutUs from './sections/AboutUs';
import Benefit from './sections/Benefit';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import JoinUs from './sections/JoinUs';
import OurServices from './sections/OurServices';
import PatientReviews from './sections/PatientReviews';





export default function LandingPage(){
    return (
        <>
            <AboutUs sectionId='about-us'/>
            <JoinUs sectionId='join-us'/>
            <Benefit sectionId='benefit'/>
            <OurServices sectionId='our-services'/>
            <ContactUs sectionId='contact-us'/>
            <PatientReviews sectionId='patient-reviews'/>
            <Footer sectionId='footer'/>
        </>
    );
}

