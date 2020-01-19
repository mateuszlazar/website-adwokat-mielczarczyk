import React from "react";
import PropTypes from "prop-types";
import { SpecializationPageTemplate } from "../../templates/specialization-page";

const SpecializationPagePreview = ({ entry, widgetFor }) => {
  return (
    <SpecializationPageTemplate
      content={widgetFor("body")}
      title={entry.getIn(["data", "title"])}
      order={1}
    />
  );
};

SpecializationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default SpecializationPagePreview;
