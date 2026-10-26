import { useEffect } from 'react';

type InfoModalProps = {
  title: string;
  description: string;
  image?: string;
  sections?: {
    heading: string;
    content?: string;
    bullets?: string[];
  }[];
  open: boolean;
  onClose: () => void;
};

export default function InfoModal({
  title,
  description,
  image,
  sections = [],
  open,
  onClose,
}: InfoModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 9999,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-modal-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          color: '#282828',
          borderRadius: '12px',
          padding: '24px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '85vh',
          overflowY: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <h2
            id="info-modal-title"
            style={{ margin: 0, fontSize: '1.25rem' }}
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close information"
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '24px',
              cursor: 'pointer',
            }}
          >
            ×
          </button>
        </div>

        {image && (
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              maxHeight: '260px',
              objectFit: 'contain',
              marginBottom: '16px',
            }}
          />
        )}

        {description && (
          <p style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
            {description}
          </p>
        )}

        {sections.map((section) => (
          <section key={section.heading} style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{section.heading}</h3>
            {section.content && <p style={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>{section.content}</p>}
            {section.bullets && (
              <ul style={{ paddingLeft: '20px', margin: '8px 0', lineHeight: 1.7 }}>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
