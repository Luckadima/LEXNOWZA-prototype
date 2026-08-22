import React,{useState}from'react';import{createRoot}from'react-dom/client';import{LayoutDashboard,FileText,MessageCircle,BookOpen,CalendarDays,ShieldCheck,Settings,HelpCircle,LogOut,ArrowRight,ArrowLeft,Clock3,CheckCircle2,Phone,Send,Globe2,Users,Sparkles,Bell,Menu}from'lucide-react';import'./styles.css';
const T={en:{dash:'Dashboard',matters:'My Matters',messages:'Messages',documents:'Documents',appointments:'Appointments',payments:'Payments',profile:'Profile & Settings',help:'Help Centre',good:'Good morning, Nomsa',new:'You have 1 new update',matter:'Divorce Matter',num:'Matter TS1045',active:'Active',update:'Court date has been set',view:'View update',ask:'Ask a question',quick:'Quick actions',back:'Back',details:'Update details',confirmed:'Confirmed',date:'Date',time:'Time',court:'Court',division:'Division',what:'What this means',next:'Next steps',bring:'Prepare requested documents',attend:'Attend court on the date and time above',contact:'Contact the firm if you have questions',placeholder:'Type your question...',send:'Send',reception:'Chat with reception',callback:'Request attorney call back',office:'Office hours',hours:'Mon – Fri: 08:00 – 17:00',secure:'Secure • Confidential • Demo data',welcome:'Welcome to LEXNOWZA',secureAccess:'Secure client access',otp:'We sent a 6-digit code to',continue:'Continue',resend:'Resend code',firm:'Law firm portal',overview:'Overview',conversations:'Conversations',updates:'Updates',escalations:'Escalations',clients:'Clients',knowledge:'Knowledge Base',roles:'Users & Roles',analytics:'Analytics',settings:'Settings',total:'Total conversations',resolved:'Resolved by AI',human:'Escalated to human',response:'Avg. response time',latest:'Latest updates',recent:'Recent escalations',actions:'Quick actions',sendUpdate:'Send proactive update',create:'Create knowledge article',audit:'View audit logs',logout:'Log out',demo:'Demo only',static:'Available in the full product',attorney:'Attorney',receptionRole:'Reception / Paralegal',q1:'What do I need to bring?',q2:'Can I change my court date?',a1:'Based on the approved information for this matter, please bring your identification and any documents previously requested by your attorney.',a2:"I can't provide legal advice about changing a court date. I can connect you with the appropriate person at the firm.",fallback:'I do not have approved information for that question. Please contact the legal team for assistance.'},zu:{dash:'Ideshibhodi',matters:'Amacala Ami',messages:'Imilayezo',documents:'Imibhalo',appointments:'Ama-aphoyintimenti',payments:'Izinkokhelo',profile:'Iphrofayela Nezilungiselelo',help:'Isikhungo Sosizo',good:'Sawubona ekuseni, Nomsa',new:'Unesibuyekezo esisha esi-1',matter:'Icala Lesehlukaniso',num:'Inombolo Yecala TS1045',active:'Liyaqhubeka',update:'Usuku lwenkantolo lubekiwe',view:'Buka isibuyekezo',ask:'Buza umbuzo',quick:'Izenzo ezisheshayo',back:'Emuva',details:'Imininingwane yesibuyekezo',confirmed:'Kuqinisekisiwe',date:'Usuku',time:'Isikhathi',court:'Inkantolo',division:'Isigaba',what:'Lokhu kusho ukuthini',next:'Izinyathelo ezilandelayo',bring:'Lungisa imibhalo eceliwe',attend:'Yiya enkantolo ngosuku nangesikhathi esingenhla',contact:'Xhumana nefemu uma unemibuzo',placeholder:'Bhala umbuzo wakho...',send:'Thumela',reception:'Xoxa ne-reception',callback:'Cela ummeli akushayele',office:'Amahora okusebenza',hours:'Msombuluko – Lwesihlanu: 08:00 – 17:00',secure:'Kuphephile • Kuyimfihlo • Idatha yokubonisa',welcome:'Siyakwamukela ku-LEXNOWZA',secureAccess:'Ukungena okuphephile kweklayenti',otp:'Sithumele ikhodi enezinombolo ezi-6 ku',continue:'Qhubeka',resend:'Thumela futhi',firm:'Ingosi yefemu yezomthetho',overview:'Uhlolojikelele',conversations:'Izingxoxo',updates:'Izibuyekezo',escalations:'Ukudluliselwa',clients:'Amaklayenti',knowledge:'Isizindalwazi Solwazi',roles:'Abasebenzisi Nezindima',analytics:'Ukuhlaziya',settings:'Izilungiselelo',total:'Izingxoxo sezizonke',resolved:'Zixazululwe yi-AI',human:'Zidluliselwe kumuntu',response:'Isikhathi esimaphakathi',latest:'Izibuyekezo zakamuva',recent:'Ukudluliselwa kwakamuva',actions:'Izenzo ezisheshayo',sendUpdate:'Thumela isibuyekezo',create:'Dala i-athikili yolwazi',audit:'Buka amarekhodi',logout:'Phuma',demo:'Ukubonisa kuphela',static:'Kuzotholakala kumkhiqizo ophelele',attorney:'Ummeli',receptionRole:'Reception / Paralegal',q1:'Yini okufanele ngiyiphathe?',q2:'Ngingalushintsha usuku lwenkantolo?',a1:'Ngokusekelwe olwazini oluvunyiwe lwaleli cala, sicela uphathe umazisi wakho nanoma yimiphi imibhalo owacelwe ummeli wakho ukuba uyilethe.',a2:'Angikwazi ukunikeza iseluleko sezomthetho mayelana nokushintsha usuku lwenkantolo. Ngingakuxhumanisa nomuntu ofanele efemini.',fallback:'Anginalo ulwazi oluvunyiwe lwalowo mbuzo. Sicela uxhumane nethimba lezomthetho ukuze uthole usizo.'},af:{dash:'Kontroleskerm',matters:'My Sake',messages:'Boodskappe',documents:'Dokumente',appointments:'Afsprake',payments:'Betalings',profile:'Profiel & Instellings',help:'Hulpsentrum',good:'Goeiemôre, Nomsa',new:'Jy het 1 nuwe opdatering',matter:'Egskeidingsaak',num:'Saak TS1045',active:'Aktief',update:'Hofdatum is vasgestel',view:'Bekyk opdatering',ask:"Vra 'n vraag",quick:'Vinnige aksies',back:'Terug',details:'Opdateringsbesonderhede',confirmed:'Bevestig',date:'Datum',time:'Tyd',court:'Hof',division:'Afdeling',what:'Wat beteken dit?',next:'Volgende stappe',bring:'Berei aangevraagde dokumente voor',attend:'Woon die hof op die datum en tyd hierbo by',contact:'Kontak die firma indien jy vrae het',placeholder:'Tik jou vraag...',send:'Stuur',reception:'Gesels met ontvangs',callback:'Versoek prokureur-terugbel',office:'Kantoorure',hours:'Ma – Vr: 08:00 – 17:00',secure:'Veilig • Vertroulik • Demo-data',welcome:'Welkom by LEXNOWZA',secureAccess:'Veilige kliënttoegang',otp:"Ons het 'n 6-syfer kode gestuur na",continue:'Gaan voort',resend:'Stuur weer',firm:'Regsfirma-portaal',overview:'Oorsig',conversations:'Gesprekke',updates:'Opdaterings',escalations:'Verwysings',clients:'Kliënte',knowledge:'Kennisbasis',roles:'Gebruikers & Rolle',analytics:'Ontledings',settings:'Instellings',total:'Totale gesprekke',resolved:'Deur KI opgelos',human:'Na mens verwys',response:'Gem. reaksietyd',latest:'Jongste opdaterings',recent:'Onlangse verwysings',actions:'Vinnige aksies',sendUpdate:'Stuur proaktiewe opdatering',create:'Skep kennisartikel',audit:'Bekyk ouditlogboeke',logout:'Meld uit',demo:'Slegs demo',static:'Beskikbaar in die volledige produk',attorney:'Prokureur',receptionRole:'Ontvangs / Paralegal',q1:'Wat moet ek saambring?',q2:'Kan ek my hofdatum verander?',a1:'Gebaseer op die goedgekeurde inligting vir hierdie saak, bring asseblief jou identifikasie en enige dokumente wat jou prokureur voorheen versoek het.',a2:"Ek kan nie regsadvies gee oor die verandering van 'n hofdatum nie. Ek kan jou met die toepaslike persoon by die firma verbind.",fallback:'Ek het nie goedgekeurde inligting vir daardie vraag nie. Kontak asseblief die regspan vir hulp.'}};
const clientNav=[['dash',LayoutDashboard],['matters',FileText],['messages',MessageCircle],['documents',BookOpen],['appointments',CalendarDays],['payments',ShieldCheck],['profile',Settings],['help',HelpCircle]];const firmNav=[['overview',LayoutDashboard],['conversations',MessageCircle],['updates',Bell],['escalations',ArrowRight],['clients',Users],['knowledge',BookOpen],['roles',ShieldCheck],['analytics',Sparkles],['settings',Settings]];
function Lang({lang,setLang}){return <div className="lang"><Globe2 size={15}/><select value={lang} onChange={e=>setLang(e.target.value)}><option value="en">English</option><option value="zu">isiZulu</option><option value="af">Afrikaans</option></select></div>}
function App(){const[lang,setLang]=useState('en'),[mode,setMode]=useState('client'),[screen,setScreen]=useState('login'),[client,setClient]=useState('dash'),[firm,setFirm]=useState('overview'),[q,setQ]=useState(''),[msgs,setMsgs]=useState([]);const t=T[lang];if(screen==='login')return <Auth t={t} lang={lang} setLang={setLang} next={()=>setScreen('otp')}/>;if(screen==='otp')return <Otp t={t} lang={lang} setLang={setLang} next={()=>setScreen('client')}/>;if(mode==='firm')return <Firm t={t} lang={lang} setLang={setLang} screen={firm} setScreen={setFirm} exit={()=>{setMode('client');setClient('dash')}}/>;return <Client t={t} lang={lang} setLang={setLang} screen={client} setScreen={setClient} q={q} setQ={setQ} msgs={msgs} ask={x=>{x=x||q;if(!x.trim())return;let a=T[lang].fallback;if(x.toLowerCase().includes('bring')||x.includes('phathe')||x.includes('saambring'))a=t.a1;if(x.toLowerCase().includes('change')||x.toLowerCase().includes('court date')||x.includes('shints')||x.includes('verander'))a=t.a2;setMsgs(m=>[...m,{u:x},{a,esc:a===t.a2||a===t.fallback}]);setQ('')}} modeFirm={()=>setMode('firm')} logout={()=>setScreen('login')}/>}
function Auth({t,lang,setLang,next}){return <div className="auth"><div className="card"><div className="logo">L</div><b>LEXNOWZA</b><h1>{t.welcome}</h1><p>{t.secureAccess}</p><div className="demo">{t.demo}</div><input placeholder="Enter you phone number"/><button className="primary" onClick={next}>{t.continue}<ArrowRight size={16}/></button><Lang lang={lang} setLang={setLang}/></div></div>}
function Otp({t,lang,setLang,next}){return <div className="auth"><div className="card"><div className="logo">L</div><b>LEXNOWZA</b><h1>{t.secureAccess}</h1><p>{t.otp} <strong>060 296 4176</strong></p><div className="otp">{[2,5,7,9,0,4].map((x,i)=><input key={i} value={x} readOnly/>)}</div><button className="primary" onClick={next}>{t.continue}<ArrowRight size={16}/></button><button className="link">{t.resend}</button><Lang lang={lang} setLang={setLang}/></div></div>}
function Layout({
  t,
  nav,
  active,
  setActive,
  children,
  firm = false,
  lang,
  setLang,
  footer
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const changePage = (page) => {
    setActive(page);
    setMenuOpen(false);
  };

  return (
    <div className="shell">

      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside className={menuOpen ? "mobile-open" : ""}>

        <div className="brand">
          <div className="logo small">L</div>
          LEXNOWZA
        </div>

        <span className="label">
          {firm ? t.firm : "CLIENT PORTAL"}
        </span>

        {nav.map(([k, I]) => (
          <button
            className={active === k ? "active" : ""}
            onClick={() => changePage(k)}
            key={k}
          >
            <I size={17}/>
            {t[k]}
          </button>
        ))}

        <div className="bottom">
          {footer}
        </div>

      </aside>

      <main>

        <header>

          <div className="header-left">

            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <Menu size={22}/>
            </button>

            <span>
              {firm ? t.firm : t.dash}
            </span>

          </div>

          <Lang
            lang={lang}
            setLang={setLang}
          />

        </header>

        {children}

      </main>

    </div>
  );
}
function Client({t,lang,setLang,screen,setScreen,q,setQ,msgs,ask,modeFirm,logout}){
  return (
    <Layout
      t={t}
      nav={clientNav}
      active={screen}
      setActive={setScreen}
      lang={lang}
      setLang={setLang}
      footer={
        <>
          <button onClick={modeFirm}><ShieldCheck size={16}/>{t.firm}</button>
          <button onClick={logout}><LogOut size={16}/>{t.logout}</button>
        </>
      }
    >
      <div className="content">
        {screen === 'dash' && <Dashboard t={t} setScreen={setScreen}/>}
        {screen === 'update' && <Update t={t} setScreen={setScreen}/>}
        {screen === 'question' && (
          <Question t={t} q={q} setQ={setQ} msgs={msgs} ask={ask} setScreen={setScreen}/>
        )}
        {!['dash','update','question'].includes(screen) && (
          <Placeholder t={t} title={t[screen]}/>
        )}
      </div>
    </Layout>
  );
}
function Dashboard({t,setScreen}){return <><div className="welcome"><div><small>CLIENT PORTAL</small><h1>{t.good} 👋</h1><p>{t.new}</p></div><div className="avatar">NM</div></div><section className="matter"><div className="row"><div><em>{t.new}</em><h2>{t.num} — {t.matter}</h2></div><span className="status">{t.active}</span></div><div className="meta"><span><CalendarDays/>25 June 2025</span><span><Clock3/>09:30</span><span><FileText/>Family Court — Division 3</span></div><div className="update"><CheckCircle2/><b>{t.update}</b></div><button className="primary" onClick={()=>setScreen('update')}>{t.view}<ArrowRight size={16}/></button></section><h3>{t.quick}</h3><div className="quick"><button onClick={()=>setScreen('question')}><MessageCircle/><b>{t.ask}</b><small>Get an approved answer</small></button><button><FileText/><b>{t.matters}</b><small>{t.static}</small></button><button><Phone/><b>{t.contact}</b><small>{t.static}</small></button></div></>}
function Update({t,setScreen}){return <><button className="back" onClick={()=>setScreen('dash')}><ArrowLeft size={15}/>{t.back}</button><div className="heading"><small>{t.num}</small><h1>{t.details}</h1></div><section className="detail"><div className="row"><div><h2>{t.update}</h2><p>{t.matter}</p></div><span className="status">{t.confirmed}</span></div><div className="grid">{[[t.date,'25 June 2025'],[t.time,'09:30 AM'],[t.court,'Family Court'],[t.division,'Division 3']].map(([a,b])=><div><small>{a}</small><b>{b}</b></div>)}</div><article><h3>{t.what}</h3><p>Your matter has been scheduled for a court hearing on 25 June 2025 at 09:30 AM. Please prepare documents requested by your attorney.</p></article><h3>{t.next}</h3><ul><li>{t.bring}</li><li>{t.attend}</li><li>{t.contact}</li></ul><button className="primary" onClick={()=>setScreen('question')}>{t.ask}<MessageCircle size={16}/></button></section></>}
function Question({t,q,setQ,msgs,ask,setScreen}){return <><button className="back" onClick={()=>setScreen('update')}><ArrowLeft size={15}/>{t.back}</button><div className="heading"><small>{t.num}</small><h1>{t.ask}</h1></div><section className="chat"><div className="suggest"><button onClick={()=>ask(t.q1)}>{t.q1}</button><button onClick={()=>ask(t.q2)}>{t.q2}</button></div><div className="history">{!msgs.length?<div className="empty"><Sparkles/><b>LEXNOWZA Assistant</b><p>Ask about approved information for your matter.</p></div>:msgs.map((m,i)=>m.u?<div className="bubble user" key={i}>{m.u}</div>:<React.Fragment key={i}><div className="bubble ai">{m.a}</div>{m.esc&&<div className="escalate"><b>{t.reception}</b><p>Human assistance is available.</p><button>{t.reception}</button><button>{t.callback}</button></div>}</React.Fragment>)}</div><div className="composer"><input value={q} onChange={e=>setQ(e.target.value)} onKeyDown={e=>e.key==='Enter'&&ask()} placeholder={t.placeholder}/><button onClick={()=>ask()}><Send size={17}/></button></div><footer>🛡 {t.secure}</footer></section></>}
function Placeholder({t,title}){return <div className="placeholder"><FileText/><h1>{title}</h1><p>{t.static}</p><span>{t.demo}</span></div>}
function Firm({t,lang,setLang,screen,setScreen,exit}){return <Layout t={t} firm nav={firmNav} active={screen} setActive={setScreen} lang={lang} setLang={setLang} footer={<button onClick={exit}><LogOut size={16}/>{t.logout}</button>}>{screen==='overview'&&<FirmDash t={t}/>} {screen==='escalations'&&<Escalations t={t}/>} {!['overview','escalations'].includes(screen)&&<div className="content"><Placeholder t={t} title={t[screen]}/></div>}</Layout>}
function FirmDash({t}){return <div className="content"><div className="welcome"><div><small>{t.firm}</small><h1>{t.overview}</h1><p>Demo performance snapshot for a small law firm.</p></div><div className="avatar">A</div></div><div className="stats">{[[t.total,'1,248'],[t.resolved,'892'],[t.human,'356'],[t.response,'18s']].map(([a,b])=><div className="stat"><small>{a}</small><strong>{b}</strong></div>)}</div><div className="cols"><section className="panel"><h2>{t.latest}</h2>{['Nomsa Mokoena','Sipho Dlamini','Thandi K.'].map((n,i)=><div className="item"><div className="avatar sm">{n.split(' ').map(x=>x[0]).join('')}</div><div><b>{n}</b><p>{i?'Document received from court':'Court date confirmed'}</p></div></div>)}</section><section className="panel"><h2>{t.recent}</h2>{['Can I change my court date?','What are my options?','I need legal advice'].map((q,i)=><div className="item"><div><b>{q}</b><p>Nomsa M. • TS1045</p></div><em>Open</em></div>)}</section></div><section className="panel actions"><h2>{t.actions}</h2><button><Bell/>{t.sendUpdate}</button><button><BookOpen/>{t.create}</button><button><ShieldCheck/>{t.audit}</button></section></div>}

function Escalations({t}){
  const reasons=[['Legal advice required',142,'40%'],['Approved information unavailable',89,'25%'],['Client requested human assistance',71,'20%'],['Matter-specific decision required',36,'10%'],['Other',18,'5%']];
  const languages=[['English',196,'55%'],['isiZulu',103,'29%'],['Afrikaans',57,'16%']];
  const recent=[
    {question:'Can I change my court date?',client:'Nomsa Mokoena',matter:'TS1045',reason:'Legal advice required',language:'English',status:'Open'},
    {question:'What are my options if the other party refuses?',client:'Sipho Dlamini',matter:'TS1128',reason:'Matter-specific decision required',language:'isiZulu',status:'Assigned'},
    {question:'Can the firm speak to the court for me?',client:'Thandi Khumalo',matter:'TS1194',reason:'Approved information unavailable',language:'English',status:'Open'},
    {question:'Ek wil met my prokureur praat.',client:'Johan Botha',matter:'TS1210',reason:'Client requested human assistance',language:'Afrikaans',status:'Resolved'}
  ];
  return <div className="content">
    <div className="welcome"><div><small>{t.firm}</small><h1>{t.escalations}</h1><p>Understand what the AI could not resolve and where human support was required.</p></div><div className="avatar">A</div></div>
    <div className="stats">
      <div className="stat"><small>Total escalations</small><strong>356</strong></div>
      <div className="stat"><small>Escalation rate</small><strong>28.5%</strong><p>356 of 1,248 conversations</p></div>
      <div className="stat"><small>Resolved by humans</small><strong>281</strong><p>79% of escalations</p></div>
      <div className="stat"><small>Avg. human handoff</small><strong>6m 42s</strong></div>
    </div>
    <div className="cols">
      <section className="panel"><h2>Why conversations were escalated</h2>{reasons.map(([reason,count,percent])=><div className="item" key={reason}><div style={{width:'100%'}}><div style={{display:'flex',justifyContent:'space-between',gap:'20px'}}><b>{reason}</b><strong>{percent}</strong></div><p>{count} escalations</p><div style={{height:'8px',background:'#e7eef8',borderRadius:'999px',overflow:'hidden',marginTop:'8px'}}><div style={{width:percent,height:'100%',background:'#2563a8',borderRadius:'999px'}}/></div></div></div>)}</section>
      <section className="panel"><h2>Escalations by language</h2>{languages.map(([language,count,percent])=><div className="item" key={language}><div style={{width:'100%'}}><div style={{display:'flex',justifyContent:'space-between'}}><b>{language}</b><strong>{percent}</strong></div><p>{count} escalations</p><div style={{height:'8px',background:'#e7eef8',borderRadius:'999px',overflow:'hidden',marginTop:'8px'}}><div style={{width:percent,height:'100%',background:'#2563a8',borderRadius:'999px'}}/></div></div></div>)}</section>
    </div>
    <div className="stats">
      <div className="stat"><small>Currently open</small><strong>39</strong></div>
      <div className="stat"><small>Assigned to reception</small><strong>24</strong></div>
      <div className="stat"><small>Assigned to attorney</small><strong>12</strong></div>
      <div className="stat"><small>Escalation resolution rate</small><strong>79%</strong></div>
    </div>
    <section className="panel"><h2>Recent escalations</h2>{recent.map((item,index)=><div className="item" key={index}><div style={{flex:1}}><b>{item.question}</b><p>{item.client} • {item.matter}</p><div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginTop:'7px'}}><span className="status">{item.reason}</span><span className="status">{item.language}</span></div></div><em>{item.status}</em></div>)}</section>
    <div className="cols">
      <section className="panel"><h2>Human handoff destination</h2><div className="item"><div><b>Reception / Paralegal</b><p>214 escalations</p></div><strong>60%</strong></div><div className="item"><div><b>Attorney</b><p>142 escalations</p></div><strong>40%</strong></div></section>
      <section className="panel"><h2>Escalation insight</h2><div className="item"><div><b>Most common escalation reason</b><p>Legal advice required</p></div><strong>40%</strong></div><div className="item"><div><b>Highest escalation language</b><p>English</p></div><strong>55%</strong></div><div className="item"><div><b>Potential knowledge-base opportunity</b><p>89 questions had no approved information available.</p></div></div></section>
    </div>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
