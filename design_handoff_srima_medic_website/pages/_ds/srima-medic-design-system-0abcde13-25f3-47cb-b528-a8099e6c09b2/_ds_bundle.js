/* @ds-bundle: {"format":4,"namespace":"SrimaMedicDesignSystem_0abcde","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"HeroSlider","sourcePath":"components/core/HeroSlider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ServiceCard","sourcePath":"components/core/ServiceCard.jsx"},{"name":"StatTile","sourcePath":"components/core/StatTile.jsx"},{"name":"Timeline","sourcePath":"components/core/Timeline.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"GatedForm","sourcePath":"components/forms/GatedForm.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"StickyContactCluster","sourcePath":"components/navigation/StickyContactCluster.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d99c926a0ab3","components/core/Button.jsx":"fe03fff34306","components/core/HeroSlider.jsx":"7a81f8ed6db3","components/core/Icon.jsx":"ddd3f2f3c60c","components/core/ServiceCard.jsx":"cb28911d24ef","components/core/StatTile.jsx":"a92b6d095db0","components/core/Timeline.jsx":"600463e75f23","components/forms/Field.jsx":"a3baf5723f10","components/forms/GatedForm.jsx":"c30682c8b3a4","components/navigation/Footer.jsx":"bd71f34bffb9","components/navigation/NavBar.jsx":"8ba8b4a517a4","components/navigation/StickyContactCluster.jsx":"59ee10b98770","ui_kits/website/AboutScreen.jsx":"4b2150b05eee","ui_kits/website/App.jsx":"f6e935298937","ui_kits/website/ContactScreen.jsx":"e13d8c8dfbcc","ui_kits/website/HomeScreen.jsx":"39d6e1eca777","ui_kits/website/Layout.jsx":"957b5737ee38","ui_kits/website/NewsScreen.jsx":"d6ad813b8f0d","ui_kits/website/PortfolioScreen.jsx":"2de9c410174c","ui_kits/website/ProductsScreen.jsx":"aa0d5ed44a3d","ui_kits/website/ServicesScreen.jsx":"1ad0e3de0298"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SrimaMedicDesignSystem_0abcde = window.SrimaMedicDesignSystem_0abcde || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  region: {
    background: 'var(--navy-tint)',
    color: 'var(--navy)'
  },
  brand: {
    background: 'var(--cyan-tint)',
    color: 'var(--cyan-ink-on)'
  },
  sky: {
    background: 'var(--sky-tint)',
    color: 'var(--sky-ink-on)'
  },
  success: {
    background: 'color-mix(in srgb, var(--success) 16%, transparent)',
    color: 'var(--success)'
  },
  warning: {
    background: 'color-mix(in srgb, var(--warning) 16%, transparent)',
    color: 'var(--warning)'
  },
  danger: {
    background: 'color-mix(in srgb, var(--danger) 16%, transparent)',
    color: 'var(--danger)'
  }
};

/** Pill used for the five service regions and for equipment status. */
function Badge({
  tone = 'region',
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.35rem',
      borderRadius: 'var(--radius-full)',
      padding: '.32rem .8rem',
      fontSize: '.78rem',
      fontWeight: 500,
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...(TONES[tone] || TONES.region),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/HeroSlider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-width page header: the image shows the page title ONLY, never a paragraph on top of it. Pass 2+ slides for a dot carousel (Home); one slide hides the dots (every other page). Supporting copy goes in `description`, rendered in a separate block below the image. */
function HeroSlider({
  slides = [{
    title: ''
  }],
  description,
  height = 340,
  style,
  ...rest
}) {
  const [i, setI] = React.useState(0);
  const multi = slides.length > 1;
  const slide = slides[i] || slides[0];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      width: '100%',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(120deg, var(--navy) 0%, #082830 100%)',
      padding: '0 clamp(24px,6vw,72px)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(1.7rem,3.4vw,2.6rem)',
      lineHeight: 1.15,
      maxWidth: '18ch',
      margin: multi ? '0 0 2rem' : 0
    }
  }, slide.title), multi ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'clamp(24px,6vw,72px)',
      bottom: '88px',
      display: 'flex',
      gap: '.4rem'
    }
  }, slides.map((s, si) => /*#__PURE__*/React.createElement("span", {
    key: si,
    onClick: () => setI(si),
    style: {
      width: si === i ? 18 : 7,
      height: 7,
      borderRadius: 4,
      cursor: 'pointer',
      background: si === i ? '#fff' : 'rgba(255,255,255,.4)',
      transition: 'width var(--duration) var(--ease)'
    }
  }))) : null), description ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '1.6rem clamp(24px,6vw,72px)',
      background: 'var(--surface)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-soft)',
      maxWidth: '60ch'
    }
  }, description)) : null);
}
Object.assign(__ds_scope, { HeroSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/HeroSlider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inline stroke-based line icons (no external CDN fetch — avoids cross-origin
   mask-image failing to rasterize in capture/export pipelines). currentColor by default. */
const ICON_PATHS = {
  phone: 'M6.6 10.8c1.5 3 3.9 5.4 6.9 6.9l2.3-2.3c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z',
  'arrow-up': 'M12 19V5M5 12l7-7 7 7',
  'arrow-right': 'M5 12h14M13 5l7 7-7 7',
  'message-circle': 'M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z',
  lock: 'M8 10V7a4 4 0 0 1 8 0v3M5 10h14v10H5z',
  check: 'M4 12l5 5L20 6',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 3',
  'map-pin': 'M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22zM12 11.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6z',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.8h.01',
  'badge-check': 'M12 2l2.4 1.4 2.7-.3 1 2.5 2.5 1-.3 2.7L22 12l-1.4 2.4.3 2.7-2.5 1-1 2.5-2.7-.3L12 22l-2.4-1.4-2.7.3-1-2.5-2.5-1 .3-2.7L2 12l1.4-2.4-.3-2.7 2.5-1 1-2.5 2.7.3L12 2zM9 12l2 2 4-4',
  'file-check': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M9 15l2 2 4-4',
  ruler: 'M2 9h20v6H2zM6 9v3M10 9v3M14 9v3M18 9v3',
  wrench: 'M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.5-2.5z',
  'monitor-dot': 'M2 4h20v14H2zM8 21h8M12 18v3',
  'clipboard-list': 'M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1zM6 4h12v17H6zM9 11h6M9 15h6M9 8h3',
  'package-check': 'M21 8l-9-5-9 5 9 5 9-5zM3 8v9l9 5 9-5V8M12 13v9',
  'refresh-cw': 'M21 12a9 9 0 1 1-3-6.7M21 4v5h-5',
};
const ICON_FILL = { facebook: 'M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z' };
function Icon({
  name,
  size = 24,
  color,
  style,
  title,
  ...rest
}) {
  const filled = ICON_FILL[name];
  const d = ICON_PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title || name,
    viewBox: "0 0 24 24",
    width: size,
    height: size
  }, rest, {
    style: { flex: '0 0 auto', color: color || 'currentColor', display: 'inline-block', ...style }
  }), filled ? /*#__PURE__*/React.createElement("path", { d: filled, fill: 'currentColor' }) : d ? /*#__PURE__*/React.createElement("path", {
    d,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--amber)',
    color: 'var(--amber-ink-on)',
    border: 'none'
  },
  secondary: {
    background: 'transparent',
    border: '1.5px solid var(--navy)',
    color: 'var(--navy)'
  },
  ghost: {
    background: 'transparent',
    border: 'none',
    color: 'var(--cyan)',
    padding: 0
  },
  disabled: {
    background: 'var(--surface-alt)',
    color: 'var(--text-faint)',
    border: 'none'
  }
};
const SIZES = {
  sm: {
    padding: '.5rem 1rem',
    fontSize: '.82rem'
  },
  md: {
    padding: '.75rem 1.4rem',
    fontSize: '.94rem'
  },
  lg: {
    padding: '.95rem 1.8rem',
    fontSize: '1rem'
  }
};

