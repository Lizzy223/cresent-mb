/* eslint-disable no-unused-vars */
import React from 'react'
import { ChevronRight, Building2, Users, TrendingUp, Shield, CreditCard, Wallet,  } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Wallet,
      title: 'Savings Account',
      description: 'Secure savings accounts with competitive interest rates to help you grow your wealth',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Micro Loans',
      description: 'Quick and affordable loans for your business and personal needs with flexible repayment',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'SME Banking',
      description: 'Tailored financial solutions for small and medium enterprises to boost your business',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: TrendingUp,
      title: 'Investment Plans',
      description: 'Grow your money with our secure and profitable investment opportunities',
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: Shield,
      title: 'Insurance Services',
      description: 'Protect what matters most with our comprehensive insurance products',
      color: 'from-blue-700 to-blue-800'
    },
    {
      icon: Building2,
      title: 'Agent Banking',
      description: 'Access banking services at your convenience through our network of agents',
      color: 'from-orange-700 to-orange-800'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-[Lato] md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl font-[Lato] text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to meet your unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-[Lato] text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 font-[Lato] mb-4">{service.description}</p>
              <motion.button
                whileHover={{ x: 5 }}
                className="text-orange-600 font-[Lato] font-semibold flex items-center gap-2 group"
              >
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services