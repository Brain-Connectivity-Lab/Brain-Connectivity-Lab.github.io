import React from "react";
import {
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  GraduationCap,
  Globe,
} from "lucide-react";

const Contact = () => {
  const infoCards = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="text-gray-300 leading-relaxed">
          650, Fenster Hall
          <br />
          Department of Biomedical Engineering
          <br />
          New Jersey Institute of Technology
          <br />
          Newark, NJ 07102
        </p>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <div>
          <a
            href="mailto:biswal@njit.edu"
            className="text-orange-400 hover:text-orange-300 transition-colors font-semibold text-lg"
          >
            biswal@njit.edu
          </a>
          <p className="text-gray-500 text-sm mt-1">
            Dr. Bharat Biswal · Principal Investigator
          </p>
        </div>
      ),
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: (
        <div>
          <p className="text-gray-300">Monday – Friday</p>
          <p className="text-gray-300 font-medium">9:00 AM – 5:00 PM</p>
          <p className="text-gray-500 text-sm mt-1">By appointment only</p>
        </div>
      ),
    },
  ];

  const quickLinks = [
    {
      label: "NJIT Profile",
      url: "https://people.njit.edu/profile/biswal",
      icon: GraduationCap,
    },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=FJ8WWDYAAAAJ&hl=en",
      icon: Globe,
    },
    {
      label: "NJIT Biomedical Engineering",
      url: "https://engineering.njit.edu/biomedical",
      icon: ExternalLink,
    },
  ];

  return (
    <div>
      {/* ── Hero Header ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/8 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-orange-500">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Reach out for collaborations, research inquiries, or to learn more
            about joining the Brain Connectivity Lab.
          </p>
        </div>
      </section>

      {/* ── Main Two-Column Layout ───────────────────────────────────────────── */}
      <div className="px-4 pb-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* ── Left Column: Info + Quick Links ──────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Info cards */}
            {infoCards.map(({ icon: Icon, title, content }) => (
              <div
                key={title}
                className="bg-gray-800 rounded-xl p-6 flex items-start gap-5 hover:bg-gray-750 transition-colors border border-gray-700/50"
              >
                <div className="bg-orange-500/10 p-3 rounded-lg flex-shrink-0">
                  <Icon size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {title}
                  </h3>
                  {content}
                </div>
              </div>
            ))}

            {/* Quick Links */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-orange-500 font-bold text-lg mb-4">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {quickLinks.map(({ label, url, icon: Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-300 hover:text-orange-400 transition-colors group"
                  >
                    <Icon
                      size={16}
                      className="text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0"
                    />
                    <span className="text-sm font-medium">{label}</span>
                    <ExternalLink
                      size={13}
                      className="ml-auto text-gray-600 group-hover:text-orange-400 transition-colors flex-shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Map ─────────────────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 flex flex-col flex-1 min-h-[480px]">
              {/* Map header */}
              <div className="px-6 py-5 border-b border-gray-700 flex items-center gap-3">
                <div className="bg-orange-500/10 p-2.5 rounded-lg">
                  <MapPin size={20} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    Visit Our Lab
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Fenster Hall, NJIT · Newark, NJ
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Fenster+Hall,+NJIT,+Newark,+NJ+07102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors font-medium flex-shrink-0"
                >
                  <ExternalLink size={14} />
                  Open in Maps
                </a>
              </div>

              {/* Embedded map */}
              <div className="flex-1">
                <iframe
                  src="https://maps.google.com/maps?q=Fenster%20Hall,%20NJIT,%20Newark,%20NJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lab Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent border border-orange-500/20 rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-3">
                Interested in Joining?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We welcome researchers at all levels — from undergraduate
                students to postdoctoral fellows. If you're passionate about
                brain connectivity and neuroimaging, we'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="mailto:biswal@njit.edu"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold text-white"
              >
                <Mail size={18} />
                Send an Email
              </a>
              <a
                href="/people"
                className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors px-6 py-3 rounded-lg font-semibold"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
