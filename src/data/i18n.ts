export type Language = "en" | "ar";

export const content: Record<string, any> = {
  en: {
    nav: [
      {
        label: "What I Build",
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
        label: "Stack Map",
        href: "#skills",
      },
      {
        label: "About",
        href: "#about",
      },
      {
        label: "Contact",
        href: "#contact",
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
      systemBadge: "0 → 100 Custom System Builder",
      title: ["Custom systems", "built from 0 to 100."],
      subtitle:
        "I build complete business systems around how the company actually works: requirements, database structure, backend logic, permissions, user interfaces, reports, integrations, and AI automation.\n\nNot a template. Not a disconnected tool. A full-stack system designed from the business need to the working product.",
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
      badge: "What I Build",
      title: ["Full-stack systems", "built around the business."],
      subtitle:
        "I can take a business need from zero to a working product: understand the operation, design the data model, build the backend, create the interface, connect reports, and add automation where it creates real value.",
      cards: [
        {
          title: "Custom Internal Systems",
          text: "HR, payroll, attendance, contracts, requests, approvals, dashboards, admin settings, employee self-service, and any workflow a business needs to operate with less manual work.",
        },
        {
          title: "Database + Backend Foundations",
          text: "Relational data models, APIs, backend rules, role permissions, workflow states, audit trails, and reporting outputs that make the interface reliable.",
        },
        {
          title: "Workflow + AI Automation",
          text: "AI agents, voice flows, webhooks, CRM updates, follow-up logic, and automation paths that remove repeated manual work without making the system fragile.",
        },
        {
          title: "End-to-End Product Delivery",
          text: "From business analysis and architecture to UI, reports, integrations, testing, handover, and a system that can keep growing after launch.",
        },
      ],
      console: {
        input: "business need or operational mess",
        thinking: "requirements + database + backend + UI + reports + automation",
        output: "custom system delivered end to end",
      },
    },
    process: {
      badge: "How I Think",
      title: ["From business need", "to complete system."],
      subtitle:
        "I do not start and stop at the UI. I think through the full product: the business rules, data, backend, workflows, screens, reports, automation, and launch path.",
      steps: [
        {
          label: "01",
          title: "Define the business need",
          text: "I map the real operation, users, roles, exceptions, approvals, repeated tasks, and the exact problem the system needs to solve.",
        },
        {
          label: "02",
          title: "Design the architecture",
          text: "I define the data model, entities, relationships, permissions, statuses, modules, and reporting structure before the screens are built.",
        },
        {
          label: "03",
          title: "Build backend logic",
          text: "I turn business rules into backend logic, role-based actions, workflow states, approvals, integrations, and audit-friendly steps.",
        },
        {
          label: "04",
          title: "Create the interface",
          text: "I build screens, dashboards, forms, reports, and bilingual user journeys around how the team actually works every day.",
        },
        {
          label: "05",
          title: "Launch and automate",
          text: "I connect reports, add useful automation, test the flow, and shape the system so it can be used, improved, and scaled.",
        },
      ],
      closing: "Business Need → Architecture → Database → Backend → UI → Reports → Automation → Launch",
    },
    projectsView: {
      badge: "PROJECTS",
      title: ["SYSTEMS", "I'VE BUILT"],
      subtitle:
        "Real systems shown with proof: screenshots, business logic, database thinking, role-based workflows, reports, bilingual UX, and automation.",
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
      badge: "Behind the System",
      title: ["A system is more than", "the screens you click."],
      subtitle:
        "A clean interface is only the surface. The real product lives in the layers underneath: data structure, permissions, workflow states, audit trails, reports, integrations, and automation paths.",
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
          value: "6",
          label: "core operational modules shown with screenshots",
        },
        {
          value: "0→100",
          label: "from business need to complete product",
        },
      ],
      quote:
        "Building software from concept to production.",
    },
    demos: {
      badge: "AI Automation Lab",
      title: ["Automation", "as working flows."],
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
      badge: "STACK MAP",
      title: [
        "The technical layers",
        "behind the systems.",
      ],
      subtitle:
        "Tools matter, but the real value is how they connect: frontend, backend, database logic, workflows, reports, and automation inside one usable product.",
      toolsLabel: "Tools",
    },
    about: {
      badge: "About Abdullah",
      title: ["I build software around how", "businesses actually operate."],
      body: "I’m a full-stack developer and product builder focused on HR systems, internal tools, databases, reporting, and AI automation.\n\nMy main project is a bilingual HR & Payroll platform I’m building from the ground up, covering employees, contracts, attendance, leave, payroll, self-service, permissions, reports, and admin workflows.\n\nThat project shaped how I work: understand the operation, structure the system well, then build software people can actually rely on.",
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
        "Have a workflow that depends on spreadsheets, WhatsApp messages, manual approvals, or disconnected tools? Let’s turn it into a system your team can actually run.",
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
        label: "ماذا أبني",
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
        label: "الخريطة التقنية",
        href: "#skills",
      },
      {
        label: "عن عبدالله",
        href: "#about",
      },
      {
        label: "تواصل",
        href: "#contact",
      },
    ],
    header: {
      name: "أبوالعلا",
      letter: "ع",
      bookBtn: "احجز اجتماعًا",
    },
    hero: {
      eyebrow: "مطور أنظمة أعمال Full-Stack · أتمتة بالذكاء الاصطناعي",
      brand: "عبدالله أبوالعلا",
      systemBadge: "بناء أنظمة مخصصة من 0 إلى 100",
      title: ["أبني أنظمة مخصصة", "من الفكرة إلى التشغيل."],
      subtitle:
        "أحوّل احتياج الشركة إلى نظام فعلي يخدم طريقة العمل اليومية: تحليل التشغيل، تصميم قاعدة البيانات، بناء المنطق الخلفي، الصلاحيات، الواجهات، التقارير، التكاملات، والأتمتة الذكية عند الحاجة.\n\nليس قالباً جاهزاً ولا أداة منفصلة. هو نظام Full-Stack مبني حول واقع العمل، من أول فكرة إلى منتج قابل للاستخدام.",
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
      badge: "ماذا أبني",
      title: ["أنظمة Full-Stack", "مصممة حول احتياج العمل."],
      subtitle:
        "أبدأ من واقع التشغيل داخل الشركة، ثم أحوله إلى نظام كامل: بيانات منظمة، منطق عمل واضح، واجهة سهلة، تقارير مفيدة، وأتمتة تقلل العمل المتكرر عندما تكون مفيدة فعلاً.",
      cards: [
        {
          title: "أنظمة داخلية مخصصة",
          text: "أنظمة للموارد البشرية، الرواتب، الحضور، العقود، الطلبات، الموافقات، لوحات المتابعة، الإعدادات الإدارية، والخدمة الذاتية للموظفين، مبنية حول طريقة العمل الفعلية داخل الشركة.",
        },
        {
          title: "قاعدة بيانات وBackend",
          text: "نماذج بيانات مترابطة، APIs، قواعد عمل خلفية، صلاحيات حسب الدور، حالات واضحة لكل إجراء، وسجلات تدقيق تجعل النظام قابلاً للمتابعة والثقة.",
        },
        {
          title: "سير عمل وأتمتة AI",
          text: "وكلاء ذكاء اصطناعي، تدفقات صوتية، Webhooks، تحديثات CRM، منطق متابعة، ومسارات أتمتة تقلل التكرار اليدوي من غير أن تجعل النظام معقداً أو هشاً.",
        },
        {
          title: "تسليم منتج كامل",
          text: "من فهم الاحتياج وبناء الهيكل إلى الواجهة، التقارير، التكاملات، الاختبار، التسليم، ونظام يمكن تطويره بعد الإطلاق.",
        },
      ],
      console: {
        input: "احتياج عمل أو عملية مرهقة",
        thinking: "تحليل + بيانات + منطق تشغيل + واجهة + تقارير + أتمتة",
        output: "نظام مخصص جاهز للاستخدام",
      },
    },
    process: {
      badge: "طريقة التفكير",
      title: ["من احتياج العمل", "إلى نظام جاهز للتشغيل."],
      subtitle:
        "لا أتعامل مع المشروع كصفحات منفصلة. أراه كرحلة تشغيل كاملة: من يفعل ماذا، ما البيانات التي تتحرك، أين تتعطل العملية، وكيف يمكن تحويلها إلى نظام واضح وقابل للاستخدام.",
      steps: [
        {
          label: "01",
          title: "فهم طريقة العمل",
          text: "أفهم المستخدمين، الأدوار، الاستثناءات، الموافقات، المهام المتكررة، والمشكلة الحقيقية التي يجب أن يحلها النظام.",
        },
        {
          label: "02",
          title: "تصميم البنية",
          text: "أحدد الكيانات، العلاقات، الصلاحيات، الحالات، الوحدات، وهيكل التقارير قبل الدخول في تفاصيل الواجهة.",
        },
        {
          label: "03",
          title: "بناء منطق النظام",
          text: "أحوّل قواعد العمل إلى إجراءات واضحة، صلاحيات حسب الدور، حالات سير عمل، موافقات، تكاملات، وخطوات يمكن مراجعتها.",
        },
        {
          label: "04",
          title: "تطوير الواجهة",
          text: "أبني الشاشات، لوحات التحكم، النماذج، التقارير، وتجربة عربية وإنجليزية تخدم طريقة استخدام الفريق اليومية.",
        },
        {
          label: "05",
          title: "الإطلاق والتحسين",
          text: "أربط التقارير، أضيف الأتمتة عند الحاجة، أختبر التدفق، وأجهز النظام ليكون قابلاً للاستخدام والتطوير.",
        },
      ],
      closing:
        "احتياج العمل → البنية → قاعدة البيانات → المنطق الخلفي → الواجهة → التقارير → الأتمتة → الإطلاق",
    },
    projectsView: {
      badge: "المشاريع",
      title: ["أنظمة", "قمت ببنائها"],
      subtitle:
        "مشاريع حقيقية مدعومة بلقطات شاشة ومنطق واضح: بيانات، صلاحيات، سير عمل، تقارير، تجربة عربية وإنجليزية، وأتمتة حيث تضيف قيمة.",
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
      badge: "ما وراء النظام",
      title: ["ما وراء الواجهة", "هو ما يصنع النظام."],
      subtitle:
        "الواجهة مهمة، لكنها ليست كل القصة. قوة النظام تظهر في ما يحدث خلفها: بيانات منظمة، صلاحيات واضحة، حالات عمل مفهومة، تقارير دقيقة، وتكاملات تجعل التشغيل أسهل.",
      cards: [
        {
          title: "هيكلة البيانات وقواعد العمل",
          text: "سجلات موظفين، عقود، مكونات رواتب، طلبات، موافقات، مستندات، حالات حضور، ومخرجات تقارير متصلة داخل نموذج واحد واضح.",
        },
        {
          title: "الصلاحيات وسجل العمليات",
          text: "إجراءات حسب الدور، تحكم إداري، خدمة ذاتية للموظفين، قوائم موافقات، سجل للعمليات، ووضوح في المسؤوليات.",
        },
        {
          title: "تقارير ووضوح للقرارات",
          text: "تقارير قابلة للتصدير، لوحات متابعة، فلاتر، تتبع للحالات، ومخرجات منظمة تساعد الإدارة على فهم ما يحدث واتخاذ القرار بثقة.",
        },
        {
          title: "مسارات الأتمتة",
          text: "وكلاء ذكاء اصطناعي، تدفقات صوتية، Webhooks، تحديثات CRM، فحص مواعيد، متابعات، ومعالجة للمهام المتكررة.",
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
          value: "6",
          label: "وحدات تشغيلية أساسية موثقة بلقطات شاشة",
        },
        {
          value: "0→100",
          label: "من احتياج العمل إلى منتج كامل",
        },
      ],
      quote: "من الفكرة الأولى إلى نظام يعمل على أرض الواقع",
    },
    demos: {
      badge: "مختبر الأتمتة والذكاء الاصطناعي",
      title: ["الأتمتة", "كتدفقات عمل حقيقية"],
      subtitle:
        "ليست كل مهمة تحتاج متابعة يدوية.\n\nبعض الأعمال تحتاج مساراً واضحاً يعرف متى يرد، ماذا يسأل، أين يسجل المعلومة، ومتى يحولها لفريق العمل.\n\nهذه النماذج تعرض كيف يمكن للذكاء الاصطناعي والأتمتة أن يردا على العملاء، ينظما المواعيد، يتابعا الطلبات، ويوفرا وقت الفريق.",
      note: "",
      launch: "جرّب العرض",
      laraTitle: "اسأل Lara أي شيء",
      laraText:
        "اسأل عن مشاريعي، خبرتي، أو كيف يمكن تحويل فكرة داخل شركتك إلى نظام واضح.\n\nLara تستطيع التحدث بالعربية والإنجليزية.",
      laraSubtitle: "أسئلة مقترحة",
      prompts: [
        "كيف ممكن تبني نظام مناسب لشركتنا؟",
        "ما أكبر مشروع اشتغلت عليه؟",
        "ما أول شيء تنصح بأتمتته في شركة مزدحمة؟",
        "ما الذي يجعله مختلفاً عن المطور العادي؟",
      ],
    },
    skillsView: {
      badge: "الخريطة التقنية",
      title: [
        "الطبقات التقنية",
        "خلف الأنظمة.",
      ],
      subtitle:
        "الأدوات وحدها لا تصنع نظاماً جيداً. القيمة الحقيقية في طريقة ربط الواجهة، قاعدة البيانات، منطق التشغيل، التقارير، والأتمتة داخل منتج واحد يعمل بسلاسة.",
      toolsLabel: "التقنيات",
    },
    about: {
      badge: "عن عبدالله",
      title: ["أبني البرمجيات بعقلية تفهم", "طريقة عمل الشركة."],
      body: "أنا مطور Full-Stack وباني منتجات أركز على أنظمة الموارد البشرية، الأدوات الداخلية، قواعد البيانات، التقارير، والأتمتة بالذكاء الاصطناعي.\n\nمشروعي الأساسي حالياً هو منصة موارد بشرية ورواتب ثنائية اللغة أبنيها من الصفر، وتشمل الموظفين، العقود، الحضور، الإجازات، الرواتب، الخدمة الذاتية، الصلاحيات، التقارير، وإعدادات الإدارة.\n\nهذا المشروع شكّل طريقة عملي: أفهم التشغيل أولاً، أبني الهيكل الصحيح، ثم أحوّل ذلك إلى نظام واضح يستطيع الفريق الاعتماد عليه.",
      points: [
        "تقنياً: واجهات، خلفية، قواعد بيانات، تكاملات، تقارير، وأدوات أتمتة.",
        "تشغيلياً: موافقات، رواتب، حضور، سجلات موظفين، مستندات، إعدادات إدارية، وقواعد عمل.",
        "النتيجة: أنظمة عملية تجعل الإدارة اليومية أوضح وأسهل في المراجعة والتوسع.",
      ],
    },
    why: {
      badge: "لماذا تعمل معي؟",
      title: ["أبني النظام كاملاً،", "لا جزءاً منفصلاً منه."],
      subtitle:
        "أناسب المشاريع التي تحتاج منتجاً متماسكاً، لا واجهة جميلة فقط ولا قاعدة بيانات منفصلة.\n\nأستطيع فهم طريقة العمل، تصميم الهيكل، بناء قاعدة البيانات، تطوير الواجهات، تنظيم سير العمل، ربط التقارير، وإضافة الأتمتة عندما تكون مفيدة.",
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
        "إذا كان لديك سير عمل يعتمد على جداول، رسائل واتساب، موافقات يدوية، أو أدوات متفرقة، يمكننا تحويله إلى نظام واضح يستطيع فريقك الاعتماد عليه.",
      bookBtn: "احجز اجتماعًا",
      emailBtn: "أرسل بريداً",
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
