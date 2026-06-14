export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tech: string[];
  summary: string;
  problem: string;
  built: string;
  outcome: string;
  features: string[];
  isFlagship?: boolean;
  coverImage?: ProjectImage;
  previewImages?: ProjectImage[];
  galleryImages?: ProjectImage[];
}

const image = (src: string, caption: string, alt = caption): ProjectImage => ({ src, caption, alt });

const hrImagesEn = {
  coverImage: image('/screenshots/hr/dashboard.webp', 'Executive dashboard overview', 'Enterprise HR and payroll dashboard overview'),
  previewImages: [
    image('/screenshots/hr/employees.webp', 'Employee workspace', 'Employee workspace with cards and filters'),
    image('/screenshots/hr/time_attendance.webp', 'Attendance operations', 'Time and attendance dashboard'),
    image('/screenshots/hr/reports.webp', 'Reports library', 'Reports and analytics templates'),
    image('/screenshots/hr/self_service_ar.webp', 'Arabic self-service', 'Arabic employee self-service dashboard'),
    image('/screenshots/hr/contract_approval.webp', 'Contract approval workflow', 'Contract approval request panel'),
    image('/screenshots/hr/report_download_table.webp', 'Report export output', 'Leave history report output with exports')
  ],
  galleryImages: [
    image('/screenshots/hr/dashboard.webp', 'Dashboard overview', 'Enterprise HR and payroll dashboard overview'),
    image('/screenshots/hr/employees.webp', 'Employee management', 'Employee workspace cards and filters'),
    image('/screenshots/hr/contracts.webp', 'Contract management', 'Contract management workspace'),
    image('/screenshots/hr/time_attendance.webp', 'Attendance dashboard', 'Time and attendance dashboard'),
    image('/screenshots/hr/apply_for_leave.webp', 'Leave application drawer', 'Leave application drawer with attachments'),
    image('/screenshots/hr/contract_approval.webp', 'Contract approval workflow', 'Approval request panel with workflow stages'),
    image('/screenshots/hr/attendance_settings_ar.webp', 'Arabic attendance settings', 'Arabic attendance settings and policy configuration'),
    image('/screenshots/hr/report_forms_sidepanel.webp', 'Report filter form', 'Leave history report filter form'),
    image('/screenshots/hr/report_download_table.webp', 'Report export output', 'Leave history report output with PDF and CSV exports'),
    image('/screenshots/hr/scheduling.webp', 'Scheduling operations', 'Shift scheduling and assignment workflow'),
    image('/screenshots/hr/reports.webp', 'Reports and analytics', 'Reports and analytics templates'),
    image('/screenshots/hr/template_editor.webp', 'Contract template editor', 'Contract template editor with Arabic content'),
    image('/screenshots/hr/onboarding.webp', 'Employee onboarding', 'Employee onboarding form wizard'),
    image('/screenshots/hr/batch_attendance.webp', 'Batch attendance workflow', 'Batch manual attendance workflow modal'),
    image('/screenshots/hr/report_forms.webp', 'Report filters and outputs', 'Leave history report form'),
    image('/screenshots/hr/self_service_ar.webp', 'Arabic self-service', 'Arabic employee self-service dashboard'),
    image('/screenshots/hr/login.webp', 'Bilingual login', 'HR platform login screen')
  ]
};

