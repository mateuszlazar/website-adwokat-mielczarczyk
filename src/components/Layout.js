import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { Favicon } from "./Favicon";

const TemplateWrapper = ({ children, pageTitle = null, showBrand = true }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="pl" />
        <title>{pageTitle ? `${pageTitle} | ${title}` : title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Favicon />
      <Navbar showBrand={showBrand} />
      {showBrand && <Hero />}
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
