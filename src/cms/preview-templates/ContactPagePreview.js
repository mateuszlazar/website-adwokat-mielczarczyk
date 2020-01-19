import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPagePreview = ({ entry, widgetFor }) => (
  <>
    <Navbar />
    <ContactPageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      phone={entry.getIn(["data", "title"])}
      mail={entry.getIn(["data", "mail"])}
      address={entry.getIn(["data", "address"])}
    />
    <Footer />
  </>
);

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;
