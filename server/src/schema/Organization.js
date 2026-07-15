import mongoose from 'mongoose';


const OrganizationSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    website: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
    industry: {
      type: String,
      default: "",
    },

    companySize: {
      type: String,
      enum: [
        "1-10",
        "11-50",
        "51-200",
        "201-500",
        "500+",
      ],
      default: "1-10",
    },
    // Onboarding Status
    onboardingCompleted: {
      type: Boolean,
      default: false,
    },

    // Organization Status
    isActive: {
      type: Boolean,
      default: true,
    },

    // AI Settings
    aiSettings: {
      crawlFrequency: {
        type: String,
        enum: ["hourly", "daily", "weekly"],
        default: "daily",
      },

      reportFrequency: {
        type: String,
        enum: ["daily", "weekly", "monthly"],
        default: "weekly",
      },

      emailNotifications: {
        type: Boolean,
        default: true,
      },
    },

    // Subscription Limits
    limits: {
      maxCompetitors: {
        type: Number,
        default: 5,
      },

      maxTeamMembers: {
        type: Number,
        default: 1,
      },
    },
})

const Organization = mongoose.model("Organization" , OrganizationSchema);

export default Organization;