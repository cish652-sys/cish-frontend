// routes.ts
const routes: Record<string, string> = {
  // routes.ts
  HOME: "/",
  "ABOUT US": "/", // fallback to home
  RESEARCH: "/",   // fallback to home
  PUBLICATIONS: "/", // fallback to home
  TECHNOLOGIES: "/technologies", 
  VARIETIES: "/varieties",
  "FOR FARMERS": "/", 
  NURSERY: "/", 
  MEDIA: "/", 
  "CONTACT US": "/", 
  // ABOUT US dropdown
  "About Institute": "/about/institute",
  "Field Gene Bank": "/about/field-gene-bank",
  Divisions: "/about/divisions",
  PME: "/about/pme",
  "ITMu/JPR Cells": "/about/itmu-jpr",
  "Agri Business Incubation Center (ABI)": "/about/abi",
  AKMU: "/about/akmu",
  "Regional Research Station": "/about/regional-research-station",
  "Krishi Vigyan Kendra": "/about/kvk",
  "Cadres Strength": "/about/cadres-strength",
  Staff: "/about/staff",
  "Citizen Charter": "/about/citizen-charter",

  // RESEARCH dropdown
  "Mango Cultivation": "/research/mango-cultivation",
  "Mango Nutrition": "/research/mango-nutrition",
  "Mango Diseases": "/research/mango-diseases",
  "Mango Genomics": "/research/mango-genomics",
  "Mango Genetics": "/research/mango-genetics",

  // PUBLICATIONS dropdown
  "Mango Cultivation Publications": "/publications/mango-cultivation",
  "Mango Nutrition Publications": "/publications/mango-nutrition",
  "Mango Diseases Publications": "/publications/mango-diseases",
  "Mango Genomics Publications": "/publications/mango-genomics",
  "Mango Genetics Publications": "/publications/mango-genetics",

  // VARIETIES dropdown
  "Mango Cultivation Varieties": "/varieties/mango-cultivation",
  "Mango Nutrition Varieties": "/varieties/mango-nutrition",
  "Mango Diseases Varieties": "/varieties/mango-diseases",
  "Mango Genomics Varieties": "/varieties/mango-genomics",
  "Mango Genetics Varieties": "/varieties/mango-genetics",

  // FOR FARMERS dropdown
  "Mango Cultivation Farmers": "/farmers/mango-cultivation",
  "Mango Nutrition Farmers": "/farmers/mango-nutrition",
  "Mango Diseases Farmers": "/farmers/mango-diseases",
  "Mango Genomics Farmers": "/farmers/mango-genomics",
  "Mango Genetics Farmers": "/farmers/mango-genetics",
};

export default routes;