/**
 * Amber is reserved for the single primary CTA on a view; everything else is
 * secondary (marine outline) or ghost (teal text link).
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  fullWidth,
  disabled,
  style,
  children,
  ...rest
}) {
  const v = VARIANTS[disabled ? 'disabled' : variant] || VARIANTS.primary;
  const s = variant === 'ghost' ? {
    fontSize: SIZES[size].fontSize
  } : SIZES[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.5rem',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      lineHeight: 1.2,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'filter var(--duration) var(--ease), color var(--duration) var(--ease)',
      width: fullWidth ? '100%' : undefined,
      ...v,
      ...s,
      ...style
    }
  }), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: 18
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card describing one service line: line icon, title, soft body copy. */
function ServiceCard({
  icon = 'shield',
  title,
  children,
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '1.6rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.75rem',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 40,
    color: "var(--cyan)"
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 600,
      color: 'var(--text)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-soft)',
      fontSize: '.86rem',
      lineHeight: 1.6,
      margin: 0
    }
  }, children), footer);
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Key-achievement counter: mono numeral in teal over a soft label. */
function StatTile({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '1.4rem 1.25rem',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '1.9rem',
      fontWeight: 600,
      lineHeight: 1.1,
      color: 'var(--cyan)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.82rem',
      color: 'var(--text-soft)',
      marginTop: '.35rem'
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/core/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Connected-dot timeline: year, title, sub-copy, optional logo placeholders per milestone. Used for company history and partnership recognition. orientation="horizontal" lays items left-to-right with the connector line on top. */
function Timeline({
  items = [],
  orientation = 'vertical',
  style,
  ...rest
}) {
  const horizontal = orientation === 'horizontal';
  const logosRow = (it) => it.logos && it.logos.length ? /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', gap: '.5rem', marginTop: '.7rem', flexWrap: 'wrap' }
  }, it.logos.map((l, li) => /*#__PURE__*/React.createElement("div", {
    key: li,
    title: l,
    style: {
      width: 40,
      height: 40,
      borderRadius: 9,
      background: 'var(--surface-alt)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 8,
      color: 'var(--text-faint)',
      textAlign: 'center',
      padding: 2,
      lineHeight: 1.2
    }
  }, l))) : null;

  if (horizontal) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      style: {
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        gap: '1.6rem',
        paddingBottom: 4,
        ...style
      }
    }), items.map((it, i) => {
      const last = i === items.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: { display: 'flex', flexDirection: 'column', flex: '1 1 0', minWidth: 0 }
      }, /*#__PURE__*/React.createElement("div", {
        style: { display: 'flex', alignItems: 'center' }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'var(--cyan)',
          boxShadow: '0 0 0 4px var(--cyan-tint)',
          flex: '0 0 auto'
        }
      }), !last ? /*#__PURE__*/React.createElement("div", {
        style: { height: 2, flex: 1, background: 'var(--border)', minWidth: '1.6rem' }
      }) : null), /*#__PURE__*/React.createElement("div", {
        style: { paddingTop: '1rem' }
      }, /*#__PURE__*/React.createElement("div", {
        style: { fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--cyan)' }
      }, it.year), /*#__PURE__*/React.createElement("div", {
        style: { fontWeight: 600, marginTop: 2 }
      }, it.title), it.sub ? /*#__PURE__*/React.createElement("div", {
        style: { fontSize: '.8rem', color: 'var(--text-faint)', marginTop: 2 }
      }, it.sub) : null, logosRow(it)));
    }));
  }

  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '22px 1fr',
        gap: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: 'var(--cyan)',
        boxShadow: '0 0 0 4px var(--cyan-tint)',
        flex: '0 0 auto'
      }
    }), !last ? /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: 1,
        background: 'var(--border)',
        minHeight: '2.2rem'
      }
    }) : null), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : '2.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        color: 'var(--cyan)'
      }
    }, it.year), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        marginTop: 2
      }
    }, it.title), it.sub ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        color: 'var(--text-faint)',
        marginTop: 2
      }
    }, it.sub) : null, logosRow(it)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Labelled form control. Label sits above at caption size in --text-soft. */
