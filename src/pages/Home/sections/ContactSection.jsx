import ContactForm from '@/components/ContactForm/ContactForm';
import './ContactSection.css';

/**
 * ContactSection
 *
 * Contact form and contact information.
 * Integrated as part of single-page landing.
 */
export default function ContactSection() {
  return (
    <section className="contact-section section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-section__layout">
          {/* ── Left: Information ── */}
          <div className="contact-section__info">
            <h2 id="contact-heading" className="contact-section__heading">Hubungi Kami</h2>
            <p className="contact-section__description">
              Punya pertanyaan mengenai produk MBK Powder atau ingin bekerja sama?
              Tim kami siap membantu Anda. Silakan kirimkan pesan melalui form,
              atau hubungi kami langsung.
            </p>

            <div className="contact-section__details">
              <div className="contact-section__detail-item">
                <h3 className="contact-section__detail-title">Telepon &amp; WhatsApp</h3>
                <p className="contact-section__detail-text">
                  08XX XXX XXXX<br />
                  +62 8XX XXX XXXX
                </p>
              </div>

              <div className="contact-section__detail-item">
                <h3 className="contact-section__detail-title">Email</h3>
                <p className="contact-section__detail-text">
                  info@mbkpowder.com
                </p>
              </div>

              <div className="contact-section__detail-item">
                <h3 className="contact-section__detail-title">Jam Operasional</h3>
                <p className="contact-section__detail-text">
                  Senin - Jumat: 09:00 - 17:00 WIB<br />
                  Sabtu - Minggu: Tutup
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-section__form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
