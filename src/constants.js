export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];

export const serviceCards = [
  {
    icon: "🚚",
    title: "Free Shipping",
    description: "Get your orders delivered with no extra cost",
  },
  {
    icon: "🎧",
    title: "Support 24/7",
    description: "We are here to assist you anytime",
  },
  {
    icon: "💰",
    title: "100% Money Back",
    description: "Full refund if you are not satisfied",
  },
  {
    icon: "🔒",
    title: "Payment Secure",
    description: "Your payment information is safe with us",
  },
  {
    icon: "🏷️",
    title: "Discount",
    description: "Enjoy the best prices on our products",
  },
];

import men from "./assets/men.png";
import women from "./assets/women.png";
import kid from "./assets/kid.png";

export const genderCategories = [
  {
    name: "Men",
    image: men,
  },
  {
    name: "Women",
    image: women,
  },
  {
    name: "Kids",
    image: kid,
  },
];

export const ShippingFormTemplate = {
  email: {
    id: "email",
    label: "Email Address",
    type: "email",
    inputType: "input",
    placeholder: "Enter your email",
    value: "",
    error: "",
  },
  firstName: {
    id: "firstName",
    label: "First Name",
    type: "text",
    inputType: "input",
    placeholder: "First Name",
    value: "",
    error: "",
  },
  lastName: {
    id: "lastName",
    label: "Last Name",
    required: true,
    type: "text",
    inputType: "input",
    placeholder: "Last Name",
    value: "",
    error: "",
  },
  Mobile: {
    id: "Mobile",
    label: "Mobile Phone",
    type: "tel",
    inputType: "input",
    placeholder: "Mobile Number",
    value: "",
    error: "",
  },
  Address: {
    id: "Address",
    label: "Address",
    type: "text",
    inputType: "input",
    placeholder: "Enter Address",
    value: "",
    error: "",
  },
  Country: {
    id: "Country",
    label: "Country",
    type: "text",
    inputType: "select",
    value: "India",
    options: ["India"],
  },
  ZipCode: {
    id: "ZipCode",
    label: "Zip Code",
    type: "text",
    inputType: "input",
    placeholder: "ZIP Code",
    value: "",
    error: "",
  },
  City: {
    id: "City",
    label: "City",
    type: "text",
    inputType: "input",
    placeholder: "City",
    value: "",
    error: "",
  },
  State: {
    id: "State",
    label: "State",
    type: "text",
    inputType: "select",
    options: [
      "Maharashtra",
      "Delhi",
      "Karnataka",
      "Tamil Nadu",
      "Uttar Pradesh",
      "Haryana",
      "Punjab",
    ],
    value: "Maharashtra",
  },
};

export const heroImages = [
  {
    avifLow:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:low/v1781565997/shopping1_plnjwz.avif",
    avifGood:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:good/v1781565997/shopping1_plnjwz.avif",
    avifBest:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:best/v1781565997/shopping1_plnjwz.avif",
  },

  {
    avifLow:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:low/v1781565996/shopping3_awfqbb.avif",
    avifGood:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:good/v1781565996/shopping3_awfqbb.avif",
    avifBest:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:best/v1781565996/shopping3_awfqbb.avif",
  },

  {
    avifLow:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:low/v1781565996/shopping2_j1w5xa.avif",
    avifGood:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:good/v1781565996/shopping2_j1w5xa.avif",
    avifBest:
      "https://res.cloudinary.com/dbnfaajnx/image/upload/q_auto:best/v1781565996/shopping2_j1w5xa.avif",
  },
];
