import { Link } from 'react-router-dom';
import { knowledgeHubItems } from '../data/knowledgeHubData';
import { KnowledgeHubCard } from './KnowledgeHubCard';

interface KnowledgeHubPageProps {
  lang: 'en' | 'ar';
}

export function KnowledgeHubPage({ lang }: KnowledgeHubPageProps) {
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
            {isArabic ? 'مركز المعرفة' : 'Knowledge Hub'}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            {isArabic
              ? 'استكشف مصادرنا المنسقة التي تساعدك على التعلم، اكتساب المهارات، والاستعداد لمبادرات Code for Sudan.'
              : 'Explore our curated resources to help you learn, build skills, and get ready for Code for Sudan initiatives.'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeHubItems.map((item) => (
            <KnowledgeHubCard
              key={item.id}
              id={item.id}
              title={item.title[lang]}
              excerpt={item.excerpt[lang]}
              lang={lang}
            />
          ))}
        </div>

        {/* Decorative empty state or CTA */}
        {knowledgeHubItems.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-6 py-3 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {isArabic ? `${knowledgeHubItems.length} مصادر متاحة` : `${knowledgeHubItems.length} resources available`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