const hrImagesAr = {
  coverImage: image('/screenshots/hr/dashboard.webp', 'لوحة المعلومات الرئيسية', 'لوحة معلومات منصة الموارد البشرية والرواتب'),
  previewImages: [
    image('/screenshots/hr/employees.webp', 'إدارة الموظفين', 'مساحة إدارة الموظفين'),
    image('/screenshots/hr/time_attendance.webp', 'عمليات الحضور', 'لوحة الحضور والانصراف'),
    image('/screenshots/hr/reports.webp', 'مكتبة التقارير', 'نماذج التقارير والتحليلات'),
    image('/screenshots/hr/self_service_ar.webp', 'الخدمة الذاتية بالعربية', 'لوحة الخدمة الذاتية باللغة العربية'),
    image('/screenshots/hr/contract_approval.webp', 'سير اعتماد العقود', 'لوحة مراجعة طلب اعتماد عقد'),
    image('/screenshots/hr/report_download_table.webp', 'مخرجات وتصدير التقارير', 'مخرجات تقرير تاريخ الإجازات مع التصدير')
  ],
  galleryImages: [
    image('/screenshots/hr/dashboard.webp', 'لوحة المعلومات', 'لوحة معلومات منصة الموارد البشرية والرواتب'),
    image('/screenshots/hr/employees.webp', 'إدارة الموظفين', 'مساحة الموظفين مع البطاقات والفلاتر'),
    image('/screenshots/hr/contracts.webp', 'إدارة العقود', 'مساحة إدارة العقود'),
    image('/screenshots/hr/time_attendance.webp', 'لوحة الحضور', 'لوحة الحضور والانصراف'),
    image('/screenshots/hr/apply_for_leave.webp', 'نافذة طلب الإجازة', 'نافذة تقديم طلب إجازة مع المرفقات'),
    image('/screenshots/hr/contract_approval.webp', 'سير اعتماد العقود', 'لوحة اعتماد عقد مع مراحل سير الموافقة'),
    image('/screenshots/hr/attendance_settings_ar.webp', 'إعدادات الحضور بالعربية', 'إعدادات الحضور والانصراف باللغة العربية'),
    image('/screenshots/hr/report_forms_sidepanel.webp', 'نموذج فلاتر التقرير', 'نموذج فلاتر تقرير تاريخ الإجازات'),
    image('/screenshots/hr/report_download_table.webp', 'مخرجات وتصدير التقارير', 'نتائج التقرير مع تصدير PDF وCSV'),
    image('/screenshots/hr/scheduling.webp', 'جدولة الورديات', 'جدولة الورديات والتعيينات'),
    image('/screenshots/hr/reports.webp', 'التقارير والتحليلات', 'نماذج التقارير والتحليلات'),
    image('/screenshots/hr/template_editor.webp', 'محرر قوالب العقود', 'محرر قوالب العقود باللغة العربية'),
    image('/screenshots/hr/onboarding.webp', 'تعيين الموظفين', 'نموذج تعيين موظف جديد'),
    image('/screenshots/hr/batch_attendance.webp', 'إدخال حضور جماعي', 'نافذة إدخال حضور جماعي'),
    image('/screenshots/hr/report_forms.webp', 'فلاتر التقارير والمخرجات', 'نموذج تشغيل تقرير تاريخ الإجازات'),
    image('/screenshots/hr/self_service_ar.webp', 'الخدمة الذاتية بالعربية', 'واجهة الخدمة الذاتية العربية للموظف'),
    image('/screenshots/hr/login.webp', 'تسجيل الدخول الثنائي اللغة', 'شاشة دخول منصة الموارد البشرية')
  ]
};

const desktopHrImagesEn = {
  coverImage: image('/screenshots/winforms/employee_salary.webp', 'Employee salary workflow', 'Desktop salary workflow'),
  previewImages: [
    image('/screenshots/winforms/employee_list.webp', 'Employee list', 'Desktop employee list'),
    image('/screenshots/winforms/attendance_list.webp', 'Daily attendance', 'Daily attendance management'),
    image('/screenshots/winforms/monthly_payroll.webp', 'Monthly payroll', 'Monthly payroll calculation grid'),
    image('/screenshots/winforms/payslip_preview.webp', 'Payslip output', 'Generated payslip preview')
  ],
  galleryImages: [
    image('/screenshots/winforms/employee_salary.webp', 'Employee salary workflow'),
    image('/screenshots/winforms/add_employee.webp', 'Add employee'),
    image('/screenshots/winforms/employee_list.webp', 'Employee list'),
    image('/screenshots/winforms/employee_documents.webp', 'Employee documents'),
    image('/screenshots/winforms/add_document.webp', 'Add document'),
    image('/screenshots/winforms/attendance_list.webp', 'Attendance list'),
    image('/screenshots/winforms/leave_management.webp', 'Leave management'),
    image('/screenshots/winforms/request_leave.webp', 'Leave request'),
    image('/screenshots/winforms/monthly_payroll.webp', 'Monthly payroll'),
    image('/screenshots/winforms/bulk_salary_revision.webp', 'Bulk salary revision'),
    image('/screenshots/winforms/audit_trail_salary.webp', 'Salary audit trail'),
    image('/screenshots/winforms/approval_queue.webp', 'Approval queue'),
    image('/screenshots/winforms/salary_report_window.webp', 'Salary report'),
    image('/screenshots/winforms/payslip_preview.webp', 'Payslip generation'),
    image('/screenshots/winforms/payslip_report.webp', 'Payslip report')
  ]
};

