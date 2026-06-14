export type Language = "en" | "ar";

export const content: Record<string, any> = {
  en: {
    nav: [
      {
        label: "Builder DNA",
        href: "#builder-dna",
      },
      {
        label: "Projects",
        href: "#projects",
      },
      {
        label: "AI Workflows",
        href: "#ai-systems",
      },
      {
        label: "Capabilities",
        href: "#skills",
      },
      {
        label: "About",
        href: "#about",
      },
    ],
    header: {
      name: "Abouella",
      letter: "A",
      bookBtn: "Book a Meeting",
    },
    hero: {
      eyebrow:
        "Full-stack Business Systems Developer · AI Automation Specialist",
      brand: "Abdullah Abouella",
      title: ["I turn business operations", "into software."],
      subtitle:
        "Most companies don't need another tool.\n\nThey need someone who can understand how the business actually works, identify what's slowing it down, and build systems that eliminate manual work, connect disconnected processes, and help the team operate at scale.",
      proofPoints: [
        "Bilingual Arabic / English systems",
        "HR, payroll, attendance, reporting",
        "React, Supabase, Oracle, SQL",
        "Workflow and AI automation",
        "Database-first product thinking",
      ],
      bookBtn: "Book a Meeting",
      exploreBtn: "View Projects",
      resumeBtn: "Download Resume",
    },
    builder: {
      badge: "Builder DNA",
      title: ["The way I build", "is the difference."],
      subtitle:
        "My strength is not only writing code. It is understanding how the business actually moves, then designing the system around that reality.",
      cards: [
        {
          title: "Operations First",
          text: "Before I think about features, I look at how work moves through the business.\n\nWho does what. What information they need. Where delays happen. Where mistakes happen. Where time gets wasted.\n\nSoftware becomes much easier to build when the process is understood first.",
        },
        {
          title: "Structure Before Screens",
          text: "Good systems are built on clear data models, business rules, permissions, and workflows.\n\nThe interface is important.\n\nThe foundation underneath it is what keeps the product useful five years later.",
        },
        {
          title: "From Conversations To Systems",
          text: "Business owners describe problems.\n\nEmployees describe frustrations.\n\nManagers describe bottlenecks.\n\nMy role is translating all of that into workflows, databases, reports, automations, and software that solve the underlying problem.",
        },
        {
          title: "Automation That Earns Its Place",
          text: "I don't add AI because it's trendy.\n\nI use automation when it removes repetitive work, improves visibility, speeds up decisions, or connects disconnected parts of the business.\n\nIf it doesn't create a measurable improvement, it doesn't belong in the system.",
        },
      ],
      console: {
        input: "messy business process",
        thinking: "data model + workflow + permissions + UI",
        output: "internal system people can actually use",
      },
    },
    process: {
      badge: "From chaos to system",
      title: ["How I turn operations", "into software."],
      subtitle:
        "I start where the problems actually live: inside the process, the people, the data, and the daily workarounds holding the business together.",
      steps: [
        {
          label: "01",
          title: "Understand the mess",
          text: "I map the real process, the exceptions, the approvals, the spreadsheets, the repeated tasks, and the places where work slows down or breaks.",
        },
        {
          label: "02",
          title: "Model the data",
          text: "I define the entities, relationships, permissions, statuses, and reporting structure the system needs before a single screen gets built.",
        },
        {
          label: "03",
          title: "Design the workflow",
          text: "I turn business rules into clear user journeys, approval flows, role-based actions, notifications, and audit-friendly steps.",
        },
        {
          label: "04",
          title: "Build the product",
          text: "I build the interface, database logic, integrations, reports, and bilingual experience around how the team actually works.",
        },
        {
          label: "05",
          title: "Automate the repeatable",
          text: "I add AI agents, webhooks, and workflow automation where they remove manual work, speed up follow-ups, or connect disconnected tools.",
        },
      ],
      closing: "Software that fits the operation, not the other way around.",
    },
    projectsView: {
      badge: "PROJECTS",
      title: ["SYSTEMS", "I'VE BUILT"],
      subtitle:
        "A selection of systems that prove depth: business logic, database design, role-based workflows, reporting, bilingual UX, and automation.",
      flagship: "Flagship business system",
      explore: "Open Case Study",
      problem: "What was broken",
      built: "What I designed",
      outcome: "What this proves",
      capabilities: "Project Capabilities",
      tech: "Technology",
      gallery: "Product Screenshots",
      previewStrip: "Product Screenshots",
    },
    behind: {
      badge: "The work behind the screens",
      title: ["A system is more than", "the screens you click."],
      subtitle:
        "The real work lives underneath: data structure, permissions, workflow states, audit trails, reports, integrations, and automation paths that keep the operation moving.",
      cards: [
        {
          title: "Schema & business rules",
          text: "Employee records, contracts, payroll components, requests, approvals, documents, attendance states, and reporting outputs connected as one structured model.",
        },
        {
          title: "Permissions & audit logic",
          text: "Role-based actions, admin controls, employee self-service, approval queues, history tracking, and operational accountability.",
        },
        {
          title: "Reporting & decision clarity",
          text: "Exportable reports, dashboards, filters, status visibility, and structured outputs that help managers understand what is happening.",
        },
        {
          title: "Automation paths",
          text: "AI agents, voice flows, webhook routing, CRM updates, calendar checks, follow-ups, and repetitive task handling.",
        },
      ],
      stats: [
        {
          value: "60+",
          label: "functional HR/payroll screens",
        },
        {
          value: "2",
          label: "working languages: Arabic and English",
        },
        {
          value: "5+",
          label: "operational modules shown with screenshots",
        },
        {
          value: "Full-stack",
          label: "from database logic to user interface",
        },
      ],
      quote:
        "I do not build screens first. I build the system the screens depend on.",
    },
    demos: {
      badge: "AI Workflow Automation",
      title: ["See Automation", "In Action"],
      subtitle:
        "Not every task needs a person behind it.\n\nSome work is predictable, repetitive, and rule-based.\n\nThese examples show how AI assistants, voice agents, and workflow automation can answer questions, qualify leads, book appointments, route requests, and keep information moving through the business.",
      note: "",
      launch: "Try Demo",
      laraTitle: "Ask Lara About My Work",
      laraText:
        "Explore projects, systems, and ideas through conversation.\n\nInstead of searching through the portfolio, ask a question and let Lara point you in the right direction. Lara can speak Arabic and English.",
      laraSubtitle: "Suggested Questions",
      prompts: [
        "How would you approach building a system for my business?",
        "What's the most complex project you've built so far?",
        "What would you automate first inside a growing company?",
        "What makes him different from a normal developer?",
      ],
    },
    skillsView: {
      badge: "TECHNICAL CAPABILITIES",
      title: [
        "Tools I use to design, build,",
        "and automate business systems.",
      ],
      subtitle:
        "The technology is never the goal.\n\nIt's the foundation behind the systems, workflows, reports, and automations that help businesses operate more efficiently.",
      toolsLabel: "Tools",
    },
    about: {
      badge: "About Abdullah",
      title: ["I build software around how", "businesses actually operate."],
      body: "I’m a full-stack developer and product builder focused on HR systems, internal tools, databases, reporting, and AI automation.\n\nMy main project is a bilingual HR & Payroll platform I’m building from the ground up, covering employees, contracts, attendance, leave, payroll, self-service, permissions, reports, and admin workflows.\n\nThat project shaped how I think: understand the operation first, design the structure underneath, then build software people can actually use.",
      points: [
        "Technical side: frontend, backend, databases, integrations, reporting, and automation tools.",
        "Operational side: approvals, payroll, attendance, employee records, documents, admin workflows, and business rules.",
        "The result: practical systems that make daily operations easier to run, audit, and scale.",
      ],
    },
    why: {
      badge: "Why work with me?",
      title: ["I build the full system,", "not one isolated piece."],
      subtitle:
        "I fit projects where the product needs more than a nice interface or a disconnected backend.\n\nI can understand the operation, design the structure, build the database, create the workflows, develop the UI, connect the reports, and add automation where it makes sense.",
      cards: [
        "I think through the business before building the product.",
        "I can design the database, workflow, UI, reports, and automation together.",
        "I build complete Arabic and English business systems.",
        "I care about clean interfaces and strong foundations.",
      ],
    },
    footer: {
      badge: "Next Step",
      title: ["Let’s build the system", "your business needs."],
      subtitle:
        "Have a process, product idea, or internal workflow that deserves to become a real system? Let’s talk.",
      bookBtn: "Book a Meeting",
      emailBtn: "Send Email",
      whatsappBtn: "WhatsApp",
      name: "Abdullah Abouella",
      rights:
        "Business systems, internal tools, reporting workflows, and AI automation.",
    },
  },
  ar: {
    nav: [
      {
        label: "طريقة البناء",
        href: "#builder-dna",
      },
      {
        label: "المشاريع",
        href: "#projects",
      },
      {
        label: "الأتمتة",
        href: "#ai-systems",
      },
      {
        label: "القدرات",
        href: "#skills",
      },
      {
        label: "عن عبدالله",
        href: "#about",
      },
    ],
    header: {
      name: "أبوالعلا",
      letter: "ع",
      bookBtn: "احجز اجتماعًا",
    },
    hero: {
      eyebrow: "",
      brand: "عبدالله أبوالعلا",
      title: ["أحوّل طريقة عمل الشركات", "إلى أنظمة وبرمجيات فعّالة."],
      subtitle:
        "مع نمو الأعمال تبدأ الجداول بالانتشار، وتتوزع المعلومات بين الموظفين، وتتحول المهام اليومية إلى سلسلة طويلة من العمل اليدوي المتكرر.\n\nأقوم بدراسة العمليات التشغيلية وفهم طريقة عمل الفريق، ثم أبني الأنظمة والأدوات التي توحد البيانات، تنظم الإجراءات، وتمنح الإدارة رؤية أوضح وتحكماً أكبر.",
      proofPoints: [
        "أنظمة عربية / إنجليزية",
        "موارد بشرية، رواتب، حضور، تقارير",
        "React وSupabase وOracle وSQL",
        "أتمتة سير العمل والذكاء الاصطناعي",
        "تفكير يبدأ من قاعدة البيانات",
      ],
      bookBtn: "احجز اجتماعًا",
      exploreBtn: "استعرض المشاريع",
      resumeBtn: "تحميل السيرة الذاتية",
    },
    builder: {
      badge: "طريقة البناء",
      title: ["الفرق ليس في الكود فقط،", "بل في طريقة التفكير."],
      subtitle:
        "قوتي ليست في كتابة الكود فقط، بل في فهم كيف تتحرك العملية داخل الشركة ثم بناء النظام حول هذا الواقع.",
      cards: [
        {
          title: "التشغيل أولاً",
          text: "قبل التفكير في الشاشات والخصائص، أركز على فهم سير العمل داخل الشركة.\n\nكيف تنتقل المهام؟ من المسؤول؟ أين تتكرر الأخطاء؟ وأين يضيع الوقت؟",
        },
        {
          title: "الأساس قبل الواجهة",
          text: "الواجهة مهمة، لكنها ليست ما يجعل النظام ناجحاً.\n\nالنجاح يبدأ من هيكلة البيانات، الصلاحيات، القواعد التشغيلية، وسير الإجراءات بشكل صحيح.",
        },
        {
          title: "تحويل التعقيد إلى وضوح",
          text: "العمليات المعقدة لا تحتاج إلى مزيد من التعقيد.\n\nهدفي هو تبسيط الإجراءات وربط المعلومات وبناء نظام يجعل العمل أسهل وأكثر وضوحاً للجميع.",
        },
        {
          title: "أتمتة تخدم الهدف",
          text: "لا أستخدم الذكاء الاصطناعي لمجرد استخدامه.\n\nأستخدمه عندما يساعد على تقليل العمل المتكرر، تسريع الإجراءات، وتحسين تدفق المعلومات داخل الشركة.",
        },
      ],
      console: {
        input: "عملية تشغيلية غير منظمة",
        thinking: "بيانات + سير عمل + صلاحيات + واجهة",
        output: "نظام داخلي يستخدمه الناس فعلاً",
      },
    },
    process: {
      badge: "من الفوضى إلى النظام",
      title: ["كيف أحوّل التشغيل", "إلى برمجيات."],
      subtitle:
        "لا أبدأ بالديكور. أبدأ بسير العمل، البيانات، المستخدمين، والقواعد التي تحكم العملية.",
      steps: [
        {
          label: "01",
          title: "فهم الفوضى",
          text: "أرسم العملية كما تحدث فعلاً: الحالات الخاصة، الموافقات، الملفات، الجداول، والعمل اليدوي المتكرر.",
        },
        {
          label: "02",
          title: "تصميم البيانات",
          text: "أحدد الكيانات والعلاقات والحالات والصلاحيات وبنية التقارير قبل بناء الشاشات.",
        },
        {
          label: "03",
          title: "بناء سير العمل",
          text: "أحوّل قواعد العمل إلى رحلات استخدام واضحة، أدوار، إجراءات، تنبيهات، وسجلات قابلة للمراجعة.",
        },
        {
          label: "04",
          title: "تنفيذ المنتج",
          text: "أبني الواجهة، منطق قاعدة البيانات، التكاملات، التقارير، والتجربة العربية/الإنجليزية حول الاستخدام اليومي.",
        },
        {
          label: "05",
          title: "أتمتة ما يتكرر",
          text: "أستخدم المساعدين الذكيين، الـ Webhooks، وأدوات سير العمل عندما توفر وقتًا بدون جعل النظام هشًا.",
        },
      ],
      closing:
        "نظام مصمم حول طريقة عمل الشركة، لا نظام يجبر الشركة على تغيير طريقة عملها.",
    },
    projectsView: {
      badge: "المشاريع",
      title: ["أنظمة", "قمت ببنائها"],
      subtitle:
        "مجموعة من الأعمال التي تثبت العمق: منطق تشغيل، تصميم بيانات، صلاحيات، تقارير، واجهات عربية/إنجليزية، وأتمتة.",
      flagship: "النظام الرئيسي",
      explore: "افتح دراسة الحالة",
      problem: "ما الذي كان مكسورًا؟",
      built: "ما الذي صممته؟",
      outcome: "ماذا يثبت هذا؟",
      capabilities: "قدرات المشروع",
      tech: "التقنيات",
      gallery: "لقطات من النظام",
      previewStrip: "لقطات من النظام",
    },
    behind: {
      badge: "ما وراء الشاشات",
      title: ["النظام ليس مجرد شاشات", "يضغط عليها المستخدم."],
      subtitle:
        "القيمة الحقيقية تكون في ما خلف الواجهة: هيكلة البيانات، الصلاحيات، حالات سير العمل، سجل العمليات، التقارير، التكاملات، ومسارات الأتمتة التي تجعل النظام يعمل بثبات.",
      cards: [
        {
          title: "هيكلة البيانات وقواعد العمل",
          text: "سجلات الموظفين، العقود، عناصر الرواتب، الطلبات، الموافقات، المستندات، حالات الحضور، ومخرجات التقارير ضمن نموذج واحد مترابط.",
        },
        {
          title: "الصلاحيات وسجل العمليات",
          text: "إجراءات حسب الدور، تحكم إداري، خدمة ذاتية للموظفين، قوائم موافقات، تتبع تاريخ العمليات، ووضوح في المسؤوليات.",
        },
        {
          title: "تقارير ووضوح للقرارات",
          text: "تقارير قابلة للتصدير، لوحات متابعة، فلاتر، تتبع الحالات، ومخرجات منظمة تساعد الإدارة على فهم ما يحدث فعلياً.",
        },
        {
          title: "مسارات الأتمتة",
          text: "وكلاء ذكاء اصطناعي، تدفقات صوتية، Webhooks، تحديثات CRM، فحص المواعيد، المتابعات، ومعالجة المهام المتكررة.",
        },
      ],
      stats: [
        {
          value: "+60",
          label: "شاشة وظيفية للموارد البشرية والرواتب",
        },
        {
          value: "2",
          label: "لغتان فعليتان: العربية والإنجليزية",
        },
        {
          value: "+5",
          label: "وحدات تشغيلية موثقة بلقطات شاشة",
        },
        {
          value: "Full-stack",
          label: "من منطق البيانات إلى واجهة المستخدم",
        },
      ],
      quote: "أنا لا أصمم الصفحة فقط. أنا أصمم كيف يتحرك العمل.",
    },
    demos: {
      badge: "أتمتة سير العمل بالذكاء الاصطناعي",
      title: ["جرّب الأتمتة", "بنفسك"],
      subtitle:
        "بعض المهام لا تحتاج موظفاً إضافياً.\n\nتحتاج نظاماً يعرف ماذا يفعل، متى يتدخل، وأين يرسل المعلومة بعد ذلك.\n\nفي هذه النماذج، سترى كيف يمكن للذكاء الاصطناعي أن يرد على العملاء، ينظم الحجوزات، يتابع الطلبات، ويوفر وقت الفريق في المهام المتكررة.",
      note: "",
      launch: "جرّب العرض",
      laraTitle: "اسأل Lara أي شيء",
      laraText:
        "اسأل عن مشاريعي، خبرتي، أو كيف يمكن بناء نظام مشابه لشركتك.\n\nLara تستطيع التحدث بالعربية والإنجليزية.",
      laraSubtitle: "أسئلة مقترحة",
      prompts: [
        "كيف ممكن تبني نظام مناسب لشركتنا؟",
        "ما أكبر مشروع اشتغلت عليه؟",
        "ما أول شيء تنصح بأتمتته في شركة مزدحمة؟",
        "ما الذي يجعله مختلفاً عن المطور العادي؟",
      ],
    },
    skillsView: {
      badge: "القدرات التقنية",
      title: [
        "التقنيات التي أستخدمها لبناء الأنظمة",
        "والأتمتة وحلول الأعمال.",
      ],
      subtitle:
        "التقنية ليست الهدف بحد ذاتها.\n\nإنها الأدوات التي أعتمد عليها لبناء الأنظمة، تنظيم العمليات، أتمتة المهام، وتحويل احتياجات العمل إلى حلول عملية قابلة للاستخدام.",
      toolsLabel: "التقنيات",
    },
    about: {
      badge: "عن عبدالله",
      title: ["أبني البرمجيات بعقلية تهتم", "بالعمل قبل الواجهة."],
      body: "أنا مطور Full-Stack وباني منتجات أركز على أنظمة الموارد البشرية، الأدوات الداخلية، قواعد البيانات، التقارير، والأتمتة بالذكاء الاصطناعي.\n\nمشروعي الأساسي حالياً هو منصة موارد بشرية ورواتب ثنائية اللغة أبنيها من الصفر، وتشمل الموظفين، العقود، الحضور، الإجازات، الرواتب، الخدمة الذاتية، الصلاحيات، التقارير، وإعدادات الإدارة.\n\nهذا المشروع شكّل طريقة تفكيري: أفهم التشغيل أولاً، أبني الهيكل الصحيح، ثم أطور نظاماً يستطيع الناس استخدامه فعلاً.",
      points: [
        "تقنيًا: واجهات، خلفية، قواعد بيانات، تكاملات، تقارير، وأدوات أتمتة.",
        "تشغيليًا: موافقات، رواتب، حضور، سجلات موظفين، مستندات، إعدادات إدارية، وقواعد عمل.",
        "النتيجة: أنظمة عملية تجعل التشغيل اليومي أسهل في الإدارة والمراجعة والتوسع.",
      ],
    },
    why: {
      badge: "لماذا تعمل معي؟",
      title: ["أبني النظام كاملاً،", "لا جزءاً منفصلاً منه."],
      subtitle:
        "أناسب المشاريع التي تحتاج أكثر من واجهة جميلة أو قاعدة بيانات منفصلة.\n\nأستطيع فهم طريقة العمل، تصميم الهيكل، بناء قاعدة البيانات، تطوير الواجهات، تنظيم سير العمل، ربط التقارير، وإضافة الأتمتة عندما تكون مفيدة.",
      cards: [
        "أفهم طبيعة العمل قبل بناء المنتج.",
        "أربط قاعدة البيانات، سير العمل، الواجهة، التقارير، والأتمتة داخل نظام واحد.",
        "أبني أنظمة أعمال كاملة بالعربية والإنجليزية.",
        "أهتم بواجهة واضحة وأساس تقني قوي.",
      ],
    },
    footer: {
      badge: "الخطوة التالية",
      title: ["لنبني نظاماً", "يناسب طريقة عملك."],
      subtitle:
        "لو لديك عملية، فكرة منتج، أو سير عمل داخلي يستحق أن يتحول إلى نظام حقيقي، فلنتحدث.",
      bookBtn: "احجز اجتماعًا",
      emailBtn: "ارسل بريد الإلكتروني",
      whatsappBtn: "واتساب",
      name: "عبدالله أبوالعلا",
      rights: "أنظمة أعمال، أدوات داخلية، تقارير، وأتمتة بالذكاء الاصطناعي.",
    },
  },
};

