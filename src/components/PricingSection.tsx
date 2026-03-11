import { FileText, Briefcase, Package, Crown, Check, Star } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'CV Package',
      nameAr: 'باقة السيرة الذاتية',
      price: 29,
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      features: ['سيرة ذاتية احترافية', 'تصميم عصري', 'صيغة PDF', 'تعديل واحد مجاني'],
      popular: false,
    },
    {
      name: 'Pro Package',
      nameAr: 'الباقة الاحترافية',
      price: 49,
      icon: Briefcase,
      color: 'from-indigo-500 to-purple-600',
      features: ['سيرة ذاتية احترافية', 'رسالة تحفيز', 'تصميم مخصص', 'تعديلان مجانيان', 'تسليم سريع'],
      popular: true,
    },
    {
      name: 'Complete Pack',
      nameAr: 'الباقة الكاملة',
      price: 99,
      icon: Package,
      color: 'from-emerald-500 to-teal-600',
      features: ['سيرة ذاتية احترافية', 'رسالة تحفيز', 'ملف LinkedIn', 'تصميم مخصص', '3 تعديلات مجانية', 'استشارة مجانية'],
      popular: false,
    },
    {
      name: 'Monthly Subscription',
      nameAr: 'الاشتراك الشهري',
      price: 149,
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      features: ['جميع الخدمات', 'تعديلات غير محدودة', 'دعم أولوية', 'تحديثات شهرية', 'استشارات مهنية', 'متابعة شخصية'],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-fade-in-up" dir="rtl">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-dark px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            أسعار تنافسية
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            اختر الباقة المناسبة لك
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            باقات مرنة تناسب احتياجاتك مع جودة عالية وأسعار معقولة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-primary/10 ring-2 ring-primary/20'
                  : 'border-gray-200 shadow-sm'
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                  الأكثر طلباً ⭐
                </div>
              )}

              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4" dir="rtl">{plan.nameAr}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-lg font-semibold text-gray-500">DH</span>
                </div>

                <ul className="space-y-3 mb-6" dir="rtl">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-blue-700 text-white hover:shadow-lg hover:shadow-primary/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  اختر هذه الباقة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
