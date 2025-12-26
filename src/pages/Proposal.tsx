import React from "react";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

type Slide = {
  title: string;
  subtitle?: string;
  body: React.ReactNode;
};

const proposalDate = "25/12/2025";

const slides: Slide[] = [
  {
    title: "Proposta Comercial",
    body: (
      <div className="space-y-4 text-xir-silver text-base md:text-lg">
        <p className="text-xl text-white">Modernização do site + consultoria de infraestrutura</p>
        <div className="grid gap-2 text-sm">
          <div className="flex justify-between">
            <span>Cliente</span>
            <span className="text-white">QualificMais</span>
          </div>
          <div className="flex justify-between">
            <span>Data</span>
            <span className="text-white">{proposalDate}</span>
          </div>
          <div className="flex justify-between">
            <span>Proponente</span>
            <span className="text-white">Fernando — Xirion</span>
          </div>
        </div>
        <div className="pt-2 text-sm uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Visão geral",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Objetivos</p>
          <ul className="mt-2 space-y-1">
            {[
              "Evoluir tecnologia e layout do site",
              "Melhorar experiência no mobile",
              "Consultoria de infraestrutura (DNS, e-mail, acesso)",
              "Alteração de hospedagem"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white text-lg">Serviços</p>
          <div className="mt-2 grid gap-2">
            {[
              ["A — Site (refatoração + novo layout)", "Cortesia"],
              ["B — Hospedagem (melhoria e estabilidade)", "Cortesia"],
              ["C — Domínio (Registro.br + DNS)", "Cortesia"],
              ["D — Consultoria de infraestrutura", "R$ 150,00"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-lg bg-xir-panel/50 px-3 py-2">
                <span className="text-white">{label}</span>
                <span className="text-xir-muted whitespace-nowrap">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Serviço A — Refatoração + novo layout do site",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Escopo</p>
          <ul className="mt-2 space-y-1">
            {[
              "Refatoração do site www.qualificmais.com.br",
              "Remodelagem do layout para tecnologia mais atual",
              "Melhorias de UX e responsividade (mobile-first)",
              "Ajustes finais com base em validação"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Status e dependências</p>
          <p>Em fase final de validação. Aguardando envio da imagem do Brasil e imagens/logos de clientes.</p>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Custo do serviço</p>
          <p className="text-white">Cortesia (R$ 0,00)</p>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Serviço B — Migração/ajuste de hospedagem",
    subtitle: "Melhoria e estabilidade",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Comparativo de custos (hospedagem)</p>
          <div className="mt-2 grid gap-2 rounded-xl border border-xir-line/60 bg-xir-panel/60 p-3">
            {[
              ["Plano", "Hostinger (atual)", "Nova hospedagem (sugerida)"],
              ["Valor", "R$ 203,88/ano", "R$ 15,00/mês ou R$ 180,00/ano"]
            ].map(([label, a, b]) => (
              <div
                key={label}
                className="grid grid-cols-1 items-start gap-1 rounded-md bg-xir-bg/40 p-2 text-xs md:grid-cols-3 md:items-center md:gap-2 md:text-sm"
              >
                <span className="text-xir-muted">{label}</span>
                <span className="text-white break-words md:whitespace-nowrap">{a}</span>
                <span className="text-xir-silver break-words md:whitespace-nowrap">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-lg">O que será feito</p>
          <ul className="mt-2 space-y-1">
            {[
              "Configuração da nova hospedagem",
              "Publicação do site na nova infraestrutura",
              "Testes básicos pós-publicação (desktop + mobile)"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Prazo</p>
          <p>Até 48h após aprovação e envio dos acessos.</p>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Custo do serviço</p>
          <p className="text-white">Cortesia (R$ 0,00)</p>
          <p>Custos recorrentes (cliente): R$ 15,00/mês ou R$ 180,00/ano</p>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Serviço C — Migração de domínio + DNS",
    subtitle: "Hostinger → Registro.br",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Custos de domínio (Registro.br)</p>
          <ul className="mt-2 space-y-1">
            {["R$ 40,00/ano", "R$ 76,00/2 anos", "R$ 184,00/5 anos"].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span className="whitespace-nowrap">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white text-lg">Benefícios + prazo</p>
          <ul className="mt-2 space-y-1">
            {[
              "Maior controle de DNS e governança",
              "Mais liberdade para apontar e-mail (Google/Microsoft)",
              "Menos dependência de fornecedor (hospedagem ≠ domínio ≠ e-mail)",
              "Prazo de migração: até 48h após aprovação e acessos"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Custo do serviço</p>
          <p className="text-white">
            Cortesia <span className="whitespace-nowrap">(R$ 0,00)</span>
          </p>
          <p>Custos recorrentes (cliente): Registro do domínio conforme opção escolhida.</p>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Serviço D — Consultoria de melhoria de processos + padronização de e-mails",
    subtitle: "Comunicação institucional clara",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Problema identificado</p>
          <p className="mt-2">
            Hoje existem e-mails em padrões diferentes (ex.: qualificmais@gmail.com, contato@qualificmais.com.br,
            colaborador@qualific.com), causando confusão, ruído, falhas de acompanhamento e perda de histórico institucional.
          </p>
        </div>
        <div>
          <p className="text-white text-lg">Proposta de melhoria (padrão de mercado)</p>
          <ul className="mt-2 space-y-1">
            {[
              "Consolidar comunicação no padrão @qualificmais.com.br",
              "Possibilidade de escolher provedor de e-mail: Google Workspace ou Microsoft 365 (licenças pelo cliente)"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white text-lg">Estrutura recomendada</p>
          <ul className="mt-2 space-y-1">
            {[
              "Contas nominais (ex.: marcieli@qualificmais.com.br, viviane@qualificmais.com.br)",
              "Endereços institucionais via grupos/redirecionamento:",
              "contato@qualificmais.com.br → redireciona para Marcieli + Viviane",
              "todos@qualificmais.com.br (opcional) → comunicação interna com todos colaboradores"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Prazo + acesso necessário</p>
          <p>Prazo: até 48h. Necessário acesso admin ou credenciais do provedor de e-mail e DNS.</p>
          <p className="text-xir-muted">
            Dependência: execução do Serviço C (migração de domínio/DNS) para aplicar os ajustes com segurança.
          </p>
        </div>
        <div className="grid gap-2">
          <p className="text-white text-lg">Custo do serviço</p>
          <p className="text-white whitespace-nowrap">R$ 150,00</p>
          <p>Custos recorrentes (cliente): licenças Google Workspace/Microsoft 365 (se aplicável).</p>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  },
  {
    title: "Resumo de investimento e próximos passos",
    body: (
      <div className="grid gap-4 text-base text-xir-silver md:text-lg">
        <div>
          <p className="text-white text-lg">Resumo</p>
          <div className="mt-2 grid gap-2">
            {[
              ["A — Site (refatoração + novo layout)", "Cortesia"],
              ["B — Hospedagem (melhoria e estabilidade)", "Cortesia"],
              ["C — Domínio (Registro.br + DNS)", "Cortesia"],
              ["D — Consultoria de infraestrutura", "R$ 150,00"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-lg bg-xir-panel/50 px-3 py-2">
                <span className="text-white">{label}</span>
                <span className="text-xir-muted">{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white text-lg">Recorrência estimada (cliente)</p>
          <ul className="mt-2 space-y-1">
            {[
              "Hospedagem: R$ 15,00/mês ou R$ 180,00/ano",
              "Domínio Registro.br: R$ 40/ano (ou opções)",
              "Licenças Workspace/Microsoft (se aplicável)"
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-xir-accent" />
                <span className="whitespace-nowrap">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white text-lg">Próximos passos</p>
          <ol className="mt-2 space-y-1">
            {[
              "Envio de imagem do Brasil e clientes",
              "Envio de acessos (Hostinger/Registro.br/Workspace)",
              "Aprovação do cronograma de publicação"
            ].map((item, idx) => (
              <li key={item} className="flex gap-2">
                <span className="font-semibold text-xir-silver">{idx + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="text-xs uppercase tracking-[0.16em] text-xir-muted">QualificMais • Proposta Comercial</div>
      </div>
    )
  }
];

export default function Proposal() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="proposal-root min-h-screen bg-xir-bg text-xir-text">
      <header className="sticky top-0 z-50 border-b border-xir-line/80 bg-xir-bg/90 backdrop-blur print:bg-white print:text-black">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo-xiron.png" alt="XIRON" className="h-12 w-auto object-contain" />
            <div className="text-sm uppercase tracking-[0.2em]">
              PROPOSTA • QUALIFICMAIS
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.18em]">
            <Button className="hidden md:inline-flex print:hidden" onClick={handleDownload}>
              Baixar PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs uppercase tracking-[0.14em] text-xir-muted">QualificMais • Proposta Comercial</div>
          <div className="flex gap-2 text-xs text-xir-muted">
            <span>Data: 25/12/2025</span>
            <span className="hidden md:inline">|</span>
            <span>Fernando · Xirion</span>
          </div>
        </div>

        <div className="grid gap-6">
          {slides.map((slide, idx) => (
            <Card
              key={slide.title}
              className="proposal-card relative overflow-hidden border border-xir-line/70 bg-xir-panel/70 shadow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-xir-accent/5" />
              <div className="relative flex items-start justify-between">
                <div className="space-y-2">
                  <Badge>{`Slide ${idx + 1}`}</Badge>
                  <h2 className="font-heading text-2xl uppercase tracking-[0.12em] text-white md:text-3xl">{slide.title}</h2>
                  {slide.subtitle && <p className="text-sm uppercase tracking-[0.12em] text-xir-muted">{slide.subtitle}</p>}
                </div>
              </div>
              <div className="relative mt-5">{slide.body}</div>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 print:hidden">
          <Button>Enviar ao cliente</Button>
          <Button variant="secondary" onClick={handleDownload}>
            Baixar PDF
          </Button>
        </div>
      </main>
    </div>
  );
}
