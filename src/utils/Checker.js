export const checkPassword = (password) => {
  if (password.length < 6) {
    return { valid: false, error: "Password must be at least 6 characters" };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: "Password must contain an uppercase letter" };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, error: "Password must contain a number" };
  }

  return { valid: true, error: "" };
};

export const checkShippingFormData = (formData, setFormData) => {
  let valid = true;
  const updated = { ...formData };

  Object.values(updated).forEach((field) => {
    field.error = ""; 
    field.value=field.value.trim()

    if(field.value==""){
      field.error = `${field.label} can not be empty`;
      valid=false
    }

    if (field.id.includes("Name") ) {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(field.value)) {
        field.error = `${field.label} can only contain letters and spaces`;
        valid = false;
      } else if (field.value.length < 2) {
        field.error = `${field.label} must be at least 2 characters long`;
        valid = false;
      }
    }
  
    if (field.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        field.error = "Invalid email address";
        valid = false;
      }
    }

    if (field.id === "Mobile") {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(field.value)) {
        field.error = "Mobile number must be 10 digits";
        valid = false;
      }
    }

    if (field.id === "Address") {
      if (field.value.length < 5) {
        field.error = "Address must be at least 5 characters long";
        valid = false;
      }
    }

    if (field.id === "ZipCode") {
      const zipRegex = /^[0-9]{6}$/;
      if (!zipRegex.test(field.value)) {
        field.error = "Invalid Zip Code";
        valid = false;
      }
    }
  });

  setFormData(updated);
  return valid;
};