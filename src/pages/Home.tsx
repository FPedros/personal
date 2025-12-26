import React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Input } from "../components/Input";

type Locale = "en" | "pt";

type Content = {
  nav: { href: string; label: string }[];
  hero: { badge: string; title: string; subtitle: string; primary: string; secondary: string };
  metrics: { label: string; value: string }[];
  trustLine: string;
  services: {
    title: string;
    value: string;
    bullets: string[];
    deliverables: string[];
    timeline: string;
    cta: string;
    tag: string;
  }[];
  process: { title: string; copy: string; time: string; focus: string }[];
  why: { title: string; detail: string }[];
  cases: { name: string; result: string; summary: string; metric: string; stack: string }[];
  packages: { title: string; detail: string; bonus: string }[];
  micro: { title: string; copy: string; primary: string; secondary: string; note: string };
  testimonials: { quote: string; name: string; title: string }[];
  faqs: { q: string; a: string }[];
  contact: { badge: string; title: string; copy: string; primary: string; secondary: string; submit: string; calendar: string; note: string };
  sticky: { label: string; primary: string; secondary: string };
};

const content: Record<Locale, Content> = {
  en: {
    nav: [
      { href: "#services", label: "Services" },
      { href: "#why-us", label: "Why us" },
      { href: "#process", label: "Process" },
      { href: "#cases", label: "Proof" },
      { href: "#faq", label: "FAQ" }
    ],
    hero: {
      badge: "Websites · WhatsApp automations · AI agents",
      title: "Build the site, the WhatsApp brain, and the AI agent that moves revenue.",
      subtitle: "Premium websites, automated WhatsApp flows, and custom AI agents that answer, qualify, and act—fast, stable, and measurable.",
      primary: "Get a conversion plan",
      secondary: "See capabilities deck"
    },
    metrics: [
      { label: "Average launch", value: "< 4 weeks" },
      { label: "Reliability", value: "99.98% uptime" },
      { label: "Support window", value: "< 2h during go-live" }
    ],
    trustLine: "Trusted by teams shipping in finance, ops, and B2B SaaS.",
    services: [
      {
        title: "Website Development",
        value: "Conversion-grade websites designed for the way your buyers decide.",
        bullets: [
          "Fast, responsive, SEO-ready",
          "Clear story and action paths for each segment",
          "Conversion flows with forms, WhatsApp, and booking",
          "Performance budgets and accessibility baked in"
        ],
        deliverables: ["IA + wireframes", "UI system + components", "Responsive pages", "Analytics + SEO setup", "Launch + QA"],
        timeline: "2–5 weeks",
        cta: "Plan my site",
        tag: "Web"
      },
      {
        title: "WhatsApp Automation",
        value: "Automated WhatsApp flows that capture, qualify, and support 24/7.",
        bullets: [
          "Lead capture with smart triage",
          "Qualification rules and routing",
          "Follow-up sequences with reminders",
          "Handoffs to human with full context"
        ],
        deliverables: ["Flows + copy", "Webhook integrations", "CRM sync + alerts", "Dashboards + QA"],
        timeline: "1–3 weeks",
        cta: "Automate WhatsApp",
        tag: "Automation"
      },
      {
        title: "AI Agents",
        value: "Custom AI agents for sales, support, and ops that cut manual work.",
        bullets: [
          "Sales agent that answers and books",
          "Support agent for FAQs and troubleshooting",
          "Ops agent for internal tasks and updates",
          "Guardrails, logging, and human review"
        ],
        deliverables: ["Agent prompts + policies", "Tool integrations", "Logging + review UI", "Safety + fallback paths"],
        timeline: "2–4 weeks",
        cta: "Deploy an agent",
        tag: "AI"
      }
    ],
    process: [
      { title: "Diagnosis", copy: "Map goals, blockers, and the fastest proof that moves a metric.", time: "48–72h", focus: "Evidence" },
      {
        title: "Design the run",
        copy: "Information architecture, flows, and visual system with accessibility + SEO guardrails.",
        time: "1 week",
        focus: "Clarity"
      },
      { title: "Build + instrument", copy: "Clean Tailwind/React builds, automations, and analytics wired from day one.", time: "2–4 weeks", focus: "Discipline" },
      { title: "Launch + optimize", copy: "Release with rollback, monitors, and experiment hooks. Iterate on signal.", time: "Ongoing", focus: "Reliability" }
    ],
    why: [
      { title: "Clarity first", detail: "Plain-language UX, scannable sections, and distinct CTAs for each segment." },
      { title: "Ops-ready", detail: "Automations with logging, alerts, and handoff-to-human rules to stay reliable." },
      { title: "Measured", detail: "Analytics, events, and uptime monitors wired from day one to prove lift." }
    ],
    cases: [
      {
        name: "Fintech launchpad",
        result: "+42% qualified demos",
        summary: "Built a conversion story with gated pricing, WhatsApp triage, and instant scheduling.",
        metric: "TTM: 3.5 weeks",
        stack: "Vite + Headless CMS + Calendly + WA API"
      },
      {
        name: "Ops automation",
        result: "-60% manual tickets",
        summary: "Replaced spreadsheet ops with WhatsApp flows, alerts, and AI triage.",
        metric: "Hours saved: 120+/mo",
        stack: "React + Zapier + Slack + HubSpot"
      },
      {
        name: "B2B platform revamp",
        result: "+23% activation",
        summary: "Faster onboarding, status transparency, and AI assistant for support.",
        metric: "LCP: 1.3s",
        stack: "Next API + Edge + Pinecone"
      }
    ],
    packages: [
      { title: "Launch", detail: "One clear outcome: conversion site, WhatsApp flows, or an AI agent live with metrics.", bonus: "Best for new funnels and hero experiences." },
      { title: "Steward", detail: "Monthly sprints improving CRO, reliability, automations, and AI agents with a named lead.", bonus: "Best for ongoing velocity and iteration." }
    ],
    micro: {
      title: "Tell us the outcome you need.",
      copy: "We reply within one business day with next steps and a quick scope.",
      primary: "Send outline",
      secondary: "Book a 20-min call",
      note: "No spam—expect a short Loom or written breakdown, not a sales script."
    },
    testimonials: [
      {
        quote: "We launched in weeks, not quarters. The site, WhatsApp flows, and AI agent all tie back to revenue.",
        name: "Helena Duarte",
        title: "VP Growth, Polar Systems"
      },
      {
        quote: "Delivery matched the promise: clean builds, high uptime, and a team that ships without hand-holding.",
        name: "Marcus Vidal",
        title: "COO, Northwave"
      }
    ],
    faqs: [
      {
        q: "How fast can you launch?",
        a: "First conversion-ready version in 2–3 weeks for typical pages. Automation and AI agents usually in 1–3 weeks."
      },
      {
        q: "Can you work with our existing stack?",
        a: "Yes. We integrate with your CMS, CRM, WhatsApp Business API, data warehouse, or support tools—minimizing downtime."
      },
      {
        q: "How do you keep performance and accessibility in check?",
        a: "Mobile-first builds, accessibility linting, LCP/CLS budgets, and lightweight assets. Semantic HTML and clear focus states are mandatory."
      },
      {
        q: "How do you measure success?",
        a: "We define primary/secondary metrics (leads, reply time, bookings, cost per lead) and add analytics + alerts before launch."
      }
    ],
    contact: {
      badge: "Next step",
      title: "Ready to ship?",
      copy: "Tell us the outcome and your current stack. We’ll reply with a scoped plan, dates, and the lead assigned.",
      primary: "Book a strategy call",
      secondary: "Email the team",
      submit: "Send",
      calendar: "View calendar",
      note: "Response in under one business day."
    },
    sticky: { label: "Need a fast quote?", primary: "Get a quote", secondary: "WhatsApp" }
  },
  pt: {
    nav: [
      { href: "#services", label: "Serviços" },
      { href: "#why-us", label: "Por que nós" },
      { href: "#process", label: "Processo" },
      { href: "#cases", label: "Prova" },
      { href: "#faq", label: "FAQ" }
    ],
    hero: {
      badge: "Websites · Automações WhatsApp · Agentes de IA",
      title: "Construimos seu site, automatizamos seu WhatsApp e criamos prompts para seu negócio.",
      subtitle: "Sites premium, fluxos de WhatsApp automatizados e agentes de IA que respondem, qualificam e agem rápidos.",
      primary: "Receber plano de conversão",
      secondary: "Ver deck de capacidades"
    },
    metrics: [
      { label: "Tempo médio de lançamento", value: "< 4 semanas" },
      { label: "Confiabilidade", value: "99,98% uptime" },
      { label: "Suporte em go-live", value: "< 2h de resposta" }
    ],
    trustLine: "Confiado por times de finanças, operações e SaaS B2B.",
    services: [
      {
        title: "Desenvolvimento de Websites",
        value: "Sites de conversão pensados para como seus compradores decidem.",
        bullets: [
          "Rápido, responsivo e pronto para SEO",
          "História clara e caminhos de ação por segmento",
          "Fluxos de conversão com formulários, WhatsApp e agendamento",
          "Orçamentos de performance e acessibilidade de fábrica"
        ],
        deliverables: ["IA + wireframes", "Sistema de UI + componentes", "Páginas responsivas", "Setup de analytics + SEO", "Lançamento + QA"],
        timeline: "2–5 semanas",
        cta: "Planejar meu site",
        tag: "Web"
      },
      {
        title: "Automação no WhatsApp",
        value: "Fluxos automatizados que capturam, qualificam e atendem 24/7.",
        bullets: [
          "Captura de leads com triagem inteligente",
          "Regras de qualificação e roteamento",
          "Sequências de follow-up com lembretes",
          "Handoff para humano com contexto completo"
        ],
        deliverables: ["Fluxos + copy", "Integrações via webhook", "Sincronização com CRM + alertas", "Dashboards + QA"],
        timeline: "1–3 semanas",
        cta: "Automatizar WhatsApp",
        tag: "Automação"
      },
      {
        title: "Agentes de IA",
        value: "Agentes sob medida para vendas, suporte e ops que cortam trabalho manual.",
        bullets: [
          "Agente de vendas que responde e agenda",
          "Agente de suporte para FAQs e troubleshooting",
          "Agente de ops para tarefas internas e updates",
          "Guardrails, logs e revisão humana"
        ],
        deliverables: ["Prompts + políticas", "Integrações com ferramentas", "Logging + UI de revisão", "Segurança + planos de fallback"],
        timeline: "2–4 semanas",
        cta: "Implantar um agente",
        tag: "IA"
      }
    ],
    process: [
      { title: "Diagnóstico", copy: "Mapeamos metas, bloqueios e a prova mais rápida que mexe na métrica.", time: "48–72h", focus: "Evidência" },
      {
        title: "Desenhar a trilha",
        copy: "Arquitetura de informação, fluxos e sistema visual com guardrails de acessibilidade + SEO.",
        time: "1 semana",
        focus: "Clareza"
      },
      { title: "Construir + instrumentar", copy: "Builds limpos em Tailwind/React, automações e analytics ligados desde o dia um.", time: "2–4 semanas", focus: "Disciplina" },
      { title: "Lançar + otimizar", copy: "Release com rollback, monitores e ganchos de experimento. Iteramos no sinal.", time: "Contínuo", focus: "Confiabilidade" }
    ],
    why: [
      { title: "Clareza primeiro", detail: "UX em linguagem simples, seções escaneáveis e CTAs distintos por segmento." },
      { title: "Pronto para operações", detail: "Automações com logging, alertas e regras de handoff para manter confiabilidade." },
      { title: "Mensurável", detail: "Analytics, eventos e monitores de uptime desde o dia um para provar ganho." }
    ],
    cases: [
      {
        name: "Launchpad fintech",
        result: "+42% demos qualificadas",
        summary: "História de conversão com pricing restrito, triagem no WhatsApp e agendamento imediato.",
        metric: "TTM: 3,5 semanas",
        stack: "Vite + Headless CMS + Calendly + WA API"
      },
      {
        name: "Automação de ops",
        result: "-60% tickets manuais",
        summary: "Planilhas viraram fluxos no WhatsApp, alertas e triagem via IA.",
        metric: "Horas salvas: 120+/mês",
        stack: "React + Zapier + Slack + HubSpot"
      },
      {
        name: "Revamp B2B",
        result: "+23% ativação",
        summary: "Onboarding mais rápido, status transparente e assistente de IA no suporte.",
        metric: "LCP: 1,3s",
        stack: "Next API + Edge + Pinecone"
      }
    ],
    packages: [
      { title: "Launch", detail: "Um resultado claro: site de conversão, fluxos de WhatsApp ou agente de IA no ar com métricas.", bonus: "Melhor para funis novos e hero experiences." },
      { title: "Steward", detail: "Sprints mensais melhorando CRO, confiabilidade, automações e agentes de IA com lead dedicado.", bonus: "Melhor para velocidade contínua e iteração." }
    ],
    micro: {
      title: "Conte o resultado que você precisa.",
      copy: "Respondemos em até um dia útil com próximos passos e um escopo rápido.",
      primary: "Enviar briefing curto",
      secondary: "Marcar call de 20 min",
      note: "Sem spam—você recebe um Loom curto ou resumo escrito, não script de vendas."
    },
    testimonials: [
      {
        quote: "Lançamos em semanas, não trimestres. Site, fluxos de WhatsApp e agente de IA conectados à receita.",
        name: "Helena Duarte",
        title: "VP Growth, Polar Systems"
      },
      {
        quote: "Entrega alinhada à promessa: build limpo, uptime alto e time que entrega sem supervisão.",
        name: "Marcus Vidal",
        title: "COO, Northwave"
      }
    ],
    faqs: [
      {
        q: "Quão rápido vocês lançam?",
        a: "Versão pronta para conversão em 2–3 semanas para páginas típicas. Automações e agentes de IA em 1–3 semanas."
      },
      {
        q: "Vocês trabalham no stack atual?",
        a: "Sim. Integramos com seu CMS, CRM, WhatsApp Business API, data warehouse ou ferramentas de suporte—minimizando downtime."
      },
      {
        q: "Como garantem performance e acessibilidade?",
        a: "Mobile-first, lint de acessibilidade, budgets de LCP/CLS e assets leves. HTML semântico e focus states claros são obrigatórios."
      },
      {
        q: "Como medem sucesso?",
        a: "Definimos métricas primárias/secundárias (leads, tempo de resposta, bookings, CPL) e colocamos analytics + alertas antes de lançar."
      }
    ],
    contact: {
      badge: "Próximo passo",
      title: "Pronto para lançar?",
      copy: "Conte o resultado e o stack atual. Respondemos com plano, datas e o responsável.",
      primary: "Agendar call de estratégia",
      secondary: "Enviar e-mail",
      submit: "Enviar",
      calendar: "Ver agenda",
      note: "Resposta em até um dia útil."
    },
    sticky: { label: "Precisa de orçamento rápido?", primary: "Pedir orçamento", secondary: "WhatsApp" }
  }
};

