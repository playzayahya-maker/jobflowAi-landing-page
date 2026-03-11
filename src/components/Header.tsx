import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    // If we're not on the landing page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent">
              Job_Flow
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('hero')} className="text-gray-600 hover:text-primary font-medium transition-colors">
              الرئيسية
            </button>
            <button onClick={() => scrollTo('video')} className="text-gray-600 hover:text-primary font-medium transition-colors">
              كيفاش يشتغل
            </button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-600 hover:text-primary font-medium transition-colors">
              الأسعار
            </button>
            <button onClick={() => scrollTo('payment')} className="text-gray-600 hover:text-primary font-medium transition-colors">
              الدفع
            </button>
            <button
              onClick={() => scrollTo('hero')}
              className="bg-gradient-to-r from-primary to-blue-700 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              اطلب الآن
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 animate-slide-in">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollTo('hero')} className="text-gray-600 hover:text-primary font-medium text-right py-2">
                الرئيسية
              </button>
              <button onClick={() => scrollTo('video')} className="text-gray-600 hover:text-primary font-medium text-right py-2">
                كيفاش يشتغل
              </button>
              <button onClick={() => scrollTo('pricing')} className="text-gray-600 hover:text-primary font-medium text-right py-2">
                الأسعار
              </button>
              <button onClick={() => scrollTo('payment')} className="text-gray-600 hover:text-primary font-medium text-right py-2">
                الدفع
              </button>
              <button
                onClick={() => scrollTo('hero')}
                className="bg-gradient-to-r from-primary to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-center"
              >
                اطلب الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
