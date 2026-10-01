import { useState, useRef, useCallback, useEffect } from "react"
import fotoPrincipal from "@/imports/foto_2_3-1.jpg"
import section01 from "@/imports/section_01.jpg"
import section02 from "@/imports/section_02.jpg"
import section03 from "@/imports/section_03.jpg"
import section04 from "@/imports/section_04.jpg"
import section05 from "@/imports/section_05.jpg"
import section06 from "@/imports/section_06.jpg"
import section07 from "@/imports/section_07.jpg"
import section08 from "@/imports/section_08.jpg"
import section09 from "@/imports/section_09.jpg"
import section10 from "@/imports/section_10.jpg"

// ─── Data ────────────────────────────────────────────────────────────────────

const portfolioItems = [
  {
    id: "vertex-auto",
    company: "Vertex Automação",
    year: "2025",
    role: "UX Design · Design System",
    tag: "Automação · Design System",
    gradient: "linear-gradient(160deg, #0a0a06 0%, #1a1a08 55%, #2e2a0a 100%)",
    accent: "#C9A84C",
    stat: "Design system completo",
    description: "Design system e plataforma de automação para a Vertex: biblioteca de componentes globais, regras tipográficas, paleta de cores, elementos de UI e sistema de ícones. Base para escalar o produto com consistência.",
    deliverables: ["Biblioteca de componentes globais", "Diretrizes de cores (Canvas Dark, Vertex Gold)", "Escala tipográfica (Instrument Serif + Geist Sans)", "Showcase de elementos de interface", "Balões de conversa WhatsApp", "Iconografia de sistema"],
    results: ["Sistema de design escalável", "Vertex Gold como identidade visual", "Componentes documentados e prontos para uso"],
    link: "https://www.figma.com/proto/Xddscx3xYY7xjBFprmDHeP/Vertex-Automa%C3%A7%C3%A3o--e-plataforma?node-id=3-886&t=GIzj0z7oNgiKtb4M-1",
  },
  {
    id: "ops",
    company: "Operações & Estratégia",
    year: "2026",
    role: "Operations Strategist",
    tag: "Estratégia · WhatsApp · Eventos",
    gradient: "linear-gradient(160deg, #0a0604 0%, #2a1508 60%, #4A2C20 100%)",
    accent: "#D9773F",
    stat: "127 contatos segmentados",
    description: "Case completo de Operações & Estratégia para o Impacto Summit: campanha de warm-up via WhatsApp com 127 contatos (27 VIP + 100 Geral), arquitetura Make + WhatsApp Cloud API, roadmap em 4 fases, tráfego pago e landing page.",
    deliverables: ["Segmentação VIP vs. Geral (127 contatos)", "Arquitetura Make + WhatsApp Cloud API", "Cards de warm-up por segmento", "Roadmap em 4 fases de implementação", "Estratégia de tráfego pago, semana final", "Landing Page: justificativa e preview"],
    results: ["127 contatos na base", "27 VIP / 100 Geral gerenciados", "7 dias de campanha paga", "3 toques por segmento"],
    gallery: [
      { src: section01, label: "01 · Context & Objective" },
      { src: section02, label: "02 · Segmentation VIP vs. General" },
      { src: section03, label: "03 · Architecture" },
      { src: section04, label: "04 · WhatsApp Costs" },
      { src: section05, label: "05 · VIP & General Cards" },
      { src: section06, label: "06 · Roadmap" },
      { src: section07, label: "07 · Paid Traffic" },
      { src: section08, label: "08 · Landing Page" },
      { src: section09, label: "09 · Total Cost" },
      { src: section10, label: "10 · Screens" },
    ],
  },
  {
    id: "impacto-summit",
    company: "Impacto Summit",
    year: "2026",
    role: "Web Design · Landing Page",
    tag: "Eventos · Landing Page",
    gradient: "linear-gradient(160deg, #0d0300 0%, #2e0f00 55%, #5c2200 100%)",
    accent: "#E05A00",
    stat: "LP de evento ao vivo",
    description: "Landing page completa para evento de saúde, performance e longevidade em Cascavel, PR. Dark, bold e com countdown em tempo real.",
    deliverables: ["Design da landing page", "Countdown timer interativo", "Seção de palestrantes", "CTA de conversão e ingressos"],
    results: ["Evento em 14/08/2026", "5 palestrantes featuados", "Countdown ao vivo integrado"],
    link: "https://www.figma.com/make/8QJWDC8BLTCiNhOMPO4Aci/Impacto-Summit",
  },
  {
    id: "dra-hellen",
    company: "Dra. Hellen Oliveira",
    year: "2025",
    role: "Identidade Visual · Web Design",
    tag: "Saúde · Marca · Landing Page",
    gradient: "linear-gradient(160deg, #061614 0%, #0d3530 55%, #1a6660 100%)",
    accent: "#E8702A",
    stat: "Marca + LP completos",
    description: "Projeto completo para a Dra. Hellen Oliveira (CRM-PR 63225): criação da identidade visual da marca (logo, paleta, tipografia e manifesto) e landing page de telemedicina para adultos e crianças, com foco em conversão via WhatsApp.",
    deliverables: ["Identidade visual completa (logo, paleta, tipografia)", "Manifesto da marca: 3 pilares: Humanizado, Baseado em Evidências, Acolhedor", "Tagline: \"Cuidar é uma vocação\"", "Landing page de telemedicina", "CTA de agendamento via WhatsApp", "Seção de serviços, sobre a médica e FAQ"],
    results: ["Marca lançada em 2025", "Identidade cream/teal/rosa, humanizada e profissional", "LP publicada e convertendo"],
    link: "https://attic-emoji-76374007.figma.site",
    linkBrand: "https://www.figma.com/make/u68TW79spul4v0ExoiylJ5/Nova-marca-para-Dra.-Hellen",
  },
  {
    id: "vertex",
    company: "Vertex Filmes",
    year: "2025",
    role: "Web Design · Landing Page",
    tag: "Audiovisual · Produtora",
    gradient: "linear-gradient(160deg, #040408 0%, #0d0d1a 55%, #1a1a3a 100%)",
    accent: "#6B4FE8",
    stat: "Site produtora ao vivo",
    description: "Site institucional para produtora audiovisual. Dark editorial com foco em portfólio de produções, identidade cinematográfica e geração de leads.",
    deliverables: ["Design do site institucional", "Seção de portfólio de produções", "Identidade visual digital", "CTA de contato e orçamento"],
    results: ["Identidade cinematográfica coesa", "Publicado no ar", "Presença digital consolidada"],
    link: "https://chill-wheel-10246457.figma.site",
  },
  {
    id: "valdecir",
    company: "Valdecir Alcântara",
    year: "2024",
    role: "Marketing Político · Campanha",
    tag: "Política · Campanha · Social Media",
    gradient: "linear-gradient(160deg, #040810 0%, #081428 55%, #0c1e40 100%)",
    accent: "#38D9CC",
    stat: "5º mais votado em Cascavel",
    description: "Marketing completo da campanha de reeleição do Vereador Valdecir Alcântara, conduzido inteiramente por mim durante 6 meses. Planejamento estratégico, produção de conteúdo, gestão das redes sociais e comunicação, do briefing ao dia da eleição.",
    deliverables: [
      "Planejamento estratégico de comunicação (6 meses)",
      "Produção de conteúdo para redes sociais",
      "Criação de materiais gráficos e digitais",
      "Gestão completa das redes sociais da campanha",
      "Estratégia de posicionamento e narrativa eleitoral",
      "Produção e acompanhamento de conteúdos audiovisuais",
      "Apresentações e materiais institucionais",
    ],
    results: [
      "Reeleito pela 3ª vez",
      "5º vereador mais votado de Cascavel, PR",
      "2.510 votos conquistados",
      "6 meses · 1 profissional responsável por tudo",
    ],
  },
]