const trustLogos = ["Vector", "Northwave", "Helix", "Polar", "Aurea"];

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <Badge>{eyebrow}</Badge>
      <h2 className="font-heading text-3xl uppercase tracking-[0.12em] text-white md:text-4xl">{title}</h2>
      <p className="text-xir-silver leading-relaxed">{copy}</p>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = React.useState<Locale>("en");
  const t = content[locale];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-xir-line/80 bg-xir-bg/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-2.5 md:px-8">
          <a href="#" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em]">
            <img src="/logo-xiron.png" alt="XIRON" className="h-18 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.16em] text-xir-silver md:flex">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xir-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-xir-bg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="ghost"
              className="px-3 py-2 text-xs"
              onClick={() => setLocale(locale === "en" ? "pt" : "en")}
              aria-label="Toggle language"
            >
              {locale === "en" ? "PT" : "EN"}
            </Button>
            <Button variant="ghost">{t.hero.secondary}</Button>
            <Button>{t.hero.primary}</Button>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              className="px-3 py-2 text-xs"
              onClick={() => setLocale(locale === "en" ? "pt" : "en")}
              aria-label="Toggle language"
            >
              {locale === "en" ? "PT" : "EN"}
            </Button>
            <Button className="px-3 py-2 text-xs">{t.hero.primary}</Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto w-full max-w-none px-4 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
        <section id="hero" className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-7">
            <Badge>{t.hero.badge}</Badge>
            <div className="space-y-3">
              <h1 className="font-heading text-4xl uppercase tracking-[0.14em] leading-tight text-white md:text-5xl">
                {t.hero.title}
              </h1>
              <p className="text-lg leading-relaxed text-xir-silver">{t.hero.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>{t.hero.primary}</Button>
              <Button variant="secondary">{t.hero.secondary}</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.metrics.map((stat) => (
                <Card key={stat.label} variant="ghost" className="p-4">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-xir-muted">{stat.label}</p>
                  <p className="mt-2 font-heading text-lg text-white">{stat.value}</p>
                </Card>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.12em] text-xir-muted">
              <span className="h-px w-10 bg-xir-line" />
              {t.trustLine}
            </div>
          </div>

          <div className="relative">
            <Card variant="glass" className="relative overflow-hidden border-xir-line/60 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-xir-accent/5" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-sm text-xir-muted">
                    {locale === "en" ? "Engagement status" : "Status dos projetos"}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {locale === "en" ? "Active sprints: 3" : "Sprints ativos: 3"}
                  </p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-xir-accent shadow-[0_0_0_6px_rgba(31,122,90,0.2)]" />
              </div>
              <div className="mt-4 grid gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-xir-silver">
                    {locale === "en" ? "Conversion site" : "Site de conversão"}
                  </span>
                  <span className="text-xs text-xir-muted">LCP 1.3s</span>
                </div>
                <div className="h-2 w-full rounded-full bg-xir-line">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-xir-accent to-white/70" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-xir-silver">
                    {locale === "en" ? "WhatsApp automation" : "Automação WhatsApp"}
                  </span>
                  <span className="text-xs text-xir-muted">62% manual ↓</span>
                </div>
                <div className="h-2 w-full rounded-full bg-xir-line">
                  <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-xir-accent to-white/60" />
                </div>
              </div>
              <div className="mt-4 grid gap-3 rounded-xl border border-xir-line/60 bg-xir-bg/60 p-4">
                <div className="flex items-center justify-between text-sm text-xir-silver">
                  <span>{locale === "en" ? "Next release" : "Próximo release"}</span>
                  <span>{locale === "en" ? "Friday 09:00" : "Sexta 09:00"}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-xir-silver">
                  <span>{locale === "en" ? "Owner" : "Responsável"}</span>
                  <span>{locale === "en" ? "PM + lead engineer" : "PM + lead de engenharia"}</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="mt-12 md:mt-14">
          <div className="flex flex-wrap items-center gap-5 rounded-2xl border border-xir-line/60 bg-xir-panel/60 px-5 py-4 md:px-7">
            <p className="text-[11px] uppercase tracking-[0.14em] text-xir-muted">
              {locale === "en" ? "Trusted by" : "Confiado por"}
            </p>
            <div className="flex flex-wrap gap-3 md:gap-6">
              {trustLogos.map((logo) => (
                <span key={logo} className="text-sm font-semibold text-xir-silver">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Services" : "Serviços"}
            title={locale === "en" ? "Strategy, design, build, and automation in one run." : "Estratégia, design, build e automação na mesma trilha."}
            copy={
              locale === "en"
                ? "Websites, WhatsApp automations, and AI agents delivered as a single, measured experience."
                : "Websites, automações de WhatsApp e agentes de IA entregues como uma experiência única e mensurável."
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {t.services.map((service) => (
              <Card key={service.title} className="group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-xir-accent/10 to-transparent" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-xir-muted">{service.tag}</p>
                  <span className="text-xs text-xir-silver">↗</span>
                </div>
                <h3 className="mt-1 font-heading text-xl text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-xir-silver">{service.value}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="service-detail" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Service detail" : "Detalhamento"}
            title={
              locale === "en"
                ? "What you get, how it ships, when it goes live."
                : "O que você recebe, como entregamos e quando vai ao ar."
            }
            copy={
              locale === "en"
                ? "Outcome-driven deliverables, timelines, and CTAs tailored to each offer."
                : "Entregáveis, prazos e CTAs alinhados ao resultado de cada oferta."
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {t.services.map((service) => (
              <Card key={service.cta} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className="text-[10px]">{service.tag}</Badge>
                  <span className="text-xs text-xir-muted">{service.timeline}</span>
                </div>
                <h3 className="font-heading text-xl text-white">{service.title}</h3>
                <p className="text-sm text-xir-silver">{service.value}</p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-xir-muted">
                    {locale === "en" ? "Benefits" : "Benefícios"}
                  </p>
                  <ul className="space-y-1 text-sm text-xir-silver">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-xir-muted">
                    {locale === "en" ? "Deliverables" : "Entregáveis"}
                  </p>
                  <ul className="space-y-1 text-sm text-xir-silver">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-line" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full justify-center">{service.cta}</Button>
              </Card>
            ))}
          </div>
        </section>

        <section id="process" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Process" : "Processo"}
            title={
              locale === "en"
                ? "A predictable runbook that keeps momentum."
                : "Um roteiro previsível que mantém o ritmo."
            }
            copy={
              locale === "en"
                ? "Diagnose, design, build, launch. Each step is small enough to ship, instrumented enough to trust."
                : "Diagnosticar, desenhar, construir, lançar. Passos curtos o bastante para sair, instrumentados o bastante para confiar."
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {t.process.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden">
                <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-xir-line/60 bg-xir-bg/40 text-xs text-xir-silver">
                  {index + 1}
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="text-[10px]">{step.focus}</Badge>
                  <span className="text-[11px] text-xir-muted">{step.time}</span>
                </div>
                <h3 className="mt-2 font-heading text-xl text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-xir-silver">{step.copy}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="why-us" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Why us" : "Por que nós"}
            title={
              locale === "en"
                ? "Built to launch fast, stay reliable, and stay measurable."
                : "Feito para lançar rápido, manter confiabilidade e medir sempre."
            }
            copy={
              locale === "en"
                ? "We combine design, engineering, and automation to remove hand-offs, cut manual work, and prove impact."
                : "Juntamos design, engenharia e automação para cortar repasses, reduzir trabalho manual e provar impacto."
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {t.why.map((item) => (
              <Card key={item.title} variant="ghost" className="space-y-2">
                <h3 className="font-heading text-xl text-white">{item.title}</h3>
                <p className="text-sm text-xir-silver">{item.detail}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="cases" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Case studies" : "Cases"}
            title={locale === "en" ? "Proof over promise." : "Prova acima de promessa."}
            copy={
              locale === "en"
                ? "We design around business outcomes. Every case tracks speed, reliability, and the lift achieved."
                : "Projetamos em torno do resultado de negócio. Cada case acompanha velocidade, confiabilidade e ganho alcançado."
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {t.cases.map((item) => (
              <Card key={item.name} className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 transition duration-500 ease-expo-out hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                </div>
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em] text-xir-muted">
                  <span>{item.metric}</span>
                  <span className="text-xir-silver">{item.stack}</span>
                </div>
                <h3 className="mt-2 font-heading text-xl text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-xir-silver">{item.summary}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-xir-bg/70 px-3 py-1 text-xs text-xir-silver">
                  <span className="h-1.5 w-1.5 rounded-full bg-xir-accent" />
                  {item.result}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:mt-14 md:grid-cols-[1.05fr_0.95fr]">
          <Card className="space-y-3">
            <SectionHeader
              eyebrow={locale === "en" ? "Packages" : "Pacotes"}
              title={
                locale === "en"
                  ? "Choose the path that matches your speed."
                  : "Escolha o caminho no ritmo do seu time."
              }
              copy={
                locale === "en"
                  ? "Launch packages for clarity. Steward retainers for continuous conversion and automation."
                  : "Pacotes de lançamento para clareza. Steward mensal para conversão e automação contínuas."
              }
            />
            <div className="grid gap-4 md:grid-cols-2">
              {t.packages.map((model) => (
                <div key={model.title} className="rounded-xl border border-xir-line/70 bg-xir-bg/60 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg text-white">{model.title}</h3>
                    <span className="text-xs text-xir-muted">↗</span>
                  </div>
                  <p className="mt-2 text-sm text-xir-silver">{model.detail}</p>
                  <p className="mt-2 text-[12px] text-xir-muted">{model.bonus}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button>{locale === "en" ? "Start with a call" : "Começar com uma call"}</Button>
              <Button variant="secondary">
                {locale === "en" ? "Request a scoped quote" : "Solicitar orçamento fechado"}
              </Button>
            </div>
          </Card>

          <Card className="space-y-5">
            <SectionHeader eyebrow={locale === "en" ? "Micro-commit" : "Micro-compromisso"} title={t.micro.title} copy={t.micro.copy} />
            <div className="grid gap-4 md:grid-cols-2">
              <Input placeholder={locale === "en" ? "Work email" : "E-mail de trabalho"} type="email" aria-label="Work email" />
              <Input placeholder={locale === "en" ? "Project type (site, automation, AI)" : "Tipo de projeto (site, automação, IA)"} aria-label="Project type" />
            </div>
            <Input placeholder={locale === "en" ? "Goals or links (optional)" : "Metas ou links (opcional)"} aria-label="Goals" />
            <div className="flex flex-wrap gap-3">
              <Button type="button">{t.micro.primary}</Button>
              <Button variant="secondary" type="button">
                {t.micro.secondary}
              </Button>
            </div>
            <p className="text-[12px] text-xir-muted">{t.micro.note}</p>
          </Card>
        </section>

        <section id="testimonials" className="mt-12 space-y-6 md:mt-14">
          <SectionHeader
            eyebrow={locale === "en" ? "Testimonials" : "Depoimentos"}
            title={locale === "en" ? "Teams ship faster with us." : "Times entregam mais rápido conosco."}
            copy={
              locale === "en"
                ? "Every build pairs design clarity with engineering discipline—so go-to-market and ops keep momentum."
                : "Cada entrega une clareza de design com disciplina de engenharia—go-to-market e operações mantêm o ritmo."
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            {t.testimonials.map((item) => (
              <Card key={item.name} className="space-y-2">
                <p className="text-lg leading-relaxed text-white">“{item.quote}”</p>
                <p className="text-sm text-xir-silver">
                  {item.name} · {item.title}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-12 space-y-5 md:mt-14">
          <SectionHeader
            eyebrow="FAQ"
            title={locale === "en" ? "Straight answers." : "Respostas diretas."}
            copy={
              locale === "en"
                ? "The fastest way to decide is to see how we work. Here’s what most teams ask first."
                : "A decisão é mais rápida quando você vê como trabalhamos. Estas são as perguntas mais comuns."
            }
          />
          <div className="space-y-3">
            {t.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-xir-line/70 bg-xir-panel/60 p-3 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg text-white">
                  <span>{item.q}</span>
                  <span className="text-sm text-xir-silver transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-xir-silver">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 md:mt-14">
          <Card className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="space-y-3">
              <Badge>{t.contact.badge}</Badge>
              <h3 className="font-heading text-2xl text-white">{t.contact.title}</h3>
              <p className="text-xir-silver">{t.contact.copy}</p>
              <div className="flex flex-wrap gap-3">
                <Button>{t.contact.primary}</Button>
                <Button variant="secondary">{t.contact.secondary}</Button>
              </div>
            </div>
            <form className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Input placeholder={locale === "en" ? "Name" : "Nome"} aria-label="Name" />
                <Input placeholder={locale === "en" ? "Work email" : "E-mail de trabalho"} type="email" aria-label="Email" />
              </div>
              <Input placeholder={locale === "en" ? "Company" : "Empresa"} aria-label="Company" />
              <Input
                placeholder={locale === "en" ? "What do you need shipped?" : "O que você precisa lançar?"}
                aria-label="Project summary"
              />
              <div className="flex flex-wrap gap-3">
                <Button type="submit">{t.contact.submit}</Button>
                <Button variant="ghost" type="button">
                  {t.contact.calendar}
                </Button>
              </div>
              <p className="text-[12px] text-xir-muted">{t.contact.note}</p>
            </form>
          </Card>
        </section>
      </main>

      <footer className="border-t border-xir-line/80 bg-black/60 px-5 py-8 text-sm text-xir-muted md:px-8">
        <div className="mx-auto flex w-full max-w-none flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-xiron.png" alt="XIRON" className="h-12 w-auto object-contain" />
            <span>{locale === "en" ? "Tech services · Conversion · Automation" : "Serviços tech · Conversão · Automação"}</span>
          </div>
          <div className="flex gap-3 text-[11px] uppercase tracking-[0.16em] text-xir-silver">
            <a href="#services" className="hover:text-white">
              {locale === "en" ? "Services" : "Serviços"}
            </a>
            <a href="#cases" className="hover:text-white">
              {locale === "en" ? "Proof" : "Prova"}
            </a>
            <a href="#contact" className="hover:text-white">
              {locale === "en" ? "Contact" : "Contato"}
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
        <div className="flex items-center justify-between rounded-full border border-xir-line/70 bg-xir-panel/90 px-3 py-3 shadow-glow">
          <div className="text-sm text-xir-silver">{t.sticky.label}</div>
          <div className="flex gap-2">
            <Button className="px-3 py-2 text-xs">{t.sticky.primary}</Button>
            <Button variant="secondary" className="px-3 py-2 text-xs">
              {t.sticky.secondary}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
