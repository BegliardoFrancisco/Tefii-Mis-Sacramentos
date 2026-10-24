import { useEffect, useRef } from 'react';
import './App.css';
import Crisantemo from './components/Crisantemo';

import tefiiImg from './assets/tefii-recorte.png';
import capuchinosImg from './assets/capuchinos.webp';
import laurelesImg from './assets/laureles.webp';

const WHATSAPP_URL = `https://wa.me/5493512352199?text=${encodeURIComponent(
  'Confirmo mi asistencia',
)}`;

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Iglesia%20de%20los%20Capuchinos%2C%20Obispo%20Oro%20y%20Buenos%20Aires%2C%20C%C3%B3rdoba';

const PHOTO_FLOWERS = [
  {
    id: 'tl-1',
    palette: 'rosa',
    size: 'clamp(30px, 7.5vw, 42px)',
    rotation: -14,
    opacity: '0.78',
  },
  {
    id: 'tl-2',
    palette: 'lavanda',
    size: 'clamp(22px, 5.8vw, 32px)',
    rotation: 18,
    opacity: '0.66',
  },
  {
    id: 'tl-3',
    palette: 'celeste',
    size: 'clamp(18px, 4.8vw, 26px)',
    rotation: -8,
    opacity: '0.6',
  },
  {
    id: 'tl-4',
    palette: 'rosa',
    size: 'clamp(20px, 5.2vw, 28px)',
    rotation: 12,
    opacity: '0.55',
  },
  {
    id: 'tl-5',
    palette: 'lavanda',
    size: 'clamp(15px, 4vw, 20px)',
    rotation: -20,
    opacity: '0.5',
  },
  {
    id: 'tr-1',
    palette: 'rojo',
    size: 'clamp(28px, 7vw, 38px)',
    rotation: 12,
    opacity: '0.72',
  },
  {
    id: 'tr-2',
    palette: 'rosa',
    size: 'clamp(21px, 5.4vw, 30px)',
    rotation: -18,
    opacity: '0.62',
  },
  {
    id: 'tr-3',
    palette: 'lavanda',
    size: 'clamp(17px, 4.5vw, 24px)',
    rotation: 20,
    opacity: '0.58',
  },
  {
    id: 'tr-4',
    palette: 'celeste',
    size: 'clamp(19px, 5vw, 26px)',
    rotation: -10,
    opacity: '0.53',
  },
  {
    id: 'tr-5',
    palette: 'rosa',
    size: 'clamp(14px, 3.8vw, 19px)',
    rotation: 16,
    opacity: '0.48',
  },
];

