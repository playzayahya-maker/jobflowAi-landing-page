import { useNavigate } from 'react-router-dom';
import { Briefcase, Mail, MessageCircle, Heart } from 'lucide-react';
export function Footer() {
  const navigate = useNavigate();

  const handleSecretClick = () => {
    navigate('/admin');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Job_Flow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed" dir="rtl">
              منصة احترافية لإنشاء السيرة الذاتية ورسائل التحفيز وملفات LinkedIn.
              نساعدك على بناء مسارك المهني.
            </p>
          </div>

          {/* Contact */}
          <div dir="rtl">
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="mailto:jobflow828@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-primary-light" />
                <span className="text-sm">jobflow828@gmail.com</span>
              </a>
              <a
                href="https://wa.me/212673322040"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">0673322040</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div dir="rtl">
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                الرئيسية
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                الأسعار
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                طرق الدفع
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Job_Flow. Made with <Heart className="w-3 h-3 text-danger fill-danger" /> All rights reserved.
          </p>

          {/* Secret admin button */}
          <button
            onClick={handleSecretClick}
            className="w-3 h-3 bg-red-900/40 rounded-full hover:bg-red-700 transition-colors cursor-default opacity-30 hover:opacity-100"
            title=""
            aria-label="admin"
          />
        </div>
      </div>
    </footer>
  );
}
