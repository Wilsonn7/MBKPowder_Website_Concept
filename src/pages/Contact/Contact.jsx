import ContactForm from '@/components/ContactForm/ContactForm';
import './Contact.css';

/**
 * Contact page
 *
 * Displays a contact form and additional contact information
 * alongside it. Matches the overall MBK visual style.
 */
export default function Contact() {
  return (
    <main id="main-content" className="contact">
      <div className="container">
        <div className="contact__layout">
          {/* ── Left: Information ── */}
          <div className="contact__info">
            <h1 className="contact__heading">Hubungi Kami</h1>
            <p className="contact__description">
              Punya pertanyaan mengenai produk MBK Powder atau ingin bekerja sama?
              Tim kami siap membantu Anda. Silakan kirimkan pesan melalui form,
              atau hubungi kami langsung.
            </p>

            <div className="contact__details">
              <div className="contact__detail-item">
                <h2 className="contact__detail-title">Telepon &amp; WhatsApp</h2>
                <p className="contact__detail-text">
                  08XX XXX XXXX<br />
                  +62 8XX XXX XXXX
                </p>
              </div>

              <div className="contact__detail-item">
                <h2 className="contact__detail-title">Email</h2>
                <p className="contact__detail-text">
                  info@mbkpowder.com
                </p>
              </div>

              <div className="contact__detail-item">
                <h2 className="contact__detail-title">Jam Operasional</h2>
                <p className="contact__detail-text">
                  Senin - Jumat: 09:00 - 17:00 WIB<br />
                  Sabtu - Minggu: Tutup
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="contact__form-wrapper">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
