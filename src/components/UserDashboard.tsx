import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { CheckCircle, Clock, MessageCircle, ArrowRight, Package, User, Mail, Phone, Briefcase } from 'lucide-react';

export function UserDashboard() {
  const navigate = useNavigate();
  const { currentSubmission } = useStore();

  if (!currentSubmission) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4" dir="rtl">لم يتم العثور على طلب</p>
          <button onClick={() => navigate('/')} className="text-primary font-semibold hover:underline">
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  const isPending = currentSubmission.status === 'pending';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
          <span className="font-medium">العودة للرئيسية</span>
        </button>

        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className={`p-6 ${isPending ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-gradient-to-r from-green-500 to-emerald-600'}`}>
            <div className="flex items-center justify-center gap-3 text-white">
              {isPending ? (
                <Clock className="w-8 h-8" />
              ) : (
                <CheckCircle className="w-8 h-8" />
              )}
              <h1 className="text-2xl font-bold">
                {isPending ? 'طلبك قيد المعالجة' : 'تم إنجاز طلبك ✅'}
              </h1>
            </div>
            <p className="text-center text-white/80 text-sm mt-2">
              رقم الطلب: #{currentSubmission.id.toUpperCase()}
            </p>
          </div>

          {/* Order details */}
          <div className="p-6 space-y-4" dir="rtl">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              تفاصيل الطلب
            </h2>

            <div className="grid gap-3">
              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Package className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">الباقة</p>
                  <p className="font-semibold text-gray-900">{currentSubmission.package}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <User className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">الاسم</p>
                  <p className="font-semibold text-gray-900">{currentSubmission.fullName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">البريد الإلكتروني</p>
                  <p className="font-semibold text-gray-900">{currentSubmission.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-gray-500">الواتساب</p>
                  <p className="font-semibold text-gray-900">{currentSubmission.whatsapp}</p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className={`rounded-xl p-4 mt-4 ${isPending ? 'bg-amber-50 border border-amber-200' : 'bg-green-50 border border-green-200'}`}>
              <div className="flex items-center gap-2">
                {isPending ? (
                  <Clock className="w-5 h-5 text-amber-600" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                <span className={`font-bold ${isPending ? 'text-amber-700' : 'text-green-700'}`}>
                  الحالة: {isPending ? 'قيد الانتظار ⏳' : 'مكتمل ✅'}
                </span>
              </div>
              <p className={`text-sm mt-1 ${isPending ? 'text-amber-600' : 'text-green-600'}`}>
                {isPending
                  ? 'سيتم معالجة طلبك في أقرب وقت. يرجى تأكيد الدفع عبر الواتساب.'
                  : 'تم إنجاز طلبك بنجاح! شكراً لثقتك بنا.'}
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/212673322040"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.98] transition-all mt-6"
            >
              <MessageCircle className="w-6 h-6" />
              تأكيد الدفع عبر الواتساب
            </a>

            <p className="text-center text-gray-400 text-xs mt-2">
              {currentSubmission.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
