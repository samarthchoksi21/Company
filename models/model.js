const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true
    },
    companyTagline: {
      type: String,
      required: true
    },
    registeredIn: {
      type: String,
      required: true
    },
    teamSize: {
      type: Number,
      required: true
    },
    certification: {
      type: String,
      required: false
    },

    corporateAddress: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      postcode: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    },

    storeAddress: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      postcode: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      }
    },

    logo: {
      type: String,
      required: true
    },
    banner: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const COMPANY = mongoose.model("COMPANY",companySchema)
module.exports = {COMPANY}