function Field({
  label,
  type = 'text',
  hint,
  error,
  style,
  inputStyle,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '1rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '.82rem',
      color: 'var(--text-soft)',
      marginBottom: '.4rem'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, rest, {
    style: {
      width: '100%',
      padding: '.7rem .85rem',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (error ? 'var(--danger)' : 'var(--border)'),
      background: 'var(--surface)',
      color: 'var(--text)',
      fontFamily: 'var(--font-body)',
      fontSize: '.94rem',
      boxSizing: 'border-box',
      ...inputStyle
    }
  })), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.76rem',
      color: 'var(--danger)',
      marginTop: '.35rem'
    }
  }, error) : null, !error && hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.76rem',
      color: 'var(--text-faint)',
      marginTop: '.35rem'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/GatedForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "Professional access only" request form — the lead-capture gate in front of
 * deep specs and clinical case imagery. Always shows the reCAPTCHA notice.
 */
function GatedForm({
  title,
  note,
  submitLabel = 'ขอเข้าถึงสเปกเชิงลึก',
  onSubmit,
  submitted,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit();
    }
  }, rest, {
    style: {
      maxWidth: 420,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), title ? /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: '1.05rem',
      fontWeight: 600,
      marginBottom: '.35rem'
    }
  }, title) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.82rem',
      color: 'var(--text-soft)',
      margin: '0 0 1.1rem',
      lineHeight: 1.6
    }
  }, note) : null, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 / \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19"
  }), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A",
    type: "email"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.5rem',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '.7rem .85rem',
      fontSize: '.78rem',
      color: 'var(--text-faint)',
      marginBottom: '1.1rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 14
  }), "reCAPTCHA \u2014 \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E41\u0E1B\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    type: "submit"
  }, submitLabel), submitted ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '.45rem',
      marginTop: '.9rem',
      fontSize: '.82rem',
      color: 'var(--success)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  }), "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E35\u0E21\u0E02\u0E32\u0E22\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E22\u0E43\u0E19 1 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23") : null);
}
Object.assign(__ds_scope, { GatedForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/GatedForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_LINKS = ['หน้าหลัก', 'เกี่ยวกับเรา', 'ผลิตภัณฑ์', 'บริการและสนับสนุน', 'ผลงานการติดตั้ง', 'ข่าวสารและกิจกรรม', 'ติดต่อเรา'];

/** Full-width (edge-to-edge) marine footer: menu, regulatory licence numbers, legal + social row. Not contained/rounded — it spans the viewport. */
function Footer({
  links = DEFAULT_LINKS,
  dbdNumber = '0105558xxxxxx (ข้อมูลตัวอย่าง)',
  deviceLicenceNumber = 'ฆพ.xxxx/xxxx (ข้อมูลตัวอย่าง)',
  copyright = '© 2026 Srima-Medic Company Limited',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({}, rest, {
    style: {
      width: '100%',
      background: 'var(--navy)',
      color: 'rgba(255,255,255,.82)',
      padding: '3rem clamp(24px,6vw,72px)',
      fontSize: '.82rem',
      fontFamily: 'var(--font-body)',
      boxSizing: 'border-box',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.5rem',
      paddingBottom: '1.4rem',
      borderBottom: '1px solid rgba(255,255,255,.16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: '#fff',
      letterSpacing: '.02em'
    }
  }, "SRIMA MEDIC"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '.6rem 0 0',
      padding: 0,
      display: 'flex',
      gap: '1.2rem',
      flexWrap: 'wrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,.82)',
      textDecoration: 'none'
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.76rem',
      opacity: .85,
      lineHeight: 1.7
    }
  }, "\u0E40\u0E25\u0E02\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E13\u0E34\u0E0A\u0E22\u0E4C (DBD): ", dbdNumber, /*#__PURE__*/React.createElement("br", null), "\u0E40\u0E25\u0E02\u0E43\u0E1A\u0E2D\u0E19\u0E38\u0E0D\u0E32\u0E15\u0E02\u0E32\u0E22\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C: ", deviceLicenceNumber)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '1.1rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '.75rem',
      fontSize: '.74rem',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.6rem'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Disclaimer"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 15,
    title: "LINE"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "facebook",
    size: 15,
    title: "Facebook"
  }))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ITEMS = ['หน้าหลัก', 'เกี่ยวกับเรา', 'ผลิตภัณฑ์', 'บริการและสนับสนุน', 'ผลงานการติดตั้ง', 'ข่าวสารและกิจกรรม', 'ติดต่อเรา'];

