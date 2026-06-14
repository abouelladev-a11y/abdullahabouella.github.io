import React, { useState } from 'react';
import { localizedProjects, Project, ProjectImage } from '../data/projects';
import { X, ExternalLink, Sparkles, Images, Maximize2, ChevronLeft, ChevronRight, Building2, Wrench, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/i18n';

const businessIcons = [Building2, Wrench, TrendingUp];

const ScreenshotFrame: React.FC<{ image: ProjectImage; compact?: boolean; onClick?: (event: React.MouseEvent) => void }> = ({ image, compact = false, onClick }) => {
  return (
    <figure
      onClick={onClick}
      className={`group/screen screenshot-luxe-frame relative overflow-hidden rounded-[1.35rem] bg-white/92 border border-[#8A641E]/18 transition-all duration-700 hover:-translate-y-1 ${compact ? 'p-1.5' : 'p-2.5'} ${onClick ? 'cursor-zoom-in' : ''}`}
    >
      {onClick && (
        <div className="absolute top-4 end-4 z-20 w-9 h-9 rounded-full bg-[#17110b]/72 text-white flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 backdrop-blur-md">
          <Maximize2 size={15} />
        </div>
      )}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#8A641E]/10 bg-[#FFF8EC] rounded-t-xl">
        <span className="w-2 h-2 rounded-full bg-[#D9B96E]"></span>
        <span className="w-2 h-2 rounded-full bg-[#C9AB67]"></span>
        <span className="w-2 h-2 rounded-full bg-[#9A6E22]"></span>
        <span className="ms-3 text-[9px] uppercase tracking-[0.24em] font-bold text-[#70531C]/75 truncate">{image.caption}</span>
      </div>
      <div className={`screenshot-luxe-image overflow-hidden bg-[#F5F0E6] rounded-b-xl ${compact ? 'aspect-[16/9]' : 'aspect-[16/9]'}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover/screen:scale-[1.01]"
        />
      </div>
    </figure>
  );
};

const ProjectCarousel: React.FC<{
  images: ProjectImage[];
  onOpenImage: (image: ProjectImage, event?: React.MouseEvent) => void;
  compact?: boolean;
  label?: string;
}> = ({ images, onOpenImage, compact = false, label }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  const move = (direction: number, event?: React.MouseEvent) => {
    event?.preventDefault();
    event?.stopPropagation();
    setActiveIndex((current) => (current + direction + images.length) % images.length);
  };

  const select = (index: number, event?: React.MouseEvent) => {
    event?.preventDefault();
    event?.stopPropagation();
    setActiveIndex(index);
  };

  if (!activeImage) return null;

  return (
    <div className="project-carousel" onClick={(event) => event.stopPropagation()}>
      {label && (
        <p className="text-[#714B0D] text-[9px] font-extrabold tracking-[0.3em] uppercase mb-3 flex items-center gap-3">
          <Images size={13} /> {label}
        </p>
      )}

      <div className="relative">
        <ScreenshotFrame image={activeImage} compact={compact} onClick={(event) => onOpenImage(activeImage, event)} />

        {images.length > 1 && (
          <>
            <button type="button" aria-label="Previous screenshot" onClick={(event) => move(-1, event)} className="absolute start-4 top-1/2 z-30 -translate-y-1/2 h-11 w-11 rounded-full bg-[#17110b]/72 text-white border border-white/25 backdrop-blur-md flex items-center justify-center hover:bg-[#9A6E22] transition-colors shadow-[0_16px_35px_rgba(38,25,9,0.20)]">
              <ChevronLeft size={20} />
            </button>
            <button type="button" aria-label="Next screenshot" onClick={(event) => move(1, event)} className="absolute end-4 top-1/2 z-30 -translate-y-1/2 h-11 w-11 rounded-full bg-[#17110b]/72 text-white border border-white/25 backdrop-blur-md flex items-center justify-center hover:bg-[#9A6E22] transition-colors shadow-[0_16px_35px_rgba(38,25,9,0.20)]">
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 rounded-full bg-[#17110b]/66 text-white border border-white/15 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] uppercase">
              {activeIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 no-scrollbar" onClick={(event) => event.stopPropagation()}>
          {images.map((image, index) => (
            <button type="button" key={`${image.src}-${index}`} onClick={(event) => select(index, event)} className={`shrink-0 w-32 sm:w-40 overflow-hidden rounded-xl border transition-all duration-300 bg-white/70 shadow-[0_10px_30px_rgba(64,45,17,0.07)] ${index === activeIndex ? 'border-[#9A6E22] ring-2 ring-[#D9B96E]/45' : 'border-[#8A641E]/14 hover:border-[#9A6E22]/45'}`}>
              <img src={image.src} alt={image.alt} loading="lazy" className="h-16 sm:h-20 w-full object-contain bg-[#F6EFE2] object-center" />
              <span className="block px-2 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#5A4630] truncate bg-[#FFF8EC]">{image.caption}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CaseStudyPoints = ({ project, labels }: { project: Project; labels: any }) => {
  const items = [
    { label: labels.problem, value: project.problem, Icon: businessIcons[0] },
    { label: labels.built, value: project.built, Icon: businessIcons[1] },
    { label: labels.outcome, value: project.outcome, Icon: businessIcons[2] },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map(({ label, value, Icon }) => (
        <div key={label} className="rounded-2xl border border-[#8A641E]/15 bg-white/58 p-5 shadow-[0_12px_32px_rgba(54,40,19,0.06)]">
          <div className="flex items-center gap-3 mb-3 text-[#714B0D] text-[9px] font-extrabold uppercase tracking-[0.28em]">
            <Icon size={14} />
            <span>{label}</span>
          </div>
          <p className="text-[#33281E] text-sm leading-relaxed font-medium">{value}</p>
        </div>
      ))}
    </div>
  );
};

export function Projects() {
  const { language, isRtl } = useLanguage();
  const t = content[language].projectsView;
  const projects = localizedProjects[language];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  React.useEffect(() => {
    const hasOverlay = Boolean(selectedProject || selectedImage);
    document.body.style.overflow = hasOverlay ? 'hidden' : '';
    document.body.classList.toggle('modal-open', hasOverlay);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (selectedImage) setSelectedImage(null);
        else if (selectedProject) setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, selectedImage]);

  const openImage = (image: ProjectImage, event?: React.MouseEvent) => {
    event?.stopPropagation();
    setSelectedImage(image);
  };

  const closeImage = (event?: React.SyntheticEvent) => {
    event?.preventDefault();
    event?.stopPropagation();
    setSelectedImage(null);
  };

  const getCarouselImages = (project: Project, full = false) => {
    if (full && project.galleryImages?.length) return project.galleryImages;
    const images: ProjectImage[] = [];
    if (project.coverImage) images.push(project.coverImage);
    if (project.previewImages?.length) images.push(...project.previewImages);
    return images;
  };

  return (
    <section id="projects" className="py-32 sm:py-40 relative z-10">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A97717]/26 to-transparent"></div>
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} className="mb-16 sm:mb-20 text-center">
          <span className="text-[#714B0D] text-[10px] tracking-[0.4em] uppercase font-extrabold mb-6 block">{t.badge}</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#17110b] mb-6 font-light">
            {t.title[0]}{t.title[1] ? <> <span className="text-gradient-gold italic">{t.title[1]}</span></> : null}
          </h2>
          <p className="text-base text-[#3E3329] max-w-3xl mx-auto font-normal tracking-wide leading-relaxed">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, idx) => {
            const carouselImages = getCarouselImages(project, false);
            const hasCarousel = carouselImages.length > 0;
            const isFeatured = Boolean(project.isFlagship);

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 46 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ delay: idx * 0.08, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                className={`group relative glass-panel overflow-hidden rounded-[2rem] cursor-pointer transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_34px_90px_rgba(54,40,19,0.16)] ${isFeatured ? 'md:col-span-2 p-6 lg:p-8 border-[#A97717]/30' : 'p-7 sm:p-9'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/26 via-transparent to-[#D9B96E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {isFeatured ? (
                  <div className="relative z-10 flagship-card-layout">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-8 lg:gap-12 items-start mb-8 lg:mb-10">
                      <div className="relative z-10 py-2">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <p className="text-[#714B0D] text-[10px] font-extrabold tracking-[0.3em] uppercase flex items-center gap-3">
                            <span className="w-4 h-px bg-[#A97717]/60"></span>{project.category}
                          </p>
                          <span className="border border-[#A97717]/40 text-[#714B0D] text-[9px] font-extrabold px-4 py-2 tracking-[0.3em] uppercase rounded-full bg-white/70 shadow-[0_12px_30px_rgba(64,45,17,0.08)]">{t.flagship}</span>
                        </div>
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#17110b] group-hover:text-[#714B0D] transition-colors leading-[1.08] font-light mb-6 max-w-3xl">{project.title}</h3>
                        <p className="text-[#3E3329] font-medium leading-relaxed text-base tracking-wide mb-7 max-w-2xl">{project.summary}</p>
                        <div className="relative z-10 flex items-center text-[#714B0D] text-[10px] font-extrabold uppercase tracking-[0.3em] opacity-85 group-hover:opacity-100 transition-all duration-500 mt-8">
                          {t.explore} <ExternalLink size={14} className={`mx-3 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-500`} />
                        </div>
                      </div>

                      <CaseStudyPoints project={project} labels={t} />
                    </div>

                    {hasCarousel && (
                      <div className="flagship-card-carousel pt-7 border-t border-[#8A641E]/14">
                        <ProjectCarousel images={carouselImages} onOpenImage={openImage} label={t.previewStrip} />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6">
                      <p className="text-[#714B0D] text-[10px] font-extrabold tracking-[0.3em] uppercase mb-5 flex items-center gap-3"><span className="w-4 h-px bg-[#A97717]/60"></span>{project.category}</p>
                      <h3 className="text-3xl lg:text-4xl font-serif text-[#17110b] group-hover:text-[#714B0D] transition-colors leading-[1.08] font-light mb-5">{project.title}</h3>
                      <p className="text-[#3E3329] font-medium leading-relaxed text-sm sm:text-base tracking-wide mb-6">{project.summary}</p>
                      <CaseStudyPoints project={project} labels={t} />
                      <div className="flex flex-wrap gap-2 mt-7 mb-7">
                        {project.tech.map((tech) => <span key={tech} className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#493D31] bg-white/70 border border-[#8A641E]/20 px-4 py-2 rounded-full">{tech}</span>)}
                      </div>
                    </div>
                    {hasCarousel && <div className="mt-auto"><ProjectCarousel images={carouselImages} onOpenImage={openImage} label={t.previewStrip} compact /></div>}
                    <div className="flex items-center text-[#714B0D] text-[10px] font-extrabold uppercase tracking-[0.3em] opacity-85 group-hover:opacity-100 transition-all duration-500 mt-8">
                      {t.explore} <ExternalLink size={14} className={`mx-3 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-500`} />
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto overscroll-contain">
            <div className="absolute inset-0 bg-[#1b140e]/45 backdrop-blur-xl" onClick={() => setSelectedProject(null)}></div>
            <motion.div initial={{ scale: 0.98, opacity: 0, y: 24 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.98, opacity: 0, y: 24 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="relative w-full max-w-6xl bg-[#FFF9F0] border border-[#8A641E]/20 flex flex-col rounded-[2rem] shadow-[0_45px_110px_rgba(38,25,9,0.32)] my-6 sm:my-10 overflow-hidden max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-5rem)]">
              <button onClick={() => setSelectedProject(null)} className="absolute top-5 end-5 text-[#4B4035] hover:text-white bg-white/80 p-3 hover:bg-[#17110b] transition-all duration-500 z-30 rounded-full backdrop-blur-md border border-[#8A641E]/18 shadow-[0_14px_35px_rgba(38,25,9,0.10)]" aria-label="Close project">
                <X size={18} />
              </button>
              <div className="overflow-y-auto overscroll-contain no-scrollbar">
                <div className="relative p-8 pt-24 sm:p-14 sm:pt-24 lg:p-20 lg:pt-24 border-b border-[#8A641E]/16 bg-gradient-to-b from-white/90 to-[#F7EEE0] overflow-visible">
                  <p className="relative z-10 text-[#714B0D] text-[10px] font-extrabold tracking-[0.4em] uppercase mb-7 flex items-center gap-4"><Sparkles size={12} className="text-[#A97717]" /> {selectedProject.category}</p>
                  <h3 className="relative z-10 text-[clamp(2.1rem,5.2vw,4.7rem)] font-serif text-[#17110b] mb-8 leading-[1.12] font-light break-words max-w-5xl pe-16 overflow-visible pb-2">{selectedProject.title}</h3>
                  <p className="relative z-10 text-base sm:text-lg text-[#33281E] font-medium max-w-3xl leading-relaxed tracking-wide">{selectedProject.summary}</p>
                </div>

                <div className="p-8 sm:p-12 lg:p-16 bg-[#FFF9F0] border-b border-[#8A641E]/14">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-14">
                    {[{ label: t.problem, value: selectedProject.problem }, { label: t.built, value: selectedProject.built }, { label: t.outcome, value: selectedProject.outcome }].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#8A641E]/15 bg-white/65 p-6 shadow-[0_16px_40px_rgba(54,40,19,0.07)]">
                        <p className="text-[#714B0D] text-[9px] font-extrabold tracking-[0.3em] uppercase mb-4">{item.label}</p>
                        <p className="text-[#2E251D] leading-relaxed text-[15px] font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-16">
                    <div className="lg:col-span-2">
                      <h4 className="text-[10px] font-extrabold text-[#714B0D] mb-10 uppercase tracking-[0.3em] flex items-center gap-4 border-b border-[#8A641E]/18 pb-4">{t.capabilities}</h4>
                      <ul className="space-y-6">
                        {selectedProject.features.map((feature, i) => (
                          <motion.li initial={{ opacity: 0, x: isRtl ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.2 }} key={i} className="flex gap-6 text-[#2E251D] font-normal leading-relaxed text-[15px] tracking-wide">
                            <span className="text-[#714B0D] shrink-0 text-sm opacity-85">0{i + 1}</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-extrabold text-[#714B0D] mb-10 uppercase tracking-[0.3em] flex items-center gap-4 border-b border-[#8A641E]/18 pb-4">{t.tech}</h4>
                      <div className="flex flex-col gap-4">
                        {selectedProject.tech.map((tech, i) => (
                          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 + 0.25 }} key={tech} className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-[#3E3329] flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#A97717]/65"></span>{tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {(() => {
                  const galleryImages = getCarouselImages(selectedProject, true);
                  return galleryImages.length > 0 ? (
                    <div className="p-6 sm:p-10 lg:p-12 bg-[#FFF9F0]">
                      <h4 className="text-[10px] font-extrabold text-[#714B0D] mb-7 uppercase tracking-[0.3em] flex items-center gap-4"><Images size={14} /> {t.gallery}</h4>
                      <ProjectCarousel images={galleryImages} onOpenImage={openImage} />
                    </div>
                  ) : null;
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="screenshot-lightbox-stage fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
            <button type="button" aria-label="Close screenshot preview" onPointerDown={closeImage} onClick={closeImage} className="absolute top-5 end-5 z-[1001] text-white bg-[#17110b]/70 hover:bg-[#17110b] border border-white/25 p-3 rounded-full backdrop-blur-md transition-colors shadow-[0_16px_40px_rgba(0,0,0,0.35)]"><X size={20} /></button>
            <motion.figure initial={{ scale: 0.96, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 16 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="lightbox-luxe-frame w-full max-w-[96rem] max-h-[92vh] overflow-hidden rounded-[1.9rem] bg-[#FFF9F0] border border-[#D9B96E]/24 cursor-zoom-out" onClick={() => setSelectedImage(null)}>
              <div className="flex items-center gap-1.5 px-5 py-4 border-b border-[#8A641E]/12 bg-gradient-to-r from-[#FFF8EC] via-white to-[#F3E5C2]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9B96E]"></span><span className="w-2.5 h-2.5 rounded-full bg-[#C9AB67]"></span><span className="w-2.5 h-2.5 rounded-full bg-[#9A6E22]"></span>
                <figcaption className="ms-4 text-[10px] uppercase tracking-[0.24em] font-bold text-[#70531C]/80 truncate">{selectedImage.caption}</figcaption>
              </div>
              <div className="max-h-[calc(92vh-58px)] overflow-auto bg-[#F5F0E6] p-2 sm:p-3">
                <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto object-contain rounded-xl shadow-[0_28px_70px_rgba(54,40,19,0.18)]" />
              </div>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
