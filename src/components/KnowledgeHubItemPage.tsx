import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { knowledgeHubItems } from '../data/knowledgeHubData';

interface KnowledgeHubItemPageProps {
  lang: 'en' | 'ar';
}

export function KnowledgeHubItemPage({ lang }: KnowledgeHubItemPageProps) {
  const { id } = useParams<{ id: string }>();
  const item = knowledgeHubItems.find((entry) => entry.id === id);
  const isArabic = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-cream" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className="page-hero">
          <div className="page-hero-overlay" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12">
            <Link
              to="/knowledge-hub"
              className="inline-flex items-center text-white/80 hover:text-white font-medium transition-colors mb-6 text-sm"
            >
              <svg className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isArabic ? 'الرجوع لمركز المعرفة' : 'Back to Knowledge Hub'}
            </Link>
            <h1 className="text-3xl font-bold text-white">
              {isArabic ? 'المورد غير موجود' : 'Resource not found'}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  const formatRichText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');

  const processedSummary = item.summary[lang].map(formatRichText);

  const processedSections = item.sections?.map((section) => ({
    title: section.title[lang],
    content: section.content[lang].map(formatRichText)
  }));

  return (
    <div className="min-h-screen bg-cream" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Page Hero Header */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-12">
          <Link
            to="/knowledge-hub"
            className="inline-flex items-center text-white/80 hover:text-white font-medium transition-colors mb-6 text-sm"
          >
            <svg className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isArabic ? 'الرجوع لمركز المعرفة' : 'Back to Knowledge Hub'}
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
            {item.title[lang]}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 -mt-8 relative z-20">
          {/* Summary */}
          <section className="space-y-6 mb-12">
            {processedSummary.map((paragraph, index) => (
              <p
                key={index}
                className="leading-relaxed text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </section>

          {/* Sections */}
          {processedSections && processedSections.length > 0 && (
            <section className="space-y-12">
              {processedSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, index) => (
                      <div
                        key={index}
                        className="leading-relaxed text-gray-700"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}
        </article>

        {/* Videos */}
        {item.videos.length > 0 && (
          <section className="mt-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isArabic ? 'مقاطع الفيديو' : 'Videos'}
            </h2>
            {item.videos[0].embed ? (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={item.videos[0].embed}
                    title={item.videos[0].title[lang]}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-medium text-gray-900">
                    {item.videos[0].title[lang]}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                <a
                  href={item.videos[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-primary hover:text-primary-light transition-colors"
                >
                  {item.videos[0].title[lang]}
                </a>
              </div>
            )}

            {item.videos.slice(1).length > 0 && (
              <div className="space-y-4">
                {item.videos.slice(1).map((video, index) => (
                  <div key={video.url} className="bg-white rounded-xl shadow-md p-5 border-l-4 border-secondary hover:shadow-lg transition-shadow">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg font-medium text-primary hover:text-primary-light transition-colors"
                    >
                      <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-secondary-dark">
                        {index + 2}
                      </span>
                      {video.title[lang]}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
