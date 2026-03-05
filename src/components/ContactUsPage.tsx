import { Link } from 'react-router-dom';

interface ContactUsPageProps {
  lang: 'en' | 'ar';
}

export function ContactUsPage({ lang }: ContactUsPageProps) {
  const isArabic = lang === 'ar';

  return (
    <div className="min-h-screen bg-cream" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Page Hero Header */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white font-medium transition-colors mb-6 text-sm"
          >
            <svg className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isArabic ? 'الرجوع للصفحة الرئيسية' : 'Back to Home'}
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {isArabic ? 'اتصل بنا' : 'Contact Us'}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            {isArabic
              ? 'نحب أن نسمع منك — سواء كنت كاتبًا أو مطورًا أو متحمسًا للتكنولوجيا'
              : "We'd love to hear from you — whether you're a writer, developer, or tech enthusiast"}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="contact-card group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {isArabic ? 'البريد الإلكتروني' : 'Email Us'}
            </h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {isArabic
                ? 'مهتم بكتابة مقال أو لديك ملاحظات؟ راسلنا'
                : 'Interested in writing an article or have feedback? Drop us a line'}
            </p>
            <a
              href="mailto:team@code4sudan.com"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
            >
              team@code4sudan.com
              <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="contact-card group">
            <div className="w-14 h-14 rounded-2xl bg-[#0077B5]/10 flex items-center justify-center mb-6 group-hover:bg-[#0077B5]/20 transition-colors">
              <svg className="w-7 h-7 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {isArabic
                ? 'تابعنا على لينكد إن للحصول على آخر التحديثات'
                : 'Follow us on LinkedIn for the latest updates'}
            </p>
            <a
              href="https://www.linkedin.com/company/107259013/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#0077B5] font-semibold hover:text-[#005e94] transition-colors"
            >
              {isArabic ? 'زيارة الصفحة' : 'Visit Page'}
              <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Telegram Card */}
          <div className="contact-card group">
            <div className="w-14 h-14 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center mb-6 group-hover:bg-[#0088cc]/20 transition-colors">
              <svg className="w-7 h-7 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 1 0 24 12.056A12.014 12.014 0 0 0 11.944 0Zm5.654 8.22l-1.86 8.77c-.14.636-.506.79-.978.49l-2.78-2.05l-1.34 1.29c-.148.148-.274.274-.56.274l.2-2.82l5.11-4.62c.22-.2-.05-.31-.34-.12l-6.33 3.99l-2.73-.85c-.59-.18-.6-.59.13-.88l10.65-4.1c.49-.18.92.12.76.88Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telegram</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              {isArabic
                ? 'انضم إلى مجتمعنا على تيليجرام'
                : 'Join our community on Telegram'}
            </p>
            <a
              href="https://t.me/+eb1WfhdFFAtkOGU0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#0088cc] font-semibold hover:text-[#006a9e] transition-colors"
            >
              {isArabic ? 'انضم الآن' : 'Join Now'}
              <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Call to action banner */}
        <div className="rounded-2xl bg-primary p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isArabic ? 'هل لديك فكرة مشروع؟' : 'Have a project idea?'}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {isArabic
              ? 'نحن دائمًا نبحث عن أفكار مبتكرة تساعد السودان. شاركنا رؤيتك!'
              : "We're always looking for innovative ideas that help Sudan. Share your vision with us!"}
          </p>
          <a
            href="mailto:team@code4sudan.com"
            className="btn btn-secondary text-lg px-8 py-4"
          >
            {isArabic ? 'تواصل معنا' : 'Get in Touch'}
          </a>
        </div>
      </div>
    </div>
  );
}
