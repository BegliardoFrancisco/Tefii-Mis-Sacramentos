import './Crisantemo.css';

const PETALO_PATH =
  'M-6,-85 C-12,-50 -8,-20 0,0 C8,-20 12,-50 6,-85 C4,-92 -4,-92 -6,-85 Z';

const PALETAS = {
  celeste: {
    petalos: '#bfe0ef',
    sombra: '#94c7db',
    centro: '#f1d6a0',
    detalle: '#d8b878',
  },
  lavanda: {
    petalos: '#d9ccef',
    sombra: '#b9a6dc',
    centro: '#f0d6a4',
    detalle: '#d6b276',
  },
  rosa: {
    petalos: '#f5cad5',
    sombra: '#e4a6b7',
    centro: '#f3d8a7',
    detalle: '#dcb77a',
  },
  rojo: {
    petalos: '#efafb0',
    sombra: '#d9898e',
    centro: '#f1d4a0',
    detalle: '#d8af72',
  },
};

const ANGULOS_TRASEROS = Array.from({ length: 24 }, (_, index) => index * 15);
const ANGULOS_FRONTALES = Array.from(
  { length: 24 },
  (_, index) => index * 15 + 7.5,
);

function Crisantemo({
  paleta = 'rosa',
  size = 180,
  label,
  className = '',
  style,
  ...props
}) {
  const colores = PALETAS[paleta] ?? PALETAS.rosa;
  const tamano = typeof size === 'number' ? `${size}px` : size;
  const decorativa = !label;

  return (
    <svg
      className={`flor-svg ${className}`.trim()}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role={decorativa ? undefined : 'img'}
      aria-hidden={decorativa ? 'true' : undefined}
      focusable="false"
      style={{
        '--tamano-flor': tamano,
        '--color-petalos': colores.petalos,
        '--color-petalos-sombra': colores.sombra,
        '--color-centro': colores.centro,
        '--color-centro-detalle': colores.detalle,
        ...style,
      }}
      {...props}
    >
      {label && <title>{label}</title>}

      <g className="capa-petalos-traseros">
        <g className="petalo-base" transform="translate(100,100)">
          {ANGULOS_TRASEROS.map((angulo) => (
            <path
              key={angulo}
              d={PETALO_PATH}
              transform={`rotate(${angulo})`}
            />
          ))}
        </g>
      </g>

      <g className="capa-petalos-frontales">
        <g className="petalo-frente" transform="translate(100,100) scale(0.92)">
          {ANGULOS_FRONTALES.map((angulo) => (
            <path
              key={angulo}
              d={PETALO_PATH}
              transform={`rotate(${angulo})`}
            />
          ))}
        </g>
      </g>

      <g className="centro-flor">
        <circle className="centro-base" cx="100" cy="100" r="30" />
        <circle className="centro-corona" cx="100" cy="100" r="26" />
        <circle className="centro-nucleo" cx="100" cy="100" r="21" />
      </g>
    </svg>
  );
}

export default Crisantemo;