const services = [
  {
    code: "01",
    name: "Social Media & Conteúdo",
    short: "Social",
    icon: "◈",
    description: "Planejamento editorial estratégico, produção de conteúdo e gestão de redes sociais para diferentes segmentos, com foco em consistência, alcance e resultado mensurável.",
    items: ["Calendário editorial e planejamento de pauta", "Copywriting e roteiros para vídeo", "Campanhas e ações sazonais", "Acompanhamento de métricas e relatórios", "Atendimento e briefing com clientes"],
    accent: "#D9773F",
  },
  {
    code: "02",
    name: "Web Design & Landing Pages",
    short: "Web",
    icon: "◉",
    description: "Sites institucionais e landing pages com foco em conversão. Desde o conceito visual até a entrega, com apoio de ferramentas de IA para agilidade e qualidade.",
    items: ["Sites institucionais e portfólios digitais", "Landing pages de alta conversão", "Identidade visual digital", "Desenvolvimento com IA (Figma Make, Lovable)", "Integração com WhatsApp e CTA de conversão"],
    accent: "#A63A2E",
  },
  {
    code: "03",
    name: "Gestão de Projetos & Ops",
    short: "Ops",
    icon: "◧",
    description: "Estruturação e acompanhamento de projetos de comunicação e marketing. Organização de demandas, prazos e entregas, interface entre clientes e equipes.",
    items: ["Planejamento e acompanhamento de projetos", "Gestão de cronogramas e prazos", "Interface entre clientes e equipe criativa", "Briefing e direcionamento de demandas", "Identificação e resolução de gargalos"],
    accent: "#D9773F",
  },
  {
    code: "04",
    name: "Produção Audiovisual",
    short: "AV",
    icon: "◫",
    description: "Produção de conteúdo audiovisual para redes sociais e projetos institucionais: roteiro, captação, direção e edição com foco em comunicação eficaz.",
    items: ["Roteiro e direção de gravação", "Captação de fotos e vídeos", "Edição e pós-produção (CapCut, Premiere)", "Reels, Stories e conteúdo para YouTube", "Adaptação para diferentes formatos e plataformas"],
    accent: "#A63A2E",
  },
]

const marqueeItems = [
  "Social Media", "Web Design", "Gestão de Projetos", "Marketing Político", "Copywriting",
  "Content Creation", "Account Management", "Produção Audiovisual", "Landing Pages", "IA & Automação",
  "Social Media", "Web Design", "Gestão de Projetos", "Marketing Político", "Copywriting",
  "Content Creation", "Account Management", "Produção Audiovisual", "Landing Pages", "IA & Automação",
]

const stats = [
  { value: "6+", label: "anos de experiência" },
  { value: "20+", label: "projetos entregues" },
  { value: "5", label: "clientes ativos" },
  { value: "3", label: "pilares de atuação" },
]

