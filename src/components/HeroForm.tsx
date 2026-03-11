import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, User, Mail, Phone, FileText, ChevronDown, Sparkles } from 'lucide-react';
import { useStore } from '../store';

export function HeroForm() {
  const navigate = useNavigate();
  const { addSubmission } = useStore();
  const [form, setForm] = useState({
    package: '',
    fullName: '',
    email: '',
    whatsapp: '',
    details: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const packages = [
    { value: 'cv', label: 'CV Package - 29 DH' },
    { value: 'pro', label: 'Pro Package - 49 DH' },
    { value: 'complete', label: 'Complete Pack - 99 DH' },
    { value: 'monthly', label: 'Monthly Subscription - 149 DH' },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.package) errs.package = 'اختر باقة';
    if (!form.fullName.trim()) errs.fullName = 'أدخل الاسم الكامل';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'أدخل بريد إلكتروني صحيح';
    if (!form.whatsapp.trim()) errs.whatsapp = 'أدخل رقم الواتساب';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      const pkgLabel = packages.find(p => p.value === form.package)?.label || form.package;
      addSubmission({
        fullName: form.fullName,
        email: form.email,
        whatsapp: form.whatsapp,
        package: pkgLabel,
        details: form.details,
      });
      setSubmitting(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div className="text-center lg:text-right order-2 lg:order-1 animate-fade-in-up" dir="rtl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              خدمات احترافية
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              ابني مسارك
              <span className="block bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                المهني اليوم
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 lg:mr-0">
              نقدم لك خدمات احترافية لإنشاء CV عصري، رسائل تحفيز، وملف LinkedIn
              يجذب أصحاب العمل. ابدأ الآن واحصل على فرصتك!
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start" dir="rtl">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <span className="font-medium">تسليم سريع</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <span className="font-medium">جودة عالية</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="text-success text-lg">✓</span>
                </div>
                <span className="font-medium">دعم متواصل</span>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl shadow-primary/10 border border-gray-100 p-6 sm:p-8 max-w-md mx-auto">
              <div className="text-center mb-6" dir="rtl">
                <h2 className="text-2xl font-bold text-gray-900">اطلب خدمتك الآن</h2>
                <p className="text-gray-500 mt-1 text-sm">املأ الاستمارة وسنتواصل معك</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
                {/* Package select */}
                <div className="relative">
                  <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    value={form.package}
                    onChange={e => setForm({ ...form, package: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.package ? 'border-danger' : 'border-gray-200'}`}
                  >
                    <option value="">اختر الباقة</option>
                    {packages.map(p => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  {errors.package && <p className="text-danger text-xs mt-1">{errors.package}</p>}
                </div>

                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    value={form.fullName}
                    onChange={e => setForm({ ...form, fullName: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.fullName ? 'border-danger' : 'border-gray-200'}`}
                  />
                  {errors.fullName && <p className="text-danger text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.email ? 'border-danger' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-danger text-xs mt-1">{errors.email}</p>}
                </div>

                {/* WhatsApp */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="رقم الواتساب"
                    value={form.whatsapp}
                    onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.whatsapp ? 'border-danger' : 'border-gray-200'}`}
                  />
                  {errors.whatsapp && <p className="text-danger text-xs mt-1">{errors.whatsapp}</p>}
                </div>

                {/* Details */}
                <div className="relative">
                  <FileText className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    placeholder="تفاصيل الطلب (اختياري)"
                    rows={3}
                    value={form.details}
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-700 text-white py-3.5 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الطلب
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
