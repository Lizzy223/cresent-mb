/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Service' },
    { value: '50K+', label: 'Happy Customers' },
    { value: '₦5B+', label: 'Loans Disbursed' },
    { value: '99%', label: 'Satisfaction Rate' }
  ];

  const features = [
    'CBN Licensed & Regulated',
    'NDIC Insured Deposits',
    'Digital Banking Services',
    'Quick Loan Approval',
    '24/7 Customer Support',
    'Multiple Branch Network'
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
            <h2 className="text-4xl md:text-5xl font-bold font-[Lato] text-blue-900 mb-6">
              About Crescent Microfinance Bank
            </h2>
            <p className="text-gray-600 mb-6 font-[Lato] text-lg leading-relaxed">
              We are a leading microfinance institution in Ilorin, Kwara State, dedicated to providing accessible financial services to individuals and small businesses. Our mission is to empower our community through inclusive banking.
            </p>
            <p className="text-gray-600 mb-8 font-[Lato] text-lg leading-relaxed">
              With over a decade of experience, we have built trust by delivering personalized financial solutions that help our customers achieve their dreams and grow their businesses.
            </p>
            <div className="grid grid-cols-2 font-[Lato] gap-4">
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
                      className="text-4xl font-bold font-[Lato] text-orange-500 mb-2"
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