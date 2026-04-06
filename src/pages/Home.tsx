import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wind, Sun, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Igreen Creative Developers - Renewable Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>
        
        <div className="max-content relative z-10 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight font-display font-bold">
              Powering India's <span className="text-amber-400">Renewable</span> Future
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl leading-relaxed">
              Pioneering land acquisition and infrastructure solutions for wind and solar energy projects across India.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/services" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-primary/30">
                Our Services
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all shadow-lg">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="max-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">About Our Company</span>
            <h2 className="text-3xl md:text-4xl mb-6">Pioneering Sustainable Infrastructure Development</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              IGREEN CREATIVE DEVELOPERS PRIVATE LIMITED is a pioneering land acquisition company specializing in the renewable energy sector. Our expertise lies in identifying and acquiring land for wind and solar energy projects, ensuring smooth approvals, and facilitating necessary conversions for sustainable infrastructure development.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Inspired by the global Climate-Save Green Revolution and aligned with the MNRE and NAPCC, our mission is to accelerate India's transition toward clean energy by providing comprehensive land acquisition solutions.
            </p>
            <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800"
              alt="Wind Farm"
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl hidden md:block">
              <span className="text-4xl font-bold block">18+</span>
              <span className="text-sm uppercase tracking-wider">Years of Experience</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="max-content">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl mb-6">Comprehensive Solutions for Renewable Energy</h2>
            <p className="text-gray-600">We provide end-to-end support for renewable energy projects, from initial site identification to final infrastructure construction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="text-primary" size={32} />, title: 'Site Identification', desc: 'Assessing and selecting optimal locations for wind and solar projects based on feasibility studies.' },
              { icon: <MapPin className="text-primary" size={32} />, title: 'Land Acquisition', desc: 'Procuring private and revenue land in full compliance with state land policies and regulations.' },
              { icon: <ShieldCheck className="text-primary" size={32} />, title: 'Regulatory Approvals', desc: 'Ensuring smooth clearance from government bodies and regulatory authorities for your projects.' },
              { icon: <Wind className="text-primary" size={32} />, title: 'Wind Energy Projects', desc: 'Specialized land and infrastructure solutions for large-scale wind turbine installations.' },
              { icon: <Sun className="text-primary" size={32} />, title: 'Solar Energy Projects', desc: 'Comprehensive support for solar farm development, from land alienation to grid connection.' },
              { icon: <Zap className="text-primary" size={32} />, title: 'Infrastructure Development', desc: 'Civil and electrical construction including roads, foundations, and high-voltage transmission lines.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
              <h2 className="text-3xl md:text-4xl mb-4">Successful Project Executions</h2>
              <p className="text-gray-600">We have partnered with industry leaders to deliver high-impact renewable energy infrastructure across India.</p>
            </div>
            <Link to="/projects" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800", title: "300 MW Solar Project", client: "Inergy Infra Pvt. Ltd.", location: "Beed Site" },
              { img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800", title: "160 MW Wind Power", client: "Torrent Solar Power LTD", location: "Bhum, Beed, Kaij" },
              { img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800", title: "Wind Project Site", client: "ReNew Power (India) Ltd.", location: "Patoda Site" },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{project.client}</span>
                  <h3 className="text-white text-xl mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-content text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-8">Ready to Power the Future?</h2>
          <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto">
            Let's collaborate to build a greener, cleaner, and more sustainable future for India.
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}

// Re-using MapPin from lucide-react in the services overview
import { MapPin } from 'lucide-react';
