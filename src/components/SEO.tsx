import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Google Growth Hub | Scale Your Business with Google Ecosystem",
  description = "Your comprehensive guide to scaling your business with Google's powerful ecosystem. From productivity to cloud infrastructure and global distribution.",
  canonical = "https://ais-pre-2fapiawaicpfo532ptsxsh-465217709442.europe-west2.run.app",
  ogType = "website",
  ogImage = "https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
  twitterHandle = "@google",
  schema
}) => {
  const siteTitle = title.includes("Google Growth Hub") ? title : `${title} | Google Growth Hub`;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Google Growth Hub" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* AI Bot Hints */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Default Organization Schema if none provided */}
      {!schema && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Google Growth Hub",
            "url": "https://ais-pre-2fapiawaicpfo532ptsxsh-465217709442.europe-west2.run.app",
            "logo": "https://www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
            "description": "A comprehensive guide to scaling businesses using Google's ecosystem.",
            "sameAs": [
              "https://twitter.com/google",
              "https://www.linkedin.com/company/google"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