const desktopHrImagesAr = {
  coverImage: image('/screenshots/winforms/employee_salary.webp', 'إدارة راتب الموظف', 'شاشة إدارة راتب الموظف في نظام سطح المكتب'),
  previewImages: [
    image('/screenshots/winforms/employee_list.webp', 'قائمة الموظفين'),
    image('/screenshots/winforms/attendance_list.webp', 'الحضور اليومي'),
    image('/screenshots/winforms/monthly_payroll.webp', 'الرواتب الشهرية'),
    image('/screenshots/winforms/payslip_preview.webp', 'قسيمة الراتب')
  ],
  galleryImages: [
    image('/screenshots/winforms/employee_salary.webp', 'إدارة راتب الموظف'),
    image('/screenshots/winforms/add_employee.webp', 'إضافة موظف'),
    image('/screenshots/winforms/employee_list.webp', 'قائمة الموظفين'),
    image('/screenshots/winforms/employee_documents.webp', 'مستندات الموظفين'),
    image('/screenshots/winforms/add_document.webp', 'إضافة مستند'),
    image('/screenshots/winforms/attendance_list.webp', 'قائمة الحضور'),
    image('/screenshots/winforms/leave_management.webp', 'إدارة الإجازات'),
    image('/screenshots/winforms/request_leave.webp', 'طلب إجازة'),
    image('/screenshots/winforms/monthly_payroll.webp', 'احتساب الرواتب'),
    image('/screenshots/winforms/bulk_salary_revision.webp', 'تعديل رواتب جماعي'),
    image('/screenshots/winforms/audit_trail_salary.webp', 'سجل تدقيق الرواتب'),
    image('/screenshots/winforms/approval_queue.webp', 'قائمة الموافقات'),
    image('/screenshots/winforms/salary_report_window.webp', 'تقرير الرواتب'),
    image('/screenshots/winforms/payslip_preview.webp', 'توليد قسائم الرواتب'),
    image('/screenshots/winforms/payslip_report.webp', 'تقرير قسيمة الراتب')
  ]
};

const aiVoiceImagesEn = {
  coverImage: image('/screenshots/ai-voice/schedule_reschedule_cancel.webp', 'Booking, rescheduling and cancellation logic', 'Make.com workflow for scheduling, rescheduling and canceling'),
  previewImages: [image('/screenshots/ai-voice/availability_check.webp', 'Availability check path', 'AI voice workflow availability check path')],
  galleryImages: [
    image('/screenshots/ai-voice/schedule_reschedule_cancel.webp', 'Schedule, reschedule and cancel flow'),
    image('/screenshots/ai-voice/availability_check.webp', 'Calendar availability and routing logic')
  ]
};

const aiVoiceImagesAr = {
  coverImage: image('/screenshots/ai-voice/schedule_reschedule_cancel.webp', 'منطق الحجز وإعادة الجدولة والإلغاء', 'تدفق Make.com للحجز وإعادة الجدولة والإلغاء'),
  previewImages: [image('/screenshots/ai-voice/availability_check.webp', 'التحقق من المواعيد المتاحة', 'مسار التحقق من المواعيد المتاحة')],
  galleryImages: [
    image('/screenshots/ai-voice/schedule_reschedule_cancel.webp', 'الحجز وإعادة الجدولة والإلغاء'),
    image('/screenshots/ai-voice/availability_check.webp', 'منطق المواعيد والردود')
  ]
};

