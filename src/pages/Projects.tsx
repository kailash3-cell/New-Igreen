import { motion } from 'motion/react';

export default function Projects() {
  const projects = [
    {
      title: '300 MW Solar Project',
      client: 'Inergy Infra Pvt. Ltd.',
      location: 'Beed Site',
      details: 'Land acquisition for 300 MW Solar Project, Village NOC, Liaisoning and various project related permissions.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: '160 MW Wind Power Site',
      client: 'Torrent Solar Power LTD',
      location: 'Bhum, Beed, Kaij',
      details: 'Land acquisition for 160 MW Wind power site, Village NOC, Liaisoning and various project related permissions.',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Wind Project Site',
      client: 'ReNew Power (India) Ltd.',
      location: 'Patoda Site',
      details: 'Land acquisition for 15 villages survey, wind project site working as Land Developer and various permissions.',
      img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Bhum Site Survey',
      client: 'Vestas Venture PVT',
      location: 'Osmanabad',
      details: '12 villages survey & Land acquisition for 15 locations.',
      img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Solar Plan Development',
      client: 'GR Green Life India Pvt. Ltd.',
      location: 'Beed-Patoda',
      details: 'Survey & land acquisition for 25 locations with path way.',
      img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Chincholi Site Project',
      client: 'Mytrah Energy (India) Limited',
      location: 'Aurangabad',
      details: '13 villages survey, land acquisition and various permissions as a Developer.',
      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 py-12 text-white border-b border-white/10">
        <div className="max-content">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Projects</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Showcasing our expertise in renewable energy infrastructure across India.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">{project.client}</span>
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-content text-center">
          <h2 className="text-2xl mb-12">Trusted by Industry Leaders</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-bold text-gray-400">Vestas</span>
            <span className="text-2xl font-bold text-gray-400">Torrent Power</span>
            <span className="text-2xl font-bold text-gray-400">Inergy</span>
            <span className="text-2xl font-bold text-gray-400">ReNew Power</span>
            <span className="text-2xl font-bold text-gray-400">Mytrah Energy</span>
          </div>
        </div>
      </section>
    </main>
  );
}
