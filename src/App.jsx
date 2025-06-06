import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/bestbooks/BestBooks";
import Banner from "./components/banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/allBooks";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import SignInPage from "./components/signIn/signIn";
import AOS from "aos";
import 'aos/dist/aos.css'; // For AOS animations
import 'slick-carousel/slick/slick.css'; // For react-slick
import 'slick-carousel/slick/slick-theme.css'; // For react-slick theme
import OrderPopup from "./components/Popup/OrderPopup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [showSignIn, setShowSignIn] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleShowSignIn = () => {
    setShowSignIn(true);
  };

  const handleBackToHome = () => {
    setShowSignIn(false);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar 
        handleOrderPopup={handleOrderPopup} 
        handleShowSignIn={handleShowSignIn}
        showSignIn={showSignIn}
        handleBackToHome={handleBackToHome}
      />
      {showSignIn ? (
        <SignInPage handleBackToHome={handleBackToHome} />
      ) : (
        <>
          <Hero handleOrderPopup={handleOrderPopup} />
          <BestBooks handleOrderPopup={handleOrderPopup} />
          <Banner />
          <AppStoreBanner />
          <AllBooks />
          <Testimonials />
          <Footer />
          <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </>
      )}
    </div>
  );
};

export default App;