/** Persistent marine header: wordmark, 7-item main menu, TH/EN switch. No phone number — moved to the footer and the sticky contact cluster. Logo is a wordmark: no logo file was supplied (see readme), never render an image placeholder that looks like a real mark. */
function NavBar({
  items = DEFAULT_ITEMS,
  active,
  onNavigate,
  lang = 'TH',
  onLangChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({}, rest, {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '.9rem 1.4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1.4rem',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 26,
      flexShrink: 0,
      border: '1px dashed rgba(255,255,255,.4)',
      borderRadius: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      letterSpacing: '.04em',
      color: 'rgba(255,255,255,.6)'
    }
  }, "LOGO"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      gap: '1.1rem',
      margin: 0,
      padding: '0 0 0 .75rem',
      fontSize: '.87rem',
      flex: '1 1 auto',
      minWidth: 0,
      justifyContent: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: { flexShrink: 0 }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      color: it === active ? 'var(--cyan)' : 'rgba(255,255,255,.88)',
      textDecoration: 'none',
      fontWeight: it === active ? 600 : 400,
      paddingBottom: 2,
      whiteSpace: 'nowrap',
      borderBottom: it === active ? '2px solid var(--cyan)' : '2px solid transparent',
      transition: 'color var(--duration) var(--ease)'
    }
  }, it)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      fontSize: '.85rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid rgba(255,255,255,.35)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, ['TH', 'EN'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    onClick: () => onLangChange && onLangChange(l),
    style: {
      padding: '.3rem .65rem',
      cursor: 'pointer',
      fontSize: '.78rem',
      fontWeight: 500,
      background: l === lang ? 'var(--cyan)' : 'transparent',
      color: l === lang ? 'var(--cyan-ink-on)' : 'rgba(255,255,255,.88)'
    }
  }, l)))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StickyContactCluster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const round = size => ({
  width: size,
  height: size,
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none'
});

