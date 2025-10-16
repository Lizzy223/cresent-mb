import { Building2, } from 'lucide-react';
import logo from '../assets/logoCrebg.png'

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            {/* <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Crescent</h3>
                <p className="text-xs text-orange-500">MICROFINANCE BANK</p>
              </div>
            </div> */}
             <img src={logo} alt="Crescent Logo" className="h-10 w-auto"/>
            <p className="text-blue-200 text-sm">
              Empowering communities through accessible financial services
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Services', 'Careers', 'News'].map(link => (
                <li key={link}>
                  <a href="#" className="text-blue-200 hover:text-orange-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Savings Account', 'Micro Loans', 'SME Banking', 'Investments'].map(service => (
                <li key={service}>
                  <a href="#" className="text-blue-200 hover:text-orange-500 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-500">Legal</h4>
            <ul className="space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Compliance', 'Security'].map(legal => (
                <li key={legal}>
                  <a href="#" className="text-blue-200 hover:text-orange-500 transition-colors">
                    {legal}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>&copy; 2025 Crescent Microfinance Bank Limited. All rights reserved.</p>
          <p className="mt-2">Licensed by CBN | NDIC Insured</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer