import { motion } from 'motion/react';
import { ShieldCheck, Clock, Users, Award, Zap, Handshake } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="text-primary" size={40} />,
      title: 'Full Compliance',
      desc: 'We ensure 100% regulatory compliance with state land policies and environmental regulations.'
    },
    {
      icon: <Clock className="text-primary" size={40} />,
      title: 'Timely Execution',
      desc: 'Our streamlined processes and expert liaisoning ensure projects stay on schedule.'
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: 'Expert Team',
      desc: 'Seasoned professionals with deep expertise in land acquisition and infrastructure development.'
    },
    {
      icon: <Award className="text-primary" size={40} />,
      title: 'Proven Track Record',
      desc: 'Successfully delivered over 50 major projects for industry leaders across India.'
    },
    {
      icon: <Zap className="text-primary" size={40} />,
      title: 'End-to-End Support',
      desc: 'From site identification to grid connection, we handle every aspect of the project.'
    },
    {
      icon: <Handshake className="text-primary" size={40} />,
      title: 'Trusted Partner',
      desc: 'Building long-term relationships through transparency, integrity, and excellence.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 py-12 text-white border-b border-white/10">
        <div className="max-content">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Why Choose Us</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Your trusted partner in India's renewable energy revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex flex-col items-center text-center"
              >
                <div className="bg-green-50 p-4 rounded-full mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl mb-6">Experience That Matters</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 18 years of experience in the field, we have navigated the complexities of land acquisition in various states of India. Our deep understanding of local laws and community relations allows us to secure land efficiently and ethically.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <div className="text-3xl font-bold text-gray-900">18+</div>
                <div className="text-gray-500 text-sm">Years Experience</div>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-500 text-sm">Major Projects</div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800"
              alt="Wind Energy"
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