const experiences = [
  {
    company: "Vertex Filmes",
    role: "Executiva de Contas",
    period: "2026 – Atual",
    current: true,
    items: ["Atendimento e briefing de clientes", "Desenvolvimento de landing pages e plataformas digitais com IA", "Gestão de projetos audiovisuais e digitais", "Interface entre clientes, equipe criativa e audiovisual"],
  },
  {
    company: "Gabinete do Vereador Valdecir Alcântara",
    role: "Assessora Parlamentar, Marketing e Comunicação",
    period: "2026",
    current: false,
    items: ["Planejamento e execução de estratégias de comunicação", "Conteúdo para redes sociais e canais institucionais", "Materiais gráficos, digitais e audiovisuais", "Apresentações institucionais"],
  },
  {
    company: "Degust.Group",
    role: "Social Media / Content Manager",
    period: "2025",
    current: false,
    items: ["Planejamento estratégico de conteúdo para múltiplos clientes", "Calendários editoriais, pautas e copywriting", "Acompanhamento de métricas e resultados"],
  },
  {
    company: "Campanha · Vereador Valdecir Alcântara",
    role: "Responsável pelo Marketing da Campanha",
    period: "2024",
    current: false,
    items: ["Todo o marketing da campanha, individualmente, por 6 meses", "Resultado: 5º mais votado de Cascavel, 2.510 votos, 3ª reeleição"],
  },
  {
    company: "Every.pub",
    role: "Social Media | Account Manager",
    period: "2021 – 2024",
    current: false,
    items: ["Gestão de carteira de clientes de diferentes segmentos", "Planejamento de Social Media, campanhas e calendários editoriais", "Copywriting, roteiros e acompanhamento de métricas"],
  },
]

const tools = [
  "Canva", "Adobe Photoshop", "Adobe Illustrator", "CapCut", "Adobe Premiere",
  "Meta Business Suite", "Google Ads", "Trello", "Notion", "Monday", "Ekyte", "Microsoft Office",
]

// ─── Golden Ratio Spiral ──────────────────────────────────────────────────────
// Mathematically correct Fibonacci spiral.
// viewBox 525×325 = 105×65 Fibonacci units (scale ×5).
// Arcs derived from Fibonacci squares: 65,40,25,15,10,5,5 units.
// Construction lines show the golden rectangle subdivision.

function GoldenSpiral({
  style,
  opacity = 1,
  strokeColor = "#A63A2E",
  gridColor = "#4A2C20",
}: {
  style?: React.CSSProperties
  opacity?: number
  strokeColor?: string
  gridColor?: string
}) {
  // Spiral path: 7 quarter-arcs, CW, px values (unit × 5)
  const spiralPath =
    "M 0 325 A 325 325 0 0 1 325 0 " +
    "A 200 200 0 0 1 525 200 " +
    "A 125 125 0 0 1 400 325 " +
    "A 75 75 0 0 1 325 250 " +
    "A 50 50 0 0 1 375 200 " +
    "A 25 25 0 0 1 400 225 " +
    "A 25 25 0 0 1 375 250"

  // Golden rectangle subdivision lines
  const gridLines = [
    [325, 0, 325, 325],   // divides S1 from rest
    [325, 200, 525, 200], // divides S2 from S3+
    [400, 200, 400, 325], // divides S3 from S4+
    [325, 250, 400, 250], // divides S4 from S5
    [375, 200, 375, 250], // divides S5 from S6+S7
    [375, 225, 400, 225], // divides S6 from S7
  ]

  // Construction circles at arc centers (key golden ratio points)
  const circleDots = [
    { cx: 325, cy: 325 },
    { cx: 325, cy: 200 },
    { cx: 400, cy: 200 },
    { cx: 400, cy: 250 },
    { cx: 375, cy: 250 },
    { cx: 400, cy: 225 },
    { cx: 375, cy: 225 },
  ]

  return (
    <svg
      viewBox="0 0 525 325"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: "none", overflow: "visible", opacity, ...style }}
    >
      {/* Outer golden rectangle */}
      <rect
        x="0.5" y="0.5" width="524" height="324"
        stroke={gridColor} strokeWidth="0.6" opacity={0.35}
      />

      {/* Subdivision construction lines */}
      {gridLines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={gridColor} strokeWidth="0.5"
          opacity={0.25 - i * 0.02}
          strokeDasharray={i > 1 ? "4 6" : "none"}
        />
      ))}

      {/* Construction dots at arc centers */}
      {circleDots.map((c, i) => (
        <circle
          key={i}
          cx={c.cx} cy={c.cy}
          r={i === 0 ? 3 : 1.8 - i * 0.15}
          fill="none"
          stroke={gridColor}
          strokeWidth="0.5"
          opacity={0.3}
        />
      ))}

      {/* The Fibonacci spiral — main element */}
      <path
        d={spiralPath}
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity={0.7}
        strokeLinecap="round"
      />

      {/* Faint duplicate spiral for glow effect */}
      <path
        d={spiralPath}
        stroke={strokeColor}
        strokeWidth="3"
        fill="none"
        opacity={0.08}
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Floating card ────────────────────────────────────────────────────────────

