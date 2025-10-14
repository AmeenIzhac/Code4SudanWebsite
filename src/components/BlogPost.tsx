import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

interface BlogPostProps {
  lang: 'en' | 'ar';
}

export function BlogPost({ lang }: BlogPostProps) {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">
          {lang === 'ar' ? 'المقال غير موجود' : 'Blog post not found'}
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Link 
        to="/" 
        className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
      >
        {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
      </Link>
      
      <article>
        <header className="mb-8 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title[lang]}
          </h1>
          <p className="text-gray-500 text-sm mb-4">{post.date}</p>
        </header>

        <div 
          className="prose prose-lg max-w-none mb-12"
          style={{ 
            lineHeight: '1.8',
            fontSize: '1.0625rem'
          }}
        >
          {post.content[lang].split('\n\n').map((paragraph, index) => {
            // Check if it's a heading
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            
            // Check if it starts with a bullet point (· or -)
            if (paragraph.startsWith('·') || paragraph.startsWith('-')) {
              const items = paragraph.split('\n').filter(item => item.trim());
              return (
                <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  {items.map((item, i) => {
                    const formattedItem = item
                      .replace(/^[·\-]\s*/, '')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">$1</a>');
                    return (
                      <li
                        key={i}
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: formattedItem }}
                      />
                    );
                  })}
                </ul>
              );
            }
            
            // Regular paragraph - handle bold text and links
            const processedText = paragraph
              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
              .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:underline">$1</a>');
            
            return (
              <p 
                key={index} 
                className="mb-6 leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: processedText }}
              />
            );
          })}
        </div>

        <footer className="pt-8 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img 
                src={post.author.image} 
                alt={post.author.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover flex-shrink-0 shadow-md"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-2 text-lg">{post.author.name}</p>
                <p className="text-gray-700 leading-relaxed">
                  {post.author.bio[lang]}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
