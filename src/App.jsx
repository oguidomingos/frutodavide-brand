const B = import.meta.env.BASE_URL

function Nav() {
  const links = [
    ['Marca', '#marca'],
    ['Logotipo', '#logotipo'],
    ['Cores', '#cores'],
    ['Tipografia', '#tipografia'],
    ['Uso', '#uso'],
    ['Proibido', '#proibido'],
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={`${B}logos/row1c-simbolo-azul-sereno.png`} alt="FDV" className="h-8" />
          <span className="font-[family-name:var(--font-display)] text-lg text-white font-semibold hidden sm:block">Fruto Da Vide</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-400 hover:text-[#D4A434] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#314F73]/20 via-transparent to-transparent" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#314F73]/10 blur-[120px]" />

      <div className="relative z-10 text-center px-6">
        <img src={`${B}logos/row1-azul-sereno.png`} alt="Fruto Da Vide" className="mx-auto mb-10 max-w-lg w-full" />

        <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4A434]/30 bg-[#D4A434]/10 mb-6">
          <span className="text-[#D4A434] text-sm font-medium tracking-wider uppercase">Manual de Identidade Visual</span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-white font-bold mb-6 leading-tight">
          Fruto Da Vide
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          44 anos de tradi&ccedil;&atilde;o em solu&ccedil;&otilde;es t&ecirc;xteis premium para hotelaria e sa&uacute;de.
          Este manual define as diretrizes visuais que protegem e fortalecem a marca.
        </p>

        <a href="#marca" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#D4A434] text-white font-semibold hover:bg-[#E8C060] transition-colors">
          Explorar Manual
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </a>
      </div>
    </section>
  )
}

function SectionTitle({ tag, title, desc, id }) {
  return (
    <div id={id} className="text-center mb-16 scroll-mt-20">
      <div className="inline-block px-3 py-1 rounded-full border border-[#D4A434]/30 bg-[#D4A434]/10 mb-4">
        <span className="text-[#D4A434] text-xs font-semibold tracking-widest uppercase">{tag}</span>
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-white font-bold mb-4">{title}</h2>
      {desc && <p className="text-slate-400 text-lg max-w-2xl mx-auto">{desc}</p>}
    </div>
  )
}

function Marca() {
  const attrs = [
    { icon: '44+', label: 'Tradi\u00e7\u00e3o', desc: 'Mais de quatro d\u00e9cadas de excel\u00eancia em t\u00eaxteis.' },
    { icon: '\u2605', label: 'Qualidade Premium', desc: 'Materiais e acabamentos de alto padr\u00e3o.' },
    { icon: '\u2764', label: 'Confian\u00e7a', desc: 'Parceira de grandes redes hoteleiras e institui\u00e7\u00f5es.' },
    { icon: '\u2728', label: 'Sofistica\u00e7\u00e3o', desc: 'Design alinhado \u00e0s tend\u00eancias contempor\u00e2neas.' },
  ]
  return (
    <section className="py-24 px-6">
      <SectionTitle id="marca" tag="01" title="A Marca" desc="Ess\u00eancia, atributos e posicionamento que definem a Fruto Da Vide." />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-4">Ess\u00eancia</h3>
            <p className="text-slate-400 leading-relaxed">
              A Fruto Da Vide \u00e9 uma empresa brasileira com mais de 44 anos de tradi\u00e7\u00e3o
              na fabrica\u00e7\u00e3o de solu\u00e7\u00f5es t\u00eaxteis premium para os segmentos de hotelaria e sa\u00fade.
              A marca carrega valores de confian\u00e7a, durabilidade e sofistica\u00e7\u00e3o.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-4">Tom de Voz</h3>
            <p className="text-slate-400 leading-relaxed">
              Elegante e acolhedor. A comunica\u00e7\u00e3o transmite profissionalismo sem ser fria,
              e proximidade sem ser informal. Vocabul\u00e1rio que evoca conforto, qualidade e cuidado.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attrs.map(({ icon, label, desc }) => (
            <div key={label} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:border-[#D4A434]/40 transition-colors">
              <div className="text-3xl mb-3">{icon}</div>
              <h4 className="text-white font-semibold mb-2">{label}</h4>
              <p className="text-slate-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoCard({ src, title, desc, bg }) {
  return (
    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4A434]/30 transition-colors">
      <div className={`p-8 flex items-center justify-center min-h-[200px] ${bg || 'bg-white'}`}>
        <img src={`${B}logos/${src}`} alt={title} className="max-h-40 max-w-full object-contain" />
      </div>
      <div className="p-5">
        <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
        <p className="text-slate-500 text-xs">{desc}</p>
      </div>
    </div>
  )
}

function Logotipo() {
  return (
    <section className="py-24 px-6 bg-[#0d1220]">
      <SectionTitle id="logotipo" tag="02" title="Logotipo" desc="Varia\u00e7\u00f5es do logotipo e suas aplica\u00e7\u00f5es corretas." />
      <div className="max-w-6xl mx-auto">

        <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-6 text-center">Vers\u00e3o Principal</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <LogoCard src="row1-azul-sereno.png" title="Azul Sereno \u2014 Cor Principal" desc="Vers\u00e3o preferencial para todos os materiais da marca." />
          <LogoCard src="row1-dourado.png" title="Dourado Quente" desc="Para materiais premium, convites e papelaria especial." />
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-6 text-center">Varia\u00e7\u00f5es de Cor</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <LogoCard src="row1-pb.png" title="Monocrom\u00e1tico (P&B)" desc="Impress\u00f5es em uma cor, fax, carimbos." />
          <LogoCard src="row1-negativa.png" title="Vers\u00e3o Negativa" desc="Sobre fundos escuros ou fotogr\u00e1ficos." bg="bg-[#314F73]" />
          <LogoCard src="row2-azul-sereno.png" title="Composi\u00e7\u00e3o Alternativa" desc="Layout alternativo com gradiente." />
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-6 text-center">Layouts e Elementos</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <LogoCard src="row1a-preto-azul-sereno.png" title="Texto + S\u00edmbolo" desc="Nome completo com elemento da videira." />
          <LogoCard src="row1c-simbolo-azul-sereno.png" title="S\u00edmbolo Isolado" desc="\u00cdcone para redes sociais e favicon." />
          <LogoCard src="row3-azul-sereno.png" title="Layout Compacto" desc="Para espa\u00e7os reduzidos e etiquetas." />
          <LogoCard src="row4-azul-sereno.png" title="Vers\u00e3o Horizontal" desc="Assinaturas de e-mail e rodap\u00e9s." />
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="font-[family-name:var(--font-display)] text-xl text-white font-semibold mb-4">Regras de Prote\u00e7\u00e3o</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-400">
            <div>
              <h4 className="text-white font-semibold mb-2">\u00c1rea de Prote\u00e7\u00e3o</h4>
              <p>Manter margem m\u00ednima equivalente \u00e0 altura da letra &ldquo;F&rdquo; ao redor do logotipo em todas as aplica\u00e7\u00f5es.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Tamanho M\u00ednimo</h4>
              <p>Impresso: 30mm de largura (horizontal), 20mm (s\u00edmbolo). Tela: 120px de largura m\u00ednima.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ColorSwatch({ hex, name, rgb, cmyk, usage }) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
      <div className="h-28 md:h-36" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <h4 className="text-white font-semibold text-sm">{name}</h4>
        <div className="mt-2 space-y-1 text-xs text-slate-500 font-mono">
          <div>HEX: {hex}</div>
          <div>RGB: {rgb}</div>
          <div>CMYK: {cmyk}</div>
        </div>
        <p className="mt-2 text-xs text-slate-400">{usage}</p>
      </div>
    </div>
  )
}

function Cores() {
  return (
    <section className="py-24 px-6">
      <SectionTitle id="cores" tag="03" title="Paleta de Cores" desc="As cores que comunicam a ess\u00eancia da marca \u2014 serenidade, sofistica\u00e7\u00e3o e acolhimento." />
      <div className="max-w-5xl mx-auto">

        <h3 className="font-[family-name:var(--font-display)] text-lg text-white font-semibold mb-6">Cores Prim\u00e1rias</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ColorSwatch hex="#314F73" name="Azul Sereno" rgb="49, 79, 115" cmyk="57, 31, 0, 55" usage="Cor principal. T\u00edtulos, fundos, logotipo, elementos estruturais." />
          <ColorSwatch hex="#D4A434" name="Dourado Quente" rgb="212, 164, 52" cmyk="0, 23, 75, 17" usage="Destaques, CTAs, \u00edcones, acentos visuais, detalhes premium." />
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-lg text-white font-semibold mb-6">Cores de Suporte</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ColorSwatch hex="#F5F7FA" name="Cloud White" rgb="245, 247, 250" cmyk="2, 1, 0, 2" usage="Fundos principais" />
          <ColorSwatch hex="#FAF5E8" name="Warm Cream" rgb="250, 245, 232" cmyk="0, 2, 7, 2" usage="Fundos premium" />
          <ColorSwatch hex="#64748B" name="Slate" rgb="100, 116, 139" cmyk="28, 17, 0, 45" usage="Texto secund\u00e1rio" />
          <ColorSwatch hex="#333333" name="Dark Charcoal" rgb="51, 51, 51" cmyk="0, 0, 0, 80" usage="Texto corpo" />
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="font-[family-name:var(--font-display)] text-lg text-white font-semibold mb-6">Propor\u00e7\u00e3o de Uso</h3>
          <div className="flex flex-col gap-4">
            {[
              { pct: 60, color: '#314F73', label: 'Azul Sereno', desc: 'Elemento dominante', text: 'text-white' },
              { pct: 20, color: '#F5F7FA', label: 'Cloud White', desc: 'Respiro visual', text: 'text-[#314F73]' },
              { pct: 15, color: '#D4A434', label: 'Dourado Quente', desc: 'Destaques e CTAs', text: 'text-white' },
              { pct: 5, color: '#64748B', label: 'Slate', desc: 'Detalhes', text: 'text-white' },
            ].map(({ pct, color, label, desc, text }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-16 text-right text-sm font-mono text-slate-400">{pct}%</div>
                <div className="flex-1 rounded-lg h-10 flex items-center px-4" style={{ backgroundColor: color, width: `${pct}%`, minWidth: '120px' }}>
                  <span className={`text-xs font-semibold ${text}`}>{label}</span>
                </div>
                <span className="text-xs text-slate-500 hidden sm:block">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Tipografia() {
  return (
    <section className="py-24 px-6 bg-[#0d1220]">
      <SectionTitle id="tipografia" tag="04" title="Tipografia" desc="As fam\u00edlias tipogr\u00e1ficas que d\u00e3o voz \u00e0 marca." />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="text-xs text-[#D4A434] font-semibold uppercase tracking-widest mb-4">T\u00edtulos</div>
            <h3 className="font-[family-name:var(--font-display)] text-4xl text-white font-bold mb-4">Playfair Display</h3>
            <p className="font-[family-name:var(--font-display)] text-2xl text-slate-300 mb-6 italic">Aa Bb Cc Dd Ee Ff</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fonte serifada elegante para t\u00edtulos e elementos de destaque.
              Personalidade cl\u00e1ssica que refor\u00e7a tradi\u00e7\u00e3o e sofistica\u00e7\u00e3o.
              Dispon\u00edvel no Google Fonts.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="text-xs text-[#D4A434] font-semibold uppercase tracking-widest mb-4">Corpo</div>
            <h3 className="font-[family-name:var(--font-body)] text-4xl text-white font-bold mb-4">Montserrat</h3>
            <p className="font-[family-name:var(--font-body)] text-2xl text-slate-300 mb-6 font-light">Aa Bb Cc Dd Ee Ff</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fonte sans-serif moderna e vers\u00e1til para corpo de texto,
              legendas, bot\u00f5es e interfaces. Legibilidade e neutralidade
              como complemento perfeito.
            </p>
          </div>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <h3 className="text-white font-semibold mb-6">Hierarquia Tipogr\u00e1fica</h3>
          <div className="space-y-6">
            {[
              { el: 'H1', font: 'Playfair Display Bold', size: '32\u201340pt', sample: 'T\u00edtulo Principal', fontClass: 'font-[family-name:var(--font-display)] text-4xl font-bold' },
              { el: 'H2', font: 'Playfair Display SemiBold', size: '24\u201328pt', sample: 'Subt\u00edtulo da Se\u00e7\u00e3o', fontClass: 'font-[family-name:var(--font-display)] text-2xl font-semibold' },
              { el: 'H3', font: 'Montserrat SemiBold', size: '18\u201320pt', sample: 'T\u00edtulo de Bloco', fontClass: 'text-xl font-semibold' },
              { el: 'Corpo', font: 'Montserrat Regular', size: '14\u201316pt', sample: 'Texto corrido de leitura', fontClass: 'text-base font-normal' },
              { el: 'Caption', font: 'Montserrat Light', size: '11\u201312pt', sample: 'Legenda e notas de rodap\u00e9', fontClass: 'text-sm font-light text-slate-400' },
            ].map(({ el, font, size, sample, fontClass }) => (
              <div key={el} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-4 border-b border-white/5">
                <div className="w-20 text-xs text-[#D4A434] font-mono font-semibold">{el}</div>
                <div className={`flex-1 text-white ${fontClass}`}>{sample}</div>
                <div className="text-xs text-slate-500 font-mono whitespace-nowrap">{font} / {size}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Uso() {
  return (
    <section className="py-24 px-6">
      <SectionTitle id="uso" tag="05" title="Padr\u00f5es de Uso" desc="Diretrizes para aplica\u00e7\u00e3o consistente da identidade visual." />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Grid e Espa\u00e7amento',
              items: ['Grid base de 8px', 'Margens: 24px (tela), 15mm (impresso)', '\u00c1rea de prote\u00e7\u00e3o do logo proporcional'],
            },
            {
              title: 'Fundos Permitidos',
              items: ['Branco (#FFFFFF)', 'Cloud White (#F5F7FA)', 'Warm Cream (#FAF5E8)', 'Azul Sereno (logo negativa)', 'Fotografias com contraste'],
            },
            {
              title: 'Bordas e Sombras',
              items: ['Bordas: 1px, Azul Sereno 20%', 'Sombras sutis (0 2px 8px)', 'Evitar sombras pesadas', 'Tom elegante e leve'],
            },
          ].map(({ title, items }) => (
            <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-[#D4A434] mt-0.5">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h4 className="text-white font-semibold mb-4">Fotografia</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Fotografias devem transmitir sofistica\u00e7\u00e3o, conforto e qualidade.
              Preferir ilumina\u00e7\u00e3o natural, tons quentes e ambientes que remetam
              a hotelaria e sa\u00fade de alto padr\u00e3o. Evitar filtros excessivos.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h4 className="text-white font-semibold mb-4">Elementos Decorativos</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              O s\u00edmbolo da videira pode ser usado como marca d\u2019\u00e1gua (5-10% opacidade),
              elemento decorativo ou padr\u00e3o de fundo. Linhas finas douradas (#D4A434)
              como separadores e molduras em materiais premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Proibido() {
  const rules = [
    'Alterar propor\u00e7\u00f5es do logotipo',
    'Rotacionar em qualquer \u00e2ngulo',
    'Aplicar sombras ou chanfros ao logo',
    'Alterar cores fora das varia\u00e7\u00f5es definidas',
    'Usar sobre fundos sem contraste',
    'Adicionar contornos ao logotipo',
    'Reproduzir abaixo do tamanho m\u00ednimo',
    'Separar elementos do logotipo',
    'Usar tipografia diferente para o nome',
    'Aplicar gradientes n\u00e3o autorizados',
  ]
  return (
    <section className="py-24 px-6 bg-[#0d1220]">
      <SectionTitle id="proibido" tag="06" title="Aplica\u00e7\u00f5es Proibidas" desc="Para proteger a integridade visual da marca." />
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          {rules.map((rule, i) => (
            <div key={i} className="flex items-center gap-4 bg-red-500/5 border border-red-500/20 rounded-xl px-5 py-4">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
              <span className="text-slate-300 text-sm">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Aplicacoes() {
  const apps = [
    { title: 'Cart\u00e3o de Visita', desc: 'Logo Azul Sereno sobre Cloud White. Verso em Azul Sereno com texto branco. Detalhes em Dourado Quente.' },
    { title: 'Papel Timbrado', desc: 'Logo reduzido no topo esquerdo. Dados no rodap\u00e9 em Montserrat Light. Separador dourado.' },
    { title: 'Assinatura de E-mail', desc: 'S\u00edmbolo + nome em Azul Sereno. Linha dourada separando dados. Max 600px.' },
    { title: 'Website', desc: 'Header branco com logo. CTAs em Dourado Quente. Rodap\u00e9 Azul Sereno.' },
    { title: 'Redes Sociais', desc: 'Perfil: s\u00edmbolo sobre fundo branco. Posts com templates azul/branco.' },
    { title: 'Etiquetas de Produto', desc: 'Fundo Warm Cream. Logo Azul Sereno. Borda dourada. Papel texturizado.' },
  ]
  return (
    <section className="py-24 px-6">
      <SectionTitle tag="07" title="Exemplos de Aplica\u00e7\u00e3o" desc="Como a identidade visual se manifesta em diferentes materiais." />
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(({ title, desc }) => (
          <div key={title} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D4A434]/30 transition-colors">
            <h4 className="font-[family-name:var(--font-display)] text-white font-semibold mb-3">{title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/10 text-center">
      <img src={`${B}logos/row1c-simbolo-azul-sereno.png`} alt="FDV" className="h-12 mx-auto mb-4 opacity-40" />
      <p className="text-slate-500 text-sm">
        Fruto Da Vide &mdash; Manual de Identidade Visual v2.0
      </p>
      <p className="text-slate-600 text-xs mt-2">
        Desenvolvido por Trik Digital &mdash; Mar\u00e7o 2026
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Marca />
      <Logotipo />
      <Cores />
      <Tipografia />
      <Uso />
      <Proibido />
      <Aplicacoes />
      <Footer />
    </div>
  )
}
