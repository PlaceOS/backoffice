/** Time a ripple stays in the DOM. It matches the `ripple` animation in styles.css */
const RIPPLE_MS = 500;

/**
 * Show a ripple from the pointer on press of any element with a `ripple`
 * attribute. One listener on the document serves the whole app, so elements
 * only need the attribute. Call once at startup.
 */
export function installRipple(doc: Document) {
    const reduce_motion = doc.defaultView?.matchMedia?.(
        '(prefers-reduced-motion: reduce)',
    );
    doc.addEventListener(
        'pointerdown',
        (event) => {
            const target = event.target as Element | null;
            const host = target?.closest?.<HTMLElement>('[ripple]');
            if (!host || host.matches(':disabled') || reduce_motion?.matches) {
                return;
            }
            const rect = host.getBoundingClientRect();
            // Big enough to cover the element from any start point
            const size = Math.hypot(rect.width, rect.height) * 2;
            const wave = doc.createElement('span');
            wave.className = 'ripple-wave';
            wave.style.width = wave.style.height = `${size}px`;
            wave.style.left = `${event.clientX - rect.left - size / 2}px`;
            wave.style.top = `${event.clientY - rect.top - size / 2}px`;
            host.appendChild(wave);
            setTimeout(() => wave.remove(), RIPPLE_MS);
        },
        { passive: true },
    );
}
