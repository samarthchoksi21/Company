module.exports = (req, res, next) => {
  const alphaRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const requiredFields = [
    "companyName",
    "companyTagline",
    "registeredIn",
    "teamSize"
  ];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({
        message: `${field} is required`
      });
    }
  }

  const corp = req.body.corporateAddress || {};
  const store = req.body.storeAddress || {};

  const addressRequired = ["street", "city", "state", "country", "postcode", "phone"];

  for (const field of addressRequired) {
    if (!corp[field]) {
      return res.status(400).json({
        message: `corporateAddress.${field} is required`
      });
    }
    if (!store[field]) {
      return res.status(400).json({
        message: `storeAddress.${field} is required`
      });
    }
  }


  const locationFields = ["city", "state", "country"];

  for (const field of locationFields) {
    if (!alphaRegex.test(corp[field])) {
      return res.status(400).json({
        message: `corporateAddress.${field} must contain only letters`
      });
    }
    if (!alphaRegex.test(store[field])) {
      return res.status(400).json({
        message: `storeAddress.${field} must contain only letters`
      });
    }
  }

  if (!phoneRegex.test(corp.phone)) {
    return res.status(400).json({
      message: "Phone number should contain 10 digits"
    });
  }

  if (!phoneRegex.test(store.phone)) {
    return res.status(400).json({
      message: "Phone number should contain 10 digits"
    });
  }


  if (!req.files?.logo) {
    return res.status(400).json({ message: "Logo is required" });
  }

  if (!req.files?.banner) {
    return res.status(400).json({ message: "Banner is required" });
  }

  next();
};