/** Fixed bottom-right cluster, present on every page. Order top-to-bottom: LINE, phone, scroll-up. */
function StickyContactCluster({
  phone = '085-509-5831',
  lineUrl = '#',
  onScrollTop,
  position = 'fixed',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position,
      right: '1.1rem',
      bottom: '1.1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '.6rem',
      zIndex: 50,
      ...style
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: lineUrl,
    "aria-label": "LINE",
    style: {
      ...round(46),
      background: 'var(--line-green)',
      color: '#fff',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 20
  })), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone,
    "aria-label": 'โทร ' + phone,
    style: {
      ...round(46),
      background: 'var(--navy)',
      color: '#fff',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onScrollTop,
    "aria-label": "\u0E01\u0E25\u0E31\u0E1A\u0E02\u0E36\u0E49\u0E19\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19",
    style: {
      ...round(38),
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      color: 'var(--text-soft)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up",
    size: 16
  })));
}
Object.assign(__ds_scope, { StickyContactCluster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StickyContactCluster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutScreen.jsx
try { (() => {
const {
  Icon,
  HeroSlider,
  Timeline,
  Badge
} = window.DS;
const PILLARS = ['Clinical Precision', 'Global Partnership (Philips)', 'Nationwide Reach', 'End-to-End Care'];
const HISTORY = [{
  year: '2001',
  title: 'Tomograph Co., Ltd.',
  sub: 'ก่อตั้งบริษัท — จุดเริ่มต้นของกลุ่ม Sima',
  logos: ['LOGO']
}, {
  year: '2013',
  title: 'Srima-Medic Co., Ltd.',
  sub: 'เปลี่ยนชื่อบริษัท'
}, {
  year: '2015',
  title: 'Sima Renovation Co., Ltd.',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันปีกับลูกค้า)'
}, {
  year: '2017',
  title: 'Sima Health Care Co., Ltd. / Sima MRI Co., Ltd.',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันปีกับลูกค้า)',
  logos: ['LOGO', 'LOGO']
}, {
  year: '2018',
  title: 'Sima Solutions Co., Ltd.',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันปีกับลูกค้า)'
}];
function AboutScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'เกี่ยวกับเรา'
    }],
    description: "Srima-Medic \u0E27\u0E32\u0E07\u0E15\u0E31\u0E27\u0E40\u0E1B\u0E47\u0E19\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E14\u0E49\u0E32\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22\u0E17\u0E35\u0E48\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E44\u0E27\u0E49\u0E43\u0E08\u0E44\u0E14\u0E49\u0E15\u0E25\u0E2D\u0E14\u0E2D\u0E32\u0E22\u0E38\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(Badge, {
    key: p,
    tone: "sky"
  }, p)))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17",
    title: "\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E40\u0E23\u0E32",
    lead: "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E48\u0E2D\u0E15\u0E31\u0E49\u0E07 Tomograph Co., Ltd. \u0E43\u0E19\u0E1B\u0E35 2001 \u0E08\u0E19\u0E16\u0E36\u0E07\u0E01\u0E32\u0E23\u0E23\u0E27\u0E21\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E43\u0E19\u0E40\u0E04\u0E23\u0E37\u0E2D Sima"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      background: 'var(--cyan-tint)',
      color: 'var(--cyan-ink-on)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontSize: 13,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      marginTop: 2
    }
  }), "\u0E1B\u0E35\u0E41\u0E25\u0E30\u0E0A\u0E37\u0E48\u0E2D\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E02\u0E2D\u0E07 2001 \u0E41\u0E25\u0E30 2013 \u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E2A\u0E48\u0E27\u0E19\u0E1B\u0E35 2015\u20132018 \u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 \u2014 \u0E23\u0E2D\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E31\u0E1A\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E1C\u0E22\u0E41\u0E1E\u0E23\u0E48\u0E08\u0E23\u0E34\u0E07"), /*#__PURE__*/React.createElement(Timeline, {
    items: HISTORY,
    style: {
      maxWidth: 640
    }
  })));
}
Object.assign(window, {
  AboutScreen,
  HISTORY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState('หน้าหลัก');
  const go = p => {
    setPage(p);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement(Layout, {
    page: page,
    onNavigate: go
  }, page === 'เกี่ยวกับเรา' ? /*#__PURE__*/React.createElement(AboutScreen, null) : page === 'ผลิตภัณฑ์' ? /*#__PURE__*/React.createElement(ProductsScreen, null) : page === 'บริการและสนับสนุน' ? /*#__PURE__*/React.createElement(ServicesScreen, {
    onNavigate: go
  }) : page === 'ผลงานการติดตั้ง' ? /*#__PURE__*/React.createElement(PortfolioScreen, null) : page === 'ข่าวสารและกิจกรรม' ? /*#__PURE__*/React.createElement(NewsScreen, null) : page === 'ติดต่อเรา' ? /*#__PURE__*/React.createElement(ContactScreen, null) : /*#__PURE__*/React.createElement(HomeScreen, {
    onNavigate: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Field,
  Button,
  Badge,
  Icon,
  HeroSlider
} = window.DS;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'ติดต่อเรา'
    }],
    description: "\u0E41\u0E08\u0E49\u0E07\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48 \u0E02\u0E2D\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32\u0E41\u0E1C\u0E19 PM \u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E08\u0E49\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E02\u0E31\u0E14\u0E02\u0E49\u0E2D\u0E07\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07"
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\u0E0A\u0E37\u0E48\u0E2D-\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
    placeholder: "\u0E19\u0E1E.\u0E2A\u0E21\u0E0A\u0E32\u0E22 \u0E43\u0E08\u0E14\u0E35"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19 / \u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25",
    placeholder: "\u0E23\u0E1E.\u0E28\u0E23\u0E35\u0E21\u0E32"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A",
    type: "email",
    placeholder: "somchai@hospital.go.th"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23",
    placeholder: "08x-xxx-xxxx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23",
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E02\u0E2D\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32\u0E41\u0E1C\u0E19 PM \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07 CT"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-sm)',
      padding: '.7rem .85rem',
      fontSize: 13,
      color: 'var(--text-faint)',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), " reCAPTCHA \u2014 \u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E2A\u0E41\u0E1B\u0E21\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      marginTop: 14,
      color: 'var(--success)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), "\u0E2A\u0E48\u0E07\u0E04\u0E33\u0E02\u0E2D\u0E41\u0E25\u0E49\u0E27 \u0E17\u0E35\u0E21\u0E07\u0E32\u0E19\u0E08\u0E30\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A\u0E20\u0E32\u0E22\u0E43\u0E19 1 \u0E27\u0E31\u0E19\u0E17\u0E33\u0E01\u0E32\u0E23") : null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      letterSpacing: '.02em'
    }
  }, "SRIMA MEDIC"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 14,
      color: 'rgba(255,255,255,.85)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--cyan)"
  }), " 085-509-5831"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--cyan)"
  }), " \u0E08\u2013\u0E2A 08:30\u201317:30"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 16,
    color: "var(--cyan)"
  }), " LINE Official"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--cyan)"
  }), " \u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 \u2014 \u0E23\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--text-faint)',
      marginBottom: 10
    }
  }, "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"), /*#__PURE__*/React.createElement(RegionRow, null)), /*#__PURE__*/React.createElement(PhotoSlot, {
    height: 200,
    label: "\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E33\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19 \u2014 \u0E23\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"
  })))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  StatTile,
  ServiceCard,
  Badge,
  Icon,
  HeroSlider,
  Timeline
} = window.DS;
const STATS = [['320+', 'Systems Installed'], ['150+', 'Imaging Centers'], ['20+', 'Years Experience'], ['9', 'Service Engineers']];
const SERVICES = [['ruler', 'Installation & Renovation', 'บริการออกแบบและปรับปรุงห้องตรวจโดย Sima Renovation'], ['wrench', 'Maintenance (PM/CM)', 'แผนบำรุงรักษาตามรอบ (PM) และแก้ไขเมื่อเครื่องขัดข้อง (CM)'], ['monitor-dot', 'Remote Support', 'ตรวจสอบและวินิจฉัยปัญหาเครื่องระยะไกลก่อนส่งวิศวกรเข้าหน้างาน']];
const PARTNERSHIP = [{
  year: '2021',
  title: 'Philips Partnership Excellence Award',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันชื่อรางวัลกับลูกค้า)'
}, {
  year: '2022',
  title: 'Philips Partnership Excellence Award',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันชื่อรางวัลกับลูกค้า)'
}, {
  year: '2023',
  title: 'Philips Partnership Excellence Award',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันชื่อรางวัลกับลูกค้า)'
}, {
  year: '2024',
  title: 'Philips Outstanding Performance Recognition',
  sub: '(ข้อมูลตัวอย่าง — ต้องยืนยันชื่อรางวัลกับลูกค้า)'
}];
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'ความแม่นยำเชิงคลินิก ที่ดูแลตลอดอายุการใช้งานเครื่อง'
    }, {
      title: 'Authorized Partner ของ Philips'
    }, {
      title: 'วิศวกรบริการ 9 คน ครอบคลุม 5 ภูมิภาค'
    }],
    description: "Srima-Medic \u0E08\u0E31\u0E14\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22 \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E41\u0E25\u0E30\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E21\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21 5 \u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E17\u0E31\u0E48\u0E27\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNavigate('ติดต่อเรา')
  }, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E1D\u0E48\u0E32\u0E22\u0E02\u0E32\u0E22"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('ผลิตภัณฑ์')
  }, "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32")), /*#__PURE__*/React.createElement(RegionRow, null))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, STATS.map(([v, l]) => /*#__PURE__*/React.createElement(StatTile, {
    key: l,
    value: v,
    label: l
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",
    title: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E41\u0E1A\u0E1A End-to-End",
    lead: "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08 \u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E0B\u0E31\u0E1E\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E23\u0E30\u0E22\u0E30\u0E44\u0E01\u0E25"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, SERVICES.map(([icon, title, body]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right",
      onClick: () => onNavigate('บริการและสนับสนุน')
    }, "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21")
  }, body)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoSlot, {
    height: 300,
    label: "\u0E17\u0E35\u0E21\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19 \u2014 \u0E23\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E31\u0E48\u0E27\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28",
    title: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 9 \u0E04\u0E19 \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21 5 \u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04",
    lead: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E22\u0E38\u0E14\u0E17\u0E33\u0E07\u0E32\u0E19 \u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E40\u0E2A\u0E35\u0E22\u0E44\u0E1B\u0E04\u0E37\u0E2D\u0E04\u0E34\u0E27\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E22\u0E44\u0E1B \u0E17\u0E35\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E08\u0E36\u0E07\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E15\u0E32\u0E21\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E40\u0E23\u0E47\u0E27\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['badge-check', 'Authorized Partner ของ Philips'], ['clock', 'ตอบรับคำขอบริการภายในวันทำการ'], ['file-check', 'รายงาน PM ทุกรอบพร้อมประวัติเครื่อง']].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 15,
      color: 'var(--text)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--cyan)"
  }), tx)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E04\u0E27\u0E32\u0E21\u0E23\u0E48\u0E27\u0E21\u0E21\u0E37\u0E2D",
    title: "\u0E01\u0E32\u0E23\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01 Philips",
    lead: "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E22\u0E2D\u0E21\u0E23\u0E31\u0E1A\u0E17\u0E35\u0E48 Srima-Medic \u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01 Philips \u0E43\u0E19\u0E10\u0E32\u0E19\u0E30 Authorized Partner"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      background: 'var(--cyan-tint)',
      color: 'var(--cyan-ink-on)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontSize: 13,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      marginTop: 2
    }
  }), "\u0E1B\u0E35\u0E17\u0E35\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E08\u0E32\u0E01 Company Profile \u0E41\u0E25\u0E49\u0E27 \u0E41\u0E15\u0E48\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E23\u0E32\u0E22\u0E1B\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 \u2014 \u0E23\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"), /*#__PURE__*/React.createElement(Timeline, {
    items: PARTNERSHIP,
    style: {
      maxWidth: 560
    }
  })));
}
Object.assign(window, {
  HomeScreen,
  STATS,
  SERVICES,
  PARTNERSHIP
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Layout.jsx
try { (() => {
const {
  NavBar,
  Footer,
  StickyContactCluster,
  Badge,
  Icon
} = window.DS;
const REGIONS = ['เหนือ', 'อีสาน', 'กลาง', 'ใต้', 'กรุงเทพฯ'];
function Container({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 24px',
      ...style
    }
  }, children);
}
function SectionHead({
  eyebrow,
  title,
  lead,
  align
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 32,
      textAlign: align,
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--cyan)',
      marginBottom: 10
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      lineHeight: 1.25,
      fontWeight: 600
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      marginBottom: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--text-soft)'
    }
  }, lead) : null);
}
function Section({
  children,
  tone,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tone === 'alt' ? 'var(--surface-alt)' : 'transparent',
      padding: '64px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Container, null, children));
}

/** Marine top strip above the nav: partner line + contact. */
function TopStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy)',
      color: 'rgba(255,255,255,.78)',
      fontSize: 12.5,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 14,
    color: "var(--cyan)"
  }), " Philips Authorized Partner \xB7 \u0E15\u0E31\u0E27\u0E41\u0E17\u0E19\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 13
  }), " 085-509-5831"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 13
  }), " \u0E08\u2013\u0E2A 08:30\u201317:30"))));
}
function Layout({
  page,
  onNavigate,
  children
}) {
  const [lang, setLang] = React.useState('TH');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopStrip, null), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 16,
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    active: page,
    onNavigate: onNavigate,
    lang: lang,
    onLangChange: setLang,
    style: {
      boxShadow: 'var(--shadow-md)'
    }
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(StickyContactCluster, {
    onScrollTop: () => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }));
}

