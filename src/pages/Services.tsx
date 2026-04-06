import { motion } from 'motion/react';
import { Search, Map, FileCheck, Landmark, Zap, HardHat, Construction } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="text-primary" size={40} />,
      title: 'Site Identification & Feasibility Studies',
      desc: 'Assessing and selecting optimal locations for wind and solar projects through rigorous environmental and technical evaluation.'
    },
    {
      icon: <Map className="text-primary" size={40} />,
      title: 'Land Acquisition',
      desc: 'Procuring private and revenue land in full compliance with state land policies, including reserved land, SC/ST land, and government-allotted land.'
    },
    {
      icon: <FileCheck className="text-primary" size={40} />,
      title: 'NA Conversion & Revenue Land Alienation',
      desc: 'Converting agricultural land for renewable energy use and securing all necessary approvals from revenue departments.'
    },
    {
      icon: <Landmark className="text-primary" size={40} />,
      title: 'Regulatory Approvals & Liaisoning',
      desc: 'Ensuring smooth clearance from government bodies and regulatory authorities through professional liaisoning services.'
    },
    {
      icon: <Search className="text-primary" size={40} />,
      title: 'Evacuation Line Survey',
      desc: 'Conducting surveys for transmission infrastructure from low voltage (LV) to high voltage (HV) capacity.'
    },
    {
      icon: <Construction className="text-primary" size={40} />,
      title: 'Civil Infrastructure Development',
      desc: 'Construction of civil infrastructure including access roads, turbine foundations, and site buildings.'
    },
    {
      icon: <Zap className="text-primary" size={40} />,
      title: 'Electrical Infrastructure Construction',
      desc: 'Construction of electrical infrastructure including DP Yards, 33KV lines, PSS, and EHV lines.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 py-12 text-white border-b border-white/10">
        <div className="max-content">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Services</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              End-to-end solutions for renewable energy infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card flex flex-col items-start"
              >
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-content">
          <div className="text-center mb-16">
            <h2 className="text-3xl mb-4">Our Project Execution Process</h2>
            <p className="text-gray-600">How we deliver excellence in every project.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { step: '01', title: 'Survey', desc: 'Initial site identification and feasibility study.' },
              { step: '02', title: 'Acquisition', desc: 'Legal procurement and land alienation.' },
              { step: '03', title: 'Approvals', desc: 'Securing all regulatory and government clearances.' },
              { step: '04', title: 'Construction', desc: 'Civil and electrical infrastructure development.' },
            ].map((item, index) => (
              <div key={index} className="flex-1 relative z-10 text-center md:text-left">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto md:mx-0 mb-6 shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
