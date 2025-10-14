import { Link } from 'react-router-dom';

interface KnowledgeHubPageProps {
  lang: 'en' | 'ar';
}

export function KnowledgeHubPage({ lang }: KnowledgeHubPageProps) {
  const videos = [
    {
      title: { en: 'Hackathon Overview', ar: 'نظرة عامة على الهاكاثون' },
      url: 'https://www.youtube.com/watch?v=HimwYCXWe8c&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b',
      embed: 'https://www.youtube.com/embed/HimwYCXWe8c'
    },
    {
      title: { en: 'Problem Identification and Definition', ar: 'تحديد المشكلة وتعريفها' },
      url: 'https://www.youtube.com/watch?v=ktJPV2QvwTU&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=2',
    },
    {
      title: { en: 'Find a Solution', ar: 'إيجاد حل' },
      url: 'https://www.youtube.com/watch?v=ktJPV2QvwTU&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=3',
    },
    {
      title: { en: 'Building your Solution, part 1', ar: 'بناء الحل الخاص بك، الجزء 1' },
      url: 'https://www.youtube.com/watch?v=fR62GCF3_ww&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=4',
    },
    {
      title: { en: 'Building your Solution, part 2', ar: 'بناء الحل الخاص بك، الجزء 2' },
      url: 'https://www.youtube.com/watch?v=_V9tn4DLzcg&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=5',
    },
    {
      title: { en: 'Showcasing your Project Effectively', ar: 'عرض مشروعك بشكل فعال' },
      url: 'https://www.youtube.com/watch?v=m_GRc-CQTWM&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=6',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Link 
        to="/" 
        className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
      >
        {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {lang === 'ar' ? 'مركز المعرفة' : 'Knowledge Hub'}
      </h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-green-600">
          {lang === 'ar' ? 'سلسلة التحضير لـ Code for Sudan' : 'Code for Sudan Prep Series'}
        </h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          {lang === 'ar' 
            ? 'سلسلة معلوماتية من شركائنا، Google Developers Student Club في جامعة الخرطوم، تستعرض عملية إيجاد مشكلة وتطوير حل تقني مناسب لها.'
            : 'An informative series by our partners, Google Developers Student Club at the University of Khartoum, that goes through the process of finding a problem and developing a suitable technical solution to it.'
          }
        </p>
        
        <p className="text-gray-700 leading-relaxed mb-8">
          {lang === 'ar' 
            ? 'هذه سلسلة فيديو مكونة من ستة أجزاء متاحة على YouTube:'
            : 'This is a six-part video series available on Youtube:'
          }
        </p>

        {/* Embedded First Video */}
        <div className="mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg mb-4">
            <iframe
              width="100%"
              height="100%"
              src={videos[0].embed}
              title={videos[0].title[lang]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            1. {videos[0].title[lang]}
          </h3>
        </div>

        {/* Rest of the videos as links */}
        <div className="space-y-3">
          {videos.slice(1).map((video, index) => (
            <div key={index} className="border-l-4 border-green-500 pl-4">
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
      </section>

    </div>
  );
}
