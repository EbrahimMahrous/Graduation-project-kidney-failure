




import AboutUs from './sections/AboutUs';
import Benefit from './sections/Benefit';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import JoinUs from './sections/JoinUs';
import OurServices from './sections/OurServices';
import PatientReviews from './sections/PatientReviews';

const LandingPage = () => {
    return (
        <>
        <AboutUs />
        <JoinUs></JoinUs>
        <Benefit />
        <OurServices />
        <ContactUs />
        <PatientReviews />
        <Footer />
        </>
    );
}

export default LandingPage;
