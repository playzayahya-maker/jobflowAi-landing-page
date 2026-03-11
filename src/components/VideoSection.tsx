import { MonitorPlay } from 'lucide-react';
import config from '../config.json';

export function VideoSection() {
  return (
    <section id="video" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10" dir="rtl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MonitorPlay className="w-4 h-4" />
            <span>فيديو توضيحي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            كيفاش يشتغل ؟
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            شاهد الفيديو التوضيحي لفهم كيفية الاستفادة من خدماتنا خطوة بخطوة
          </p>
        </div>

        {/* Responsive YouTube embed */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
          {/* 16:9 aspect ratio container */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`${config.videoUrl}?rel=0&modestbranding=1&showinfo=0`}
              title="كيفاش يشتغل Job_Flow"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Subtle caption below */}
        <p className="text-center text-gray-400 text-sm mt-5" dir="rtl">
          💡 شاهد الفيديو كامل باش تفهم كيفاش تستافد من خدماتنا
        </p>
      </div>
    </section>
  );
}
