import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const withWholePage = Component => (
  <>
    <Navbar />
    <Component />
    <Footer />
  </>
);

import SimplePagePreview from "./preview-templates/SimplePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import SpecializationPageTemplate from "./preview-templates/SpecializationPageTemplate";
\;

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", withWholePage(IndexPagePreview));
CMS.registerPreviewTemplate("simple", withWholePage(SimplePagePreview));
CMS.registerPreviewTemplate("blog", withWholePage(BlogPostPreview));
CMS.registerPreviewTemplate("contact", withWholePage(ContactPagePreview));
CMS.registerPreviewTemplate(
  "specialization",
  withWholePage(SpecializationPageTemplate)
);
