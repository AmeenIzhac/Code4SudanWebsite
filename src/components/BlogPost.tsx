import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

interface BlogPostProps {
  lang: 'en' | 'ar';
}

export function BlogPost({ lang }: BlogPostProps) {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  const isArabic = lang === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream" dir={isArabic ? 'rtl' : 'ltr'}>
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
            <h1 className="text-3xl font-bold text-white">
              {isArabic ? 'المقال غير موجود' : 'Blog post not found'}
            </h1>
          </div>
        </div>
      </div>
    );
  }

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
          <p className="text-secondary text-sm font-medium mb-3">{post.date}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 max-w-4xl leading-tight">
            {post.title[lang]}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 -mt-8 relative z-20">
          <div
            className="prose prose-lg max-w-none"
            style={{
              lineHeight: '1.8',
              fontSize: '1.0625rem'
            }}
          >
            {post.content[lang].split('\n\n').map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-100">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              // Check if it starts with a bullet point (· or -)
              if (paragraph.startsWith('·') || paragraph.startsWith('-')) {
                const items = paragraph.split('\n').filter(item => item.trim());
                return (
                  <ul key={index} className="space-y-3 text-gray-700 mb-6 ml-4">
                    {items.map((item, i) => {
                      const formattedItem = item
                        .replace(/^[·\-]\s*/, '')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');
                      return (
                        <li
                          key={i}
                          className="leading-relaxed flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                          <span dangerouslySetInnerHTML={{ __html: formattedItem }} />
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // Regular paragraph - handle bold text and links
              const processedText = paragraph
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
                .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');

              return (
                <p
                  key={index}
                  className="mb-6 leading-relaxed text-gray-700"
                  dangerouslySetInnerHTML={{ __html: processedText }}
                />
              );
            })}
          </div>
        </article>

        {/* Author Section */}
        <footer className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              {isArabic ? 'عن الكاتب' : 'About the Author'}
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover flex-shrink-0 shadow-md"
              />
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-2 text-lg">{post.author.name}</p>
                <p className="text-gray-600 leading-relaxed">
                  {post.author.bio[lang]}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
