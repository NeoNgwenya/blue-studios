import {
  Aperture,
  Baby,
  Building2,
  CalendarHeart,
  Camera,
  Check,
  GraduationCap,
  Heart,
  Mail,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { InView } from "./in-view";

const services = [
  { icon: Heart, number: "01", title: "Weddings", copy: "The glances, the energy, the quiet in-between moments — held forever." },
  { icon: CalendarHeart, number: "02", title: "Celebrations", copy: "Birthdays, anniversaries and the gatherings that deserve more than phone photos." },
  { icon: Users, number: "03", title: "Portraits", copy: "Confident, natural portraits for individuals, couples and families." },
  { icon: Baby, number: "04", title: "Maternity & newborn", copy: "Gentle, beautifully paced sessions for the start of a new chapter." },
  { icon: GraduationCap, number: "05", title: "Graduations", copy: "Your hard work, your people and your proudest day — all in frame." },
  { icon: Building2, number: "06", title: "Corporate", copy: "Polished coverage for conferences, launches and brand occasions." },
];

const process = [
  ["01", "Tell us the story", "Share the date, the place and what matters most to you."],
  ["02", "Shape the coverage", "We plan the pace and must-have moments around your event."],
  ["03", "Live the moment", "Relax into the day while we capture it with care and discretion."],
  ["04", "Relive it", "Receive a refined gallery of photographs made to last."],
];

export default function Home() {
  return (
    <main>
      <InView />
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Blue Studios home">
          <span className="brandMark"><Aperture size={19} /></span>
          <span>Blue<span>Studios</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
        </nav>
        <a className="headerCta" href="#contact">Plan your shoot</a>
      </header>

      <section className="hero" id="top">
        <img className="heroImage" src="/images/blue-studios-hero.png" alt="Camera and lenses lit in Blue Studios navy and gold" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow"><span /> Event photography, thoughtfully framed</p>
          <h1>Life moves fast.<br /><em>We make it last.</em></h1>
          <p className="heroIntro">Honest, expressive photography for celebrations, milestones and the people you never want to forget.</p>
          <div className="heroActions">
            <a className="button buttonGold" href="#contact">Book your date</a>
            <a className="textLink" href="#services">Explore our work <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="heroSideNote" aria-hidden="true">BLUE STUDIOS / EVENT PHOTOGRAPHY</div>
        <a className="scrollCue" href="#services" aria-label="Scroll to services"><span>Scroll to discover</span><i /></a>
      </section>

      <section className="introBand" aria-label="Blue Studios promise" data-reveal="up">
        <p>More than a photo.</p>
        <p className="scriptLine">A feeling you can return to.</p>
        <div className="miniPromise"><Sparkles size={20} /><span>Creative direction<br />with a human touch.</span></div>
      </section>

      <section className="section services" id="services">
        <div className="sectionHead" data-reveal="up">
          <div>
            <p className="eyebrow dark"><span /> What we photograph</p>
            <h2>Stories worth<br /><em>keeping close.</em></h2>
          </div>
          <p>From intimate beginnings to rooms full of celebration, every commission is approached with calm direction, close attention and a creative eye.</p>
        </div>
        <div className="serviceGrid">
          {services.map(({ icon: Icon, number, title, copy }) => (
            <article className="serviceCard" key={title} data-reveal="up">
              <div className="serviceTop"><Icon size={25} strokeWidth={1.6} /><span>{number}</span></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="founder" id="about">
        <div className="founderPhoto" data-reveal="left">
          <img src="/images/ashley-machisi.jpeg" alt="Ashley Machisi, founder of Blue Studios" />
          <span className="photoTag"><Camera size={17} /> Founder & photographer</span>
        </div>
        <div className="founderCopy" data-reveal="right">
          <p className="eyebrow"><span /> Behind the lens</p>
          <h2>Meet Ashley.</h2>
          <p className="founderLead">“The best photographs don&apos;t just show what happened. They bring back how it felt.”</p>
          <p>Blue Studios was founded by Ashley Machisi with one clear purpose: to preserve life&apos;s special moments through creative, high-quality photography. His style blends composed elegance with genuine, unguarded emotion.</p>
          <div className="values">
            <span><Check size={16} /> Calm, clear direction</span>
            <span><Check size={16} /> Thoughtful storytelling</span>
            <span><Check size={16} /> Reliable, professional care</span>
            <span><Check size={16} /> Timeless final images</span>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolioTitle" data-reveal="left">
          <p className="eyebrow dark"><span /> The portfolio</p>
          <h2>Real stories,<br /><em>coming into focus.</em></h2>
        </div>
        <div className="portfolioFrame" data-reveal="right">
          <div className="focusCorners" />
          <div className="eventLabel"><span /> Upcoming coverage</div>
          <div className="eventDate"><strong>03</strong><span>JAN<br />2027</span></div>
          <p>Surviving Loss</p>
          <span>Blue Studios will be behind the lens for this special event on 3 January 2027.</span>
          <a href="https://survivingloss.co.zw" target="_blank" rel="noreferrer" className="textLink">Visit the event site <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="process section">
        <div className="sectionHead compact" data-reveal="up"><div><p className="eyebrow dark"><span /> The experience</p><h2>Simple from<br /><em>hello to gallery.</em></h2></div></div>
        <div className="processGrid">
          {process.map(([number, title, copy]) => <article key={number} data-reveal="up"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactAperture" aria-hidden="true"><Aperture /></div>
        <p className="eyebrow" data-reveal="up"><span /> Your story starts here</p>
        <h2 data-reveal="up">Let&apos;s make something<br /><em>worth remembering.</em></h2>
        <p data-reveal="up">Tell us what you&apos;re celebrating and when. We&apos;ll take it from there.</p>
        <div className="contactActions" data-reveal="up">
          <a className="button buttonGold" href="mailto:bluestudiosevent@gmail.com"><Mail size={18} /> Email the studio</a>
          <a className="button buttonOutline" href="tel:+447462299709" aria-label="Call the studio on +44 7462 299709"><Phone size={18} /> Call the studio</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top"><span className="brandMark"><Aperture size={19} /></span><span>Blue<span>Studios</span></span></a>
        <p>Capturing life&apos;s special moments.</p>
        <p>© {new Date().getFullYear()} Blue Studios</p>
      </footer>
    </main>
  );
}
