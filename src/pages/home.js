import { Fragment } from "react";
import Header from "../components/header";
import PricingPlans from "../components/pricingPlans";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Fragment>
      <section className="top-container">
        <Header />
        <PricingPlans />
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
