import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 text-zinc-600 border-t border-zinc-200 font-sans antialiased">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 xl:col-span-1">
            <span className="text-xl font-black uppercase tracking-wider text-zinc-900">
              Pitchside<span className="text-emerald-600">.</span>
            </span>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Your premium locker room for authentic team kits, pro-tier boots, and high-performance equipment. Built for speed.
            </p>
          </div>

          {/* Links Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Products</Link></li>
                <li><Link to="/Login" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Sign In</Link></li>
                <li><Link to="/register" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Support
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#shipping" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Shipping Info</a></li>
                <li><a href="#faq" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">FAQs</a></li>
                <li><Link to="/contact" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Contact Pitchside</Link></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">X / Twitter</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">Instagram</a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-600 hover:text-emerald-600 font-medium transition-colors">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-400 order-2 md:order-1 font-medium">
            &copy; 2026 Pitchside. All rights reserved. Delivering authentic gear across Nairobi.
          </p>
          
          <div className="flex space-x-6 order-1 md:order-2">
            <Link 
              to="/privacy-policy" 
              className="text-xs text-zinc-400 hover:text-emerald-600 transition-colors font-semibold uppercase tracking-wider"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              className="text-xs text-zinc-400 hover:text-emerald-600 transition-colors font-semibold uppercase tracking-wider"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;