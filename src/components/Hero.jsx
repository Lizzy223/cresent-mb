/* eslint-disable no-unused-vars */
import React from 'react'
import {  Users, TrendingUp, Shield, CreditCard, Wallet, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl font-[Lato] md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Empowering Your
            <span className="text-orange-500"> Financial</span> Future
          </motion.h1>
          <motion.p
            className="text-xl mb-8 font-[Lato] text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Trusted microfinance solutions for individuals and businesses in Ilorin, Kwara State
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 font-[Lato] text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
            >
              Open an Account
              <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 font-[Lato] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-2xl"
          >
            <div className="bg-white rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-sm font-[Lato] text-gray-500">Total Balance</p>
                    <p className="text-2xl font-[Lato] font-bold text-blue-900">₦2,450,000</p>
                  </div>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 font-[Lato] bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">Savings</p>
                  <p className="text-lg font-bold text-blue-900">₦1,800,000</p>
                </div>
                <div className="flex-1 font-[Lato] bg-orange-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600">Loans</p>
                  <p className="text-lg font-bold text-orange-600">₦650,000</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Community' },
                { icon: Shield, label: 'Secure' },
                { icon: CreditCard, label: 'Easy Access' },
                { icon: TrendingUp, label: 'Growth' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white text-sm font-[Lato] font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero