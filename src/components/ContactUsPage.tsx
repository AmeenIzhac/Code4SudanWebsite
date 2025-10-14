import { Link } from 'react-router-dom';

interface ContactUsPageProps {
  lang: 'en' | 'ar';
}

export function ContactUsPage({ lang }: ContactUsPageProps) {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Link 
        to="/" 
        className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
      >
        {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {lang === 'ar' ? 'اتصل بنا' : 'Contact Us'}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed mb-6">
          {lang === 'ar' 
            ? 'مهتم بكتابة مقال للموقع بالعربية أو الإنجليزية؟ لديك أي ملاحظات على مقال أو مشروع موجود؟ راسلنا على البريد الإلكتروني'
            : 'Interested in writing an article for the site in Arabic or English? Have any feedback on an existing post or project? Email us at'
          }{' '}
          <a 
            href="mailto:sudanhackathon@gmail.com"
            className="text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            sudanhackathon@gmail.com
          </a>
          {lang === 'ar' ? '.' : '.'}
        </p>
        
        <p className="text-gray-700 leading-relaxed">
          {lang === 'ar' ? 'قم بزيارتنا على' : 'Visit us on'}{' '}
          <a 
            href="https://www.linkedin.com/company/107259013/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 font-semibold transition-colors"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
