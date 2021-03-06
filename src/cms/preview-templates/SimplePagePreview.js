import React from "react";
import PropTypes from "prop-types";
import { SimplePageTemplate } from "../../templates/simple-page";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

const SimplePagePreview = ({ entry, widgetFor }) => (
  <>
    <Navbar />
    <Hero />
    <SimplePageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
    />
    <Footer />
  </>
);

SimplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SimplePagePreview;
