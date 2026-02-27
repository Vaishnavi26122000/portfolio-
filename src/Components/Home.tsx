'use client';
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import hero1 from "../assets/hero1.jpeg"; // one level up from Componants
// ─── DATA ─────────────────────────────────────────────────────────────────────

const ROLES = ['MERN Stack Developer', 'Full Stack Developer', 'React.js Developer', 'UI/UX designer'];

const PROJECTS = [
  {
    id: '01', title: 'Roomac.in', sub: 'PG & Co-Living Platform',
    desc: 'Full-stack PG/Co-living web app with responsive UI/UX, CRUD operations, MySQL integration, property listing, user management, and live deployment on AWS.',
    tags: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS'], live: 'https://roomac.in', year: '2025',
  },
  {
    id: '02', title: 'Attendance Portal', sub: 'Student Management System',
    desc: 'Role-based attendance system for teachers with real-time updates, department-wise records, student result display with subject-wise marks and grades.',
    tags: ['SQL Server', '.NET', 'JavaScript', 'HTML', 'CSS'], live: null, year: '2024',
  },
  {
    id: '03', title: 'Online Restaurant', sub: 'Food Delivery Platform',
    desc: 'Full-stack food delivery platform with product browsing, order tracking, online payments, and separate modules for customers, delivery staff, and admin.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js'], live: null, year: '2024',
  },
];

