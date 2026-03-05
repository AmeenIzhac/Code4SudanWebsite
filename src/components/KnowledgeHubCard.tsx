import { Link } from 'react-router-dom';

interface KnowledgeHubCardProps {
  id: string;
  title: string;
  excerpt: string;
  lang: 'en' | 'ar';
}

export function KnowledgeHubCard({ id, title, excerpt, lang }: KnowledgeHubCardProps) {
  const processedExcerpt = excerpt
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');

  return (
    <Link
      to={`/knowledge-hub/${id}`}
      className="card group block"
    >
      <div className="card-body flex flex-col h-full">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p
          className="text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1"
          dangerouslySetInnerHTML={{ __html: processedExcerpt }}
        />
        <span className="inline-flex items-center text-primary font-medium group-hover:underline mt-auto">
          {lang === 'ar' ? 'استكشف المزيد' : 'Explore more'}
          <svg className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
