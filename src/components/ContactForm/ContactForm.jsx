import { useState } from 'react';
import './ContactForm.css';

const INITIAL_FORM_STATE = {
  name:    '',
  email:   '',
  message: '',
};

/**
 * ContactForm
 *
 * Frontend-only contact form with accessible labels,
 * client-side validation, and a success confirmation state.
 * Does not submit to a backend.
 */
export default function ContactForm() {
  const [formData, setFormData]     = useState(INITIAL_FORM_STATE);
  const [errors, setErrors]         = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim())    newErrors.name    = 'Nama wajib diisi.';
    if (!data.email.trim())   newErrors.email   = 'Email wajib diisi.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
                              newErrors.email   = 'Format email tidak valid.';
    if (!data.message.trim()) newErrors.message = 'Pesan wajib diisi.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // No real API call — show success state
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form contact-form--success" role="alert">
        <div className="contact-form__success-icon" aria-hidden="true">✓</div>
        <h3 className="contact-form__success-title">Pesan Terkirim!</h3>
        <p className="contact-form__success-text">
          Terima kasih telah menghubungi kami. Tim MBK Powder akan segera merespons pesan Anda.
        </p>
        <button className="contact-form__btn" onClick={handleReset}>
          Kirim Pesan Lain
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="contact-form__field">
        <label htmlFor="contact-name" className="contact-form__label">
          Nama <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className={`contact-form__input${errors.name ? ' contact-form__input--error' : ''}`}
          placeholder="Nama lengkap Anda"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="contact-form__error" role="alert">{errors.name}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email" className="contact-form__label">
          Email <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={`contact-form__input${errors.email ? ' contact-form__input--error' : ''}`}
          placeholder="email@contoh.com"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="contact-form__error" role="alert">{errors.email}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message" className="contact-form__label">
          Pesan <span className="contact-form__required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={`contact-form__textarea${errors.message ? ' contact-form__input--error' : ''}`}
          placeholder="Tulis pesan Anda di sini..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="contact-form__error" role="alert">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="contact-form__btn">
        Kirim Pesan
      </button>
    </form>
  );
}