const SKILLS = [
  { cat: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
  { cat: 'Backend',  items: ['Node.js', 'Express.js'] },
  { cat: 'Database', items: ['MySQL', 'MongoDB', 'SQL Server'] },
  { cat: 'Tools',    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Thunderclient'] },
];

const EXPERIENCE = [
  {
    role: 'Full Stack Developer Intern', company: 'Hously Finntech Realty',
    period: 'Dec 2025 – Present', location: 'Pune, Maharashtra', accent: '#eab308',
    points: [
      'Developed frontend & backend of live PG/Co-living website (roomac.in)',
      'Implemented complete CRUD with MySQL database design and optimised queries',
      'Built responsive UI/UX and integrated full data persistence in a 2-member team',
    ],
  },
  {
    role: 'MERN Developer Intern', company: 'Wide Softech Pvt. Ltd.',
    period: 'May 2025 – Oct 2025', location: 'Nagpur', accent: '#facc15',
    points: [
      'Built full-stack web apps using the MERN stack in a team environment',
      'Developed RESTful APIs and implemented CRUD operations',
      'Created responsive React components integrated with backend services',
    ],
  },
];

// ─── COLOR TOKENS ─────────────────────────────────────────────────────────────

const C = {
  bg: '#070d1a', bg2: '#0d1526', bg3: '#111d33',
  card: '#0f1929', border: 'rgba(234,179,8,0.12)', borderHov: 'rgba(234,179,8,0.4)',
  yellow: '#eab308', yellowLight: '#facc15', yellowDim: 'rgba(234,179,8,0.13)',
  white: '#f0f6ff', gray: '#94a3b8', grayDim: '#475569',
};

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => { const id = setInterval(() => setBlink(v => !v), 500); return () => clearInterval(id); }, []);
  useEffect(() => {
    const cur = words[wi];
    let t: ReturnType<typeof setTimeout>;
    if (!del) {
      if (text.length < cur.length) t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 72);
      else t = setTimeout(() => setDel(true), 2200);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(cur.slice(0, text.length - 1)), 35);
      else { setDel(false); setWi(i => (i + 1) % words.length); }
    }
    return () => clearTimeout(t);
  }, [text, del, wi, words]);
  return { text, blink };
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const Home: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [showTop, setShowTop]     = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { text: role, blink }     = useTypewriter(ROLES);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // hover helpers
  const hp = (e: React.MouseEvent<HTMLElement>, on: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = on ? '#ca8a04' : C.yellow;
    el.style.transform  = on ? 'translateY(-2px)' : 'none';
    el.style.boxShadow  = on ? '0 8px 24px rgba(234,179,8,0.4)' : 'none';
  };
  const hg = (e: React.MouseEvent<HTMLElement>, on: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = on ? 'rgba(234,179,8,0.5)' : 'rgba(255,255,255,0.1)';
    el.style.color       = on ? C.yellowLight : C.gray;
    el.style.transform   = on ? 'translateY(-2px)' : 'none';
  };
  const hc = (e: React.MouseEvent<HTMLElement>, on: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = on ? C.borderHov : C.border;
    el.style.transform   = on ? 'translateY(-4px)' : 'none';
    el.style.boxShadow   = on ? '0 20px 48px rgba(0,0,0,0.5)' : 'none';
  };
  const ht = (e: React.MouseEvent<HTMLElement>, on: boolean) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background  = on ? 'rgba(234,179,8,0.28)' : C.yellowDim;
    el.style.borderColor = on ? 'rgba(234,179,8,0.55)' : 'rgba(234,179,8,0.2)';
    el.style.color       = on ? '#fff' : C.yellowLight;
  };

  const navLinks = ['Work', 'About', 'Experience', 'Contact'];

  return (
    <div style={{ fontFamily:"'DM Sans',system-ui,sans-serif", background:C.bg, color:C.white, minHeight:'100vh', overflowX:'hidden' }}>

      {/* ── GLOBAL CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { font-family:'DM Sans',system-ui,sans-serif !important; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:#eab308; border-radius:4px; }
        ::-webkit-scrollbar-track { background:#070d1a; }
        a { text-decoration:none; color:inherit; }
        input:focus, textarea:focus { border-color:rgba(234,179,8,0.5) !important; box-shadow:0 0 0 3px rgba(234,179,8,0.08) !important; outline:none; }

        /* hover states via CSS */
        .proj-card:hover { border-color:rgba(234,179,8,0.4) !important; transform:translateY(-4px); box-shadow:0 20px 48px rgba(0,0,0,0.5); }
        .proj-card:hover .proj-title { color:#facc15 !important; }
        .proj-card:hover .proj-num   { color:rgba(234,179,8,0.4) !important; }
        .soft-card:hover { border-color:rgba(234,179,8,0.35) !important; transform:translateY(-3px); box-shadow:0 12px 32px rgba(0,0,0,0.4); }
        .soft-card:hover .soft-title { color:#facc15 !important; }
        .edu-card:hover  { border-color:rgba(234,179,8,0.35) !important; }
        .skill-box:hover { border-color:rgba(234,179,8,0.35) !important; }
        .stat-cell:hover { background:#131f38 !important; }
        .nav-link:hover  { color:#facc15 !important; }

        /* animations */
        @keyframes fadeUp   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:none} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes pulseDot { 0%,100%{opacity:1} 50%{opacity:0.35} }
        @keyframes bounceUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes popIn    { from{opacity:0;transform:scale(0.7) translateY(20px)} to{opacity:1;transform:scale(1) translateY(0)} }
        .fade-up   { animation:fadeUp  0.7s ease forwards; }
        .fade-in   { animation:fadeIn  0.9s ease forwards; }
        .pulse-dot { animation:pulseDot 1.8s ease-in-out infinite; }
        .bounce-up { animation:bounceUp 2s ease-in-out infinite; }
        .pop-in    { animation:popIn 0.35s cubic-bezier(.34,1.56,.64,1) forwards; }

        /* floating buttons */
        .fab {
          position:fixed; z-index:200; width:52px; height:52px; border-radius:50%;
          border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;
          font-size:22px; box-shadow:0 4px 20px rgba(0,0,0,0.4); transition:all 0.3s;
        }
        .fab:hover { transform:scale(1.12) translateY(-2px); }
        .fab-wa   { background:#25d366; bottom:24px; right:24px; }
        .fab-top  { background:#eab308; bottom:84px; right:24px; font-size:18px; }
        .fab-wa:hover  { box-shadow:0 8px 28px rgba(37,211,102,0.45); }
        .fab-top:hover { box-shadow:0 8px 28px rgba(234,179,8,0.45); }

        /* mobile hamburger */
        .hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
        .hamburger span { display:block; width:24px; height:2px; background:#94a3b8; border-radius:2px; transition:all 0.3s; }
        .hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(5px,5px); }
        .hamburger.open span:nth-child(2) { opacity:0; }
        .hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(5px,-5px); }

        /* mobile menu drawer */
        .mobile-menu {
          position:fixed; top:0; left:0; right:0; bottom:0; z-index:90;
          background:rgba(7,13,26,0.97); backdrop-filter:blur(20px);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:36px; animation:fadeIn 0.2s ease;
        }
        .mobile-menu a {
          font-family:'Space Grotesk',sans-serif; font-size:28px; font-weight:700;
          color:#94a3b8; letter-spacing:-0.02em; transition:color 0.2s;
        }
        .mobile-menu a:hover { color:#facc15; }

        /* ── RESPONSIVE ── */

        /* Tablet */
        @media (max-width:1024px) {
          .hero-grid { grid-template-columns:1fr 300px !important; gap:40px !important; }
          .proj-grid { grid-template-columns:1fr 1fr !important; }
        }

        /* Mobile */
        @media (max-width:768px) {
          .desktop-nav { display:none !important; }
          .hamburger   { display:flex !important; }

          .hero-grid    { grid-template-columns:1fr !important; gap:32px !important; }
          .info-card    { display:block !important; }
          .about-grid   { grid-template-columns:1fr !important; gap:40px !important; }
          .exp-grid     { grid-template-columns:1fr !important; gap:12px !important; }
          .proj-grid    { grid-template-columns:1fr !important; }
          .soft-grid    { grid-template-columns:1fr 1fr !important; }
          .form-row     { grid-template-columns:1fr !important; }
          .footer-inner { flex-direction:column !important; align-items:flex-start !important; gap:16px !important; }
          .stats-row    { border-radius:0 0 12px 12px !important; }

          section    { padding:64px 0 !important; }
          .section-inner { padding:0 20px !important; }
          nav        { padding:14px 20px !important; }

          .h1-name   { font-size:clamp(48px,14vw,72px) !important; }
          .section-h2 { font-size:clamp(28px,7vw,42px) !important; margin-bottom:36px !important; }

          .fab       { width:48px !important; height:48px !important; font-size:20px !important; }
          .fab-wa    { bottom:20px; right:16px; }
          .fab-top   { bottom:76px; right:16px; font-size:16px !important; }
        }

        @media (max-width:480px) {
          .hero-btns  { flex-direction:column !important; }
          .hero-btns a { text-align:center !important; }
          .soft-grid  { grid-template-columns:1fr !important; }
          .proj-grid  { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '13px 32px' : '20px 32px',
          background: '#FFFFFF', // White background
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.4s',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontWeight: 800,
            fontSize: 20,
            letterSpacing: '-0.03em',
            fontFamily: "'Space Grotesk',sans-serif",
          }}
        >
          <span style={{ color: '#FBBF24' }}>VAISHNAVI</span>
          <span style={{ color: '#000000' }}> KALE</span>
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', gap: 32, alignItems: 'center' }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
              style={{
                color: '#1F2937', // dark grey for visibility on white bg
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = C.yellowLight)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = '#1F2937')
              }
            >
              {l}
            </a>
          ))}

          {/* Hire Me Button */}
          <a
            href="mailto:26vaishnavikale@gmail.com"
            style={{
              background: C.yellow,
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              padding: '10px 22px',
              border: 'none',
              borderRadius: 7,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.2s',
              fontFamily: "'DM Sans',sans-serif",
            }}
            onMouseEnter={(e) => hp(e, true)}
            onMouseLeave={(e) => hp(e, false)}
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div className="mobile-menu" onClick={()=>setMenuOpen(false)}>
          {navLinks.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{l}</a>
          ))}
          <a href="mailto:26vaishnavikale@gmail.com"
            style={{ background:C.yellow, color:'#fff', fontSize:16, fontWeight:600, padding:'14px 36px', borderRadius:10, fontFamily:"'DM Sans',sans-serif", marginTop:8 }}>
            Hire Me ✉
          </a>
        </div>
      )}

      {/* ── FLOATING BUTTONS ── */}
      {/* WhatsApp */}
      <a href="https://wa.me/918010776249?text=Hi%20Vaishnavi!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
        target="_blank" className="fab fab-wa pop-in" title="Chat on WhatsApp" aria-label="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Scroll to Top */}
      {showTop && (
        <button onClick={scrollTop} className="fab fab-top pop-in" title="Back to top" aria-label="Scroll to top">
          ↑
        </button>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', background:C.bg, paddingTop:80, position:'relative', overflow:'hidden' }}>
        {/* BG effects */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 75% 35%, rgba(234,179,8,0.07) 0%, transparent 55%), radial-gradient(circle at 15% 75%, rgba(250,204,21,0.04) 0%, transparent 50%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(234,179,8,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(234,179,8,0.025) 1px,transparent 1px)', backgroundSize:'72px 72px', pointerEvents:'none' }} />

        <div className="section-inner" style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px', width:'100%' }}>
          <div className="hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 340px', gap:64, alignItems:'center' }}>

            {/* LEFT */}
            <div className="fade-up">
              {/* Badge */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:C.yellowDim, border:'1px solid rgba(234,179,8,0.3)', padding:'7px 16px', borderRadius:100, marginBottom:28 }}>
                <div className="pulse-dot" style={{ width:7, height:7, background:'#22d3ee', borderRadius:'50%' }} />
                <span style={{ color:C.yellowLight, fontSize:12, fontWeight:500, letterSpacing:'0.05em', fontFamily:"'Space Grotesk',sans-serif" }}>Available for Hire</span>
              </div>

              <span className="h1-name" style={{ fontSize:'clamp(52px,8vw,96px)', fontWeight:800, lineHeight:0.9, letterSpacing:'-0.04em', color:C.white, display:'block', fontFamily:"'Space Grotesk',sans-serif" }}>Vaishnavi</span>
              <span className="h1-name" style={{ fontSize:'clamp(52px,8vw,96px)', fontWeight:800, lineHeight:0.9, letterSpacing:'-0.04em', color:C.yellow, display:'block', marginBottom:32, fontFamily:"'Space Grotesk',sans-serif" }}>Kale.</span>

              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:20 }}>
                <div style={{ width:24, height:2, background:C.yellow, borderRadius:2, flexShrink:0 }} />
                <span style={{ color:C.gray, fontSize:16, fontWeight:400, fontFamily:"'DM Sans',sans-serif" }}>
                  {role}<span style={{ color:C.yellow, opacity:blink?1:0 }}>|</span>
                </span>
              </div>

              <p style={{ color:C.gray, fontSize:15, lineHeight:1.85, maxWidth:490, marginBottom:36, fontWeight:400 }}>
                Enthusiastic MERN Stack Developer passionate about building fast, responsive, and beautiful web experiences.
                Currently building live products at{' '}
                <span style={{ color:C.yellowLight, fontWeight:600 }}>Hously Finntech Realty</span>.
              </p>

              <div className="hero-btns" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <a href="#work" style={{ background:C.yellow, color:'#fff', fontWeight:600, fontSize:14, padding:'14px 28px', borderRadius:8, cursor:'pointer', textDecoration:'none', display:'inline-block', transition:'all 0.2s', fontFamily:"'DM Sans',sans-serif", textAlign:'center' }}
                  onMouseEnter={e=>hp(e,true)} onMouseLeave={e=>hp(e,false)}>
                  View Projects →
                </a>
                <a href="https://roomac.in" target="_blank"
                  style={{ background:'transparent', color:C.gray, fontWeight:600, fontSize:14, padding:'13px 28px', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, cursor:'pointer', textDecoration:'none', display:'inline-block', transition:'all 0.2s', fontFamily:"'DM Sans',sans-serif", textAlign:'center' }}
                  onMouseEnter={e=>hg(e,true)} onMouseLeave={e=>hg(e,false)}>
                  Live Site ↗
                </a>
                <a href="https://www.linkedin.com/in/vaishnavi-kale-997a53321" target="_blank"
                  style={{ background:'transparent', color:C.gray, fontWeight:600, fontSize:14, padding:'13px 28px', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, cursor:'pointer', textDecoration:'none', display:'inline-block', transition:'all 0.2s', fontFamily:"'DM Sans',sans-serif", textAlign:'center' }}
                  onMouseEnter={e=>hg(e,true)} onMouseLeave={e=>hg(e,false)}>
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* RIGHT — Info Card with Profile Photo */}
            <div className="info-card fade-in" style={{ animationDelay:'0.3s' }}>
              <div style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:16, padding:24, position:'relative', overflow:'hidden' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:'linear-gradient(90deg,transparent,#eab308,transparent)', borderRadius:'16px 16px 0 0' }} />
                <div style={{ position:'absolute', top:-40, right:-40, width:120, height:120, background:'radial-gradient(circle,rgba(234,179,8,0.1),transparent)', borderRadius:'50%', pointerEvents:'none' }} />

                {/* Profile Photo Section */}
               <div
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
    paddingBottom: 16,
    borderBottom: `1px solid ${C.border}`,
  }}
