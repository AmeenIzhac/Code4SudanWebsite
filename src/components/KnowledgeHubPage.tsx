import { Link } from 'react-router-dom';
import { knowledgeHubItems } from '../data/knowledgeHubData';
import { KnowledgeHubCard } from './KnowledgeHubCard';

interface KnowledgeHubPageProps {
  lang: 'en' | 'ar';
}

export function KnowledgeHubPage({ lang }: KnowledgeHubPageProps) {
  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Link
        to="/"
        className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
      >
        {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {lang === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub'}
        </h1>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          {lang === 'ar'
            ? 'استكشف مصادرنا المنسقة التي تساعدك على التعلم، اكتساب المهارات، والاستعداد لمبادرات Code for Sudan.'
            : 'Explore our curated resources to help you learn, build skills, and get ready for Code for Sudan initiatives.'}
        </p>
      </header>

      <section className="space-y-6">
        {knowledgeHubItems.map((item) => (
          <KnowledgeHubCard
            key={item.id}
            id={item.id}
            title={item.title[lang]}
            excerpt={item.excerpt[lang]}
            lang={lang}
          />
        ))}
      </section>
    </div>
  );
}
