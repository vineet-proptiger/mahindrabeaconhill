'use client'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'


/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    // top-left  → curve goes bottom-right
    { top: '-1px', left: '-1px',
      borderRight: '1px solid #D5C2A8',
      borderBottom: '1px solid #D5C2A8',
      borderBottomRightRadius: '18px' },
    // top-right → curve goes bottom-left
    { top: '-1px', right: '-1px',
      borderLeft: '1px solid #D5C2A8',
      borderBottom: '1px solid #D5C2A8',
      borderBottomLeftRadius: '18px' },
    // bottom-left → curve goes top-right
    { bottom: '-1px', left: '-1px',
      borderRight: '1px solid #D5C2A8',
      borderTop: '1px solid #D5C2A8',
      borderTopRightRadius: '18px' },
    // bottom-right → curve goes top-left
    { bottom: '-1px', right: '-1px',
      borderLeft: '1px solid #D5C2A8',
      borderTop: '1px solid #D5C2A8',
      borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'LOCATION',   value: 'MAHALAXMI, SOUTH MUMBAI' },
  { label: 'TYPE',       value: '3, 3.5 & 4 BHK'  },
  { label: 'LAND PARCEL', value: '1.71 ACRE' },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="px-4 sm:px-8" style={{
      maxWidth: '860px', margin: '0 auto',
      textAlign: 'justify',
    }}>

      {/* ── Section Heading ── */}
      <div style={{ marginBottom: '32px', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.22em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          WELCOME TO MAHINDRA MAHALAXMI
        </h2>
        <h3 style={{
          fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
          color: '#A9262D', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Mahindra Mahalaxmi New Launch
        </h3>
      </div>

      {/* ── Paragraphs ── */}
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="80">
        Mahindra Beacon Hill is an upcoming luxury residential development in Mahalaxmi, one of South Mumbai’s most coveted and well-connected neighbourhoods. Designed for discerning homeowners, the project offers spacious 3, 3.5, and 4 BHK residences that blend sophisticated design, premium specifications, and modern lifestyle comforts.
      </p>
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: 0, marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="100">
        Rising as a landmark high-rise in the city skyline, Mahindra Beacon Hill is envisioned to provide an exclusive living experience with thoughtfully curated amenities, landscaped spaces, advanced security, and smart home features.
      </p>
      <p style={{
        fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
        lineHeight: 1.9,
        marginTop: 0, marginBottom: '28px', marginLeft: 'auto', marginRight: 'auto',
        maxWidth: '680px', textAlign: 'justify',
      }} data-aos="fade-up" data-aos-delay="120">
        Developed by Mahindra Lifespaces in partnership with Livingstone Infra Private Ltd., this address promises a seamless balance of luxury, privacy, and urban convenience — a truly extraordinary home in the heart of South Mumbai.
      </p>

     

      {/* ── Info Box — thin border + L-shaped corner brackets ── */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        style={{
          position: 'relative',
          border: '1px solid #D5C2A8',
          maxWidth: '780px',
          margin: '0 auto',
          overflow: 'hidden',
        }}
      >
        <CurvedCorners />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: '#D5C2A8' }}>
        {infoItems.map((item, i) => (
          <div key={i} className="bg-white" style={{
            padding: '26px 20px',
            textAlign: 'justify',
          }}>
            {/* Label */}
            <p style={{
              fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
              color: '#b5a99a', letterSpacing: '0.18em',
              textTransform: 'uppercase', margin: '0 0 8px',
            }}>
              {item.label}:
            </p>
            {/* Value */}
            <p className="whitespace-nowrap" style={{
              fontFamily: F_JOST, fontSize: '13px', fontWeight: '700',
              color: '#3A2A0E', letterSpacing: '0.08em',
              textTransform: 'uppercase', margin: 0,
            }}>
              {item.value}
            </p>
          </div>
        ))}
        </div>
      </div>

      {/* ── Request A Brochure CTA — hidden ── */}
      {false && (
      <div className="flex justify-center sm:justify-start" style={{ marginTop: '40px' }} data-aos="fade-up" data-aos-delay="260">
        <button
          onClick={() => setIsOpen && setIsOpen(true)}
          className="btn-brand"
          style={{ fontFamily: F_JOST, fontSize: '12px', letterSpacing: '0.16em' }}
        >
          Request A Brochure
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
      )}

    </div>
  </section>
)

export default Overview
