/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { TrendingUp, Users } from 'lucide-react';

const Mission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-blue-100 to-orange-100 px-8 py-3 rounded-full mb-6"
          >
            <span className="text-blue-900 font-semibold">Our Purpose</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Vision & Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Driving economic growth through financial inclusion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be the Leading Financial Institution Providing support to the Micro Economic Sector in Nigeria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To Provide Comprehensive Financial Services to our Teeming Customers and Deliver Value to our Stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Mission