function FloatCard({ icon, label, value, sub, animClass, style, accent = "#D9773F" }: {
  icon: string; label: string; value: string; sub?: string
  animClass: string; style: React.CSSProperties; accent?: string
}) {
  return (
    <div className={animClass} style={{
      position: "absolute",
      background: "rgba(10, 6, 4, 0.88)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(166,58,46,0.2)",
      borderRadius: "12px",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: 10,
      boxShadow: "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
      minWidth: "148px",
      ...style,
    }}>
      <div style={{
        width: "32px", height: "32px", borderRadius: "8px",
        background: `${accent}15`, border: `1px solid ${accent}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "14px", flexShrink: 0, color: accent,
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: "16px", fontWeight: 600, color: "#F2E8DC", lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#c8a882", marginTop: "3px", letterSpacing: "0.05em" }}>{label}</div>
        {sub && <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: accent, marginTop: "1px" }}>{sub}</div>}
      </div>
    </div>
  )
}

// ─── Project modal ─────────────────────────────────────────────────────────────

function ProjectModal({ item, onClose }: { item: typeof portfolioItems[0]; onClose: () => void }) {
  const [slide, setSlide] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const gallery = "gallery" in item ? (item.gallery as { src: string; label: string }[]) : null

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (lightbox) setLightbox(false); else onClose() }
      if (gallery && e.key === "ArrowRight") setSlide(s => Math.min(s + 1, gallery.length - 1))
      if (gallery && e.key === "ArrowLeft") setSlide(s => Math.max(s - 1, 0))
    }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [onClose, gallery, lightbox])

  return (
    <>
    {/* Lightbox fullscreen */}
    {lightbox && gallery && (
      <div
        onClick={() => setLightbox(false)}
        style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.96)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}
      >
        <button onClick={() => setLightbox(false)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#F2E8DC", fontSize: "28px", cursor: "pointer", zIndex: 201 }}>×</button>
        <button onClick={(e) => { e.stopPropagation(); setSlide(s => Math.max(s - 1, 0)) }} disabled={slide === 0} style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(8,6,4,0.8)", border: "1px solid #1e1210", borderRadius: "4px", color: slide === 0 ? "rgba(242,232,220,0.2)" : "#F2E8DC", width: "40px", height: "40px", cursor: slide === 0 ? "default" : "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
        <img src={gallery[slide].src} alt={gallery[slide].label} style={{ maxWidth: "92vw", maxHeight: "90vh", objectFit: "contain", borderRadius: "4px" }} onClick={e => e.stopPropagation()} />
        <button onClick={(e) => { e.stopPropagation(); setSlide(s => Math.min(s + 1, gallery.length - 1)) }} disabled={slide === gallery.length - 1} style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(8,6,4,0.8)", border: "1px solid #1e1210", borderRadius: "4px", color: slide === gallery.length - 1 ? "rgba(242,232,220,0.2)" : "#F2E8DC", width: "40px", height: "40px", cursor: slide === gallery.length - 1 ? "default" : "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
        <div style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", fontFamily: "Inter, sans-serif", fontSize: "10px", color: item.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>{gallery[slide].label} · {slide + 1}/{gallery.length}</div>
      </div>
    )}
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 50,
        background: "rgba(0,0,0,0.82)", backdropFilter: "blur(10px)",
        display: "flex", justifyContent: "flex-end",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: gallery ? "min(780px, 100vw)" : "min(580px, 100vw)", height: "100%", overflowY: "auto",
          background: "#080604", borderLeft: "1px solid #1e1210",
          animation: "slideIn 0.38s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        <div style={{ height: "220px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px", position: "relative", background: item.gradient, overflow: "hidden" }}>
          <button onClick={onClose} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "rgba(242,232,220,0.65)", fontSize: "24px", cursor: "pointer", lineHeight: 1 }}>×</button>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: item.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>{item.tag}</div>
          <h2 style={{ fontFamily: "Fraunces, serif", color: "#F2E8DC", fontSize: "28px", fontWeight: 600, margin: 0, lineHeight: 1.15 }} translate="no">{item.company}</h2>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "rgba(242,232,220,0.6)", marginTop: "8px" }}>{item.year} / {item.role}</div>
        </div>
        <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "36px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#D9C7A8", lineHeight: 1.8, margin: 0 }}>{item.description}</p>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "16px" }}>/ entregas</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {item.deliverables.map((d, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: item.accent, fontSize: "10px", marginTop: "4px", fontFamily: "Inter, sans-serif" }}>→</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#D9C7A8", lineHeight: 1.6 }}>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "16px" }}>/ resultados</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {item.results.map((r, i) => (
                <div key={i} style={{ background: "#0f0806", border: "1px solid #1e1210", borderRadius: "8px", padding: "12px 16px" }}>
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: "14px", color: item.accent, fontStyle: "italic" }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
          {gallery && (
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "16px" }}>/ case completo · {gallery.length} seções</div>
              {/* Slide viewer */}
              <div style={{ position: "relative", borderRadius: "6px", overflow: "hidden", border: "1px solid #1e1210", background: "#050302" }}>
                <img
                  src={gallery[slide].src}
                  alt={gallery[slide].label}
                  onClick={() => setLightbox(true)}
                  title="Clique para ampliar"
                  style={{ width: "100%", display: "block", maxHeight: "420px", objectFit: "contain", background: "#080604", cursor: "zoom-in" }}
                />
                {/* Zoom hint */}
                <div style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(8,6,4,0.8)", border: "1px solid #1e1210", borderRadius: "4px", padding: "4px 8px", fontFamily: "Inter, sans-serif", fontSize: "8px", color: "rgba(242,232,220,0.5)", pointerEvents: "none", letterSpacing: "0.08em" }}>clique para ampliar ⤢</div>
                {/* Nav arrows */}
                <button
                  onClick={() => setSlide(s => Math.max(s - 1, 0))}
                  disabled={slide === 0}
                  style={{
                    position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                    background: "rgba(8,6,4,0.85)", border: "1px solid #1e1210", borderRadius: "4px",
                    color: slide === 0 ? "rgba(242,232,220,0.2)" : "#F2E8DC",
                    width: "32px", height: "32px", cursor: slide === 0 ? "default" : "pointer",
                    fontFamily: "Inter, sans-serif", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >‹</button>
                <button
                  onClick={() => setSlide(s => Math.min(s + 1, gallery.length - 1))}
                  disabled={slide === gallery.length - 1}
                  style={{
                    position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
                    background: "rgba(8,6,4,0.85)", border: "1px solid #1e1210", borderRadius: "4px",
                    color: slide === gallery.length - 1 ? "rgba(242,232,220,0.2)" : "#F2E8DC",
                    width: "32px", height: "32px", cursor: slide === gallery.length - 1 ? "default" : "pointer",
                    fontFamily: "Inter, sans-serif", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >›</button>
                {/* Slide label */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "10px 14px",
                  background: "linear-gradient(transparent, rgba(8,6,4,0.92))",
                  fontFamily: "Inter, sans-serif", fontSize: "9px", color: item.accent,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                }}>{gallery[slide].label}</div>
              </div>
              {/* Dot nav */}
              <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "14px" }}>
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    style={{
                      width: i === slide ? "20px" : "6px", height: "6px",
                      borderRadius: "3px", border: "none", cursor: "pointer",
                      background: i === slide ? item.accent : "rgba(242,232,220,0.18)",
                      transition: "width 0.25s, background 0.2s", padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          <div style={{ borderTop: "1px solid #120806", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <a href="https://pixel-cel-54500471.figma.site/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#D9773F", margin: 0, textDecoration: "none" }}>Waisla Gomes</a>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {"link" in item && item.link && (
                <a
                  href={item.link as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "#F2E8DC", textDecoration: "none",
                    padding: "8px 16px", border: `1px solid ${item.accent}`,
                    borderRadius: "4px", transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = item.accent }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                >Ver projeto ao vivo →</a>
              )}
              {"linkBrand" in item && item.linkBrand && (
                <a
                  href={item.linkBrand as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em",
                    textTransform: "uppercase", color: item.accent, textDecoration: "none",
                    padding: "8px 16px", border: `1px solid ${item.accent}40`,
                    borderRadius: "4px", transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = item.accent; e.currentTarget.style.color = "#F2E8DC" }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${item.accent}40`; e.currentTarget.style.color = item.accent }}
                >Ver identidade visual →</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeItem, setActiveItem] = useState<typeof portfolioItems[0] | null>(null)
  const [modalItem, setModalItem] = useState<typeof portfolioItems[0] | null>(null)
  const [activeService, setActiveService] = useState<number | null>(null)
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const fn = () => setNavSolid(window.scrollY > 60)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  return (
    <div style={{ background: "#080604", minHeight: "100vh", color: "#F2E8DC", overflowX: "hidden" }}>

      {/* ── Nav ────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 40px",
        background: navSolid ? "rgba(8,6,4,0.94)" : "transparent",
        backdropFilter: navSolid ? "blur(24px)" : "none",
        borderBottom: navSolid ? "1px solid #140a06" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div>
          <div style={{ fontFamily: "Dancing Script, cursive", fontSize: "20px", color: "#F2E8DC", fontWeight: 700, lineHeight: 1 }}>Waisla Gomes</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: "7px", color: "#D9773F", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "2px" }}>marketing & ops strategy</div>
        </div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {[["#sobre", "Sobre"], ["#servicos", "Serviços"], ["#projetos", "Projetos"], ["#contato", "Contato"]].map(([href, label]) => (
            <a key={href} href={href} style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#c8a882", letterSpacing: "0.12em", textDecoration: "none", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2E8DC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c8a882")}
            >{label}</a>
          ))}
          <a href="https://wa.me/5545998272798" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#F2E8DC",
            textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "8px 18px", border: "1px solid #A63A2E", borderRadius: "4px",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#A63A2E" }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
          >Trabalhar juntos →</a>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr minmax(280px, 400px)",
        alignItems: "stretch",
        borderBottom: "1px solid #120806",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Golden spiral — hero background, anchored bottom-left */}
        <GoldenSpiral
          opacity={0.09}
          strokeColor="#A63A2E"
          gridColor="#3a1208"
          style={{
            position: "absolute",
            bottom: -40,
            left: -60,
            width: "72%",
            height: "auto",
            zIndex: 0,
          }}
        />

        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 48px 80px 40px", position: "relative", zIndex: 1 }}>
          {/* Top label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "52px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A63A2E", boxShadow: "0 0 8px #A63A2E" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.18em", textTransform: "uppercase" }}>marketing & estratégia · 2026</span>
          </div>

          <h1 style={{
            fontFamily: "Fraunces, serif",
            fontSize: "clamp(3rem, 5.5vw, 6rem)",
            fontWeight: 300, fontStyle: "italic",
            lineHeight: 1.05, color: "#F2E8DC", margin: 0, marginBottom: "36px",
          }}>
            boas ideias
            <br />
            constroem
            <br />
            <span style={{
              background: "linear-gradient(120deg, #A63A2E 0%, #D9773F 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>grandes</span>
            <br />
            projetos.
          </h1>

          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#D9C7A8", lineHeight: 1.8, maxWidth: "400px", marginBottom: "52px" }}>
            6 anos em agências, atendimento de clientes, planejamento de conteúdo, gestão de projetos e produção audiovisual. Marketing, estratégia e execução, do briefing ao resultado.
          </p>

          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="#projetos" style={{
              fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#F2E8DC", textDecoration: "none",
              padding: "13px 28px", border: "1px solid #A63A2E", borderRadius: "4px",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#A63A2E" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
            >Ver projetos</a>
            <a href="#servicos" style={{
              fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#c8a882", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F2E8DC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#c8a882")}
            >Serviços →</a>
          </div>

          {/* Stats row */}
          <div style={{ marginTop: "72px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", borderTop: "1px solid #120806", paddingTop: "32px" }}>
            {stats.map((s, i) => (
              <div key={i} style={{ paddingRight: "20px", borderRight: i < stats.length - 1 ? "1px solid #120806" : "none", paddingLeft: i > 0 ? "20px" : "0" }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "26px", fontWeight: 600, color: "#F2E8DC", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", marginTop: "6px", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo + floating cards */}
        <div style={{ position: "relative", background: "#0c0705", overflow: "visible" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "48px", background: "linear-gradient(90deg, #080604, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <img src={fotoPrincipal} alt="Waisla Gomes" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 8%", filter: "brightness(0.9) contrast(1.03)", display: "block", imageRendering: "auto" }} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "120px", background: "linear-gradient(transparent, #080604)", zIndex: 3, pointerEvents: "none" }} />

          <FloatCard icon="▲" label="engajamento_orgânico" value="↑ 38%" sub="desktop_internet · 2024" animClass="float-a" accent="#D9773F" style={{ top: "18%", left: "-110px" }} />
          <FloatCard icon="◆" label="pilares_ativos" value="3" sub="design · ops · strategy" animClass="float-b" accent="#A63A2E" style={{ top: "44%", left: "-128px" }} />
          <FloatCard icon="○" label="sites_entregues" value="8+" sub="↓ 40% tempo produção" animClass="float-c" accent="#D9773F" style={{ bottom: "26%", left: "-98px" }} />
          <FloatCard icon="★" label="nps_médio" value="9.2" animClass="float-d" accent="#A63A2E" style={{ top: "8%", right: "-12px" }} />
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid #120806", overflow: "hidden", padding: "16px 0", position: "relative" }}>
        <div className="marquee-track" style={{ gap: "0" }}>
          {marqueeItems.map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "24px", paddingRight: "40px" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#D9773F", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{item}</span>
              <span style={{ color: "#A63A2E", fontSize: "8px" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Sobre / Trajetória ─────────────────────────────────────────── */}
      <section id="sobre" style={{ padding: "100px 40px", borderBottom: "1px solid #120806", position: "relative", overflow: "hidden" }}>
        <GoldenSpiral opacity={0.055} strokeColor="#D9773F" gridColor="#2a1208" style={{ position: "absolute", top: -40, left: -60, width: "45%", height: "auto", zIndex: 0 }} />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>

            {/* Left: bio + skills */}
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>// sobre</div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 300, fontStyle: "italic", color: "#F2E8DC", margin: "0 0 28px 0", lineHeight: 1.1 }}>Perfil profissional</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#D9C7A8", lineHeight: 1.85, margin: "0 0 16px 0" }}>
                Profissional de Marketing com 6 anos de experiência em agências, atendimento de clientes, planejamento de conteúdo, gestão de projetos e produção audiovisual.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#c8a882", lineHeight: 1.85, margin: "0 0 36px 0" }}>
                Perfil estratégico e executor, facilidade para gerenciar múltiplas demandas, conectar diferentes áreas e transformar objetivos de negócio em projetos e resultados concretos.
              </p>

              {/* Skill areas */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                {[
                  { label: "Marketing & Social Media", icon: "◈" },
                  { label: "Gestão de Projetos & Operações", icon: "◧" },
                  { label: "Produção Audiovisual", icon: "◫" },
                  { label: "IA & Plataformas Digitais", icon: "◉" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ color: "#D9773F", fontSize: "12px" }}>{s.icon}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#D9C7A8" }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Formation */}
              <div style={{ borderTop: "1px solid #120806", paddingTop: "24px" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "14px" }}>/ formação</div>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "15px", color: "#F2E8DC", fontWeight: 500, marginBottom: "4px" }}>Tecnólogo em Design Gráfico</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#c8a882" }}>FAG · Cascavel, PR · 2020–2022</div>
                <div style={{ marginTop: "14px", fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#8a7060" }}>
                  UX Design (cursando) · Foundations of Digital Marketing, Google/Coursera
                </div>
              </div>

              {/* Tools */}
              <div style={{ borderTop: "1px solid #120806", paddingTop: "24px", marginTop: "24px" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "14px" }}>/ ferramentas</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {tools.map((t, i) => (
                    <span key={i} style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#c8a882", padding: "3px 10px", border: "1px solid #1e1210", borderRadius: "99px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: experience timeline */}
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "28px" }}>/ trajetória</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {experiences.map((exp, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: "18px", paddingBottom: "32px", position: "relative" }}>
                    {/* Timeline line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: exp.current ? "#D9773F" : "#1e1210", border: `2px solid ${exp.current ? "#D9773F" : "#3a2010"}`, flexShrink: 0, boxShadow: exp.current ? "0 0 10px #D9773F60" : "none", marginTop: "4px" }} />
                      {i < experiences.length - 1 && (
                        <div style={{ width: "1px", flex: 1, background: "#1e1210", marginTop: "6px" }} />
                      )}
                    </div>
                    {/* Content */}
                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "12px", marginBottom: "4px" }}>
                        <div style={{ fontFamily: "Fraunces, serif", fontSize: "16px", color: "#F2E8DC", fontWeight: 500, lineHeight: 1.2 }} translate="no">{exp.company}</div>
                        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#6a4a30", whiteSpace: "nowrap", letterSpacing: "0.06em" }}>{exp.period}</div>
                      </div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: exp.current ? "#D9773F" : "#c8a882", marginBottom: "10px", letterSpacing: "0.04em" }}>{exp.role}</div>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
                        {exp.items.map((item, j) => (
                          <li key={j} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                            <span style={{ color: "#4a3020", fontSize: "8px", marginTop: "5px", flexShrink: 0 }}>·</span>
                            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#8a7060", lineHeight: 1.6 }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Serviços ───────────────────────────────────────────────────── */}
      <section id="servicos" style={{ padding: "100px 40px", borderBottom: "1px solid #120806", position: "relative", overflow: "hidden" }}>
        <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />
        {/* Golden spiral — serviços, centered bottom */}
        <GoldenSpiral
          opacity={0.07}
          strokeColor="#A63A2E"
          gridColor="#1e0e06"
          style={{
            position: "absolute",
            bottom: -20,
            right: 0,
            width: "44%",
            height: "auto",
            transform: "rotate(90deg)",
            zIndex: 0,
          }}
        />
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>// serviços</div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#F2E8DC", margin: 0 }}>O que eu faço</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
            {services.map((s, i) => (
              <div
                key={s.code}
                className="glow-hover"
                onClick={() => setActiveService(activeService === i ? null : i)}
                style={{
                  background: "#0c0705",
                  border: "1px solid #1a0d08",
                  borderRadius: i === 0 ? "4px 0 0 0" : i === 1 ? "0 4px 0 0" : i === 2 ? "0 0 0 4px" : "0 0 4px 0",
                  padding: "40px",
                  cursor: "pointer",
                  transition: "border-color 0.25s, box-shadow 0.25s, background 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "10px",
                      background: `${s.accent}12`, border: `1px solid ${s.accent}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "18px", color: s.accent,
                    }}>{s.icon}</div>
                    <div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase" }}>{s.code}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: s.accent, marginTop: "2px" }}>{s.short}</div>
                    </div>
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#D9773F", transition: "color 0.2s, transform 0.3s", display: "inline-block", transform: activeService === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </div>

                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", color: "#F2E8DC", fontWeight: 500, margin: "0 0 12px 0", lineHeight: 1.25 }}>{s.name}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#c8a882", lineHeight: 1.75, margin: 0 }}>{s.description}</p>

                {/* Expandable items */}
                <div style={{
                  maxHeight: activeService === i ? "300px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}>
                  <div style={{ borderTop: "1px solid #1a0d08", marginTop: "24px", paddingTop: "24px" }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "14px" }}>includes</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {s.items.map((item, j) => (
                        <li key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <span style={{ color: s.accent, fontFamily: "Inter, sans-serif", fontSize: "9px", marginTop: "3px" }}>→</span>
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#D9C7A8", lineHeight: 1.5 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contato" style={{
                      display: "inline-block", marginTop: "20px",
                      fontFamily: "Inter, sans-serif", fontSize: "9px",
                      color: s.accent, textDecoration: "none", letterSpacing: "0.12em",
                      textTransform: "uppercase", borderBottom: `1px solid ${s.accent}40`,
                      paddingBottom: "2px", transition: "border-color 0.2s",
                    }}>Solicitar serviço →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projetos ───────────────────────────────────────────────────── */}
      <section id="projetos" style={{ borderBottom: "1px solid #120806", position: "relative", overflow: "hidden" }}>
        {/* Header */}
        <div style={{ padding: "80px 40px 48px", maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>// projetos</div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#F2E8DC", margin: 0 }}>Trabalhos selecionados</h2>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.08em" }}>{portfolioItems.length} projetos</div>
          </div>
        </div>

        {/* Split: preview left + cards right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "600px" }}>

          {/* LEFT — Preview panel */}
          <div style={{ position: "sticky", top: 0, height: "100vh", overflowY: "auto", borderRight: "1px solid #120806" }}>
            {activeItem ? (
              <div style={{ padding: "56px 48px", height: "100%", display: "flex", flexDirection: "column", gap: "32px", background: "#080604" }}>
                {/* Gradient banner */}
                <div style={{ borderRadius: "6px", padding: "36px", background: activeItem.gradient, position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  <div style={{ position: "absolute", right: "20px", bottom: "10px", fontFamily: "Fraunces, serif", fontSize: "100px", fontWeight: 700, color: "rgba(255,255,255,0.05)", lineHeight: 1, userSelect: "none" }}>
                    {String(portfolioItems.indexOf(activeItem) + 1).padStart(2, "0")}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: activeItem.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "10px" }}>{activeItem.tag}</div>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#F2E8DC", fontWeight: 600, lineHeight: 1.1, margin: "0 0 10px 0" }} translate="no">{activeItem.company}</h3>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "rgba(242,232,220,0.55)" }}>{activeItem.year} / {activeItem.role}</div>
                </div>

                {/* Stat */}
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.4rem", color: activeItem.accent, fontStyle: "italic" }}>{activeItem.stat}</div>

                {/* Description */}
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#D9C7A8", lineHeight: 1.8, margin: 0 }}>{activeItem.description}</p>

                {/* Deliverables */}
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "14px" }}>/ entregas</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {activeItem.deliverables.map((d, i) => (
                      <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: activeItem.accent, fontSize: "9px", marginTop: "4px", fontFamily: "Inter, sans-serif" }}>→</span>
                        <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#D9C7A8", lineHeight: 1.6 }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "12px" }}>/ resultados</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {activeItem.results.map((r, i) => (
                      <div key={i} style={{ background: "#0f0806", border: "1px solid #1e1210", borderRadius: "6px", padding: "10px 14px" }}>
                        <span style={{ fontFamily: "Fraunces, serif", fontSize: "13px", color: activeItem.accent, fontStyle: "italic" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "auto", paddingTop: "8px", borderTop: "1px solid #120806" }}>
                  {"gallery" in activeItem && activeItem.gallery && (
                    <button onClick={() => setModalItem(activeItem)} style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2E8DC", background: "none", padding: "8px 16px", border: `1px solid ${activeItem.accent}`, borderRadius: "4px", cursor: "pointer", transition: "background 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = activeItem.accent }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                    >Ver case completo →</button>
                  )}
                  {"link" in activeItem && activeItem.link && (
                    <a href={activeItem.link as string} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F2E8DC", textDecoration: "none", padding: "8px 16px", border: `1px solid ${activeItem.accent}`, borderRadius: "4px", transition: "background 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = activeItem.accent }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent" }}
                    >Ver ao vivo →</a>
                  )}
                  {"linkBrand" in activeItem && activeItem.linkBrand && (
                    <a href={activeItem.linkBrand as string} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: activeItem.accent, textDecoration: "none", padding: "8px 16px", border: `1px solid ${activeItem.accent}40`, borderRadius: "4px", transition: "border-color 0.2s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = activeItem.accent }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${activeItem.accent}40` }}
                    >Ver identidade visual →</a>
                  )}
                </div>
              </div>
            ) : (
              /* Placeholder */
              <div style={{ height: "100%", minHeight: "480px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
                <GoldenSpiral opacity={0.1} strokeColor="#D9773F" gridColor="#2a1208" style={{ position: "absolute", width: "90%", height: "auto" }} />
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                  {/* Animated pulsing dot */}
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid #D9773F40", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D9773F", boxShadow: "0 0 12px #D9773F80" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#D9773F", letterSpacing: "0.24em", textTransform: "uppercase", marginBottom: "12px" }}>// selecione um projeto</div>
                    <p style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(1.4rem, 2vw, 1.9rem)", fontStyle: "italic", fontWeight: 300, color: "rgba(242,232,220,0.5)", margin: 0, lineHeight: 1.4 }}>
                      Escolha um trabalho<br />ao lado para ver o case
                    </p>
                  </div>
                  {/* Arrow pointing right */}
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#D9773F60", letterSpacing: "0.08em", marginTop: "8px" }}>→</div>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Cards */}
          <div style={{ padding: "0 0 80px 0" }}>
            {portfolioItems.map((p, i) => (
              <div
                key={p.id}
                onClick={() => setActiveItem(p)}
                style={{
                  padding: "32px 40px",
                  borderBottom: "1px solid #120806",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "20px",
                  background: activeItem?.id === p.id ? "#0f0a07" : "transparent",
                  transition: "background 0.3s",
                  position: "relative", overflow: "hidden",
                }}
                onMouseEnter={(e) => { if (activeItem?.id !== p.id) (e.currentTarget as HTMLElement).style.background = "#0f0806" }}
                onMouseLeave={(e) => { if (activeItem?.id !== p.id) (e.currentTarget as HTMLElement).style.background = "transparent" }}
              >
                {/* Number */}
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "28px", fontWeight: 700, color: activeItem?.id === p.id ? `${p.accent}60` : "rgba(242,232,220,0.08)", lineHeight: 1, flexShrink: 0, width: "40px" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: activeItem?.id === p.id ? p.accent : "#D9773F", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "4px" }}>{p.tag}</div>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: "1.2rem", color: "#F2E8DC", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} translate="no">{p.company}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", color: "#c8a882", marginTop: "2px" }}>{p.year} · {p.role}</div>
                </div>
                {/* Stat */}
                <div style={{ fontFamily: "Fraunces, serif", fontSize: "13px", color: p.accent, fontStyle: "italic", flexShrink: 0, textAlign: "right" }}>{p.stat}</div>
                {/* Active indicator */}
                {activeItem?.id === p.id && (
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: p.accent }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ────────────────────────────────────────────────────── */}
      <section id="contato" style={{ padding: "120px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>// contato</div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#F2E8DC", margin: "0 0 24px 0", lineHeight: 1.1 }}>
                Vamos trabalhar<br />
                <span style={{ background: "linear-gradient(120deg, #A63A2E, #D9773F)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", paddingRight: "6px", display: "inline-block" }}>juntos?</span>
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#c8a882", lineHeight: 1.8, margin: "0 0 40px 0" }}>
                Aberta a projetos de marketing, conteúdo, gestão de projetos e produção audiovisual. Me conta o que você precisa, vou adorar ouvir.
              </p>
              {/* Primary CTA */}
              <a href="https://wa.me/5545998272798" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                fontFamily: "Inter, sans-serif", fontSize: "10px", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#F2E8DC", textDecoration: "none",
                padding: "14px 28px", background: "#A63A2E", borderRadius: "4px",
                transition: "background 0.2s, transform 0.15s",
                marginBottom: "24px",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#C04030"; e.currentTarget.style.transform = "translateY(-1px)" }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#A63A2E"; e.currentTarget.style.transform = "translateY(0)" }}
              >
                <span>💬</span> Iniciar conversa no WhatsApp
              </a>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/waisla-renata-gomes-b70b491aa/" },
                  { label: "WhatsApp", href: "https://wa.me/5545998272798" },
                  { label: "E-mail", href: "mailto:waislagomes23@gmail.com" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                    fontFamily: "Inter, sans-serif", fontSize: "9px", letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "#c8a882", textDecoration: "none",
                    padding: "10px 18px", border: "1px solid #1a0d08", borderRadius: "4px",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#F2E8DC"; e.currentTarget.style.borderColor = "#D9773F" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#c8a882"; e.currentTarget.style.borderColor = "#1a0d08" }}
                  >{label}</a>
                ))}
              </div>
            </div>

            {/* Logo signature */}
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "Dancing Script, cursive", fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#F2E8DC", fontWeight: 700, lineHeight: 1.05, marginBottom: "10px" }}>Waisla Gomes</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "9px", color: "#D9773F", letterSpacing: "0.24em", textTransform: "uppercase" }}>marketing & operations strategy</div>
              <div style={{ marginTop: "32px", display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#A63A2E" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#D9773F" }} />
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4A2C20" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid #120806", padding: "28px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <span style={{ fontFamily: "Dancing Script, cursive", fontSize: "16px", color: "#F2E8DC", fontWeight: 700 }}>Waisla Gomes</span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#4a3020", letterSpacing: "0.1em" }}>·</span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#6a4a30", letterSpacing: "0.1em", textTransform: "uppercase" }}>Design & Ops Strategy</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#3a2010", letterSpacing: "0.08em" }}>© 2026</span>
          {[["LinkedIn", "https://www.linkedin.com/in/waisla-renata-gomes-b70b491aa/"], ["WhatsApp", "https://wa.me/5545998272798"]].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Inter, sans-serif", fontSize: "8px", color: "#6a4a30", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D9773F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6a4a30")}
            >{label}</a>
          ))}
        </div>
      </footer>

      {/* Modal */}
      {modalItem && <ProjectModal item={modalItem} onClose={() => setModalItem(null)} />}
    </div>
  )
}
