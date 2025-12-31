// src/lib/site.ts
const siteUrl = import.meta.env.SITE;
const base = import.meta.env.BASE_URL;

export const site = {
    name: "Okonkwo Care Pediatrics",
    tagline: `Okonkwo Care Pediatrics provides trusted integrative pediatric care led by Dr. Margaret Okonkwo. 
    Our concierge-style practice blends traditional and holistic medicine to support your child's physical, emotional, and social well-being.`,
    phoneDisplay: "(305) 381-5507",
    phoneTel: "+13053815507",
    addressLine1: "5582 N.E. 4th Ct Suite #9",
    addressLine2: "Miami, FL 33137",
    mapUrl: "https://maps.app.goo.gl/p5RDXUgNxEsUCrUv7",
    email: "", // Add actual email

    socials: {
        facebook: "https://www.facebook.com/OkonkwoCarePediatrics",
        instagram: "https://www.instagram.com/okonkwocarepediatrics/",
        twitter: "", // Add if she has one
    },

    // SEO Configuration
    seo: {
        siteUrl: siteUrl,
        defaultTitle: "Okonkwo Care Pediatrics | Holistic Integrative Pediatric Care in Miami | Dr. Margaret Okonkwo",
        defaultDescription: "Discover Miami's leader in holistic pediatric ADHD care. Okonkwo Care Pediatrics offers concierge-style visits focused on natural healing and personalized child wellness.",
        defaultImage: `${base}og-image.png`,
        
        // Keywords by page type
        keywords: {
            home: "pediatrician Miami, holistic pediatric care, ADHD treatment Miami, integrative pediatrics, Dr Margaret Okonkwo",
            adhd: "ADHD treatment Miami, pediatric ADHD specialist, holistic ADHD care, natural ADHD treatment",
            blog: "pediatric health, ADHD guidance, child wellness, integrative medicine",
            contact: "contact pediatrician Miami, Okonkwo Care Pediatrics contact, Dr Margaret Okonkwo contact",
            services: "pediatric services Miami, holistic pediatric services, ADHD care services concierge pediatrics Miami, membership pediatrician, holistic child care"
        }
    },

    // Location Data for Local SEO
    business: {
        name: "Okonkwo Care Pediatrics",
        phone: "+13053815507",
        email: "", // Add actual email
        address: {
        street: "5582 N.E. 4th Ct Suite #9",
        city: "Miami",
        state: "FL",
        stateCode: "FL",
        zip: "33137",
        country: "US"
        },
        coordinates: {
            latitude: "25.828263669895563",
            longitude: "-80.18745080226702"
        },
        // Business Hours
        hours: {
            specification: "Mo-Fr 09:00-17:00",
            display: "Monday - Friday: 9:00 AM - 5:00 PM" // For display on website
        }
    },
};