export const localizedProjects: Record<string, Project[]> = {
  en: [
    {
      id: 'hr-payroll',
      title: 'Enterprise HR & Payroll Platform',
      category: 'Bilingual enterprise HR/payroll platform',
      tech: ['React', 'TypeScript', 'Supabase/PostgreSQL', 'Tailwind CSS'],
      summary: 'A flagship web platform for managing HR, payroll, attendance, contracts, employee requests, reports, permissions, and bilingual self-service workflows in one structured operational system.',
      problem: 'Growing companies often run HR, attendance, payroll, contracts, leave, and employee requests through disconnected spreadsheets, manual approvals, and scattered files.',
      built: 'A bilingual Arabic/English HR and payroll platform covering employees, contracts, time and attendance, leave management, payroll workflows, self-service, compliance, reports, analytics, and admin setup.',
      outcome: 'This proves I can design a full operational platform, not just build screens: data model, permissions, workflows, bilingual UX, and reporting in one system.',
      features: [
        '60+ functional pages across 6 core operational modules: Employees, Contracts, Time & Attendance, Leave Management, Payroll, and Self-Service.',
        'Role-based workflows for administrators, HR users, managers, and employee self-service users.',
        'Operational coverage for employee records, onboarding, contracts, shifts, leave, loans, advances, EOSB, documents, and payslips.',
        'Reporting and analytics screens for payroll review, employee tracking, attendance visibility, leave history, and exportable outputs.',
        'Bilingual Arabic/English interfaces and document-related workflows for regional business use.'
      ],
      isFlagship: true,
      ...hrImagesEn,
    },
    {
      id: 'desktop-hr-payroll',
      title: 'Saudi HR & Payroll Desktop System',
      category: 'Saudi-compliant desktop business system',
      tech: ['C#', '.NET WinForms', 'SQL Server', 'DevExpress', 'Bilingual Reports'],
      summary: 'A full HR and payroll desktop system built with .NET WinForms and SQL Server for Saudi business operations, covering employee lifecycle workflows, attendance, payroll, loans, violations, approvals, and end-of-service benefits.',
      problem: 'Saudi HR and payroll operations require structured employee records, attendance handling, payroll calculations, approvals, documents, GOSI-related logic, and bilingual reporting in a reliable internal tool.',
      built: 'A DevExpress-based desktop system with employee management, attendance, leave, monthly payroll, salary revisions, approval queues, audit trails, payslip generation, document management, and reporting screens.',
      outcome: 'This proves I can work with enterprise HR/payroll logic, desktop operational tools, audit trails, bilingual reports, and region-specific business requirements.',
      features: [
        'Employee lifecycle workflows covering records, onboarding, documents, salary data, and employee management screens.',
        'Attendance, leave, payroll, salary revision, approval queue, audit trail, and payslip generation workflows.',
        'Saudi payroll requirements with GOSI-oriented calculations and end-of-service benefit handling.',
        'DevExpress grid-based UI patterns for operational tables, modals, filters, and reports.',
        'Bilingual Arabic/English reporting outputs for payroll, employee data, documents, and salary processes.'
      ],
      ...desktopHrImagesEn,
    },
    {
      id: 'pharmacy',
      title: 'Pharmacy Label & Reporting System',
      category: 'Oracle database workflow',
      tech: ['Oracle Forms/Reports', 'Oracle SQL'],
      summary: 'An Oracle-based labeling and reporting system built to support KSA pharmacy labeling requirements and make daily documentation more consistent.',
      problem: 'Pharmacies need a consistent way to generate medicine labels with patient instructions, dosage details, seller information, and operational records.',
      built: 'An Oracle Forms/Reports system backed by Oracle SQL for label creation, operational documentation, and internal reporting.',
      outcome: 'This proves I can build database-backed operational tools for regulated daily workflows where consistency and documentation matter.',
      features: [
        'Generated structured pharmacy labels directly from database records.',
        'Label outputs included patient instructions, dosage details, seller information, and medicine-related documentation.',
        'Supported internal reporting and record keeping for pharmacy operations.'
      ]
    },
    {
      id: 'voice-outreach',
      title: 'AI Voice Outreach Caller',
      category: 'AI workflow automation',
      tech: ['Vapi', 'Make.com', 'n8n', 'CRM workflows'],
      summary: 'A visual Make.com automation flow for an AI voice caller that handles booking, rescheduling, cancellation, availability checks, fallback routing, lead capture, and confirmation paths.',
      problem: 'Businesses lose time when appointment handling, follow-ups, cancellations, and availability checks depend on manual calls and disconnected tools.',
      built: 'A voice automation workflow connecting webhook triggers, OpenAI logic, calendar availability lookup, routing, email confirmations, Google Sheets lead capture, and response paths.',
      outcome: 'This proves I can connect AI agents with real workflow logic: calendars, webhooks, routing, confirmations, fallback paths, and structured outcomes.',
      features: [
        'Webhook-driven flow that routes callers based on booking, rescheduling, or cancellation intent.',
        'Calendar availability checks with structured date handling and AI-assisted confirmation logic.',
        'Success, unavailable, not-found, and follow-up paths for cleaner call outcomes.',
        'Connected Google Calendar, Gmail, Google Sheets, OpenAI, routers, and webhook responses into one workflow.'
      ],
      ...aiVoiceImagesEn,
    },
    {
      id: 'b2b-outreach',
      title: 'Automated B2B & B2C Outreach Systems',
      category: 'Workflow automation pipeline',
      tech: ['Make.com', 'AI Personalization', 'CRM Automation'],
      summary: 'Automated outreach workflows for lead enrichment, AI-personalized messaging, follow-up sequencing, and CRM outcome tracking.',
      problem: 'Manual outreach becomes hard to scale when lead research, personalization, follow-ups, and CRM updates are handled one by one.',
      built: 'Automation flows for lead enrichment, personalized message generation, follow-up sequencing, segmentation, and CRM logging.',
      outcome: 'This proves I can use automation to scale repetitive business processes without losing tracking, segmentation, and follow-up structure.',
      features: [
        'Lead data processing and enrichment from structured sources.',
        'AI-personalized email and message generation for each lead or customer segment.',
        'Multi-step follow-up sequencing with lead status and outcome tracking.',
        'B2B outreach designed to support 2,000+ personalized emails per day depending on sender warm-up, deliverability setup, mailbox limits, and Make.com operation capacity.',
        'B2C workflows for customer engagement, segmentation, response-based actions, and organized follow-up tracking.'
      ]
    }
  ],
  ar: [
    {
      id: 'hr-payroll',
      title: 'منصة موارد بشرية ورواتب للمؤسسات',
      category: 'منصة موارد بشرية ورواتب ثنائية اللغة',
      tech: ['React', 'TypeScript', 'Supabase/PostgreSQL', 'Tailwind CSS'],
      summary: 'منصة ويب رئيسية لإدارة الموارد البشرية والرواتب والحضور والعقود وطلبات الموظفين والتقارير والصلاحيات والخدمة الذاتية باللغتين العربية والإنجليزية داخل نظام تشغيلي واحد.',
      problem: 'عندما تنمو الشركة، تصبح إدارة الموارد البشرية والحضور والرواتب والعقود والإجازات وطلبات الموظفين عبر الجداول والملفات والموافقات اليدوية عبئًا يصعب ضبطه.',
      built: 'منصة عربية/إنجليزية تغطي الموظفين، العقود، الحضور والانصراف، الإجازات، الرواتب، الخدمة الذاتية، الامتثال، التقارير، التحليلات، وإعدادات الإدارة.',
      outcome: 'هذا يثبت أنني أستطيع تصميم منصة تشغيل كاملة، وليس مجرد شاشات: بيانات، صلاحيات، تدفقات عمل، تجربة عربية/إنجليزية، وتقارير في نظام واحد.',
      features: [
        'أكثر من 60 صفحة وظيفية ضمن 6 وحدات تشغيلية أساسية: الموظفون، العقود، الحضور والانصراف، الإجازات، الرواتب، والخدمة الذاتية.',
        'تدفقات عمل بصلاحيات مختلفة للمديرين، الموارد البشرية، الإدارة، والموظفين.',
        'تغطية للبيانات الأساسية، التعيين، العقود، الورديات، الإجازات، السلف، المستحقات، نهاية الخدمة، المستندات، وقسائم الرواتب.',
        'شاشات تقارير وتحليلات لمراجعة الرواتب، متابعة الموظفين، الحضور، تاريخ الإجازات، والتصدير.',
        'واجهات عربية/إنجليزية وتدفقات مرتبطة بالمستندات مناسبة لبيئات العمل الإقليمية.'
      ],
      isFlagship: true,
      ...hrImagesAr,
    },
    {
      id: 'desktop-hr-payroll',
      title: 'نظام موارد بشرية ورواتب مكتبي للسوق السعودي',
      category: 'نظام مكتبي متوافق مع متطلبات السوق السعودي',
      tech: ['C#', '.NET WinForms', 'SQL Server', 'DevExpress', 'تقارير عربية/إنجليزية'],
      summary: 'نظام موارد بشرية ورواتب مكتبي مبني بـ .NET WinForms وSQL Server لعمليات الشركات في السعودية، يغطي دورة الموظف، الحضور، الرواتب، السلف، المخالفات، الموافقات، ونهاية الخدمة.',
      problem: 'عمليات الرواتب والموارد البشرية في السعودية تحتاج إلى سجلات منظمة، حضور، حسابات رواتب، موافقات، مستندات، منطق مرتبط بالتأمينات، وتقارير ثنائية اللغة.',
      built: 'نظام سطح مكتب بواجهة DevExpress يضم إدارة الموظفين، الحضور، الإجازات، الرواتب الشهرية، تعديلات الرواتب، قوائم الموافقات، سجلات التدقيق، قسائم الرواتب، والمستندات.',
      outcome: 'هذا يثبت قدرتي على التعامل مع منطق الموارد البشرية والرواتب، أدوات سطح المكتب التشغيلية، سجلات التدقيق، التقارير الثنائية اللغة، ومتطلبات السوق المحلي.',
      features: [
        'تدفقات دورة الموظف من البيانات الأساسية والتعيين إلى المستندات وبيانات الراتب وإدارة السجلات.',
        'شاشات للحضور، الإجازات، الرواتب، تعديلات الرواتب، قوائم الموافقات، سجلات التدقيق، وقسائم الرواتب.',
        'منطق يدعم متطلبات الرواتب في السعودية بما يشمل حسابات مرتبطة بالتأمينات ونهاية الخدمة.',
        'واجهات DevExpress للجداول التشغيلية، النوافذ، الفلاتر، والتقارير.',
        'مخرجات تقارير عربية/إنجليزية للرواتب، بيانات الموظفين، المستندات، وعمليات الرواتب.'
      ],
      ...desktopHrImagesAr,
    },
    {
      id: 'pharmacy',
      title: 'نظام ملصقات وتقارير للصيدليات',
      category: 'تدفق تشغيلي مبني على Oracle',
      tech: ['Oracle Forms/Reports', 'Oracle SQL'],
      summary: 'نظام مبني على Oracle Forms/Reports وOracle SQL لدعم متطلبات ملصقات الأدوية في السعودية وجعل التوثيق اليومي داخل الصيدلية أكثر انتظامًا.',
      problem: 'تحتاج الصيدليات إلى طريقة ثابتة لطباعة ملصقات الدواء مع تعليمات الاستخدام، الجرعات، بيانات الموظف المسؤول، والسجلات التشغيلية.',
      built: 'نظام Oracle Forms/Reports يعتمد على Oracle SQL لإنشاء الملصقات، التوثيق التشغيلي، والتقارير الداخلية.',
      outcome: 'هذا يثبت قدرتي على بناء أدوات تشغيل مبنية على قواعد البيانات لعمليات يومية تحتاج اتساقًا وتوثيقًا واضحًا.',
      features: [
        'توليد ملصقات دواء منظمة اعتمادًا على سجلات قاعدة البيانات.',
        'تتضمن الملصقات تعليمات الاستخدام للمريض، الجرعات، بيانات الموظف المسؤول، والتفاصيل المرتبطة بالدواء.',
        'دعم التقارير والسجلات الداخلية للصيدلية.'
      ]
    },
    {
      id: 'voice-outreach',
      title: 'مساعد صوتي للاتصال بالعملاء',
      category: 'أتمتة سير عمل بالذكاء الاصطناعي',
      tech: ['Vapi', 'Make.com', 'n8n', 'تدفقات CRM'],
      summary: 'تدفق أتمتة مرئي على Make.com لمساعد صوتي يتعامل مع الحجز، إعادة الجدولة، الإلغاء، التحقق من المواعيد، تسجيل البيانات، ومسارات التأكيد.',
      problem: 'تستهلك المكالمات اليدوية وقتًا كبيرًا عندما تكون الحجز والمتابعة والإلغاء والتحقق من التوفر موزعة بين أشخاص وأدوات منفصلة.',
      built: 'تدفق أتمتة صوتية يربط Webhooks ومنطق OpenAI والبحث في التقويم والتوجيه ورسائل التأكيد وتسجيل العملاء المحتملين في Google Sheets.',
      outcome: 'هذا يثبت قدرتي على ربط مساعدي الذكاء الاصطناعي بمنطق عمل حقيقي: تقويم، Webhooks، توجيه، تأكيدات، مسارات بديلة، ونتائج منظمة.',
      features: [
        'تدفق يبدأ من Webhook ويوجّه المكالمة حسب نية العميل: حجز، إعادة جدولة، أو إلغاء.',
        'التحقق من توفر المواعيد من خلال معالجة التاريخ ومنطق تأكيد مدعوم بالذكاء الاصطناعي.',
        'مسارات للنجاح، عدم التوفر، عدم العثور على الحجز، والمتابعة حتى تبقى النتائج منظمة.',
        'ربط Google Calendar وGmail وGoogle Sheets وOpenAI والراوترز والـ Webhooks في مسار واحد.'
      ],
      ...aiVoiceImagesAr,
    },
    {
      id: 'b2b-outreach',
      title: 'أنظمة تواصل آلي B2B وB2C',
      category: 'خط أتمتة للتواصل والمتابعة',
      tech: ['Make.com', 'تخصيص بالذكاء الاصطناعي', 'أتمتة CRM'],
      summary: 'تدفقات أتمتة لمعالجة بيانات العملاء، إثراء المعلومات، توليد رسائل مخصصة، جدولة المتابعات، وتسجيل النتائج داخل CRM.',
      problem: 'يصعب توسيع التواصل اليدوي عندما تتم دراسة العملاء وكتابة الرسائل والمتابعة وتحديث CRM بشكل منفصل لكل حالة.',
      built: 'تدفقات أتمتة لإثراء بيانات العملاء، توليد رسائل مخصصة، تسلسل المتابعات، تقسيم العملاء، وتسجيل النتائج.',
      outcome: 'هذا يثبت قدرتي على استخدام الأتمتة لتوسيع العمليات المتكررة بدون فقدان التتبع، التقسيم، وتنظيم المتابعة.',
      features: [
        'معالجة بيانات العملاء المحتملين وإثراؤها من مصادر منظمة.',
        'إنشاء رسائل مخصصة لكل عميل أو شريحة باستخدام الذكاء الاصطناعي.',
        'تسلسلات متابعة متعددة المراحل مع تتبع الحالة ونتيجة كل تواصل.',
        'تدفق B2B مصمم لدعم أكثر من 2,000 رسالة مخصصة يوميًا بحسب جاهزية البريد وإعدادات التسليم وحدود الصناديق وسعة Make.com.',
        'تدفقات B2C للتواصل المخصص وتقسيم العملاء وتنفيذ إجراءات بناء على الردود وتنظيم المتابعة.'
      ]
    }
  ]
};

