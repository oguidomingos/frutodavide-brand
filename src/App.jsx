import { useEffect, useRef } from 'react'

const B = import.meta.env.BASE_URL

/* ── Reveal on scroll hook ── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`opacity-0 translate-y-10 transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ── Navigation ── */
function Nav() {
  const links = [
    ['Sobre', '#sobre'], ['Conceito', '#conceito'], ['Logotipo', '#logotipo'],
    ['Paleta', '#paleta'], ['Tipografia', '#tipografia'],
    ['Restrições', '#proibidos'],
  ]
  useEffect(() => {
    const nav = document.getElementById('main-nav')
    const handler = () => nav?.classList.toggle('scrolled', window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return (
    <nav id="main-nav" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-[72px] bg-[#F8F5F0]/92 backdrop-blur-xl border-b border-azul/8 transition-all duration-500">
      <a href="#" className="font-[family-name:var(--font-display)] text-[1.1rem] font-semibold text-azul tracking-[0.15em] uppercase">
        Fruto Da Vide
      </a>
      <div className="hidden md:flex items-center gap-8">
        {links.map(([label, href]) => (
          <a key={href} href={href}
            className="text-[0.7rem] font-medium tracking-[0.12em] uppercase text-azul relative hover:text-dourado transition-colors
              after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-dourado after:transition-all after:duration-500 hover:after:w-full">
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-azul overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,164,52,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      <div className="relative z-10 text-center text-white">
        <div className="overflow-hidden">
          <p className="text-[0.7rem] font-medium tracking-[0.35em] uppercase text-dourado mb-8 animate-[heroLine_1.2s_ease-out_forwards]"
            style={{ transform: 'translateY(110%)' }}>
            Manual de Identidade Visual
          </p>
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,7rem)] font-normal leading-[1.05] tracking-tight mb-8">
          <span className="block overflow-hidden">
            <span className="block animate-[heroLine_1.2s_ease-out_0.15s_forwards]" style={{ transform: 'translateY(110%)' }}>Fruto</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block animate-[heroLine_1.2s_ease-out_0.3s_forwards] italic text-dourado" style={{ transform: 'translateY(110%)' }}>Da Vide</span>
          </span>
        </h1>
        <div className="overflow-hidden">
          <p className="text-[0.85rem] font-light tracking-[0.2em] uppercase opacity-70 animate-[heroLine_1.2s_ease-out_0.5s_forwards]"
            style={{ transform: 'translateY(110%)' }}>
            Soluções Têxteis Premium
          </p>
        </div>
        <div className="overflow-hidden mt-4">
          <p className="text-[0.7rem] font-normal tracking-[0.15em] opacity-40 animate-[heroLine_1.2s_ease-out_0.7s_forwards]"
            style={{ transform: 'translateY(110%)' }}>
            Versão 3.0 — Março 2026
          </p>
        </div>
      </div>
      <a href="#sobre" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/40">Explorar</span>
        <div className="w-px h-10 bg-gradient-to-b from-dourado to-transparent" />
      </a>
    </section>
  )
}

/* ── Section label ── */
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-10 h-px bg-dourado" />
      <span className="text-[0.65rem] font-semibold tracking-[0.3em] uppercase text-dourado">{children}</span>
    </div>
  )
}

/* ── Divider ── */
function Divider() {
  return (
    <div className="flex items-center justify-center py-12 gap-6">
      <div className="flex-1 max-w-30 h-px bg-azul/12" />
      <div className="w-1.5 h-1.5 border border-dourado rotate-45" />
      <div className="flex-1 max-w-30 h-px bg-azul/12" />
    </div>
  )
}

/* ── Sobre ── */
function Sobre() {
  const values = [
    { title: 'Excelência', desc: 'Cada fio, cada trama, cada acabamento reflete nosso compromisso inabalável com a qualidade superior.' },
    { title: 'Confiança', desc: 'Relações duradouras com hotéis e instituições de saúde construídas sobre décadas de entregas consistentes.' },
    { title: 'Inovação', desc: 'Tecnologia têxtil de ponta aliada à sustentabilidade e ao respeito pelo meio ambiente.' },
    { title: 'Tradição', desc: 'Quatro décadas de conhecimento acumulado que garantem processos refinados e resultados impecáveis.' },
  ]
  return (
    <section id="sobre" className="py-32 px-8 max-w-[1200px] mx-auto scroll-mt-20">
      <Reveal>
        <SectionLabel>01 — Sobre a Marca</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-8 max-w-[700px]">
          Mais de 44 anos tecendo excelência e confiança
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-24 items-center mt-16">
        <Reveal delay={100}>
          <div className="font-[family-name:var(--font-display)] text-[clamp(5rem,10vw,9rem)] font-normal text-azul leading-none mb-2">
            44<span className="text-[0.4em] align-super text-dourado">+</span>
          </div>
          <div className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-dourado mb-8">Anos de história</div>
          <p className="text-[1.05rem] font-light leading-[1.9] text-cinza max-w-[620px]">
            A Fruto Da Vide nasceu da convicção de que o conforto e a qualidade dos têxteis
            transformam ambientes e experiências. Há mais de quatro décadas, fornecemos
            soluções têxteis premium para os setores de hotelaria e saúde, unindo tradição
            artesanal à inovação industrial.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col gap-6">
            {values.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 border border-dourado rounded-full flex items-center justify-center text-[0.7rem] text-dourado mt-0.5">&#9670;</div>
                <div>
                  <h4 className="text-[0.85rem] font-semibold tracking-[0.05em] mb-1">{title}</h4>
                  <p className="text-[0.9rem] font-light leading-[1.7] text-cinza">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Conceito ── */
function Conceito() {
  return (
    <section id="conceito" className="bg-azul text-white py-32 px-8 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="flex items-center justify-center aspect-square rounded-full border border-dourado/20 relative">
            <div className="absolute inset-5 rounded-full border border-dourado/10" />
            <svg viewBox="0 0 100 100" fill="none" className="w-2/5 h-2/5 opacity-90">
              <circle cx="50" cy="50" r="45" stroke="#D4A434" strokeWidth="0.5" opacity="0.6"/>
              <path d="M50 20 C50 20 35 35 35 55 C35 65 42 75 50 80 C58 75 65 65 65 55 C65 35 50 20 50 20Z" stroke="#D4A434" strokeWidth="1" fill="none"/>
              <path d="M50 35 C45 45 43 52 43 58 C43 64 46 70 50 73 C54 70 57 64 57 58 C57 52 55 45 50 35Z" fill="#D4A434" opacity="0.15"/>
              <line x1="50" y1="45" x2="50" y2="75" stroke="#D4A434" strokeWidth="0.5" opacity="0.5"/>
              <path d="M50 52 C46 48 42 50 40 52" stroke="#D4A434" strokeWidth="0.5" fill="none" opacity="0.5"/>
              <path d="M50 58 C54 54 58 56 60 58" stroke="#D4A434" strokeWidth="0.5" fill="none" opacity="0.5"/>
            </svg>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <SectionLabel>02 — Conceito</SectionLabel>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-8 max-w-[700px]">
            A vide como símbolo de crescimento perene
          </h2>
          <p className="text-[1.05rem] font-light leading-[1.9] text-white/60 max-w-[620px]">
            O nome "Fruto Da Vide" evoca a videira — planta que, com raízes profundas e
            ramos persistentes, produz frutos de excelência geração após geração. O símbolo
            da folha e da vide dentro de um círculo representa a continuidade, a proteção
            e o ciclo virtuoso da qualidade.
          </p>
          <p className="text-[1.05rem] font-light leading-[1.9] text-white/60 max-w-[620px] mt-6">
            O círculo traduz totalidade e cuidado envolvente — os mesmos valores que
            aplicamos em cada peça têxtil entregue aos nossos parceiros.
          </p>
          <blockquote className="font-[family-name:var(--font-display)] text-[1.4rem] italic leading-[1.7] text-white/85 mt-12 pl-6 border-l-2 border-dourado">
            "Da raiz ao fruto, cada detalhe importa."
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Logotipo ── */
function LogoCard({ src, label, variant = 'light' }) {
  const bgClass = variant === 'light' ? 'bg-cream border border-azul/8' : variant === 'dark' ? 'bg-preto' : 'bg-azul'
  const labelClass = variant === 'light' ? 'text-cinza' : 'text-white/40'
  return (
    <div className={`aspect-[4/3] rounded-xl overflow-hidden flex flex-col items-center justify-center relative p-8
      transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(49,79,115,0.12)] ${bgClass}`}>
      <img src={`${B}logos/${src}`} alt={label} className="max-w-[65%] max-h-[55%] object-contain" />
      <span className={`absolute bottom-5 text-[0.65rem] font-medium tracking-[0.15em] uppercase ${labelClass}`}>{label}</span>
    </div>
  )
}

function LogoSection({ title, children }) {
  return (
    <div className="mb-16">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-azul mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  )
}

function Logotipo() {
  return (
    <section id="logotipo" className="py-32 px-8 max-w-[1200px] mx-auto scroll-mt-20">
      <Reveal>
        <SectionLabel>03 — Logotipo</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-4 max-w-[700px]">
          Variações do logotipo
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.9] text-cinza max-w-[620px] mb-16">
          Todos os logotipos possuem fundo transparente (PNG) para aplicação versátil sobre qualquer superfície ou cor de fundo.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Versão Principal — Azul Sereno + Dourado">
          <LogoCard src="f1-full-azul-sereno.png" label="Azul Sereno" />
          <LogoCard src="f1-full-dourado.png" label="Dourado Quente" />
          <LogoCard src="f1-full-azul-dourado.png" label="Azul + Dourado" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Variações Monocromáticas e Negativa">
          <LogoCard src="f1-full-pb.png" label="Preto e Branco" />
          <LogoCard src="f1-full-branco.png" label="Branco (Negativa)" variant="blue" />
          <LogoCard src="f1-full-negativa.png" label="Negativa sobre Azul" variant="dark" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Nome + Símbolo (Seção Superior)">
          <LogoCard src="f1-row1-azul-sereno.png" label="Azul Sereno" />
          <LogoCard src="f1-row1-dourado.png" label="Dourado" />
          <LogoCard src="f1-row1-azul-dourado.png" label="Azul + Dourado" />
          <LogoCard src="f1-row1-pb.png" label="P&B" />
          <LogoCard src="f1-row1-branco.png" label="Branco" variant="blue" />
          <LogoCard src="f1-row1-negativa.png" label="Negativa" variant="dark" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Símbolo Isolado (Videira)">
          <LogoCard src="row1-simbolo-azul-sereno.png" label="Azul Sereno" />
          <LogoCard src="row1-simbolo-dourado.png" label="Dourado" />
          <LogoCard src="row1-simbolo-azul-dourado.png" label="Azul + Dourado" />
          <LogoCard src="row1-simbolo-pb.png" label="P&B" />
          <LogoCard src="row1-simbolo-branco.png" label="Branco" variant="blue" />
          <LogoCard src="row1-simbolo-negativa.png" label="Negativa" variant="dark" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Texto Isolado">
          <LogoCard src="row1-texto-azul-sereno.png" label="Azul Sereno" />
          <LogoCard src="row1-texto-dourado.png" label="Dourado" />
          <LogoCard src="row1-texto-branco.png" label="Branco" variant="blue" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Layouts Alternativos">
          <LogoCard src="f1-row2-azul-sereno.png" label="Layout 2 — Azul" />
          <LogoCard src="f1-row3-azul-sereno.png" label="Compacto — Azul" />
          <LogoCard src="f1-row4-azul-sereno.png" label="Horizontal — Azul" />
          <LogoCard src="f1-row2-dourado.png" label="Layout 2 — Dourado" />
          <LogoCard src="f1-row3-dourado.png" label="Compacto — Dourado" />
          <LogoCard src="f1-row4-dourado.png" label="Horizontal — Dourado" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <LogoSection title="Frame 2 — Variações">
          <LogoCard src="f2-full-azul-sereno.png" label="Azul Sereno" />
          <LogoCard src="f2-full-dourado.png" label="Dourado" />
          <LogoCard src="f2-full-branco.png" label="Branco" variant="blue" />
        </LogoSection>
      </Reveal>

      <Reveal delay={100}>
        <div className="bg-cream border border-azul/8 rounded-2xl p-10 mt-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-azul mb-4">Área de Proteção</h3>
          <div className="flex items-center justify-center py-10">
            <div className="relative w-80 h-60 border border-dashed border-dourado flex items-center justify-center">
              <div className="w-3/5 h-3/5 border border-azul/15 flex items-center justify-center font-[family-name:var(--font-display)] text-[1.4rem] text-azul tracking-[0.05em]">
                FdV
              </div>
              <span className="absolute top-1/2 -right-7 -translate-y-1/2 font-[family-name:var(--font-display)] text-[1.2rem] text-dourado">F</span>
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[1.2rem] text-dourado">F</span>
            </div>
          </div>
          <p className="text-center text-[0.95rem] leading-[1.8] text-cinza max-w-[500px] mx-auto mt-4">
            A margem de segurança equivalente à altura da letra <strong className="font-[family-name:var(--font-display)] text-azul">F</strong> deve ser aplicada ao redor de todo o logotipo. Nenhum elemento deve invadir essa área.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

/* ── Paleta de Cores ── */
function Swatch({ hex, name, rgb, cmyk, usage }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex)
    } catch {
      /* fallback */
    }
  }
  return (
    <div className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
      onClick={handleCopy}>
      <div className="h-44 flex items-end p-5" style={{ backgroundColor: hex }} />
      <div className="p-5 bg-white">
        <h4 className="font-[family-name:var(--font-display)] text-[1.05rem] font-medium text-preto mb-2">{name}</h4>
        <p className="text-[0.75rem] font-medium tracking-[0.1em] text-cinza mb-0.5">HEX {hex}</p>
        <p className="text-[0.7rem] text-cinza/70">RGB {rgb}</p>
        {cmyk && <p className="text-[0.7rem] text-cinza/70">CMYK {cmyk}</p>}
        {usage && <p className="text-[0.8rem] text-cinza mt-2">{usage}</p>}
      </div>
    </div>
  )
}

function Paleta() {
  return (
    <section id="paleta" className="py-32 px-8 max-w-[1200px] mx-auto scroll-mt-20">
      <Reveal>
        <SectionLabel>04 — Paleta de Cores</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-4 max-w-[700px]">
          Cores que traduzem sofisticação e acolhimento
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.9] text-cinza max-w-[620px]">
          A paleta combina a serenidade do azul institucional com o calor do dourado, criando uma identidade que transmite confiança, elegância e proximidade.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <Reveal delay={100}><Swatch hex="#314F73" name="Azul Sereno" rgb="49, 79, 115" cmyk="57, 31, 0, 55" usage="Cor principal. Títulos, fundos, logotipo." /></Reveal>
        <Reveal delay={200}><Swatch hex="#D4A434" name="Dourado Quente" rgb="212, 164, 52" cmyk="0, 23, 75, 17" usage="Destaques, CTAs, acentos premium." /></Reveal>
        <Reveal delay={300}><Swatch hex="#F8F5F0" name="Branco Quente" rgb="248, 245, 240" cmyk="0, 1, 4, 3" usage="Fundos principais e espaços de respiro." /></Reveal>
        <Reveal delay={100}><Swatch hex="#1A1A1A" name="Preto Suave" rgb="26, 26, 26" cmyk="0, 0, 0, 90" usage="Texto principal e elementos âncora." /></Reveal>
        <Reveal delay={200}><Swatch hex="#F5E6B8" name="Dourado Claro" rgb="245, 230, 184" cmyk="0, 6, 25, 4" usage="Fundos premium e materiais especiais." /></Reveal>
        <Reveal delay={300}><Swatch hex="#94A3B8" name="Cinza Nobre" rgb="148, 163, 184" cmyk="20, 12, 0, 28" usage="Texto secundário e legendas." /></Reveal>
      </div>

      <Reveal delay={200}>
        <div className="bg-cream border border-azul/8 rounded-2xl p-10 mt-12">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-azul mb-6">Proporção de Uso</h3>
          <div className="flex flex-col gap-4">
            {[
              { pct: 60, color: '#314F73', label: 'Azul Sereno', desc: 'Elemento dominante', light: false },
              { pct: 20, color: '#F8F5F0', label: 'Branco Quente', desc: 'Respiro visual', light: true },
              { pct: 15, color: '#D4A434', label: 'Dourado Quente', desc: 'Destaques e CTAs', light: false },
              { pct: 5, color: '#94A3B8', label: 'Cinza Nobre', desc: 'Detalhes', light: false },
            ].map(({ pct, color, label, desc, light }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-14 text-right text-sm font-mono text-cinza">{pct}%</div>
                <div className="rounded-lg h-10 flex items-center px-4" style={{ backgroundColor: color, width: `${pct}%`, minWidth: '120px', border: light ? '1px solid rgba(49,79,115,0.08)' : 'none' }}>
                  <span className={`text-xs font-semibold ${light ? 'text-azul' : 'text-white'}`}>{label}</span>
                </div>
                <span className="text-xs text-cinza hidden sm:block">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ── Tipografia ── */
function Tipografia() {
  return (
    <section id="tipografia" className="py-32 px-8 max-w-[1200px] mx-auto scroll-mt-20">
      <Reveal>
        <SectionLabel>05 — Tipografia</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-16 max-w-[700px]">
          Tipografia que equilibra tradição e modernidade
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-16 pb-16 border-b border-azul/8">
          <div className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-dourado mb-6">Fonte Primária — Títulos</div>
          <div className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.2] text-azul mb-6">
            Playfair Display
          </div>
          <div className="font-[family-name:var(--font-display)] text-[1.1rem] leading-8 text-cinza tracking-[0.05em]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            0123456789 &amp; ? ! @ #
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            {[['Regular 400', '400'], ['Medium 500', '500'], ['Bold 700', '700']].map(([name, w]) => (
              <div key={name} className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-cinza">{name}</span>
                <span className="font-[family-name:var(--font-display)] text-[1.8rem] text-azul" style={{ fontWeight: w }}>Fruto Da Vide</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mb-16 pb-16 border-b border-azul/8">
          <div className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-dourado mb-6">Fonte Secundária — Corpo de Texto</div>
          <div className="font-[family-name:var(--font-body)] text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-[1.3] text-azul mb-6">
            Montserrat
          </div>
          <div className="font-[family-name:var(--font-body)] text-[1.1rem] leading-8 text-cinza tracking-[0.05em]">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
            abcdefghijklmnopqrstuvwxyz<br/>
            0123456789 &amp; ? ! @ #
          </div>
          <div className="flex flex-wrap gap-8 mt-8">
            {[['Light 300', '300'], ['Regular 400', '400'], ['SemiBold 600', '600']].map(([name, w]) => (
              <div key={name} className="flex flex-col gap-1">
                <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-cinza">{name}</span>
                <span className="font-[family-name:var(--font-body)] text-[1.8rem] text-azul" style={{ fontWeight: w }}>Fruto Da Vide</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="text-[0.65rem] font-semibold tracking-[0.25em] uppercase text-dourado mb-6">Hierarquia Tipográfica</div>
        <div className="flex flex-col gap-6">
          {[
            { el: 'H1', size: '48 — 72px', sample: 'Título Principal', cls: 'font-[family-name:var(--font-display)] text-[2rem] font-normal text-azul' },
            { el: 'H2', size: '32 — 48px', sample: 'Título de Seção', cls: 'font-[family-name:var(--font-display)] text-[1.5rem] font-normal text-azul' },
            { el: 'H3', size: '24 — 32px', sample: 'Subtítulo', cls: 'font-[family-name:var(--font-display)] text-[1.2rem] font-medium text-azul' },
            { el: 'Body', size: '16 — 18px', sample: 'Texto de corpo — legível e elegante', cls: 'font-[family-name:var(--font-body)] text-base font-light text-cinza' },
            { el: 'Caption', size: '11 — 13px', sample: 'Rótulos e legendas', cls: 'font-[family-name:var(--font-body)] text-[0.75rem] font-medium tracking-[0.15em] uppercase text-cinza' },
          ].map(({ el, size, sample, cls }) => (
            <div key={el} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 pb-4 border-b border-azul/6">
              <span className="shrink-0 w-20 text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-cinza">{el}</span>
              <span className={`flex-1 ${cls}`}>{sample}</span>
              <span className="shrink-0 text-[0.7rem] text-dourado font-mono">{size}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

/* ── Proibidos ── */
function Proibidos() {
  const rules = [
    { visual: 'scale-x-150', label: 'Distorcer ou esticar o logotipo' },
    { visual: 'rotate-[25deg]', label: 'Rotacionar em ângulos arbitrários' },
    { visual: '[text-shadow:4px_4px_0_rgba(0,0,0,0.3)]', label: 'Aplicar sombras ou efeitos 3D' },
    { visual: 'text-red-500', label: 'Alterar as cores da paleta oficial' },
    { visual: 'text-transparent [-webkit-text-stroke:1px_var(--color-azul)]', label: 'Usar apenas contorno sem preenchimento' },
    { visual: 'opacity-20', label: 'Aplicar em fundo de baixo contraste' },
  ]
  return (
    <section id="proibidos" className="py-32 px-8 max-w-[1200px] mx-auto scroll-mt-20">
      <Reveal>
        <SectionLabel>07 — Usos Proibidos</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.15] mb-4 max-w-[700px]">
          O que nunca deve ser feito
        </h2>
        <p className="text-[1.05rem] font-light leading-[1.9] text-cinza max-w-[620px]">
          Para preservar a integridade da marca, as seguintes alterações são estritamente proibidas em qualquer circunstância.
        </p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {rules.map(({ visual, label }, i) => (
          <Reveal key={i} delay={(i % 3) * 100}>
            <div className="aspect-square border border-azul/8 rounded-xl flex flex-col items-center justify-center gap-4 p-8 relative transition-colors hover:border-red-400">
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold">&#10005;</div>
              <div className={`w-20 h-20 flex items-center justify-center font-[family-name:var(--font-display)] text-base text-azul border border-azul/10 rounded-lg ${visual}`}>FdV</div>
              <p className="text-[0.7rem] font-medium tracking-[0.05em] text-center text-cinza">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ── Footer ── */
function Footer() {
  return (
    <footer id="contato" className="bg-preto text-white py-24 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-start gap-16">
        <div>
          <div className="font-[family-name:var(--font-display)] text-[1.8rem] font-normal mb-4">Fruto Da Vide</div>
          <p className="text-[0.85rem] font-light text-white/40 leading-[1.7] max-w-xs">
            Soluções têxteis premium para hotelaria e saúde. Mais de 44 anos de excelência, confiança e inovação.
          </p>
        </div>
        <div>
          <h5 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-dourado mb-5">Manual</h5>
          {['Sobre', 'Conceito', 'Logotipo', 'Paleta', 'Tipografia', 'Restrições'].map(s => (
            <a key={s} href={`#${s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace('ções', 'coes').replace('ões', 'oes')}`}
              className="block text-[0.85rem] font-light text-white/50 leading-8 hover:text-dourado transition-colors">
              {s}
            </a>
          ))}
        </div>
        <div>
          <h5 className="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-dourado mb-5">Contato</h5>
          <p className="text-[0.85rem] font-light text-white/50 leading-8">contato@frutodavide.com.br</p>
          <p className="text-[0.85rem] font-light text-white/50 leading-8">frutodavide.com.br</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-white/6 flex flex-wrap justify-between text-[0.7rem] text-white/25 tracking-[0.05em]">
        <span>&copy; 2026 Fruto Da Vide. Todos os direitos reservados.</span>
        <span>Manual de Identidade Visual v3.0 — Desenvolvido por Trik Digital</span>
      </div>
    </footer>
  )
}

/* ── CSS injection for the "visible" class ── */
function StyleInjector() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }'
    document.head.appendChild(style)
    return () => style.remove()
  }, [])
  return null
}

/* ── App ── */
export default function App() {
  return (
    <div className="min-h-screen">
      <StyleInjector />
      <Nav />
      <Hero />
      <Sobre />
      <Divider />
      <Conceito />
      <Logotipo />
      <Divider />
      <Paleta />
      <Divider />
      <Tipografia />
      <Proibidos />
      <Footer />
    </div>
  )
}
