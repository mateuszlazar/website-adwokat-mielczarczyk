import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <>
      <Navbar />
      <ContactPageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
        phone={entry.getIn(["data", "phone"])}
        mail={entry.getIn(["data", "mail"])}
        address={data.address}
      />
      <Footer />
    </>
  );
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;
