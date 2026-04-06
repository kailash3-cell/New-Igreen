import { motion } from 'motion/react';
import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="max-content text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-white">About Our Company</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Pioneering the renewable energy landscape in India since 2005.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6">Company Profile</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              IGREEN CREATIVE DEVELOPERS PRIVATE LIMITED is a pioneering land acquisition company specializing in the renewable energy sector. Our expertise lies in identifying and acquiring land for wind and solar energy projects, ensuring smooth approvals, and facilitating necessary conversions for sustainable infrastructure development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a team of seasoned professionals, we are dedicated to streamlining complex land procurement processes, securing approvals, and ensuring regulatory compliance to fast-track renewable energy projects.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Since May 2005, we have been working together with well-known industry leaders, building a reputation for excellence in land survey and acquisition across Maharashtra, Karnataka, and other rural areas.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400" alt="Solar" className="rounded-xl shadow-lg mt-8" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400" alt="Land" className="rounded-xl shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="max-content grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary"
          >
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To accelerate India's transition toward clean energy by providing comprehensive land acquisition solutions. We aim to simplify the path for renewable energy developers by handling the complexities of land procurement and regulatory compliance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-secondary"
          >
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="text-secondary" size={32} />
            </div>
            <h3 className="text-2xl mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              Inspired by the global Climate-Save Green Revolution, we envision a future where sustainable energy powers every corner of India. We strive to be the most trusted partner for renewable energy infrastructure development in the country.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats/Experience */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2005</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">Established</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">Locations Surveyed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">Major Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