export const localizedAiDemos: Record<string, any[]> = {
  en: [
    {
      title: 'Gym AI Agent',
      description: 'A Voiceflow assistant for booking flows, common questions, customer guidance, and structured handoff paths.',
      url: 'https://creator.voiceflow.com/share/67a37fd3f69950c7dd9cba65/development'
    },
    {
      title: 'Pets Store AI Assistant “Lulu”',
      description: 'A retail assistant experience for product questions, customer support flows, and guided answers.',
      url: 'https://creator.voiceflow.com/share/678fb5b32e62086e28af31e4/development'
    },
    {
      title: 'Sushi AI Voice Receptionist',
      description: 'A Vapi voice receptionist for call handling, customer questions, booking-style flows, and operational routing.',
      url: 'https://vapi.ai/?demo=true&shareKey=979f21cd-bab2-4a42-96db-be094ca2a641&assistantId=147e3edd-81d2-4dfb-a07c-6a9ab3e8fdf9'
    }
  ],
  ar: [
    {
      title: 'مساعد ذكي للنادي الرياضي',
      description: 'مساعد مبني على Voiceflow لأسئلة العملاء، الحجز، الإرشاد، ومسارات التسليم المنظمة.',
      url: 'https://creator.voiceflow.com/share/67a37fd3f69950c7dd9cba65/development'
    },
    {
      title: 'لولو، مساعد ذكي لمتجر حيوانات أليفة',
      description: 'تجربة مساعد لمتجر بيع بالتجزئة للإجابة على أسئلة المنتجات ودعم العملاء وتوجيههم.',
      url: 'https://creator.voiceflow.com/share/678fb5b32e62086e28af31e4/development'
    },
    {
      title: 'موظف استقبال صوتي لمطعم سوشي',
      description: 'موظف استقبال صوتي مبني على Vapi للتعامل مع المكالمات والأسئلة ومسارات الحجز والتوجيه.',
      url: 'https://vapi.ai/?demo=true&shareKey=979f21cd-bab2-4a42-96db-be094ca2a641&assistantId=147e3edd-81d2-4dfb-a07c-6a9ab3e8fdf9'
    }
  ]
};
