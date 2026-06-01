import React, { useEffect, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: '',
    femail: '',
    fmsg: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const contactLinks = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'durveshkulkarni55@gmail.com',
      href: 'mailto:durveshkulkarni55@gmail.com',
      bgColor: 'rgba(34,211,238,0.1)',
      iconColor: 'var(--cyan)',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'durvesh-kulkarni-832649136',
      href: 'https://www.linkedin.com/in/durvesh-kulkarni-832649136/',
      bgColor: 'rgba(129,140,248,0.1)',
      iconColor: 'var(--purple)',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'kulkarniDurvesh',
      href: 'https://github.com/kulkarniDurvesh',
      bgColor: 'rgba(251,191,36,0.1)',
      iconColor: 'var(--amber)',
    },
    {
      icon: <FiMapPin />,
      label: 'Phone',
      value: '+91 70669 16579',
      href: 'tel:+917066916579',
      bgColor: 'rgba(52,211,153,0.1)',
      iconColor: 'var(--green)',
    },
  ];

  const handleFormChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendForm = async () => {
    const { fname, femail, fmsg } = formData;

    if (!fname.trim() || !femail.trim() || !fmsg.trim()) {
      alert('Please fill all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(femail)) {
      alert('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
            name: fname,
            email: femail,
            message: fmsg,
            subject: `Portfolio Contact from ${fname}`,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully!');

        setFormData({
          fname: '',
          femail: '',
          fmsg: '',
        });
      } else {
        console.error(result);
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="inner">
        <div className="section-header fade-in">
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-sub">
            Open to Solution Architect roles, senior developer positions,
            and AI collaboration projects.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cards fade-in">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="contact-card"
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : ''
                }
              >
                <div
                  className="contact-icon"
                  style={{
                    background: link.bgColor,
                    color: link.iconColor,
                  }}
                >
                  {link.icon}
                </div>

                <div>
                  <div className="contact-label">
                    {link.label}
                  </div>

                  <div className="contact-val">
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form fade-in fade-in-d1">
            <div className="form-group">
              <label>Your Name</label>

              <input
                type="text"
                id="fname"
                placeholder="John Doe"
                value={formData.fname}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>

              <input
                type="email"
                id="femail"
                placeholder="john@example.com"
                value={formData.femail}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                id="fmsg"
                rows="5"
                placeholder="Tell me about your project or role..."
                value={formData.fmsg}
                onChange={handleFormChange}
              />
            </div>

            <button
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
              }}
              onClick={sendForm}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;