import React from "react";
import {
  ExternalLink,
  Calendar,
  Users,
  BookOpen,
  Brain,
  Wrench,
} from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume: string;
  pages: string;
  doi: string;
  citations?: string;
  category: string;
  pubmedUrl: string;
}

const Publications = () => {
  const publications: Publication[] = [
    // ── Resting State ──────────────────────────────────────────────────────────
    {
      title:
        "Functional connectivity in the motor cortex of resting human brain using echo-planar MRI",
      authors: "Biswal, B., Yetkin, F. Z., Haughton, V. M., & Hyde, J. S.",
      journal: "Magnetic Resonance in Medicine",
      year: "1995",
      volume: "34(4)",
      pages: "537-541",
      doi: "10.1002/mrm.1910340409",
      citations: "12,000+",
      category: "Resting State",
      pubmedUrl: "https://pubmed.ncbi.nlm.nih.gov/8524021/",
    },
    {
      title: "Toward discovery science of human brain function",
      authors: "Biswal, B. B., Mennes, M., Zuo, X. N., et al.",
      journal: "Proceedings of the National Academy of Sciences",
      year: "2010",
      volume: "107(10)",
      pages: "4734-4739",
      doi: "10.1073/pnas.0911855107",
      citations: "2,300+",
      category: "Resting State",
      pubmedUrl: "https://www.pnas.org/doi/full/10.1073/pnas.0911855107",
    },
    {
      title: "Resting state fMRI: A personal history",
      authors: "Biswal, B. B.",
      journal: "NeuroImage",
      year: "2012",
      volume: "62(2)",
      pages: "938-944",
      doi: "10.1016/j.neuroimage.2012.01.090",
      citations: "430+",
      category: "Resting State",
      pubmedUrl:
        "https://www.sciencedirect.com/science/article/pii/S1053811912001073",
    },
    {
      title:
        "The history and future of resting-state functional magnetic resonance imaging",
      authors: "Biswal, B. B., & Uddin, L. Q.",
      journal: "Nature",
      year: "2025",
      volume: "641",
      pages: "1121-1131",
      doi: "10.1038/s41586-025-08953-9",
      citations: "42+",
      category: "Resting State",
      pubmedUrl: "https://www.nature.com/articles/s41586-025-08953-9",
    },

    // ── Methods & Quality Check ────────────────────────────────────────────────
    {
      title:
        "A functional MRI pre-processing and quality control protocol based on statistical parametric mapping (SPM) and MATLAB",
      authors: "Di, X., & Biswal, B. B.",
      journal: "Frontiers in Neuroimaging",
      year: "2023",
      volume: "1",
      pages: "1070151",
      doi: "10.3389/fnimg.2022.1070151",
      category: "Methods & Quality Check",
      pubmedUrl:
        "https://www.frontiersin.org/journals/neuroimaging/articles/10.3389/fnimg.2022.1070151/full",
    },
    {
      title:
        "WhiFuN: A toolbox to map the white matter functional networks of the human brain",
      authors: "Jain, P., Michael, A. M., Wang, P., Di, X., & Biswal, B. B.",
      journal: "Imaging Neuroscience",
      year: "2025",
      volume: "3",
      pages: "IMAG.a.3",
      doi: "10.1162/IMAG.a.3",
      category: "Methods & Quality Check",
      pubmedUrl:
        "https://direct.mit.edu/imag/article/doi/10.1162/IMAG.a.3/130628/WhiFuN-A-toolbox-to-map-the-white-matter",
    },
  ];

  const categoryConfig: Record<
    string,
    {
      color: string;
      bg: string;
      border: string;
      icon: React.ComponentType<any>;
      accent: string;
    }
  > = {
    "Resting State": {
      color: "text-purple-300",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      accent: "text-purple-400",
      icon: Brain,
    },
    "Methods & Quality Check": {
      color: "text-teal-300",
      bg: "bg-teal-500/10",
      border: "border-teal-500/30",
      accent: "text-teal-400",
      icon: Wrench,
    },
  };

  const categoryOrder = ["Resting State", "Methods & Quality Check"];

  const groupedPublications = categoryOrder.reduce<
    Record<string, Publication[]>
  >((acc, cat) => {
    acc[cat] = publications.filter((p) => p.category === cat);
    return acc;
  }, {});

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-500">
            Publications
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our research contributions to understanding brain connectivity and
            neuroimaging methods
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Publications", value: "200+", icon: BookOpen },
            { label: "Total Citations", value: "25,000+", icon: Users },
            { label: "H-Index", value: "85", icon: ExternalLink },
            { label: "Years Active", value: "30+", icon: Calendar },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg text-center">
              <stat.icon className="mx-auto text-orange-500 mb-3" size={32} />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Publications grouped by category */}
        <div className="space-y-16">
          {categoryOrder.map((cat) => {
            const cfg = categoryConfig[cat];
            const Icon = cfg.icon;
            const pubs = groupedPublications[cat];

            return (
              <section key={cat}>
                {/* Section header */}
                <div
                  className={`flex items-center gap-4 mb-8 pb-4 border-b ${cfg.border}`}
                >
                  <div className={`p-2 rounded-lg ${cfg.bg}`}>
                    <Icon size={28} className={cfg.accent} />
                  </div>
                  <h2 className={`text-3xl font-bold ${cfg.accent}`}>{cat}</h2>
                  <span className="ml-auto text-sm text-gray-500">
                    {pubs.length} publication{pubs.length !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Cards */}
                <div className="space-y-6">
                  {pubs.map((pub, idx) => (
                    <div
                      key={idx}
                      onClick={() =>
                        window.open(
                          pub.pubmedUrl,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className="bg-gray-800 rounded-lg p-8 cursor-pointer hover:bg-gray-750 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/10 group"
                    >
                      {/* Top row: badge + year */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}
                        >
                          {pub.category}
                        </span>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {pub.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-snug flex items-start gap-2 group-hover:text-orange-100 transition-colors">
                        <span>{pub.title}</span>
                        <ExternalLink
                          size={17}
                          className="text-orange-500 flex-shrink-0 mt-1"
                        />
                      </h3>

                      {/* Authors */}
                      <p className="text-gray-300 mb-2 text-sm">
                        {pub.authors}
                      </p>

                      {/* Journal */}
                      <p className="text-orange-400 mb-4 text-sm">
                        <em>{pub.journal}</em>
                        {pub.volume && `, ${pub.volume}`}
                        {pub.pages && `, ${pub.pages}`}
                      </p>

                      {/* Footer: citations + DOI */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        {pub.citations && (
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {pub.citations} citations
                          </span>
                        )}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 hover:text-orange-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                          DOI: {pub.doi}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              Complete Publication List
            </h3>
            <p className="text-gray-300 mb-6">
              For a complete list of publications, please visit our profiles on
              academic databases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://scholar.google.com/citations?user=FJ8WWDYAAAAJ&hl=en"
                className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-lg font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