export const localizedSkills: Record<string, any[]> = {
  en: [
    {
      title: "Business Systems",
      description:
        "Systems built around day-to-day operations, approvals, employee workflows, reporting, and internal processes.",
      skills: ["React", "TypeScript", "Supabase", "PostgreSQL", "SQL Server"],
    },
    {
      title: "Data & Business Logic",
      description:
        "Designing the structure behind workflows, permissions, business rules, reporting, and operational visibility.",
      skills: [
        "PostgreSQL",
        "Oracle SQL",
        "PL/SQL",
        "Schema Design",
        "Relational Data Modeling",
      ],
    },
    {
      title: "Product Development",
      description:
        "Building bilingual business applications that balance usability, performance, and operational requirements.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Responsive Design",
      ],
    },
    {
      title: "AI & Workflow Automation",
      description:
        "Connecting systems, reducing repetitive work, and automating operational tasks through AI and workflow tools.",
      skills: ["Make.com", "n8n", "Voiceflow", "Vapi", "CRM Automation"],
    },
    {
      title: "Enterprise Systems",
      description:
        "Experience working with enterprise reporting, operational workflows, and structured business environments.",
      skills: [
        "Oracle Forms",
        "Oracle Reports",
        "Oracle Database",
        "DevExpress",
        ".NET Framework",
      ],
    },
  ],
  ar: [
    {
      title: "أنظمة الأعمال",
      description:
        "أنظمة مصممة لدعم العمليات اليومية، إجراءات الموافقات، إدارة الموظفين، التقارير، والعمليات الداخلية.",
      skills: ["React", "TypeScript", "Supabase", "PostgreSQL", "SQL Server"],
    },
    {
      title: "البيانات ومنطق الأعمال",
      description:
        "تصميم قواعد البيانات، العلاقات بين البيانات، الصلاحيات، قواعد العمل، والتقارير التي يعتمد عليها النظام.",
      skills: [
        "PostgreSQL",
        "Oracle SQL",
        "PL/SQL",
        "تصميم قواعد البيانات",
        "نمذجة البيانات",
      ],
    },
    {
      title: "تطوير المنتجات",
      description:
        "تطوير تطبيقات أعمال ثنائية اللغة تجمع بين سهولة الاستخدام ومتطلبات التشغيل الفعلية.",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "التصميم المتجاوب",
      ],
    },
    {
      title: "الذكاء الاصطناعي والأتمتة",
      description:
        "ربط الأنظمة المختلفة، تقليل المهام المتكررة، وأتمتة الإجراءات باستخدام أدوات الذكاء الاصطناعي وسير العمل.",
      skills: ["Make.com", "n8n", "Voiceflow", "Vapi", "CRM Automation"],
    },
    {
      title: "الأنظمة المؤسسية",
      description:
        "خبرة في الأنظمة المؤسسية، التقارير التشغيلية، والبيئات التشغيلية المعتمدة على البيانات والإجراءات المنظمة.",
      skills: [
        "Oracle Forms",
        "Oracle Reports",
        "Oracle Database",
        "DevExpress",
        ".NET Framework",
      ],
    },
  ],
};