function CalendarIcon() {
  return (
    <svg
      className="icon-stroke"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
      <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h2M14 13h2M8 16.5h2M14 16.5h2" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="icon-stroke"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 10c0 5.2-8 12-8 12S4 15.2 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      className="icon-stroke"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m9 18.5-5.5 2.5V6.4L9 4l6 2.4L20.5 4v14.7L15 21l-6-2.5Z" />
      <path d="M9 4v14.5M15 6.4V21" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg
      className="icon-stroke"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 3v6a3 3 0 0 0 6 0V3M10 3v18" />
      <path d="M18 21V3c2 .9 3.2 2.8 3.2 5.6 0 2.4-1.2 4.1-3.2 4.6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      className="whatsapp-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function App() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    const elementos = Array.from(card.querySelectorAll('[data-reveal]'));
    const mostrarTodo = () => {
      elementos.forEach((elemento) => elemento.classList.add('is-visible'));
    };

    const prefiereMenosMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefiereMenosMovimiento || !('IntersectionObserver' in window)) {
      mostrarTodo();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 36px 0px' },
    );

    elementos.forEach((elemento) => observer.observe(elemento));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-wrapper">
      <main className="invitation-card" ref={cardRef}>
        <div className="card-decor" aria-hidden="true">
          <img
            src={laurelesImg}
            alt=""
            className="laurel-corner laurel-top-left"
          />
          <img
            src={laurelesImg}
            alt=""
            className="laurel-corner laurel-top-right"
          />
          <img
            src={laurelesImg}
            alt=""
            className="laurel-corner laurel-bottom-left"
          />
          <img
            src={laurelesImg}
            alt=""
            className="laurel-corner laurel-bottom-right"
          />

          <Crisantemo
            className="card-flower flor--top-left"
            paleta="rosa"
            size="clamp(44px, 11vw, 78px)"
            data-reveal
            style={{ '--reveal-delay': '180ms', '--giro': '-12deg' }}
          />
          <Crisantemo
            className="card-flower flor--top-right"
            paleta="lavanda"
            size="clamp(40px, 10vw, 70px)"
            data-reveal
            style={{ '--reveal-delay': '260ms', '--giro': '14deg' }}
          />
          <Crisantemo
            className="card-flower flor--bottom-left"
            paleta="celeste"
            size="clamp(42px, 10.5vw, 72px)"
            data-reveal
            style={{ '--reveal-delay': '100ms', '--giro': '9deg' }}
          />
          <Crisantemo
            className="card-flower flor--bottom-right"
            paleta="rojo"
            size="clamp(46px, 12vw, 82px)"
            data-reveal
            style={{ '--reveal-delay': '160ms', '--giro': '-14deg' }}
          />
        </div>

        <div className="card-content">
          <header
            className="header-section"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="subtitle-tag">Invitación especial</span>
            <h1 className="main-title">Mi Comunión</h1>
            <p className="sub-title">y Confirmación</p>
          </header>

          <div
            className="illustration-stage"
            data-reveal
            style={{ '--reveal-delay': '90ms' }}
          >
            <div className="arch-wrap">
              <div className="arch-frame">
                <img
                  src={capuchinosImg}
                  alt=""
                  className="church-bg"
                  width="900"
                  height="1125"
                  loading="eager"
                />

                <img
                  src={tefiiImg}
                  alt="Tefii sonriendo con un enterito blanco"
                  className="tefii-fg"
                  loading="eager"
                />
              </div>
            </div>

            {PHOTO_FLOWERS.map((flor) => (
              <Crisantemo
                key={flor.id}
                className={`arch-flower arch-flower--${flor.id}`}
                paleta={flor.palette}
                size={flor.size}
                style={{
                  '--giro': `${flor.rotation}deg`,
                  '--opacidad': flor.opacity,
                }}
              />
            ))}
          </div>

          <section
            className="name-block"
            aria-labelledby="protagonist-name"
            data-reveal
            style={{ '--reveal-delay': '150ms' }}
          >
            <h2 className="protagonist-name" id="protagonist-name">
              Tefii
            </h2>
            <p className="invite-text">
              Te invito a compartir conmigo este día tan especial y lleno de
              fe.
            </p>
          </section>

          <div
            className="section-divider"
            data-reveal
            style={{ '--reveal-delay': '200ms' }}
            aria-hidden="true"
          >
            <span className="section-divider__line" />
            <Crisantemo className="section-flower" paleta="rosa" size={26} />
            <span className="section-divider__line" />
          </div>

          <section
            className="event-details"
            aria-label="Fecha y lugar"
            data-reveal
            style={{ '--reveal-delay': '260ms' }}
          >
            <div className="detail-card">
              <span className="detail-icon" aria-hidden="true">
                <CalendarIcon />
              </span>
              <div className="detail-copy">
                <p className="detail-label">Cuándo</p>
                <p className="detail-value">Domingo 1 de noviembre</p>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon" aria-hidden="true">
                <LocationIcon />
              </span>
              <div className="detail-copy">
                <p className="detail-label">Dónde</p>
                <p className="detail-value">Iglesia de los Capuchinos</p>
                <p className="detail-sub">Obispo Oro y Buenos Aires</p>
                <a
                  className="map-button"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapIcon />
                  Ver ubicación en Google Maps
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </div>
            </div>
          </section>

          <section
            className="agape-card"
            aria-labelledby="agape-title"
            data-reveal
            style={{ '--reveal-delay': '320ms' }}
          >
            <span className="agape-icon" aria-hidden="true">
              <UtensilsIcon />
            </span>
            <div>
              <p className="detail-label">Después de la Misa</p>
              <h3 className="agape-title" id="agape-title">
                Ágape y cena a la canasta
              </h3>
              <p className="agape-text">
                Al terminar la Misa se realizará un ágape: cena a la canasta
                con los invitados.
              </p>
            </div>
          </section>

          <section
            className="rsvp-box"
            aria-labelledby="rsvp-title"
            data-reveal
            style={{ '--reveal-delay': '380ms' }}
          >
            <h3 className="rsvp-title" id="rsvp-title">
              ¿Me acompañás?
            </h3>
            <p className="rsvp-subtitle">
              Confirmá tu asistencia con un mensaje directo a Tefii.
            </p>
            <a
              className="rsvp-button"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Confirmar asistencia
              <span className="sr-only"> por WhatsApp</span>
            </a>
            <p className="rsvp-note">
              Se abre WhatsApp con el mensaje “Confirmo mi asistencia”.
            </p>
          </section>

          <p
            className="footer-note"
            data-reveal
            style={{ '--reveal-delay': '440ms' }}
          >
            ¡Te espero!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
