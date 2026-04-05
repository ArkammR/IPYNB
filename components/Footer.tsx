export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-amber-300">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#solutions" className="text-white/70 hover:text-amber-300 transition-colors">Jupyter Notebooks</a></li>
              <li><a href="#solutions" className="text-white/70 hover:text-amber-300 transition-colors">POS Systems</a></li>
              <li><a href="#solutions" className="text-white/70 hover:text-amber-300 transition-colors">Billing Systems</a></li>
              <li><a href="#solutions" className="text-white/70 hover:text-amber-300 transition-colors">Business Websites</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-amber-300">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-amber-300">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-amber-300">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">WhatsApp: +94 XX XXX XXXX</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Email: hello@ipynb.site</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-white/70 hover:text-amber-300 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>Made with ❤️ for businesses in Sri Lanka | © 2024 IPYNB.site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
