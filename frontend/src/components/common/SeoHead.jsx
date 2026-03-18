import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';

const SeoHead = ({ 
  title, 
  description, 
  canonical, 
  ogImage = '/Umang-logo.png', 
  ogType = 'website',
  keywords = [] 
}) => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullDescription = description || siteConfig.marketingMessage;
  const siteUrl = 'https://umanghospital.com'; // Replace with real production URL
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          "name": siteConfig.name,
          "alternateName": siteConfig.shortName,
          "url": siteUrl,
          "logo": `${siteUrl}/Umang-logo.png`,
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": siteConfig.contacts.emergency,
              "contactType": "emergency service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            {
              "@type": "ContactPoint",
              "telephone": siteConfig.contacts.main,
              "contactType": "appointment",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.locations.main.address,
            "addressLocality": "Gurugram",
            "addressRegion": "HR",
            "postalCode": "122001",
            "addressCountry": "IN"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SeoHead;
