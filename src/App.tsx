import { Code } from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { BlogCard } from './components/BlogCard';
import { BlogPost } from './components/BlogPost';
import { ContactUsPage } from './components/ContactUsPage';
import { KnowledgeHubItemPage } from './components/KnowledgeHubItemPage';
import { KnowledgeHubPage } from './components/KnowledgeHubPage';
import { blogPosts } from './data/blogData';

function HomePage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <>
      {lang === 'ar' ? (
        <>
          {/* Navigation Menu */}
          <nav className="mb-12 pb-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="#events" className="text-green-600 hover:text-green-700 font-medium transition-colors">الفعاليات</a>
              <a href="#about" className="text-green-600 hover:text-green-700 font-medium transition-colors">عن المبادرة</a>
              <a href="#blog" className="text-green-600 hover:text-green-700 font-medium transition-colors">المدونة</a>
              <a href="#how-we-work" className="text-green-600 hover:text-green-700 font-medium transition-colors">كيف نعمل</a>
              <Link to="/knowledge-hub" className="text-green-600 hover:text-green-700 font-medium transition-colors">مركز المعرفة</Link>
              <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium transition-colors">اتصل بنا</Link>
            </div>
          </nav>

          {/* Header */}
          <header className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-6" dir="ltr">
              <Code className="w-10 h-10 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Code4Sudan</h1>
            </div>
            <p className="text-xl text-gray-600 mb-6">تمكين السودان عبر التكنولوجيا والتعليم</p>
            <p className="mt-6 text-gray-700">
              <strong className="text-gray-900">انضم إلى المجتمع:</strong>{' '}
              <a
                href="https://t.me/+eb1WfhdFFAtkOGU0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors font-semibold"
              >
                https://t.me/+eb1WfhdFFAtkOGU0
              </a>
            </p>
          </header>

          {/* Events */}
          <section id="events" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-green-600">الفعاليات</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">فعاليات سابقة</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/launch-hackathon"
                      className="text-red-500 hover:text-red-600 font-medium transition-colors underline decoration-red-200 hover:decoration-red-400"
                    >
                      هاكاثون الإطلاق من 1 مايو - 31 يوليو 2025
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">الفعاليات الحالية</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/hackathon-2"
                      className="text-green-500 hover:text-green-600 font-medium transition-colors underline decoration-green-200 hover:decoration-green-400"
                    >
                      هاكاثون 2 - 15 نوفمبر 2025 - الحاضر
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pytorch-hackathon"
                      className="text-green-500 hover:text-green-600 font-medium transition-colors underline decoration-green-200 hover:decoration-green-400"
                    >
                      هاكاثون PyTorch - آخر موعد للمشاركة 28 فبراير 2025
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-red-500">عن المبادرة</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">رسالتنا</h3>
              <p className="mb-4 leading-relaxed">
                رسالتنا هي نشر وتحديث ودعم علوم الحاسوب في السودان — ليس كمجال تعليمي فحسب، بل أيضًا كأداة عملية لمعالجة احتياجات السودان.
              </p>
              <p className="mb-6 leading-relaxed">
                المبادرة تقوم على ركيزتين أساسيتين متساويتين:
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">الركيزة التعليمية</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>دعم وتحسين تعليم علوم الحاسوب في السودان</li>
                  <li>تمكين المعلمين والموجهين بالمصادر</li>
                  <li>تزويد الطلاب بالمعرفة والمهارات العملية الحديثة</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">ركيزة الإنتاج</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>تمكين ومكافأة تطبيق علوم الحاسوب لحل التحديات السودانية</li>
                  <li>توجيه ودعم الابتكار الذي يفيد السودان مباشرة</li>
                  <li>ربط المشاريع والأفكار بالموارد والإرشاد وفرص الشركات الناشئة</li>
                </ul>
              </div>

              <p className="text-gray-600 italic">
                كلا الركيزتين ضروريتان وبنفس الأهمية: تطوير التعليم يؤسس القاعدة، بينما التطبيق الواقعي يحقق الأثر. تكون الحلول فعالة فقط عندما يتقدم التعلم والابتكار العملي معًا.
              </p>
            </div>
          </section>

          {/* Blog */}
          <section id="blog" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-red-500">المدونة</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {blogPosts.map(post => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title.ar}
                  date={post.date}
                  excerpt={post.excerpt.ar}
                  lang="ar"
                />
              ))}
            </div>
          </section>

          {/* How We Work */}
          <section id="how-we-work" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-green-600">كيف نعمل</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">دعم الناس في السودان</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>توفير الوصول للتعليم عبر الجلسات والدروس والمحاضرات</li>
                <li>دعم المعلمين من خلال تمويل المواد والتخطيط وتحسين المناهج والدعم الإعلامي والتغذية الراجعة</li>
                <li>مكافأة الابتكار عبر الحوافز المالية والإرشاد والربط بالخبراء وتوجيه ريادة الأعمال</li>
                <li>ربط أصحاب التحديات بالمواهب التقنية لإيجاد حلول عملية</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">التواصل مع الشتات</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>توفير منصة للتواصل مع الطلاب والمعلمين والمبتكرين في السودان</li>
                <li>إتاحة فرص للتدريس والإرشاد أو التعاون عن بُعد</li>
                <li>دعوة حلول يقودها الشتات لمعالجة تحديات السودان</li>
                <li>تمكين المساهمات المالية لاستدامة برامج التعليم والابتكار</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-12 mt-16 border-t border-gray-200">
            <div className="flex justify-center gap-6 mb-6">
              <Link
                to="/knowledge-hub"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                مركز المعرفة
              </Link>
              <Link
                to="/contact"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                اتصل بنا
              </Link>
            </div>
            <p className="text-gray-500">© 2025 كود فور سودان</p>
          </footer>
        </>
      ) : (
        <>
          {/* Navigation Menu */}
          <nav className="mb-12 pb-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="#events" className="text-green-600 hover:text-green-700 font-medium transition-colors">Events</a>
              <a href="#about" className="text-green-600 hover:text-green-700 font-medium transition-colors">About</a>
              <a href="#blog" className="text-green-600 hover:text-green-700 font-medium transition-colors">Blog</a>
              <a href="#how-we-work" className="text-green-600 hover:text-green-700 font-medium transition-colors">How We Work</a>
              <Link to="/knowledge-hub" className="text-green-600 hover:text-green-700 font-medium transition-colors">Knowledge Hub</Link>
              <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium transition-colors">Contact Us</Link>
            </div>
          </nav>

          {/* Header */}
          <header className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-6" dir="ltr">
              <Code className="w-10 h-10 text-red-600" />
              <h1 className="text-4xl font-bold text-gray-900">Code4Sudan</h1>
            </div>
            <p className="text-xl text-gray-600 mb-6">
              Empowering Sudan through technology and education
            </p>
            <p className="mt-6 text-gray-700">
              <strong className="text-gray-900">Join the community!:</strong>{' '}
              <a
                href="https://t.me/+eb1WfhdFFAtkOGU0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transition-colors font-semibold"
              >
                https://t.me/+eb1WfhdFFAtkOGU0
              </a>
            </p>
          </header>

          {/* Events */}
          <section id="events" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-green-600">Events</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Past Events</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/launch-hackathon"
                      className="text-red-500 hover:text-red-600 font-medium transition-colors underline decoration-red-200 hover:decoration-red-400"
                    >
                      Launch Hackathon of May 1 - Jul 31, 2025
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Events</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    <Link
                      to="/hackathon-2"
                      className="text-green-500 hover:text-green-600 font-medium transition-colors underline decoration-green-200 hover:decoration-green-400"
                    >
                      Hackathon 2 - 15th November 2025 - Present
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pytorch-hackathon"
                      className="text-green-500 hover:text-green-600 font-medium transition-colors underline decoration-green-200 hover:decoration-green-400"
                    >
                      PyTorch Hackathon - Deadline February 28th, 2025
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* About */}
          <section id="about" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-red-500">About</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Mission</h3>
              <p className="mb-4 leading-relaxed">
                Our mission is to spread, modernize, and support computer science in Sudan—not only as an educational field but equally as a practical tool to address Sudanese needs.
              </p>
              <p className="mb-6 leading-relaxed">
                The initiative is built on two equally essential pillars:
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Educational Pillar</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Support and improve CS education in Sudan</li>
                  <li>Empower teachers, mentors, and educators with resources</li>
                  <li>Equip students with modern knowledge and practical skills</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-gray-900">Production Pillar</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Enable and reward the application of CS to solve Sudan-specific challenges</li>
                  <li>Guide and support innovation that benefits Sudan directly</li>
                  <li>Connect projects and ideas with resources, mentorship, and startup opportunities</li>
                </ul>
              </div>

              <p className="text-gray-600 italic">
                Both pillars are necessary and of equal importance: advancing CS education provides a foundation, while real application brings tangible impact. Solutions are effective only when learning and practical innovation move forward together.
              </p>
            </div>
          </section>

          {/* Blog */}
          <section id="blog" className="mb-16 pb-16 border-b border-gray-200 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-red-500">Blog</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {blogPosts.map(post => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title.en}
                  date={post.date}
                  excerpt={post.excerpt.en}
                  lang="en"
                />
              ))}
            </div>
          </section>

          {/* How We Work */}
          <section id="how-we-work" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-8 text-green-600">How We Work</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Supporting People in Sudan</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide access to education through sessions, tutorials, and lectures</li>
                <li>Support teachers and educators by funding materials, planning courses, improving curricula, media support, and feedback</li>
                <li>Reward innovation for Sudan by offering financial incentives, mentorship, expert connections, and startup guidance</li>
                <li>Connect stakeholders with tech talent: facilitate partnerships between those facing local challenges and people with tech skills who can help solve these problems</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Engaging the Diaspora</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Offer a platform to connect with students, educators, and innovators in Sudan</li>
                <li>Provide opportunities to teach, mentor, or collaborate remotely</li>
                <li>Invite diaspora-led solutions that address Sudan's challenges</li>
                <li>Enable financial contributions to sustain education and innovation programs</li>
              </ul>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center pt-12 mt-16 border-t border-gray-200">
            <div className="flex justify-center gap-6 mb-6">
              <Link
                to="/knowledge-hub"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Knowledge Hub
              </Link>
              <Link
                to="/contact"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-gray-500">© 2025 Code4Sudan</p>
          </footer>
        </>
      )}
    </>
  );
}

