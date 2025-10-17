/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
    const stats = [
    { value: 'Leading', label: 'MFB in Kwara' },
    { value: 'Expert', label: 'Advisory Team' },
    { value: 'SME', label: 'Focus Areas' },
    { value: '100%', label: 'Commitment' }
  ];

  const features = [
    'CBN Licensed & Regulated',
    'NDIC Insured Deposits',
    'Physical & Financial Advisory',
    'Technical Business Support',
    'Credit Facilities for SMEs',
    'Economic Venture Financing'
  ];


  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              About Crescent Microfinance Bank
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Crescent Micro Finance Bank evolves with a vision to provide the capital base for economic ventures. We advance credit facilities to small and medium business units which are key players in the micro economic sector.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              While we launch out with credit assistance to the micro sector of our economy, we are mindful of the impact of sustainable macroeconomic activities within the economic system. We are ready to synergize with firms and multinational companies for maximum result.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At Crescent Micro Finance Bank, we have assembled experts ready to offer physical, financial and technical advice to promote economic activities and rejuvenate moribund business ventures.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <motion.p
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className="text-2xl sm:text-4xl font-bold font-[Lato] text-orange-500 mb-2"
                    >
                      {stat.value}
                    </motion.p>
                    <p className="text-white text-sm font-[Lato] font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About