/* eslint-disable no-unused-vars */
import React from 'react'
import {Phone, Mail, MapPin, ArrowRight,  } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[Lato] mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-2xl font-[Lato] mx-auto">
            Visit us at our office or reach out through any of our contact channels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: 'Visit Us',
              details: ['Ago Market, Behind Emir\'s Palace', 'Ilorin, Kwara State, Nigeria'],
              color: 'from-orange-500 to-orange-600'
            },
            {
              icon: Phone,
              title: 'Call Us',
              details: ['+234 (0) 803 XXX XXXX', '+234 (0) 805 XXX XXXX'],
              color: 'from-blue-600 to-blue-700'
            },
            {
              icon: Mail,
              title: 'Email Us',
              details: ['info@crescentmfb.com', 'support@crescentmfb.com'],
              color: 'from-orange-600 to-orange-700'
            }
          ].map((contact, i) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-[Lato] font-bold mb-4">{contact.title}</h3>
              {contact.details.map((detail, j) => (
                <p key={j} className="text-blue-100 font-[Lato] mb-1">{detail}</p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-flex items-center gap-2"
          >
            Schedule an Appointment
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact