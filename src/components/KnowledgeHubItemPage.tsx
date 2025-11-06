import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { knowledgeHubItems } from '../data/knowledgeHubData';

interface KnowledgeHubItemPageProps {
  lang: 'en' | 'ar';
}

export function KnowledgeHubItemPage({ lang }: KnowledgeHubItemPageProps) {
  const { id } = useParams<{ id: string }>();
  const item = knowledgeHubItems.find((entry) => entry.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <Link
          to="/knowledge-hub"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {lang === 'ar' ? '← الرجوع لمركز المعرفة' : '← Back to Knowledge Hub'}
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          {lang === 'ar' ? 'المورد غير موجود' : 'Resource not found'}
        </h1>
      </div>
    );
  }

  const formatRichText = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">$1</a>');

  const processedSummary = item.summary[lang].map(formatRichText);

  const processedSections = item.sections?.map((section) => ({
    title: section.title[lang],
    content: section.content[lang].map(formatRichText)
  }));

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Link
        to="/knowledge-hub"
        className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
      >
        {lang === 'ar' ? '← الرجوع لمركز المعرفة' : '← Back to Knowledge Hub'}
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {item.title[lang]}
          </h1>
        </header>

        <section className="space-y-6 mb-12">
          {processedSummary.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-gray-700"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </section>

        {processedSections && processedSections.length > 0 && (
          <section className="space-y-12 mb-12">
            {processedSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
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

        {item.videos.length > 0 && (
          <section className="space-y-8">
            {item.videos[0].embed ? (
              <div>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-4">
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
                <p className="text-lg font-medium text-gray-900">
                  {item.videos[0].title[lang]}
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <a
                  href={item.videos[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  {item.videos[0].title[lang]}
                </a>
              </div>
            )}

            {item.videos.slice(1).length > 0 && (
              <div className="space-y-3">
                {item.videos.slice(1).map((video, index) => (
                  <div key={video.url} className="border-l-4 border-green-500 pl-4">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      {index + 2}. {video.title[lang]} →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </article>
    </div>
  );
}
