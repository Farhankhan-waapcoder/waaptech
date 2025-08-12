import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
}

const SEO = ({ title, description, path, structuredData }: SEOProps) => {
  const location = useLocation();
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonical = origin + (path || location.pathname || '/');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />

      <meta name="twitter:card" content="summary_large_image" />

      {structuredData && (
        Array.isArray(structuredData) ? structuredData : [structuredData]
      ).map((sd, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(sd)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
