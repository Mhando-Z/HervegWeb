"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, Briefcase } from "lucide-react";
import JobDetailsModal from "./JobDetails";

const jobData = [
  {
    id: "data-analyst-intern",
    title: "Data Analysis Intern",
    shortDescription:
      "Help us turn agricultural data into actionable insights. Work with real field data to support small-scale farmers in East Africa.",
    type: "Non-Paid Internship",
    duration: "3-6 months",
    commitment: "15-20 hours/week",
    location: "Remote",
    startDate: "January 2025",
    fullDescription: {
      aboutUs:
        "HERVeg.05 works with small-scale farmers, especially women and youth, to improve food, income, and climate resilience. We're on the ground. We collect real data. And we use it to make better decisions. Every row in our spreadsheet represents a farmer, a harvest, or a household trying to do better. That's why this role matters.",
      whyLooking:
        "We have data. We need someone who enjoys making sense of it. You’ll help us understand what’s working, what’s not, and what we should do next. Not in theory, in real life.",
      responsibilities: [
        "Working with big, sometimes messy spreadsheets (don't worry—we all start there)",
        "Cleaning and organizing data so it makes sense",
        "Building simple data models",
        "Creating dashboards in Metabase that people actually understand",
        "Spotting trends and patterns in field data",
        "Helping with basic predictions and forecasting",
        "Automating reports so we stop doing the same thing twice",
        "Turning numbers into clear insights for the team",
      ],
      idealCandidate: [
        "You like data and numbers (or are learning to)",
        "You enjoy solving problems and figuring things out",
        "You don't mind asking \"why\" when something doesn't add up",
        "You care about small-scale farmers and rural communities",
        "You believe in what we're building—not just adding a line to your CV",
        "You can work remotely and be available during East Africa Time (EAT)",
      ],
      qualifications: [
        "Recent graduates only",
        "Backgrounds in data, statistics, economics, computer science, agriculture, or related fields",
        "Women are strongly encouraged to apply",
      ],
      tools: {
        required: ["Excel or Google Sheets"],
        niceToHave: [
          "Metabase",
          "Python or R",
          "SQL",
          "Interest in agriculture, climate, or impact work",
        ],
      },
      benefits: [
        "Real experience with live program data",
        "Dashboards and analysis you can show in your portfolio",
        "Hands-on learning in Python or R",
        "Regular feedback and mentorship",
        "A strong reference if you do well",
      ],
      quickDetails: {
        type: "Non-paid internship",
        duration: "3–6 months",
        commitment: "About 15–20 hours per week",
        location: "Fully remote",
        timezone: "Must be available during EAT",
        startDate: "January (rolling applications)",
      },
    },
  },
];

export default function JobListingPage() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleDetailsOpen = (job) => {
    setSelectedJob(job);
    setIsDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section with Pattern Background */}
      <div className="relative overflow-hidden bg-linear-to-br min-h-screen  from-emerald-900 via-teal-800 to-cyan-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30">
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                Open Position
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Join Our Team
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Be part of a mission-driven organization dedicated to empowering
              small-scale farmers and transforming agricultural practices in
              East Africa.
            </p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {/* Job Card */}
            {jobData.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {job.title}
                </h2>
                <p className="text-white/90 mb-4">{job.shortDescription}</p>
                <button
                  onClick={() => handleDetailsOpen(job)}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
      />
    </div>
  );
}
