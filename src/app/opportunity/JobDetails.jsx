"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  X,
  CheckCircle,
  Upload,
  Mail,
  User,
  FileText,
  Send,
  AlertCircle,
} from "lucide-react";

export default function JobDetailsModal({
  job,
  isOpen,
  onClose,
  setIsDetailsOpen,
}) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     // Simulate form submission
  //     setTimeout(() => {
  //       setIsSubmitting(false);
  //       setSubmitStatus("success");

  //       // Reset form after 3 seconds
  //       setTimeout(() => {
  //         setShowApplicationForm(false);
  //         setSubmitStatus("idle");
  //         setFormData({ name: "", email: "" });
  //         setCvFile(null);
  //       }, 3000);
  //     }, 2000);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("cv", cvFile);

    const res = await fetch("https://formspree.io/f/xjgvyajo", {
      method: "POST",
      body: form,
    });

    setIsSubmitting(false);
    setSubmitStatus(res.ok ? "success" : "error");
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
    exit: { scale: 0.8, opacity: 0, y: 50 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 300 },
    },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-linear-to-br from-emerald-600 via-teal-600 to-green-600 text-white p-8">
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="relative z-10">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-2 tracking-tight"
                  >
                    {job.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-emerald-100 text-lg"
                  >
                    Full Job Description
                  </motion.p>
                </div>
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-6 cursor-pointer right-6 w-10 h-10 bg-white/40 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/30 z-10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!showApplicationForm ? (
                  <motion.div
                    key="job-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-10"
                  >
                    {/* About Us */}
                    <Section title="About Us (Quick and Honest)" delay={0.1}>
                      <p className="text-gray-700 leading-relaxed">
                        {job.fullDescription.aboutUs}
                      </p>
                    </Section>

                    {/* Why We're Looking */}
                    <Section title="Why We're Looking for You" delay={0.2}>
                      <p className="text-gray-700 leading-relaxed">
                        {job.fullDescription.whyLooking}
                      </p>
                    </Section>

                    {/* Responsibilities */}
                    <Section title="What You'll Actually Be Doing" delay={0.3}>
                      <ul className="space-y-3">
                        {job.fullDescription.responsibilities.map(
                          (item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + index * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </Section>

                    {/* Ideal Candidate */}
                    <Section title="This Role Is for You If..." delay={0.4}>
                      <ul className="space-y-3">
                        {job.fullDescription.idealCandidate.map(
                          (item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                      <p className="mt-4 text-gray-600 italic">
                        You don't need to know everything. You just need to be
                        curious, reliable, and honest.
                      </p>
                    </Section>

                    {/* Qualifications */}
                    <Section title="Who Can Apply" delay={0.5}>
                      <ul className="space-y-3">
                        {job.fullDescription.qualifications.map(
                          (item, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.05 }}
                              className="flex items-start gap-3 text-gray-700"
                            >
                              <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </Section>

                    {/* Tools & Skills */}
                    <Section title="Tools & Skills" delay={0.6}>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">
                            You should be comfortable with:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {job.fullDescription.tools.required.map(
                              (tool, index) => (
                                <span
                                  key={index}
                                  className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg text-sm font-medium border border-emerald-200"
                                >
                                  {tool}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-3">
                            Nice to have (you can learn with us):
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {job.fullDescription.tools.niceToHave.map(
                              (tool, index) => (
                                <span
                                  key={index}
                                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                                >
                                  {tool}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </Section>

                    {/* Benefits */}
                    <Section
                      title="What You'll Get (Even Though It's Non-Paid)"
                      delay={0.7}
                    >
                      <p className="text-gray-700 mb-4">
                        We're upfront—this is a non-paid internship. But it's
                        not empty work.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {job.fullDescription.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-linear-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-100"
                          >
                            <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </Section>

                    {/* How to Apply */}
                    <Section title="How to Apply" delay={0.8}>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Send us to {job.howToApply?.email} with:
                      </p>
                      <ul className="list-disc list-inside space-y-2 mb-4">
                        {job.howToApply.requirements.map((req, index) => (
                          <li key={index} className="text-gray-700">
                            {req}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-700 leading-relaxed">
                        Guidance on what to include:
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        {job.howToApply.guidance.map((guide, index) => (
                          <li key={index} className="text-gray-700">
                            {guide}
                          </li>
                        ))}
                      </ul>
                    </Section>

                    {/* Quick Details */}
                    <Section title="Quick Details" delay={0.8}>
                      <div className="grid md:grid-cols-2 gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-200">
                        {Object.entries(job.fullDescription.quickDetails).map(
                          ([key, value], index) => (
                            <div key={index} className="flex flex-col">
                              <span className="text-sm text-gray-500 font-medium mb-1 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </span>
                              <span className="text-gray-900 font-semibold">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </Section>
                  </motion.div>
                ) : (
                  <motion.div
                    key="application-form"
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <ApplicationForm
                      formData={formData}
                      setFormData={setFormData}
                      cvFile={cvFile}
                      handleFileChange={handleFileChange}
                      handleSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                      submitStatus={submitStatus}
                      onBack={() => setShowApplicationForm(false)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer with Apply Button */}
            {!showApplicationForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-2 bg-linear-to-br hidden from-gray-50 to-gray-100 border-t border-gray-200"
              >
                <div className="flex flex-col  md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">
                      Ready to make an impact? No fancy words needed. Just be
                      real.
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowApplicationForm(true)}
                    className="w-full md:w-auto px-8 py-2 bg-linear-to-r from-emerald-600 via-teal-600 to-green-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Section Component
function Section({ title, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        {title}
      </h3>
      <div className="ml-6">{children}</div>
    </motion.div>
  );
}

// Application Form Component
function ApplicationForm({
  formData,
  setFormData,
  cvFile,
  handleFileChange,
  handleSubmit,
  isSubmitting,
  submitStatus,
  onBack,
}) {
  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15, stiffness: 300 }}
          className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-12 h-12 text-emerald-600" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Application Submitted!
        </h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Thank you for applying. We'll review your application and get back to
          you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <div className=" mx-auto">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 mb-4 transition-colors"
        >
          ← Back to Job Details
        </button>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Apply for This Position
        </h3>
        <p className="text-gray-600">
          Fill in your details below. We'll send your application to{" "}
          <strong>jobs@herveg.org</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 outline-none"
            placeholder="your.email@example.com"
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <FileText className="w-4 h-4 inline mr-2" />
            Upload Your CV, Letter amd etc
          </label>
          <div className="relative">
            <input
              type="file"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
              id="cv-upload"
            />
            <label
              htmlFor="cv-upload"
              className="flex items-center justify-center gap-3 w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 cursor-pointer transition-all duration-200 bg-gray-50 hover:bg-emerald-50"
            >
              <Upload className="w-6 h-6 text-gray-400" />
              <span className="text-gray-600">
                {cvFile ? cvFile.name : "Click to upload CV (PDF, DOC, DOCX)"}
              </span>
            </label>
          </div>
        </div>

        {/* Info Box */}
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
          <AlertCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
          <p className="text-sm text-green-900">
            Your application will be sent directly to{" "}
            <strong>jobs@herveg.org</strong>. Make sure all information is
            accurate before submitting.
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="w-full py-2 bg-linear-to-r cursor-pointer from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Application
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
