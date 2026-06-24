export const clinicData = {
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "contact@careplusclinic.in",
  address: "Swaroop Nagar, Kanpur, Uttar Pradesh",
  heroImage:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1800&q=80",
  aboutPrimaryImage:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80",
  aboutSecondaryImage:
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1200&q=80",
  aboutAccentImage:
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
  founderImage:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  ctaImage:
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
  stats: [
    { value: "10+ Years", label: "Experience" },
    { value: "15,000+", label: "Patients Treated" },
    { value: "4.9", label: "Star Rating" },
    { value: "25+", label: "Medical Services" }
  ],
  whyChooseUs: [
    "Experienced doctors",
    "Modern facilities",
    "Affordable healthcare",
    "Same-day appointments",
    "Patient-focused care"
  ],
  services: [
    {
      title: "General Consultation",
      description: "Comprehensive diagnosis and treatment for common health issues.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Diabetes Care",
      description: "Personalized diabetes management and monitoring.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Preventive Health Checkups",
      description: "Routine health examinations and early disease detection.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Cardiology Consultation",
      description: "Specialist heart care and preventive treatment.",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Vaccination Services",
      description: "Immunization for children and adults.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  testimonials: [
    {
      quote: "The doctors are very experienced and friendly. Highly recommended.",
      name: "Rahul Sharma"
    },
    {
      quote: "Clean clinic and excellent staff support.",
      name: "Priya Verma"
    },
    {
      quote: "Very professional consultation and quick appointment process.",
      name: "Amit Singh"
    },
    {
      quote: "Affordable healthcare and excellent treatment.",
      name: "Neha Gupta"
    }
  ],
  faq: [
    {
      question: "Do you accept walk-in patients?",
      answer: "Yes, both appointments and walk-ins are accepted."
    },
    {
      question: "Can I book online?",
      answer: "Yes, appointments can be requested online."
    },
    {
      question: "What are the consultation charges?",
      answer: "Starting from ₹500."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Emergency consultation is available during clinic hours."
    }
  ]
} as const;
