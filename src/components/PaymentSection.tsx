import { Wallet, CheckCircle, MessageCircle } from 'lucide-react';

export function PaymentSection() {
  return (
    <section id="payment" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 sm:p-10 text-center" dir="rtl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
              <Wallet className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              💰 طرق الدفع
            </h2>

            <div className="space-y-4 mt-8 max-w-lg mx-auto">
              <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏦</span>
                </div>
                <div className="text-right flex-1">
                  <p className="font-bold text-gray-900">CashPlus</p>
                  <p className="text-gray-500 text-sm">[Your Name]</p>
                </div>
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              </div>

              <div className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">💳</span>
                </div>
                <div className="text-right flex-1">
                  <p className="font-bold text-gray-900">Wafacash</p>
                  <p className="text-gray-500 text-sm">[Your Name]</p>
                </div>
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-4 flex items-center gap-4 shadow-md mt-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="text-right flex-1">
                  <p className="font-bold text-white text-sm sm:text-base">صيفط الوصل على WhatsApp ✅</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
