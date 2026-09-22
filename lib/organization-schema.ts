import { SITE_URL, siteName } from "@/lib/site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationContact = {
  email: "info@istep.kz",
  telephone: "+7-701-807-97-71",
  streetAddress: "ул. Мухамедханова, 6",
  addressLocality: "Астана",
  addressCountry: "KZ",
} as const;

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteName,
    legalName: 'ТОО «iStep»',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: organizationContact.email,
    telephone: organizationContact.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: organizationContact.streetAddress,
      addressLocality: organizationContact.addressLocality,
      addressCountry: organizationContact.addressCountry,
    },
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteName,
    alternateName: "istep.kz",
    url: SITE_URL,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function getOrganizationProviderReference() {
  return {
    "@id": ORGANIZATION_ID,
  };
}