>
  {/* Profile Photo */}
  <div
    style={{
      width: 52,
      height: 52,
      borderRadius: 12,
      overflow: 'hidden',
      flexShrink: 0,
      border: '1px solid rgba(234,179,8,0.3)',
    }}
  >
    <img
      src={hero1}
      alt="Vaishnavi Kale"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />
  </div>

  <div>
    <p
      style={{
        color: C.white,
        fontWeight: 700,
        fontSize: 15,
        fontFamily: "'Space Grotesk',sans-serif",
        letterSpacing: '-0.02em',
      }}
    >
      Vaishnavi Kale
    </p>
    <p
      style={{
        color: C.yellow,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        marginTop: 2,
        fontFamily: "'Space Grotesk',sans-serif",
      }}
    >
      MERN Developer
    </p>
  </div>
</div>

                {[['📍','Location','Pune, Maharashtra'],['📞','Phone','8010776249'],['🎓','Degree','MCA — 7.39 CGPA'],['🏛️','College','BIT Ballarpur'],['📧','Email','26vaishnavikale@gmail.com']].map(([ic,lbl,val])=>(
                  <div key={lbl} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:12 }}>
                    <span style={{ fontSize:14, marginTop:1, flexShrink:0 }}>{ic}</span>
                    <div>
                      <p style={{ color:C.grayDim, fontSize:10, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:1, fontFamily:"'Space Grotesk',sans-serif" }}>{lbl}</p>
                      <p style={{ color:'#cbd5e1', fontSize:12, fontWeight:500 }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="stats-row" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:`1px solid ${C.border}`, borderTop:'none', borderRadius:'0 0 16px 16px', overflow:'hidden' }}>
                {[['3+','Projects'],['2','Internships'],['10+','Tech Stack']].map(([n,l],i)=>(
                  <div key={l} className="stat-cell" style={{ textAlign:'center', padding:'16px 8px', borderRight: i<2 ? `1px solid ${C.border}` : 'none', background:C.card, transition:'background 0.2s', cursor:'default' }}>
                    <p style={{ color:C.yellow, fontWeight:800, fontSize:24, lineHeight:1, marginBottom:4, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:'-0.03em' }}>{n}</p>
                    <p style={{ color:C.grayDim, fontSize:10, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="work" style={{ padding:'100px 0', borderTop:`1px solid ${C.border}`, background:C.bg }}>
        <div className="section-inner" style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:48, flexWrap:'wrap', gap:16 }}>
            <div>
              <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Selected Work</span>
              <h2 className="section-h2" style={{ fontSize:'clamp(32px,4.5vw,54px)', fontWeight:800, letterSpacing:'-0.03em', color:C.white, lineHeight:1.05, marginBottom:0, fontFamily:"'Space Grotesk',sans-serif" }}>
                My <span style={{ color:C.yellow }}>Projects</span>
              </h2>
            </div>
            <a href="https://roomac.in" target="_blank"
              style={{ background:'transparent', color:C.gray, fontWeight:600, fontSize:13, padding:'12px 24px', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, cursor:'pointer', textDecoration:'none', display:'inline-block', transition:'all 0.2s', fontFamily:"'DM Sans',sans-serif" }}
              onMouseEnter={e=>hg(e,true)} onMouseLeave={e=>hg(e,false)}>
              Live Project ↗
            </a>
          </div>

          <div className="proj-grid" style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
            {PROJECTS.map(p=>(
              <div key={p.id} className="proj-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:14, padding:26, position:'relative', overflow:'hidden', transition:'all 0.3s', cursor:'pointer' }}
                onMouseEnter={e=>hc(e,true)} onMouseLeave={e=>hc(e,false)}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${C.yellow},transparent)`, opacity:0.5, borderRadius:'14px 14px 0 0' }} />
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                  <span className="proj-num" style={{ color:C.yellowDim, fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:38, lineHeight:1, transition:'color 0.3s' }}>{p.id}</span>
                  <span style={{ color:C.grayDim, fontSize:11, fontWeight:600, fontFamily:"'Space Grotesk',sans-serif" }}>{p.year}</span>
                </div>
                <p style={{ color:C.yellow, fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:4, fontFamily:"'Space Grotesk',sans-serif" }}>{p.sub}</p>
                <h3 className="proj-title" style={{ color:C.white, fontWeight:700, fontSize:18, marginBottom:10, letterSpacing:'-0.02em', fontFamily:"'Space Grotesk',sans-serif", transition:'color 0.3s' }}>{p.title}</h3>
                {p.live && <a href={p.live} target="_blank" style={{ color:C.yellow, fontSize:12, fontWeight:500, display:'block', marginBottom:10, textDecoration:'none' }}>🔗 {p.live}</a>}
                <p style={{ color:C.gray, fontSize:13, lineHeight:1.75, marginBottom:18, fontWeight:400 }}>{p.desc}</p>
                <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:14 }}>
                  {p.tags.map(t=>(
                    <span key={t} style={{ background:C.yellowDim, border:'1px solid rgba(234,179,8,0.2)', color:C.yellowLight, fontSize:11, fontWeight:500, padding:'4px 11px', display:'inline-block', marginRight:5, marginBottom:5, borderRadius:5, transition:'all 0.2s', fontFamily:"'Space Grotesk',sans-serif", cursor:'default' }}
                      onMouseEnter={e=>ht(e,true)} onMouseLeave={e=>ht(e,false)}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding:'100px 0', borderTop:`1px solid ${C.border}`, background:C.bg2 }}>
        <div className="section-inner" style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
          <div className="about-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'start' }}>

            <div>
              <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>About Me</span>
              <h2 className="section-h2" style={{ fontSize:'clamp(30px,4.5vw,52px)', fontWeight:800, letterSpacing:'-0.03em', color:C.white, lineHeight:1.05, marginBottom:28, fontFamily:"'Space Grotesk',sans-serif" }}>
                Passionate <span style={{ color:C.yellow }}>Developer.</span>
              </h2>
              <p style={{ color:C.gray, fontSize:15, lineHeight:1.85, marginBottom:14, fontWeight:400 }}>
                I'm an enthusiastic and detail-oriented MERN Stack Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. I love building responsive, user-friendly web interfaces.
              </p>
              <p style={{ color:C.gray, fontSize:15, lineHeight:1.85, marginBottom:36, fontWeight:400 }}>
                Quick learner, team player, committed to writing clean, efficient code. Currently pursuing MCA from{' '}
                <span style={{ color:C.white, fontWeight:600 }}>Ballarpur Institute of Technology</span>.
              </p>

              <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:14, fontFamily:"'Space Grotesk',sans-serif" }}>Education</span>
              {[
                { deg:'MCA', inst:'Ballarpur Institute of Technology', loc:'Ballarpur, MH · 2023–2025', cgpa:'7.39' },
                { deg:'BCA', inst:'IMS Mahavidhyalaya, Amravati Uni', loc:'Warud, MH · 2018–2021', cgpa:'7.48' },
              ].map(e=>(
                <div key={e.deg} className="edu-card" style={{ display:'flex', alignItems:'center', gap:14, background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:16, marginBottom:10, transition:'border-color 0.2s', cursor:'default' }}>
                  <div style={{ background:C.yellowDim, border:'1px solid rgba(234,179,8,0.3)', color:C.yellow, fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:13, padding:'10px 13px', borderRadius:8, flexShrink:0 }}>{e.deg}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <p style={{ color:C.white, fontWeight:700, fontSize:13, marginBottom:3, fontFamily:"'Space Grotesk',sans-serif", overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{e.inst}</p>
                    <p style={{ color:C.grayDim, fontSize:11, fontWeight:500 }}>{e.loc}</p>
                  </div>
                  <p style={{ color:C.yellow, fontWeight:800, fontSize:15, flexShrink:0, fontFamily:"'Space Grotesk',sans-serif" }}>{e.cgpa}</p>
                </div>
              ))}

              <div style={{ marginTop:20, background:C.yellowDim, border:'1px solid rgba(234,179,8,0.2)', borderRadius:12, padding:20 }}>
                <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:14, fontFamily:"'Space Grotesk',sans-serif" }}>Certifications</span>
                {['MERN Stack Development — Nagpur','Full-Stack Development — Pune'].map(c=>(
                  <div key={c} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                    <div style={{ width:6, height:6, background:C.yellow, borderRadius:'50%', flexShrink:0 }} />
                    <span style={{ color:'#cbd5e1', fontSize:14, fontWeight:400 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:14, fontFamily:"'Space Grotesk',sans-serif" }}>Technical Skills</span>
              {SKILLS.map(({ cat, items })=>(
                <div key={cat} className="skill-box" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:18, marginBottom:10, transition:'border-color 0.2s' }}>
                  <p style={{ color:C.white, fontWeight:700, fontSize:12, letterSpacing:'0.06em', textTransform:'uppercase', fontFamily:"'Space Grotesk',sans-serif", marginBottom:12 }}>
                    <span style={{ color:C.yellow, marginRight:8 }}>▸</span>{cat}
                  </p>
                  <div>
                    {items.map(s=>(
                      <span key={s} style={{ background:C.yellowDim, border:'1px solid rgba(234,179,8,0.2)', color:C.yellowLight, fontSize:12, fontWeight:500, padding:'6px 12px', display:'inline-block', marginRight:6, marginBottom:6, cursor:'default', borderRadius:6, transition:'all 0.2s', fontFamily:"'DM Sans',sans-serif" }}
                        onMouseEnter={e=>ht(e,true)} onMouseLeave={e=>ht(e,false)}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ padding:'100px 0', borderTop:`1px solid ${C.border}`, background:C.bg }}>
        <div className="section-inner" style={{ maxWidth:1100, margin:'0 auto', padding:'0 28px' }}>
          <span style={{ color:C.yellow, fontSize:12, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', display:'block', marginBottom:8, fontFamily:"'Space Grotesk',sans-serif" }}>Work Experience</span>
          <h2 className="section-h2" style={{ fontSize:'clamp(30px,4.5vw,52px)', fontWeight:800, letterSpacing:'-0.03em', color:C.white, lineHeight:1.05, marginBottom:48, fontFamily:"'Space Grotesk',sans-serif" }}>
            Career <span style={{ color:C.yellow }}>Journey.</span>
          </h2>

          <div className="exp-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
            {EXPERIENCE.map((exp,i)=>(
              <div key={i} style={{ background:C.card, border:`1px solid ${exp.accent}28`, borderRadius:14, padding:26, position:'relative', overflow:'hidden', transition:'all 0.3s', cursor:'default' }}
                onMouseEnter={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${exp.accent}50`; el.style.transform='translateY(-3px)'; el.style.boxShadow='0 16px 40px rgba(0,0,0,0.4)'; }}
                onMouseLeave={e=>{ const el=e.currentTarget as HTMLElement; el.style.borderColor=`${exp.accent}28`; el.style.transform='none'; el.style.boxShadow='none'; }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${exp.accent},transparent)`, borderRadius:'14px 14px 0 0' }} />
                <span style={{ position:'absolute', top:14, right:16, fontSize:50, fontWeight:800, fontFamily:"'Space Grotesk',sans-serif", color:`${exp.accent}10`, lineHeight:1, userSelect:'none' }}>0{i+1}</span>
                <h3 style={{ color:C.white, fontWeight:700, fontSize:16, marginBottom:5, lineHeight:1.3, fontFamily:"'Space Grotesk',sans-serif", letterSpacing:'-0.02em' }}>{exp.role}</h3>
                <p style={{ color:exp.accent, fontSize:12, fontWeight:600, letterSpacing:'0.05em', marginBottom:3, fontFamily:"'Space Grotesk',sans-serif" }}>{exp.company}</p>
                <p style={{ color:C.grayDim, fontSize:11, fontWeight:500, marginBottom:18 }}>{exp.period} · {exp.location}</p>
                <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:14 }}>
                  {exp.points.map((pt,j)=>(
                    <div key={j} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:10 }}>
                      <div style={{ width:5, height:5, background:exp.accent, borderRadius:'50%', flexShrink:0, marginTop:7 }} />
                      <p style={{ color:C.gray, fontSize:13, lineHeight:1.75, fontWeight:400 }}>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="soft-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
            {[['⚡','Quick Learner','Adapts fast to new tech'],['🧩','Problem Solver','Efficient & analytical'],['🤝','Team Player','Collaborative & clear'],['🎯','Self-Driven','Motivated & focused']].map(([ic,t,d])=>(
              <div key={t} className="soft-card" style={{ background:C.card, border:`1px solid ${C.border}`, borderRadius:12, padding:20, textAlign:'center', transition:'all 0.3s', cursor:'default' }}>
                <span style={{ fontSize:26, display:'block', marginBottom:10 }}>{ic}</span>
                <p className="soft-title" style={{ color:C.white, fontWeight:700, fontSize:13, marginBottom:6, fontFamily:"'Space Grotesk',sans-serif", transition:'color 0.3s' }}>{t}</p>
                <p style={{ color:C.grayDim, fontSize:12, lineHeight:1.65, fontWeight:400 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{ padding: '100px 0', borderTop: `1px solid ${C.border}`, background: C.bg2 }}
      >
        <div className="section-inner" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px' }}>
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                color: C.yellow,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: 8,
                fontFamily: "'Space Grotesk',sans-serif",
              }}
            >
              Get In Touch
            </span>
            <h2
              className="section-h2"
              style={{
                fontSize: 'clamp(30px,4.5vw,52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: C.white,
                lineHeight: 1.05,
                marginBottom: 12,
                fontFamily: "'Space Grotesk',sans-serif",
              }}
            >
              Let's <span style={{ color: C.yellow }}>Build</span> Together.
            </h2>
            <p
              style={{
                color: C.gray,
                fontSize: 15,
                lineHeight: 1.85,
                fontWeight: 400,
                marginBottom: 0,
              }}
            >
              Open to internships, full-time roles, and freelance projects. Let's create something amazing!
            </p>

            {/* Contact Form */}
            <div
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 16,
                padding: 28,
                marginTop: 40,
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg,transparent,#eab308,transparent)',
                  borderRadius: '16px 16px 0 0',
                }}
              />
              <div
                className="form-row"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}
              >
                <input
                  style={{
                    width: '100%',
                    background: C.bg2,
                    border: '1px solid rgba(234,179,8,0.15)',
                    color: C.white,
                    fontSize: 14,
                    padding: '13px 16px',
                    fontFamily: "'DM Sans',sans-serif",
                    transition: 'border-color 0.2s',
                    borderRadius: 8,
                    boxSizing: 'border-box',
                  }}
                  placeholder="Your Name"
                />
                <input
                  style={{
                    width: '100%',
                    background: C.bg2,
                    border: '1px solid rgba(234,179,8,0.15)',
                    color: C.white,
                    fontSize: 14,
                    padding: '13px 16px',
                    fontFamily: "'DM Sans',sans-serif",
                    transition: 'border-color 0.2s',
                    borderRadius: 8,
                    boxSizing: 'border-box',
                  }}
                  placeholder="Your Email"
                />
              </div>
              <input
                style={{
                  width: '100%',
                  background: C.bg2,
                  border: '1px solid rgba(234,179,8,0.15)',
                  color: C.white,
                  fontSize: 14,
                  padding: '13px 16px',
                  fontFamily: "'DM Sans',sans-serif",
                  transition: 'border-color 0.2s',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  marginBottom: 12,
                }}
                placeholder="Subject"
              />
              <textarea
                style={{
                  width: '100%',
                  background: C.bg2,
                  border: '1px solid rgba(234,179,8,0.15)',
                  color: C.white,
                  fontSize: 14,
                  padding: '13px 16px',
                  fontFamily: "'DM Sans',sans-serif",
                  transition: 'border-color 0.2s',
                  borderRadius: 8,
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  marginBottom: 18,
                }}
                placeholder="Your message..."
                rows={4}
              />
              <button
                style={{
                  background: C.yellow,
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '15px',
                  border: 'none',
                  borderRadius: 8,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  fontFamily: "'DM Sans',sans-serif",
                }}
                onMouseEnter={(e) => hp(e, true)}
                onMouseLeave={(e) => hp(e, false)}
              >
                Send Message →
              </button>
            </div>

            {/* Contact Links with React Icons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 24,
                marginTop: 28,
                flexWrap: 'wrap',
              }}
            >
              {[
                { icon: <FaEnvelope />, label: '26vaishnavikale@gmail.com', href: 'mailto:26vaishnavikale@gmail.com' },
                { icon: <FaPhone />, label: '8010776249', href: 'tel:8010776249' },
                { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaishnavi-kale-997a53321' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    color: C.grayDim,
                    fontSize: 13,
                    transition: 'color 0.2s',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = C.yellowLight)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = C.grayDim)}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: '#FFFFFF', // White background
          borderTop: `1px solid ${C.border}`,
          padding: '28px 32px',
        }}
      >
        <div
          className="footer-inner"
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Logo / Name */}
          <span
            style={{
              color: '#000000', // Black text on white background
              fontWeight: 800,
              fontSize: 22,      // Increased from 18px
              fontFamily: "'Space Grotesk',sans-serif",
              letterSpacing: '-0.03em',
            }}
          >
            VAISHNAVI<span style={{ color: '#FBBF24' }}> KALE</span>
          </span>

          {/* Copyright */}
          <p style={{ color: '#4B5563', fontSize: 14, fontWeight: 500 }}> {/* Increased from 12px */}
            Vaishnavi Kale © 2026 · MERN Developer · Pune
          </p>

          {/* Footer Links with React Icons */}
          <div className="footer-links" style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaishnavi-kale-997a53321', icon: <FaLinkedin size={20} /> },
              { label: 'GitHub', href: 'https://github.com/vaishnavikale', icon: <FaGithub size={20} /> },
              { label: 'Email', href: 'mailto:26vaishnavikale@gmail.com', icon: <FaEnvelope size={20} /> },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                style={{
                  color: '#4B5563',
                  fontSize: 16,   // Increased from 12px
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,        // Slightly more gap for bigger icons
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#FBBF24')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#4B5563')}
              >
                {icon}
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;