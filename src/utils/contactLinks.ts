import type { Language } from "../data/i18n";

export const CONTACT_EMAIL = "abouella.dev@gmail.com";
export const WHATSAPP_NUMBER_INTERNATIONAL = "201270489908";

const contactMessages = {
  en: {
    emailSubject: "Project inquiry from your portfolio",
    emailBody: `Hi Abdullah,

I came across your portfolio and I’m interested in discussing a project or business workflow that could benefit from a custom system or automation.

Project / company:
What I need help with:
Current workflow or challenge:
Timeline:
Preferred contact method:

Best regards,`,
    whatsappText:
      "Hi Abdullah, I came across your portfolio and I’d like to discuss a project, business system, or automation idea. Could we schedule a quick call?",
  },
  ar: {
    emailSubject: "استفسار من معرض الأعمال",
    emailBody: `مرحباً عبدالله،

اطلعت على معرض أعمالك وأرغب في مناقشة مشروع أو سير عمل يمكن تحسينه من خلال نظام مخصص أو أتمتة.

اسم الشركة / المشروع:
ما أحتاج المساعدة فيه:
التحدي الحالي في سير العمل:
الجدول الزمني المتوقع:
أفضل طريقة للتواصل:

مع خالص التحية،`,
    whatsappText:
      "مرحباً عبدالله، اطلعت على معرض أعمالك وأرغب في مناقشة مشروع أو نظام أعمال أو فكرة أتمتة. هل يمكننا تحديد وقت مناسب للتواصل؟",
  },
} satisfies Record<
  Language,
  { emailSubject: string; emailBody: string; whatsappText: string }
>;

const encodeMailtoValue = (value: string) => encodeURIComponent(value);

export function getContactLinks(language: Language) {
  const copy = contactMessages[language] ?? contactMessages.en;

  return {
    emailHref: `mailto:${CONTACT_EMAIL}?subject=${encodeMailtoValue(copy.emailSubject)}&body=${encodeMailtoValue(copy.emailBody)}`,
    whatsappHref: `https://wa.me/${WHATSAPP_NUMBER_INTERNATIONAL}?text=${encodeURIComponent(copy.whatsappText)}`,
  };
}
