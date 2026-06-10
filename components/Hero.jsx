'use client'
import { useState } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const Hero = ({ setIsOpen }) => {

  return (
    <section className="hero-container">
      <style>{`
        .hero-container {
          position: relative;
          margin-top: 80px;
          height: auto;
          aspect-ratio: 16/7;
          overflow: hidden;
          background: #111;
          display: block;
        }

        /* Dark gradient overlay — bottom heavy so text is legible */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 55%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Content block — sits over the image */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 44px 72px;
        }

        /* Main title */
        .hero-title {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(22px, 3vw, 42px);
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.08;
          margin: 0 0 6px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.5);
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(11px, 1.4vw, 18px);
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 12px;
          opacity: 0.92;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* Price line */
        .hero-price-line {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: clamp(11px, 1.1vw, 15px);
          color: rgba(255,255,255,0.88);
          margin: 0 0 22px;
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        @keyframes heroPriceBlink {
          0%, 80%  { opacity: 1; }
          85%, 100% { opacity: 0.25; }
        }

        .hero-price-amt {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(16px, 2vw, 28px);
          font-weight: 800;
          color: #fff;
          animation: heroPriceBlink 1.6s step-end infinite;
          display: inline-block;
        }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Hero buttons use global btn-brand / btn-gold-outline classes */

        /* First button — white text + white border on dark hero bg */
        .hero-btn-one {
          color: #fff !important;
          border-color: rgba(255,255,255,0.9) !important;
          background: transparent !important;
        }
        .hero-btn-one:hover {
          background: var(--color-brand) !important;
          color: #fff !important;
          border-color: var(--color-brand) !important;
        }

        /* RERA text */
        .hero-rera {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: 11.5px;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
        }

        /* ─── Tablet ─── */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-container {
            aspect-ratio: 4/3 !important;
          }
          .hero-content {
            padding: 0 28px 56px !important;
          }
        }

        /* ─── Mobile ─── */
        @media (max-width: 767px) {
          .hero-container {
            margin-top: 0px !important;
            padding-top: 80px !important;
            height: auto !important;
            aspect-ratio: auto !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .hero-overlay {
            display: none !important;
          }

          .hero-carousel-img {
            position: relative !important;
            width: 100% !important;
            aspect-ratio: 3/4 !important;
            height: auto !important;
          }

          .hero-content {
            position: static !important;
            background: #111827;
            padding: 24px 20px 28px !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }

          .hero-btn-outline,
          .hero-btn-wa {
            width: 100% !important;
            justify-content: center !important;
          }

          .hero-rera {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* ── Desktop Banner ── */}
      <div className="hidden lg:block" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={heroImages.banner1Desk}
          alt="Mahindra Beacon Hill Desktop Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Tablet Banner ── */}
      <div className="hidden md:block lg:hidden" style={{ position: 'absolute', inset: 0 }}>
        <Image
          src={heroImages.banner1tab}
          alt="Mahindra Beacon Hill Tablet Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Mobile Banner ── */}
      <div className="block md:hidden hero-carousel-img">
        <Image
          src={heroImages.bnnner1sm}
          alt="Mahindra Beacon Hill Mobile Banner"
          fill
          className="object-fill"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" />

      {/* ── Content overlay ── */}
      <div className="hero-content">

        {/* Main Heading */}
        <h1 className="hero-title">
          Mahindra Beacon Hill, Mahalaxmi
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Designed for those who demand the extraordinary
        </p>

        {/* Price Line */}
        <p className="hero-price-line">
          Premium 3, 3.5 &amp; 4 BHK Residences Starting at&nbsp;
          <span className="hero-price-amt">₹ 6.30 Cr*</span>
        </p>

        {/* CTA Row */}
        <div className="hero-cta-row">

          {/* Button 1 — Unlock Pricing: white text on dark hero bg */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold-outline hero-btn-one"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            Unlock Pricing &amp; Floor Plans
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>

          {/* Button 2 — WhatsApp (global btn-brand) */}
          <a
            href="https://wa.me/919718344024?text=Hi%20I%20am%20interested%20in%20Mahindra%20Beacon%20Hill%20Mahalaxmi%20Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            {/* WhatsApp icon */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp for Instant Details
          </a>

          {/* MAHARERA */}
          {/* <span className="hero-rera hidden sm:inline">
            MAHARERA Number: PM1170002600357
          </span> */}

        </div>

        {/* MAHARERA — mobile only below buttons */}
        {/* <p className="hero-rera sm:hidden" style={{ marginTop: '10px' }}>
          MAHARERA Number: PM1170002600357
        </p> */}

      </div>
    </section>
  )
}

export default Hero