/** Row of the five coverage regions. */
function RegionRow({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, REGIONS.map(r => /*#__PURE__*/React.createElement("span", {
    key: r,
    onClick: () => onSelect && onSelect(r),
    style: {
      cursor: onSelect ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r === active ? 'brand' : 'region'
  }, r))));
}

/** Placeholder frame standing in for photography the client has not supplied. */
function PhotoSlot({
  label,
  height = 260,
  overlay,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--surface-alt)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(12,58,66,.20),rgba(12,58,66,.80))'
    }
  }) : null, children ? children : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      color: overlay ? 'rgba(255,255,255,.9)' : 'var(--text-faint)',
      fontSize: 12.5,
      lineHeight: 1.6,
      padding: 20,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      marginBottom: 4
    }
  }, "PHOTO"), label));
}
Object.assign(window, {
  Container,
  Section,
  SectionHead,
  Layout,
  RegionRow,
  PhotoSlot,
  TopStrip,
  REGIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Layout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/NewsScreen.jsx
try { (() => {
const {
  Badge,
  Icon
} = window.DS;
const NEWS = [['15 ส.ค. 2569', 'Srima-Medic ติดตั้งเครื่อง MRI รุ่นใหม่ให้กับโรงพยาบาลตัวอย่าง'], ['2 ก.ค. 2569', 'เข้าร่วมงานประชุมวิชาการรังสีวิทยาแห่งประเทศไทย'], ['20 พ.ค. 2569', 'อบรม Application Training ประจำไตรมาส']];
function NewsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'ข่าวสารและกิจกรรม'
    }],
    description: "\u0E04\u0E27\u0E32\u0E21\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E2B\u0E27 \u0E07\u0E32\u0E19\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E02\u0E2D\u0E07 Srima-Medic"
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      background: 'var(--cyan-tint)',
      color: 'var(--cyan-ink-on)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontSize: 13,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      marginTop: 2
    }
  }), "\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D\u0E02\u0E48\u0E32\u0E27\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07 \u2014 \u0E23\u0E2D\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32\u0E02\u0E48\u0E32\u0E27\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, NEWS.map(([date, title]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 68,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-alt)',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-faint)'
    }
  }, "PHOTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginTop: 4
    }
  }, title)), /*#__PURE__*/React.createElement(Badge, {
    tone: "region"
  }, "(\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07)"))))));
}
Object.assign(window, {
  NewsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/NewsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PortfolioScreen.jsx
try { (() => {
const {
  Badge,
  Icon
} = window.DS;
const SITES = [['เหนือ', 'รพ.ตัวอย่าง เชียงใหม่', 'CT'], ['กลาง', 'รพ.ตัวอย่าง กรุงเทพฯ', 'MRI'], ['ใต้', 'รพ.ตัวอย่าง สุราษฎร์ธานี', 'Cath Lab']];
function PortfolioScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'ผลงานการติดตั้ง'
    }],
    description: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22\u0E02\u0E2D\u0E07 Philips \u0E43\u0E19\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E41\u0E25\u0E30\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22\u0E17\u0E31\u0E48\u0E27\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28"
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start',
      background: 'var(--cyan-tint)',
      color: 'var(--cyan-ink-on)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontSize: 13,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    style: {
      marginTop: 2
    }
  }), "\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E41\u0E25\u0E30\u0E20\u0E32\u0E1E\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 \u2014 \u0E01\u0E32\u0E23\u0E4C\u0E14\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, SITES.map(([region, name, cat]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: 'var(--surface-alt)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-faint)'
    }
  }, "PHOTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "region"
  }, region), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--text-faint)',
      fontSize: 12
    }
  }, "(\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07)"))))))));
}
Object.assign(window, {
  PortfolioScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PortfolioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductsScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  GatedForm,
  Icon,
  HeroSlider
} = window.DS;
const CATEGORIES = ['ทั้งหมด', 'CT', 'MRI', 'Ultrasound', 'X-ray', 'Cath Lab'];
function ProductRow({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 68,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-alt)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-faint)'
    }
  }, "PHOTO"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-faint)',
      marginTop: 4
    }
  }, "\u0E23\u0E38\u0E48\u0E19\u0E41\u0E25\u0E30\u0E2A\u0E40\u0E1B\u0E01\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23 \u2014 \u0E23\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Installed \u2713"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconAfter: "arrow-right"
  }, "\u0E02\u0E2D\u0E2A\u0E40\u0E1B\u0E01"));
}
function ProductsScreen() {
  const [cat, setCat] = React.useState('ทั้งหมด');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 24
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'ผลิตภัณฑ์ภาพวินิจฉัย'
    }],
    description: "\u0E08\u0E31\u0E14\u0E08\u0E33\u0E2B\u0E19\u0E48\u0E32\u0E22\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E20\u0E32\u0E1E\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22\u0E02\u0E2D\u0E07 Philips \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07\u0E41\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32\u0E43\u0E19\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E40\u0E14\u0E35\u0E22\u0E27"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 24
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    onClick: () => setCat(c),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c === cat ? 'brand' : 'region'
  }, c))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .6fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      background: 'var(--cyan-tint)',
      color: 'var(--cyan-ink-on)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16
  }), "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E38\u0E48\u0E19\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32 \u2014 \u0E41\u0E16\u0E27\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E04\u0E23\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E27\u0E47\u0E1A \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E23\u0E38\u0E48\u0E19\u0E08\u0E23\u0E34\u0E07"), [cat === 'ทั้งหมด' ? 'หมวด CT' : 'หมวด ' + cat, 'รายการที่ 2', 'รายการที่ 3'].map((n, i) => /*#__PURE__*/React.createElement(ProductRow, {
    key: i,
    name: n
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement(GatedForm, {
    title: "Professional Access Only",
    note: "\u0E2A\u0E40\u0E1B\u0E01\u0E40\u0E0A\u0E34\u0E07\u0E25\u0E36\u0E01\u0E41\u0E25\u0E30\u0E20\u0E32\u0E1E\u0E40\u0E04\u0E2A\u0E17\u0E32\u0E07\u0E04\u0E25\u0E34\u0E19\u0E34\u0E01\u0E2A\u0E07\u0E27\u0E19\u0E44\u0E27\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E1A\u0E38\u0E04\u0E25\u0E32\u0E01\u0E23\u0E17\u0E32\u0E07\u0E01\u0E32\u0E23\u0E41\u0E1E\u0E17\u0E22\u0E4C \u0E01\u0E23\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21\u0E02\u0E32\u0E22\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E01\u0E25\u0E31\u0E1A",
    onSubmit: () => setSent(true),
    submitted: sent,
    style: {
      maxWidth: '100%'
    }
  })))));
}
Object.assign(window, {
  ProductsScreen,
  ProductRow,
  CATEGORIES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesScreen.jsx
try { (() => {
const {
  ServiceCard,
  Button,
  Badge,
  StatTile,
  Icon,
  HeroSlider
} = window.DS;
function ServicesScreen({
  onNavigate
}) {
  const [region, setRegion] = React.useState('กลาง');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement(HeroSlider, {
    slides: [{
      title: 'บริการและสนับสนุน'
    }],
    description: "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E04\u0E23\u0E1A\u0E27\u0E07\u0E08\u0E23\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E01\u0E32\u0E23\u0E15\u0E34\u0E14\u0E15\u0E31\u0E49\u0E07 \u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08 \u0E44\u0E1B\u0E08\u0E19\u0E16\u0E36\u0E07\u0E1A\u0E33\u0E23\u0E38\u0E07\u0E23\u0E31\u0E01\u0E29\u0E32\u0E41\u0E25\u0E30\u0E0B\u0E31\u0E1E\u0E1E\u0E2D\u0E23\u0E4C\u0E15\u0E23\u0E30\u0E22\u0E30\u0E44\u0E01\u0E25 \u0E42\u0E14\u0E22\u0E17\u0E35\u0E21\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E1C\u0E39\u0E49\u0E40\u0E0A\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E32\u0E0D\u0E02\u0E2D\u0E07 Srima-Medic"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "ruler",
    title: "Installation & Renovation",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right"
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")
  }, "\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E2B\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E27\u0E08\u0E42\u0E14\u0E22 Sima Renovation \u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E07\u0E32\u0E19\u0E42\u0E04\u0E23\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07 \u0E23\u0E30\u0E1A\u0E1A\u0E44\u0E1F \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E23\u0E31\u0E07\u0E2A\u0E35"), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "wrench",
    title: "Maintenance (PM/CM)",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right"
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")
  }, "\u0E41\u0E1C\u0E19 PM \u0E15\u0E32\u0E21\u0E23\u0E2D\u0E1A\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07 \u0E41\u0E25\u0E30\u0E07\u0E32\u0E19 CM \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E02\u0E31\u0E14\u0E02\u0E49\u0E2D\u0E07 \u0E42\u0E14\u0E22\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E08\u0E32\u0E01 Philips"), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "clipboard-list",
    title: "Application Training",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right"
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")
  }, "\u0E2D\u0E1A\u0E23\u0E21\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E42\u0E1B\u0E23\u0E42\u0E15\u0E04\u0E2D\u0E25\u0E15\u0E23\u0E27\u0E08\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21\u0E23\u0E31\u0E07\u0E2A\u0E35\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04\u0E41\u0E25\u0E30\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "monitor-dot",
    title: "Remote Support",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      iconAfter: "arrow-right"
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")
  }, "\u0E27\u0E34\u0E19\u0E34\u0E08\u0E09\u0E31\u0E22\u0E1B\u0E31\u0E0D\u0E2B\u0E32\u0E23\u0E30\u0E22\u0E30\u0E44\u0E01\u0E25\u0E01\u0E48\u0E2D\u0E19\u0E2A\u0E48\u0E07\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E40\u0E02\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E07\u0E32\u0E19 \u0E25\u0E14\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E2B\u0E22\u0E38\u0E14\u0E17\u0E33\u0E07\u0E32\u0E19"))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '.9fr 1.1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",
    title: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E14\u0E39\u0E17\u0E35\u0E21\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23",
    lead: "\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 9 \u0E04\u0E19\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E15\u0E32\u0E21 5 \u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04"
  }), /*#__PURE__*/React.createElement(RegionRow, {
    active: region,
    onSelect: setRegion
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: region,
    label: "\u0E20\u0E39\u0E21\u0E34\u0E20\u0E32\u0E04\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01"
  }), /*#__PURE__*/React.createElement(StatTile, {
    value: "24 \u0E0A\u0E21.",
    label: "\u0E15\u0E2D\u0E1A\u0E23\u0E31\u0E1A\u0E04\u0E33\u0E02\u0E2D\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNavigate('ติดต่อเรา')
  }, "\u0E02\u0E2D\u0E43\u0E1A\u0E40\u0E2A\u0E19\u0E2D\u0E23\u0E32\u0E04\u0E32\u0E41\u0E1C\u0E19 PM"))), /*#__PURE__*/React.createElement(PhotoSlot, {
    height: 340,
    label: "\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23 / \u0E20\u0E32\u0E1E\u0E17\u0E35\u0E21\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23 \u2014 \u0E23\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E08\u0E32\u0E01\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19",
    title: "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E17\u0E33\u0E07\u0E32\u0E19"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, [['clipboard-list', 'สำรวจหน้างาน'], ['ruler', 'ออกแบบและปรับปรุงห้อง'], ['package-check', 'ติดตั้งและทดสอบ'], ['refresh-cw', 'PM ตามรอบ']].map(([ic, tx], i) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--cyan)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-faint)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 15,
      fontWeight: 600
    }
  }, tx))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.HeroSlider = __ds_scope.HeroSlider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.GatedForm = __ds_scope.GatedForm;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.StickyContactCluster = __ds_scope.StickyContactCluster;

})();
