export type SupportedLanguage = 'en' | 'ar';

interface LocalizedString {
  en: string;
  ar: string;
}

interface LocalizedTextArray {
  en: string[];
  ar: string[];
}

export interface KnowledgeHubVideo {
  title: LocalizedString;
  url: string;
  embed?: string;
}

export interface KnowledgeHubSection {
  title: LocalizedString;
  content: LocalizedTextArray;
}

export interface KnowledgeHubItem {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  summary: LocalizedTextArray;
  sections?: KnowledgeHubSection[];
  videos: KnowledgeHubVideo[];
}

export const knowledgeHubItems: KnowledgeHubItem[] = [
  {
    id: 'code-for-sudan-prep-series',
    title: {
      en: 'Code for Sudan Prep Series',
      ar: 'سلسلة التحضير لـ Code for Sudan'
    },
    excerpt: {
      en: 'A six-part video series from Google Developer Student Club University of Khartoum guiding teams from identifying problems to showcasing solutions.',
      ar: 'سلسلة فيديو مكونة من ستة أجزاء من نادي مطوري Google الطلابي بجامعة الخرطوم، ترشد الفرق من تحديد المشكلات إلى عرض الحلول.'
    },
    summary: {
      en: [
        'An informative series by our partners, Google Developer Student Club at the University of Khartoum, that goes through the process of finding a problem and developing a suitable technical solution to it.',
        'This is a six-part video series available on YouTube.'
      ],
      ar: [
        'سلسلة معلوماتية من شركائنا، Google Developers Student Club في جامعة الخرطوم، تستعرض عملية إيجاد مشكلة وتطوير حل تقني مناسب لها.',
        'هذه سلسلة فيديو مكونة من ستة أجزاء متاحة على YouTube.'
      ]
    },
    videos: [
      {
        title: {
          en: 'Hackathon Overview',
          ar: 'نظرة عامة على الهاكاثون'
        },
        url: 'https://www.youtube.com/watch?v=HimwYCXWe8c&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b',
        embed: 'https://www.youtube.com/embed/HimwYCXWe8c'
      },
      {
        title: {
          en: 'Problem Identification and Definition',
          ar: 'تحديد المشكلة وتعريفها'
        },
        url: 'https://www.youtube.com/watch?v=ktJPV2QvwTU&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=2'
      },
      {
        title: {
          en: 'Find a Solution',
          ar: 'إيجاد حل'
        },
        url: 'https://www.youtube.com/watch?v=ktJPV2QvwTU&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=3'
      },
      {
        title: {
          en: 'Building your Solution, part 1',
          ar: 'بناء الحل الخاص بك، الجزء 1'
        },
        url: 'https://www.youtube.com/watch?v=fR62GCF3_ww&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=4'
      },
      {
        title: {
          en: 'Building your Solution, part 2',
          ar: 'بناء الحل الخاص بك، الجزء 2'
        },
        url: 'https://www.youtube.com/watch?v=_V9tn4DLzcg&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=5'
      },
      {
        title: {
          en: 'Showcasing your Project Effectively',
          ar: 'عرض مشروعك بشكل فعال'
        },
        url: 'https://www.youtube.com/watch?v=m_GRc-CQTWM&list=PLWczfQ-sU8S5uSJJWrPtweNuUkxOOFA9b&index=6'
      }
    ]
  },
  {
    id: 'advice-for-proposing-ideas',
    title: {
      en: 'Advice for Proposing Good Ideas',
      ar: 'نصائح لتقديم أفكار جيدة'
    },
    excerpt: {
      en: 'Guidance on identifying impactful ideas, understanding marketplaces, building stand-alone apps, and creating effective MVPs.',
      ar: 'إرشادات للتعرف على الأفكار المؤثرة، وفهم الأسواق، وبناء التطبيقات المستقلة، وإنشاء نماذج أولية فعّالة.'
    },
    summary: {
      en: [
        'Practical guidance on how to think about and present strong ideas so that they are more likely to be selected.'
      ],
      ar: [
        'إرشادات عملية حول كيفية التفكير في الأفكار القوية وتقديمها لتكون أكثر احتمالًا للاختيار.'
      ]
    },
    sections: [
      {
        title: {
          en: 'Pain Points and Friction',
          ar: 'نقاط الألم والاحتكاك'
        },
        content: {
          en: [
            'Here are our suggestions for how to think of and propose good ideas so that they\'re more likely to be selected. You need to be aware of 2 concepts:',
            '<ul class="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4"><li>Pain points</li><li>Friction</li></ul>',
            'Any product or service you use provides a certain benefit, such as saving you time, money, or effort. Spending time, money, or effort are all pain points, the product you use is a solution to that pain point. The more time, money or effort you relieve, the more valuable the product is, so think carefully about how much time, money or effort is your idea going to save someone?',
            'At the same time, any product or service requires a certain amount of time, or effort to use. For example downloading an app, creating an account, account set up, learning how to use the software, etc. This is friction, the more friction your idea has, the less likely it is to be used.',
            'A rough equation for how valuable your idea is: value = pain relief / friction.',
            '<strong class="text-gray-900">Case study - Blockbuster vs Netflix.</strong>',
            'Blockbuster required customers to drive to a physical store, browse limited selections, and return DVDs on time to avoid late fees. Netflix started by mailing DVDs directly to your door with no late fees, then moved to instant streaming — giving customers vastly more convenience, variety, and accessibility. So Netflix reduced friction and came out on top.'
          ],
          ar: [
            'هذه اقتراحاتنا لكيفية التفكير وتقديم أفكار جيدة لتكون أكثر احتمالًا للاختيار. تحتاج لمعرفة مفهومين:',
            '<ul class="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4"><li>نقاط الألم</li><li>الاحتكاك</li></ul>',
            'كل منتج أو خدمة تقدم فائدة ما، مثل توفير الوقت أو المال أو الجهد. إنفاق الوقت أو المال أو الجهد هي نقاط ألم، والمنتج الذي تستخدمه هو حل لتلك النقاط. كلما خففت وقتًا أو مالًا أو جهدًا أكثر، زادت قيمة المنتج.',
            'في الوقت نفسه، أي منتج أو خدمة تحتاج وقتًا أو جهدًا للاستخدام: تنزيل تطبيق، إنشاء حساب، الإعداد، التعلم... هذا هو الاحتكاك. كلما زاد الاحتكاك قلّ احتمال استخدام فكرتك.',
            'معادلة تقريبية لقيمة الفكرة: القيمة = تخفيف الألم ÷ الاحتكاك.',
            '<strong class="text-gray-900">دراسة حالة - بلوكباستر مقابل نتفليكس.</strong>',
            'كانت بلوكباستر تتطلب من العملاء القيادة إلى متجر فعلي، تصفح مجموعة محدودة، وإرجاع أقراص DVD في الوقت المحدد لتجنب رسوم التأخير. بدأت نتفليكس بإرسال أقراص DVD مباشرة إلى بابك دون رسوم تأخير، ثم انتقلت إلى البث الفوري — مما منح العملاء راحة وتنوعًا وإمكانية وصول أكبر بكثير. لذا قللت نتفليكس الاحتكاك وتفوقت.'
          ]
        }
      },
      {
        title: {
          en: 'Marketplaces',
          ar: 'الأسواق (Marketplaces)'
        },
        content: {
          en: [
            'In the building world, a marketplace is not just a place for buying and selling. A marketplace is any product or service that requires many users to exist on the platform for it to be functional. For example, Facebook is a marketplace, because it requires many users to exist on the platform for it to be functional. If only one person was on Facebook, it would be useless. Similarly Stack Overflow, GitHub, Volunteer Matching platforms, etc. are marketplaces.',
            'One thing to be careful of with marketplaces is that they are very difficult to get started and maintain. They suffer from a chicken and egg problem. If you have no users, no one will use the platform. If no one is using the platform, it\'s very hard to get the first users. Even once you have users, you need to keep them actively using it. If Facebook had thousands of users but no one was posting, no one would join it.',
            'Therefore marketplaces are very difficult to get started with. They usually require a lot of effort to launch as they need to get many users very suddenly so that they can function. So while it would be nice to have a marketplace where garden hose enthusiasts can meet up with other garden hose enthusiasts, it would likely never work. As for getting a taxi, this is something that a huge number of people need very often, which is why Uber is so successful.'
          ],
          ar: [
            'السوق ليس فقط للشراء والبيع، بل أي منتج أو خدمة تحتاج عددًا كبيرًا من المستخدمين لتعمل. مثل فيسبوك، ستاك أوفرفلو، جيت هب، ومنصات مطابقة المتطوعين.',
            'من الصعب بدء الأسواق والحفاظ عليها لأنها تعاني مشكلة الدجاجة والبيضة. بدون مستخدمين لا يستخدمها أحد، وبدون استخدام من الصعب جذب المستخدمين الأُول. حتى بعد الحصول على مستخدمين يجب إبقاؤهم نشطين.',
            'لذا فالسوق صعب الانطلاق ويحتاج جهدًا كبيرًا وإطلاقًا قويًا. قد لا ينجح سوق لهواة خراطيم المياه، لكن طلب سيارة أجرة حاجة شائعة جدًا — لذا نجحت أوبر.'
          ]
        }
      },
      {
        title: {
          en: 'Stand-Alone Apps',
          ar: 'التطبيقات المستقلة (Stand-Alone Apps)'
        },
        content: {
          en: [
            'We are especially excited to see self-contained apps that deliver value the moment someone installs them, without depending on a wider marketplace or an institution to adopt them. Imagine a farmer using on-device AI to understand soil conditions, a driver optimizing routes in real time, or any focused tool that makes a single user\'s day better right away.',
            'These ideas shine because they can be built, tested, and refined quickly. Still, if you have a bold marketplace or ecosystem-based concept, please submit it—just know we\'ll evaluate it more critically since it takes extra coordination to bring to life.'
          ],
          ar: [
            'نهتم كثيرًا بالأفكار التي تقدّم قيمة فورية للمستخدم دون الاعتماد على شبكة أو جهة تعتمدها. تخيّل تطبيقًا يساعد مزارعًا على استخدام الذكاء الاصطناعي لتحليل التربة، أو أداة تمنح السائق مسارات أكثر كفاءة في الوقت الحقيقي، أو أي حل يُستخدم فور تثبيته ويمنح فائدة ملموسة.',
            'هذه المشاريع يسهل اختبارها وتحسينها بسرعة لأنها لا تحتاج إلى تبنٍ مؤسسي. ومع ذلك، إذا كانت لديك فكرة قوية تعتمد على سوق أو جهة تتبناها، فنرحب بها أيضًا؛ سنقيّمها بعناية أكبر لأن تحويلها إلى واقع يتطلب تنسيقًا أوسع.'
          ]
        }
      },
      {
        title: {
          en: 'MVPs',
          ar: 'النموذج الأولي الأدنى (MVPs)'
        },
        content: {
          en: [
            'Building a Minimum Viable Product (MVP) means not to immediately start working towards the final polished product, but rather make something simple that works as quickly as possible. Look at this image for example:',
            '<div class="flex justify-center mb-6"><img src="/mvp.png" alt="MVP diagram" class="max-w-full rounded shadow-md" loading="lazy" /></div>',
            'Here the product is a moving vehicle. See how the first example is completely useless until you get to the final car, but the bottom example makes something useable immediately with the skateboard, once that is working, they improve it to a scooter, etc. This is a similar process to what you should do with your idea.',
            'If you are building an app, before building an app, you should try think of the simplest way you could make it work. For example, if you\'re making a tutor matching platform, don\'t build an app or website yet, make a Google Form and export the results to a spreadsheet. If you are making a matrimonial app, don\'t build an app or website yet, make a WhatsApp group and let people share profiles in the group.',
            'A great example of an MVP is <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-700 transition-colors">Airbnb</a>. The founders didn\'t build a big website with a complex backend — they just decided to rent some mattresses in their apartment during a conference in San Francisco. They took some photos, put them online, and waited. People actually booked. That proved the idea worked. From that small test, they built Airbnb now worth over $70B.',
            'An app can take months to build. The benefit of building very basic strung together MVPs is that they take very little time to setup, and you can quickly see if people are interested in it and using it, and if so, you already have a community of people ready to on board once you start on the real product.'
          ],
          ar: [
            'بناء MVP يعني عدم السعي فورًا إلى منتج نهائي مصقول، بل صنع شيء بسيط يعمل بأسرع ما يمكن. شاهد الصورة:',
            '<div class="flex justify-center mb-6"><img src="/mvp.png" alt="مخطط MVP" class="max-w-full rounded shadow-md" loading="lazy" /></div>',
            'المنتج هنا مركبة متحركة. المثال الأول غير مجدٍ حتى الوصول للسيارة النهائية، بينما المثال السفلي يقدم لوح تزلج يمكن استخدامه فورًا ثم يتحسن إلى سكوتر... وهكذا. هذا مشابه لما ينبغي فعله مع فكرتك.',
            'قبل بناء تطبيق، فكّر بأبسط طريقة للتنفيذ. مثلًا لمطابقة المدرسين استخدم نموذج جوجل وجدول بيانات بدل التطبيق. لمشروع زواج، ابدأ بمجموعة واتساب لمشاركة الملفات الشخصية.',
            'مثال رائع على MVP هو <a href="https://www.airbnb.com/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-700 transition-colors">إير بي إن بي</a>. لم يقم المؤسسون ببناء موقع كبير مع خلفية معقدة — قرروا فقط تأجير بعض المراتب في شقتهم خلال مؤتمر في سان فرانسيسco. التقطوا بعض الصور، وضعوها على الإنترنت، وانتظروا. حجز الناس فعلاً. أثبت ذلك أن الفكرة نجحت. من ذلك الاختبار الصغير، بنوا إير بي إن بي التي تساوي الآن أكثر من 70 مليار دولار.',
            'قد يستغرق بناء تطبيق أشهرًا. ميزة MVPs البسيطة المتسلسلة أنها سريعة الإعداد وتكشف مبكرًا مدى اهتمام الناس واستخدامهم، وبذلك تبني مجتمعًا جاهزًا عند الانتقال للمنتج الحقيقي.'
          ]
        }
      },
      {
        title: {
          en: 'Resources',
          ar: 'مصادر'
        },
        content: {
          en: [
            'I just touched briefly on some important concepts here, but there is a lot more knowledge on how to come up with ideas, build them, and how to test whether people would use them. Here are some great resources that go into more detail:',
            '<ul class="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0"><li><a href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-700 transition-colors">Y Combinator How to Get and Evaluate Startup Ideas </a></li><li><a href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-700 transition-colors">Y Combinator Startup School</a></li><li>The Mom Test (Book widely available in Arabic, English, and Audio)</li><li>The Lean Startup (Book widely available in Arabic, English, and Audio)</li></ul>'
          ],
          ar: [
            'هذه لمحة سريعة عن مفاهيم مهمة. توجد مصادر كثيرة للتعمق في ابتكار الأفكار وبنائها واختبارها:',
            '<ul class="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-0"><li><a href="https://www.youtube.com/watch?v=Th8JoIan4dg&list=PLQ-uHSnFig5M9fW16o2l35jrfdsxGknNB&index=23" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-700 transition-colors">YC كيفية الحصول على أفكار الشركات الناشئة وتقييمها</a></li><li><a href="https://youtube.com/playlist?list=PLQ-uHSnFig5M9fW16o2ل35jrfdsxGknNB&si=k0z_Fk_Y2MmX6zrz" target="_blank" rel="noopener noreferrer" class="text-red-600 hover:text-red-700 transition-colors">YC مدرسة الشركات الناشئة</a></li><li>كتاب The Mom Test (متوفر بالعربية والإنجليزية والصوت)</li><li>كتاب The Lean Startup (متوفر بالعربية والإنجليزية والصوت)</li></ul>'
          ]
        }
      }
    ],
    videos: []
  }
];