function LaunchHackathonPage({ lang }: { lang: 'en' | 'ar' }) {
  return (
    <div className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {lang === 'ar' ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{lang === 'ar' ? 'هاكاثون الإطلاق من 1 مايو – 31 يوليو 2025' : 'Launch Hackathon of May 1 – Jul 31, 2025'}</h1>
      </div>

      {/* Hackathon Header */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-green-600">{lang === 'ar' ? 'الهاكاثون' : 'Hackathon'}</h2>
        <p className="mb-2 text-gray-700">
          <strong className="text-gray-900">{lang === 'ar' ? 'الهاكاثون على Devpost:' : 'Hackathon on Devpost:'}</strong>{' '}
          <a
            href="https://code-for-sudan.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 transition-colors font-semibold"
          >
            https://code-for-sudan.devpost.com/
          </a>
        </p>
      </section>

      {/* About the Hackathon */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-red-500">{lang === 'ar' ? 'عن الهاكاثون' : 'About the Hackathon'}</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'نبحث عن:' : "We're looking for:"}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'برامج حاسوبية تقدم قيمة ملموسة للمجتمعات السودانية' : 'Computer programs that deliver tangible value to Sudanese communities'}</li>
            <li>{lang === 'ar' ? 'حلول في مجالات متعددة مثل الصحة والتعليم والمالية والاتصال وغيرها' : 'Solutions across various domains including healthcare, education, finance, communication, and more'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تكون المشاريع تطبيقات جوال أو مواقع أو أدوات برمجية أخرى' : 'Projects can be mobile apps, websites, or any software-based tools'}</li>
            <li>{lang === 'ar' ? 'المرحلة التجريبية مقبولة — ليس مطلوبًا إكمال المنتج بالكامل' : 'Proof-of-concept stage projects are welcome – full product completion is not required'}</li>
            <li>{lang === 'ar' ? 'تشجيع دمج الذكاء الاصطناعي لكنه غير إلزامي' : 'AI integration is encouraged but not mandatory'}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'معايير الأهلية:' : 'Eligibility:'}</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'مفتوح للسودانيين فقط' : 'Open to Sudanese nationals only'}</li>
            <li>{lang === 'ar' ? 'يمكن أن تتكون الفرق من 1-5 أعضاء' : 'Teams can consist of 1-5 members'}</li>
          </ul>
        </div>
      </section>

      {/* Winners */}
      <section className="mb-16 pb-16 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-green-600">{lang === 'ar' ? 'الفائزون في هاكاثون 2025 الافتتاحي' : '2025 Inaugural Hackathon Winners'}</h2>
        <div className="space-y-4 text-gray-700">
          <p>{lang === 'ar' ? 'جائزة المركز الأول بقيمة ' : 'The first place prize of '}<strong>$1000</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-gray-900">AwkData</strong>.</p>
          <p>{lang === 'ar' ? 'جائزة المركز الثاني بقيمة ' : 'The second place prize of '}<strong>$500</strong>{lang === 'ar' ? ' منحت إلى ' : ' was awarded to '}<strong className="text-gray-900">University Platform</strong>.</p>
          <p>{lang === 'ar' ? 'جوائز المركز الثالث بقيمة ' : 'Third place prizes of '}<strong>$100</strong>{lang === 'ar' ? ' لكل فريق منحت إلى ' : ' each were awarded to '}<strong className="text-gray-900">Mission 249</strong>, <strong className="text-gray-900">Elajy</strong>, <strong className="text-gray-900">Monqez</strong> {lang === 'ar' ? 'و' : 'and'} <strong className="text-gray-900">Dawak</strong>. {lang === 'ar' ? 'جائزة اختيار الجمهور بقيمة ' : 'The popular choice prize of '}<strong>$100</strong> {lang === 'ar' ? 'منحت إلى ' : 'was awarded to '}<strong className="text-gray-900">Shobbak</strong>.</p>
        </div>
      </section>

      {/* Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-red-500">{lang === 'ar' ? 'المتطلبات' : 'Requirements'}</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'ماذا تبني' : 'What to Build'}</h3>
          <p className="mb-4 leading-relaxed">
            {lang === 'ar' ? 'أنشئ برنامجًا حاسوبيًا يعالج حاجة محددة داخل المجتمع السوداني. يمكن أن يكون حلك:' : 'Create a computer program that addresses a specific need within Sudanese society. Your solution can be:'}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>{lang === 'ar' ? 'تطبيق جوال يحل تحديًا محليًا' : 'A mobile application that solves a local challenge'}</li>
            <li>{lang === 'ar' ? 'منصة ويب تربط المجتمعات أو تقدم خدمات' : 'A web platform that connects communities or provides services'}</li>
            <li>{lang === 'ar' ? 'أداة تحليل بيانات تقدم رؤى لاتخاذ القرار' : 'A data analysis tool that offers insights for decision-making'}</li>
            <li>{lang === 'ar' ? 'أي حل برمجي يُحدث أثرًا إيجابيًا' : 'Any software-based solution that creates positive impact'}</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{lang === 'ar' ? 'ماذا تُقدم' : 'What to Submit'}</h3>
          <p className="mb-4 leading-relaxed">
            {lang === 'ar' ? 'تُقبل المشاركات بالعربية أو الإنجليزية ويجب أن تتضمن:' : 'Submissions are accepted in Arabic or English and must include:'}
          </p>

          <p className="mb-4 text-gray-600 italic">
            {lang === 'ar' ? 'إذا كنت تفضل إبقاء شيفرتك خاصة، أضف "team@code4sudan.com" كمساهم في مستودعك' : 'If you prefer to keep your code private, add "team@code4sudan.com" as a collaborator to your repository'}
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'التوثيق' : 'Documentation'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'وثيقة مختصرة من صفحة واحدة (PDF) توضّح:' : 'A concise one-page document (PDF format) explaining:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'المشكلة التي يعالجها الحل' : 'The problem your solution addresses'}</li>
                <li>{lang === 'ar' ? 'كيفية عمل الحل' : 'How your solution works'}</li>
                <li>{lang === 'ar' ? 'الأثر المتوقع على المجتمعات السودانية' : 'Expected impact on Sudanese communities'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'فيديو العرض' : 'Demo Video'}</h4>
              <p className="mb-2">{lang === 'ar' ? 'فيديو توضيحي (بحد أقصى 5 دقائق) مرفوع على يوتيوب أو جوجل درايف يوضح بجلاء:' : 'A video demonstration (maximum 5 minutes) uploaded to YouTube or Google Drive that clearly explains:'}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>{lang === 'ar' ? 'ماذا يفعل برنامجك (مع عرض توضيحي)' : "What your program does (with demonstration)"}</li>
                <li>{lang === 'ar' ? 'لماذا هو مفيد للسودان' : "Why it's beneficial to Sudan"}</li>
                <li>{lang === 'ar' ? 'كيف بنيته (التقنيات والمنهجية)' : 'How you built it (technology stack, approach)'}</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-900">{lang === 'ar' ? 'الشيفرة المصدرية' : 'Source Code'}</h4>
              <p>{lang === 'ar' ? 'رابط إلى مستودع الشيفرة المفتوحة (ويفضّل GitHub)' : 'A URL to your open-source code repository (GitHub preferred)'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Hackathon2Page({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';
  const stageCardClass = (ltr: string, rtl: string): string =>
    `space-y-4 rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm transition-shadow hover:shadow-md ${isArabic ? rtl : ltr
    }`;

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'هاكاثون 2' : 'Hackathon 2'}
        </h1>
      </div>

      {isArabic ? (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">حول التحدي</h2>
            <p className="mb-4 leading-relaxed">
              ندعوك لابتكار حلول برمجية تقدم قيمة ملموسة للسودانيين في مجالات مثل الصحة والتعليم والتمويل والاتصال وغيرها.
            </p>
            <p className="mb-4 leading-relaxed">
              يمكن أن يكون مشروعك تطبيقًا للهواتف، أو منصة ويب، أو أي أداة برمجية أخرى. يمكنك تطويره كخدمة مدفوعة أو مجانية. يُشجَّع دمج تقنيات الذكاء الاصطناعي لكنه غير إلزامي.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">شروط المشاركة</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>المسابقة مفتوحة حصريًا للسودانيين داخل السودان وخارجه.</li>
              <li>يمكن أن يتكوّن الفريق من 1 إلى 5 أعضاء.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">لماذا تشارك؟</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong className="text-gray-900">التعلم:</strong> اكتسب معرفة في التحقق من الأفكار، والتفكير المرتكز على الحد الأدنى القابل للمنتج، وأدوات التطوير.
              </li>
              <li>
                <strong className="text-gray-900">تطوير المهارات:</strong> عزّز قدراتك التقنية ووسّع سيرتك المهنية.
              </li>
              <li>
                <strong className="text-gray-900">تأسيس المشاريع:</strong> حوّل مشروعك إلى عمل ربحي أو مبادرة غير ربحية.
              </li>
              <li>
                <strong className="text-gray-900">الأثر الاجتماعي:</strong> ساهم بإيجابية في خدمة السودان.
              </li>
              <li>
                <strong className="text-gray-900">التميّز:</strong> احصل على فرص الفوز بالجوائز.
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">نظرة عامة على المنافسة</h2>
            <p className="mb-6 leading-relaxed">المسابقة تتكون من ثلاث مراحل.</p>

            <div className="space-y-10">
              <div className={stageCardClass('border-l-4 border-l-green-500/80', 'border-r-4 border-r-green-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 1
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تقديم الفكرة</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  في هذه المرحلة تحتاج فقط إلى تقديم فكرتك — لا حاجة للبرمجة أو للنموذج الأولي أو للفيديو. قدّم وصفًا موجزًا (من 1 إلى 3 جمل أو فقرة واحدة) يوضّح مفهومك وخطاب المصعد الخاص بك. يمكنك تقديم عدة أفكار، لكن يجب عليك تعبئة نموذج جديد لكل فكرة.{" "}
                  <Link to="/knowledge-hub/advice-for-proposing-ideas" className="text-green-600 hover:text-green-700 transition-colors">
                    اطلع على نصائحنا لتقديم فكرة مرجح قبولها.
                  </Link>
                </p>
                <div>
                  <p className="font-semibold text-gray-900">معايير الاختيار:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>القيمة للمجتمع السوداني: هل تعالج الفكرة مشكلة حقيقية وتحقق أثرًا اجتماعيًا ملموسًا؟</li>
                    <li>إمكانية التنفيذ: هل يمكن تطويرها واقعيًا خلال المراحل القادمة؟</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">متطلبات التقديم:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>
                      أكمل{' '}
                      <a
                        href="https://forms.gle/bYahYvAqbNYfEx6B9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        نموذج Google
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>بداية التقديمات: 15 نوفمبر 2025</li>
                    <li>نهاية التقديمات: 15 ديسمبر 2025</li>
                    <li>إعلان النتائج: 31 ديسمبر 2025</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-red-500/80', 'border-r-4 border-r-red-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 2
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تنفيذ المشروع</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الفرق المختارة من المرحلة الأولى ستبني نماذجها الأولية. في نهاية هذه المرحلة يجب أن تقدّم نموذجًا يعمل ويُستخدم فعليًا من قبل أشخاص حقيقيين. يهدف النموذج الأولي إلى اختبار الفكرة قبل التوسع، لذا ركّز على التحقق من مدى حاجة الناس للحل وليس على تحسين الشكل.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">فكّر بطريقة رشيقة:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>هل يمكن تنفيذ جزء من العملية يدويًا؟</li>
                    <li>هل يمكن للأدوات مثل البريد الإلكتروني أو واتساب أو إكسل أن تحل محل البنية التحتية المعقدة؟</li>
                    <li>هل تستطيع البناء على برمجيات مفتوحة المصدر أو أدوات جاهزة؟</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">أمثلة:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>منشئ سير ذاتية مدعوم بالذكاء الاصطناعي يمكن أن يبدأ بتحرير السير يدويًا لاختبار الطلب.</li>
                    <li>مدرّس للامتحانات الثانوية يعتمد على الذكاء الاصطناعي يمكن أن يبدأ كواجهة بسيطة لنموذج لغوي جاهز.</li>
                  </ul>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الأثر أهم من التقنية. مجموعة واتساب تضم 50 مستخدمًا نشطًا يوميًا أفضل من تطبيق مبهر يستخدمه خمسة أشخاص فقط.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">ما الذي تقدمه:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>فيديو مدته 5 دقائق يشرح فكرتك ويعرض كيفية استخدامها ويبرهن على التفاعل والنتائج الحقيقية.</li>
                    <li>رابط إلى النموذج التشغيلي.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">معايير التقييم:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>كيف وجّهت ملاحظات المستخدمين عملية التطوير.</li>
                    <li>عدد المستخدمين النشطين.</li>
                    <li>الفوائد الملموسة التي يحصل عليها المستخدمون.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>نتائج المرحلة الأولى وبداية المرحلة الثانية: 1 يناير 2026</li>
                    <li>التسليم النهائي: 15 فبراير 2026</li>
                    <li>إعلان الفائزين: 28 فبراير 2026</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-amber-500/80', 'border-r-4 border-r-amber-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                    المرحلة 3
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">تطوير المنتج</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  الفرق التي تتقدم من المرحلة الثانية ستعمل على تحسين منتجاتها بناءً على ملاحظات المستخدمين. إذا كان نموذجك الأولي بسيطًا أو يعتمد على عمليات يدوية، فهذه هي المرحلة التي تبدأ فيها بكتابة البرمجيات. وإذا كان لديك تطبيق جاهز، فركّز على تحسين المزايا والتصميم والاستقرار مع الحفاظ على قيادة المستخدمين للتطوير.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">ما الذي تقدمه:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>فيديو مدته 5 دقائق يشرح كيفية تطوّر مشروعك مع إبراز ملاحظات المستخدمين والأثر المتحقق.</li>
                    <li>رابط إلى النموذج أو العرض المحدّث.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">الجدول الزمني:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>نتائج المرحلة الثانية وبداية المرحلة الثالثة: 1 مارس 2026</li>
                    <li>التسليم النهائي: 31 مارس 2026</li>
                    <li>إعلان الفائزين: 15 أبريل 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">الجدول الزمني الكامل</h2>
            <p className="mb-6 leading-relaxed">
              فيما يلي الجدول الزمني المحدّث للهاكاثون، حيث تبدأ كل مرحلة في اليوم التالي لانتهاء المرحلة السابقة.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 1: تقديم الفكرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>بداية التقديمات: 15 نوفمبر 2025</li>
                  <li>نهاية التقديمات: 15 ديسمبر 2025</li>
                  <li>إعلان النتائج: 31 ديسمبر 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 2: تنفيذ المشروع</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>نتائج المرحلة الأولى وبداية المرحلة الثانية: 1 يناير 2026</li>
                  <li>التسليم النهائي: 15 فبراير 2026</li>
                  <li>إعلان الفائزين: 28 فبراير 2026</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">المرحلة 3: تطوير المنتج</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>نتائج المرحلة الثانية وبداية المرحلة الثالثة: 1 مارس 2026</li>
                  <li>التسليم النهائي: 31 مارس 2026</li>
                  <li>إعلان الفائزين: 15 أبريل 2026</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الجوائز</h2>
            <p className="mb-4 leading-relaxed">جميع الفرق التي تصل إلى المرحلة الثالثة ستحصل على جوائز.</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <span className="text-xl font-extrabold text-yellow-500">1,000$ - المركز الأول</span>
              </li>
              <li>
                <span className="text-xl font-bold text-yellow-500">1,000$ - موزعة على ما يصل إلى خمسة فرق أخرى</span>
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">سياسة المصدر المفتوح وإعادة الاستخدام</h2>
            <p className="mb-4 leading-relaxed">
              يمكن للمشاركين استخدام برمجيات قائمة أو مفتوحة المصدر بشرط توثيق الاستخدام بوضوح. يجب أن توضّح الإضافات الأصلية التي تم تطويرها خلال الهاكاثون.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الملكية الفكرية والحقوق</h2>
            <p className="mb-4 leading-relaxed">
              يحتفظ المشاركون بالملكية الكاملة لأعمالهم. من خلال المشاركة، تمنح Code4Sudan الإذن لعرض مشروعك لأغراض ترويجية أو تعليمية، مع احتفاظك بالتحكم الإبداعي الكامل.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-green-600">الدعم للمشاركين</h2>
            <p className="mb-6 leading-relaxed">
              على الرغم من أن الفرق تقود مشاريعها بنفسها، ستوفر Code4Sudan دعمًا محدودًا حيثما أمكن.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">الدعم المتاح:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>دعم التمويل: مساهمات مالية صغيرة للاحتياجات الأساسية (مثل الاستضافة أو اشتراكات أدوات الذكاء الاصطناعي) عند إثبات الحاجة.</li>
                  <li>الإرشاد: الوصول إلى التوجيه والروابط مع خبراء أثناء عملية التطوير.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">الموارد:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>
                    تفادي الأخطاء الشائعة: اطلع على مقالات المدونة للحصول على رؤى ونصائح:{' '}
                    <a href="https://code4sudan.com/#blog" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/#blog
                    </a>
                  </li>
                  <li>
                    التحضير للهاكاثون السابق: تصفّح مركز المعرفة لسلسلة التحضير السابقة:{' '}
                    <a href="https://code4sudan.com/knowledge-hub" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/knowledge-hub
                    </a>
                  </li>
                  <li>
                    الفائزون في الهاكاثون السابق: شاهد معرض مشاريع الفرق الفائزة:{' '}
                    <a href="https://code-for-sudan.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code-for-sudan.devpost.com/project-gallery
                    </a>
                  </li>
                  <li>
                    ملاحظات لجنة التحكيم (الهاكاثون السابق): شاهد كلمات لجنة التحكيم في حفل الجوائز:{' '}
                    <a href="https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">About the Challenge</h2>
            <p className="mb-4 leading-relaxed">
              We invite you to create software that delivers tangible value to Sudanese people in areas such as healthcare, education, finance, communication, and beyond.
            </p>
            <p className="mb-4 leading-relaxed">
              Projects may take the form of mobile apps, web platforms, or other software-based tools. They can be developed for profit or offered freely. Integration of artificial intelligence (AI) is encouraged but not required.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Open exclusively to Sudanese people both in Sudan and abroad.</li>
              <li>Teams may consist of 1–5 members.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Why Participate?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Learning:</strong> Gain knowledge in idea validation, MVP centric thinking, and dev tools.</li>
              <li><strong className="text-gray-900">Skill Development:</strong> Enhance your technical abilities and contribute to your portfolio.</li>
              <li><strong className="text-gray-900">Venture Creation:</strong> Potential to evolve your project into a business or non-profit.</li>
              <li><strong className="text-gray-900">Social Impact:</strong> Contribute positively to Sudan.</li>
              <li><strong className="text-gray-900">Recognition:</strong> Win prizes.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Competition Overview</h2>
            <p className="mb-6 leading-relaxed">The competition runs in three stages.</p>

            <div className="space-y-10">
              <div className={stageCardClass('border-l-4 border-l-green-500/80', 'border-r-4 border-r-green-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                    Stage 1
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Idea Submission</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  At this stage, you only need to submit your idea—no coding, prototype, or video required. Provide a short description (1–3 sentences or one paragraph) explaining your concept and elevator pitch. You may submit multiple ideas, but each one requires a new form submission.{" "}
                  <Link to="/knowledge-hub/advice-for-proposing-ideas" className="text-green-600 hover:text-green-700 transition-colors">
                    Here's our advice on how to propose an idea that's likely to be accepted.
                  </Link>
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Selection Criteria:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Value to Sudanese society: Does the idea solve a real problem and generate meaningful social impact?</li>
                    <li>Feasibility: Can it realistically be developed during the upcoming stages?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Submission Requirements:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>
                      Complete the{' '}
                      <a
                        href="https://forms.gle/bYahYvAqbNYfEx6B9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        Google Form
                      </a>
                      .
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Submissions open: November 15, 2025</li>
                    <li>Submissions close: December 15, 2025</li>
                    <li>Results announced: December 31, 2025</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-red-500/80', 'border-r-4 border-r-red-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                    Stage 2
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Project Execution</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Teams selected from Stage 1 will build their prototypes. By the end of this stage, you must present a working prototype actively used by real people. A prototype is an early version of your product used to validate its functionality, usability, and potential impact before scaling. Your focus should be on testing the concept—not polishing the design. The key question is: Does anyone actually want or use this?
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Think lean:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Can part of your process be done manually?</li>
                    <li>Can tools like email, WhatsApp, or Excel replace complex infrastructure?</li>
                    <li>Can you build upon existing open-source or third-party software?</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Examples:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>An AI-powered CV builder could start with manual CV editing to test demand.</li>
                    <li>An AI tutor for high school exams could begin as a simple interface wrapping an existing LLM.</li>
                  </ul>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Impact matters more than technology. A WhatsApp group with 50 daily users is more valuable than a flashy app with 5.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">What to Submit:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>A 5-minute video explaining your idea, showing how it’s used, and demonstrating real engagement and results.</li>
                    <li>A link to your live prototype.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Judging Criteria:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>How user feedback guided your iterations.</li>
                    <li>Number of active users.</li>
                    <li>Tangible benefits delivered to users.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Stage 1 results and Stage 2 kickoff: January 1, 2026</li>
                    <li>Final submission: February 15, 2026</li>
                    <li>Winners announced: February 28, 2026</li>
                  </ul>
                </div>
              </div>

              <div className={stageCardClass('border-l-4 border-l-amber-500/80', 'border-r-4 border-r-amber-500/80')}>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-semibold text-white">
                    Stage 3
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900">Product Development</h3>
                </div>
                <p className="leading-relaxed text-gray-700">
                  Teams advancing from Stage 2 will refine and enhance their products based on user feedback. If your prototype was a simple manual system or chat group, this is where you begin developing software. If you already have an app, this stage is about improving features, design, and reliability. Your focus should remain on making the product more effective and user-driven, not just more polished.
                </p>
                <div>
                  <p className="font-semibold text-gray-900">What to Submit:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>A 5-minute video explaining and demonstrating how your project evolved, emphasizing user feedback and impact.</li>
                    <li>A link to your updated live prototype or demo.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Timeline:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                    <li>Stage 2 results and Stage 3 kickoff: March 1, 2026</li>
                    <li>Final submission: March 31, 2026</li>
                    <li>Winners announced: April 15, 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Full timeline</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 1: Idea Submission</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Submissions open: November 15, 2025</li>
                  <li>Submissions close: December 15, 2025</li>
                  <li>Results announced: December 31, 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 2: Project Execution</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Stage 1 results and Stage 2 kickoff: January 1, 2026</li>
                  <li>Final submission: February 15, 2026</li>
                  <li>Winners announced: February 28, 2026</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Stage 3: Product Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Stage 2 results and Stage 3 kickoff: March 1, 2026</li>
                  <li>Final submission: March 31, 2026</li>
                  <li>Winners announced: April 15, 2026</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Prizes</h2>
            <p className="mb-4 leading-relaxed">All teams that reach Stage 3 will receive awards.</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <span className="text-xl font-extrabold text-yellow-500">$1,000 - 1st Place</span>
              </li>
              <li>
                <span className="text-xl font-bold text-yellow-500">$1,000 - Shared by up to 5 other teams</span>
              </li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Open Source and Reuse Policy</h2>
            <p className="mb-4 leading-relaxed">
              Participants may use pre-existing or open-source software, provided usage is clearly documented. You must demonstrate what original contributions were made during the hackathon.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Intellectual Property &amp; Rights</h2>
            <p className="mb-4 leading-relaxed">
              Participants retain full ownership of their work. By participating, you grant Code4Sudan permission to feature your project for promotional or educational purposes. This ensures you keep creative control while allowing the community to learn from outstanding contributions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-green-600">Support for Participants</h2>
            <p className="mb-6 leading-relaxed">
              While participants lead their own projects, Code4Sudan will provide limited support where possible.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Available Support:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Funding Assistance: Small financial support for essential needs (e.g., hosting, AI tool subscriptions) upon demonstrated need.</li>
                  <li>Mentorship: Access to guidance and expert connections throughout development.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Resources:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>
                    Avoid Common Pitfalls: Read our blog articles for insights and tips:{' '}
                    <a href="https://code4sudan.com/#blog" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/#blog
                    </a>
                  </li>
                  <li>
                    Previous Hackathon Preparation: Access our knowledge hub for past hackathon prep series:{' '}
                    <a href="https://code4sudan.com/knowledge-hub/advice-for-proposing-ideas" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code4sudan.com/knowledge-hub/advice-for-proposing-ideas
                    </a>
                  </li>
                  <li>
                    Previous Hackathon Winners: View the project gallery of our past hackathon winners:{' '}
                    <a href="https://code-for-sudan.devpost.com/project-gallery" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://code-for-sudan.devpost.com/project-gallery
                    </a>
                  </li>
                  <li>
                    Judges' Remarks (Previous Hackathon): Watch the award ceremony remarks from our previous hackathon's judges:{' '}
                    <a href="https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">
                      https://youtu.be/xB016l_xJuM?si=NoRZoEtPECTtJpvx
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function PyTorchHackathonPage({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';

  return (
    <div
      className="min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="mb-12">
        <Link
          to="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 font-medium transition-colors mb-8"
        >
          {isArabic ? '← الرجوع للصفحة الرئيسية' : '← Back to Home'}
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {isArabic ? 'هاكاثون PyTorch' : 'PyTorch Hackathon'}
        </h1>
      </div>

      {isArabic ? (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">نظرة عامة</h2>
            <p className="mb-4 leading-relaxed">
              تدعوك مبادرة Code4Sudan للمشاركة في هاكاثون PyTorch! هذه فرصة للمساهمة في مشروع PyTorch.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">كيف تساهم</h2>
            <p className="mb-4 leading-relaxed">
              نشجعك على استكشاف <a href="https://pytorch.org/docs/stable/community/contribution_guide.html" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">دليل المساهمة الرسمي لـ PyTorch</a> للاطلاع على القائمة الكاملة من الخيارات. للمبتدئين، نوصي بالخيارات التالية:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>تجاوب على أسئلة الناس في منتدى النقاش.</li>
              <li>نعمل تيوتوريال جديد.</li>
              <li>تعدل أو تضيف للتوثيق الموجود.</li>
              <li>تكتشف مشاكل في الكود و تساعد في حلها.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">متطلبات التقديم</h2>
            <p className="mb-4 leading-relaxed">لتقييم مساهماتك، يرجى تقديم ما يلي:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>رابط ملفك الشخصي على GitHub ومنتدى النقاش الخاص بـ PyTorch.</li>
              <li>شرح مفصل للمساهمة الواحدة التي تفتخر بها أكثر.</li>
              <li>فقرة قصيرة تلخص جميع مساهماتك التي أكملتها خلال فترة الهاكاثون (إذا قمت بعدة مساهمات).</li>
              <li>وصف لما كنت تعرفه قبل البدء وما تعلمته في العملية.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">لماذا تشارك؟</h2>
            <p className="mb-4 leading-relaxed">بالإضافة إلى فرصة الفوز بجائزة 100 دولار، تقدم المشاركة في هاكاثون PyTorch العديد من الفوائد القيمة:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">ساهم في واحد من أهم مشاريع الذكاء الاصطناعي:</strong> ساهم مباشرة في PyTorch، أحد أهم أطر التعلم العميق في العالم.</li>
              <li><strong className="text-gray-900">تطوير المهارات والتعلم:</strong> تحدى نفسك واكتسب مهارات تقنية جديدة، وهو محور رئيسي في معايير التحكيم.</li>
              <li><strong className="text-gray-900">بناء ملفك المهني:</strong> أنشئ مساهمات ظاهرة على ملفاتك في GitHub و PyTorch لتعزيز خبرتك المهنية.</li>
              <li><strong className="text-gray-900">التواصل مع المجتمع:</strong> تفاعل مع مجتمع PyTorch الرسمي من خلال أنشطة متنوعة مثل الإجابة على الأسئلة أو تحسين التوثيق.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">معايير التحكيم</h2>
            <p className="mb-4 leading-relaxed">سيتم تقييم المشاركات بناءً على الجودة والكمية.</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">الجودة</h3>
              <p className="mb-2 leading-relaxed">نقيّم دقة واكتمال ووضوح وصرامة عملك التقنية. الأسئلة الرئيسية التي نأخذها في الاعتبار:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>ما مدى دقة مساهمتك؟</li>
                <li>هل حل ردك على مشكلة ما المشكلة بشكل صحيح؟</li>
                <li>ما مدى قيمة مساهمتك للمجتمع وقاعدة الكود؟</li>
                <li>كم تعلمت؟</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">الكمية</h3>
              <p className="leading-relaxed">هذا يقارن حجم عملك مع المشاركين الآخرين. على سبيل المثال، المشارك الذي حل 10 مشاكل بشكل صحيح سيُرتب أعلى من الذي عالج 3 فقط.</p>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-gray-900">ملاحظة مهمة:</strong> لا تقم بإرسال رسائل عشوائية في المنتدى. المساهمات العشوائية أو التي لا معنى لها لن تكسب نقاطًا وقد تضر بسمعتك. يرجى احترام العملية من خلال تقديم مساهمات ذات معنى ومدروسة فقط.
              </p>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">الجدول الزمني</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">فترة التقديم:</strong> آخر موعد للتقديم هو الساعة 5:00 مساءً يوم 28 فبراير 2025.</li>
              <li><strong className="text-gray-900">إعلان الفائز:</strong> بعد أسبوع واحد من انتهاء فترة التقديم.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">الجائزة</h2>
            <p className="text-xl font-bold text-yellow-500">الفائز بالمركز الأول سيحصل على 100 دولار أمريكي.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-red-500">الموارد</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>يرجى قراءة هذا الدليل بعناية، حيث يحتوي على جميع المعلومات اللازمة.</li>
              <li>إذا واجهت صعوبة، لا تتردد في طلب المساعدة في منتدى النقاش.</li>
            </ul>
          </section>
        </>
      ) : (
        <>
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Overview</h2>
            <p className="mb-4 leading-relaxed">
              Code4Sudan invites you to participate in our PyTorch Hackathon! This is an opportunity to contribute to the PyTorch project.
            </p>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">How to Contribute</h2>
            <p className="mb-4 leading-relaxed">
              We encourage you to explore the <a href="https://pytorch.org/docs/stable/community/contribution_guide.html" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors">official PyTorch contribution guide</a> for a full list of options. For beginners, we recommend the following options from the full list to get started:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Respond to questions in the discussion forum.</li>
              <li>Develop a new tutorial.</li>
              <li>Contribute to the existing documentation.</li>
              <li>Report or investigate issues, including reproducing problems.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Submission Requirements</h2>
            <p className="mb-4 leading-relaxed">To have your contributions judged, please provide the following:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>A link to your profiles on both GitHub and the PyTorch discussion forum.</li>
              <li>A detailed explanation of the single contribution you are most proud of.</li>
              <li>A short paragraph summarizing all your contributions completed during the hackathon period (if you made multiple contributions).</li>
              <li>A description of what you knew before starting and what you learnt in the process.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Why Participate?</h2>
            <p className="mb-4 leading-relaxed">Beyond the chance to win the 100 USD grand prize, participating in the PyTorch Hackathon offers several valuable benefits:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Make a Meaningful Contribution:</strong> Directly contribute to PyTorch, one of the world's leading deep learning frameworks.</li>
              <li><strong className="text-gray-900">Skill Development and Learning:</strong> Challenge yourself and acquire new technical skills, which is a key focus of the judging criteria.</li>
              <li><strong className="text-gray-900">Build Your Portfolio:</strong> Create visible contributions for your GitHub and PyTorch profiles to enhance your professional experience.</li>
              <li><strong className="text-gray-900">Community Engagement:</strong> Engage with the official PyTorch community through various activities like responding to questions or improving documentation.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Judging Criteria</h2>
            <p className="mb-4 leading-relaxed">Submissions will be evaluated based on both Quality and Quantity.</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality</h3>
              <p className="mb-2 leading-relaxed">We assess the accuracy, completeness, clarity, and technical rigor of your work. Key questions we consider include:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>How accurate was your contribution?</li>
                <li>Did your response to an issue correctly solve the problem?</li>
                <li>How valuable is your contribution to the community and the codebase?</li>
                <li>How much did you learn?</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quantity</h3>
              <p className="leading-relaxed">This compares the volume of your work against other participants. For example, a participant who correctly resolved 10 issues will be ranked higher than one who addressed only 3.</p>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-gray-700">
                <strong className="text-gray-900">Important Note:</strong> Do not spam the forum. Random or meaningless contributions will not earn points and may harm your reputation. Please respect the process by making only meaningful and well-thought-out contributions.
              </p>
            </div>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-red-500">Timeline</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong className="text-gray-900">Submission Period:</strong> The submission deadline is scheduled for 5:00 PM on February 28th, 2025.</li>
              <li><strong className="text-gray-900">Winner Announcement:</strong> One week after the submission deadline.</li>
            </ul>
          </section>

          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-green-600">Prize</h2>
            <p className="text-xl font-bold text-yellow-500">The first-place winner will receive 100 USD.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-red-500">Resources</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Please read this guide carefully, as it contains all the necessary information.</li>
              <li>If you get stuck, don't hesitate to ask for help in the discussion forum.</li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  return (
    <div
      className={`min-h-screen bg-white text-black max-w-4xl mx-auto px-6 py-12 ${lang === 'ar' ? 'text-right' : ''}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="fixed top-4 right-4 z-50 flex flex-row items-center gap-3" dir="ltr">
        <span className="text-sm font-medium text-gray-600">{lang === 'ar' ? 'اللغة' : 'Language'}</span>
        <div role="group" aria-label={lang === 'ar' ? 'تبديل اللغة' : 'Language toggle'} className="inline-flex rounded-md overflow-hidden border border-gray-300 bg-white shadow-sm">
          <button
            type="button"
            onClick={() => setLang('ar')}
            className={`px-3 py-1.5 text-sm font-medium focus:outline-none transition-colors ${lang === 'ar' ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            aria-pressed={lang === 'ar'}
          >
            AR
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1.5 text-sm font-medium border-l border-gray-300 focus:outline-none transition-colors ${lang === 'en' ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} />} />
        <Route path="/launch-hackathon" element={<LaunchHackathonPage lang={lang} />} />
        <Route path="/hackathon-2" element={<Hackathon2Page lang={lang} />} />
        <Route path="/pytorch-hackathon" element={<PyTorchHackathonPage lang={lang} />} />
        <Route path="/blog/:id" element={<BlogPost lang={lang} />} />
        <Route path="/contact" element={<ContactUsPage lang={lang} />} />
        <Route path="/knowledge-hub" element={<KnowledgeHubPage lang={lang} />} />
        <Route path="/knowledge-hub/:id" element={<KnowledgeHubItemPage lang={lang} />} />
      </Routes>
    </div>
  );
}

export default App;