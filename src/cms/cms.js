import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import SimplePagePreview from "./preview-templates/SimplePagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import SpecializationPageTemplate from "./preview-templates/SpecializationPageTemplate";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("o-kancelarii", SimplePagePreview);
CMS.registerPreviewTemplate("porady-prawne-online", SimplePagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("specializations", SpecializationPageTemplate);
