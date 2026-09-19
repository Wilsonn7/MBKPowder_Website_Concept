import './SectionTitle.css';

/**
 * SectionTitle
 *
 * Reusable section heading component.
 * Eliminates duplicated heading markup across sections.
 *
 * @param {Object}  props
 * @param {string}  props.eyebrow        - Small uppercase label above main title
 * @param {string}  props.title          - Main heading text
 * @param {string}  [props.subtitle]     - Optional supporting paragraph
 * @param {'left'|'center'|'right'} [props.align='center'] - Text alignment
 * @param {string}  [props.className]    - Additional CSS classes
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  return (
    <div className={`section-title section-title--${align} ${className}`}>
      {eyebrow && (
        <p className="section-title__eyebrow">{eyebrow}</p>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
}
