export function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sukanta Mitra",
    "jobTitle": "Visual Communication Designer",
    "description": "Visual Communication Designer based in South Asia. Specializing in graphic design, branding, publications, and event branding.",
    // "url": "https://yourdomain.com", // TODO: Add your domain after deployment
    "email": "helloatmitra@gmail.com",
    "telephone": "+8801980643483",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "South Asia"
    },
    "sameAs": [
      "https://linkedin.com/in/yourprofile",
      "https://instagram.com/yourprofile",
      "https://dribbble.com/yourprofile",
      "https://facebook.com/yourprofile"
    ],
    "knowsAbout": [
      "Graphic Design",
      "Branding",
      "Visual Communication",
      "Event Branding",
      "Publication Design",
      "UI/UX Design"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University Name"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sukanta Mitra Portfolio",
    // "url": "https://yourdomain.com", // TODO: Add your domain after deployment
    "description": "Portfolio of Sukanta Mitra - Visual Communication Designer",
    "author": {
      "@type": "Person",
      "name": "Sukanta Mitra"
    },
    "inLanguage": "en-US"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sukanta Mitra Design Services",
    "description": "Professional visual communication and graphic design services",
    "provider": {
      "@type": "Person",
      "name": "Sukanta Mitra"
    },
    "areaServed": "South Asia",
    "serviceType": [
      "Graphic Design",
      "Branding",
      "Event Branding",
      "Publication Design"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}
