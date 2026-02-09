import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  lang: 'en' | 'ar';
}

export function BlogCard({ id, title, date, excerpt, lang }: BlogCardProps) {
  const processedExcerpt = excerpt
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>');

  return (
    <Link
      to={`/blog/${id}`}
      className="card group block"
    >
      <div className="card-body">
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p
          className="text-gray-600 leading-relaxed line-clamp-3 mb-4"
          dangerouslySetInnerHTML={{ __html: processedExcerpt }}
        />
        <span className="inline-flex items-center text-primary font-medium group-hover:underline">
          {lang === 'ar' ? 'اقرأ المزيد' : 'Read more'}
          <svg className="w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
