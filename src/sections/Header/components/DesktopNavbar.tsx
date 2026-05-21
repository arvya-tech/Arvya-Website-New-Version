import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { DesktopNavLinks, navLinks } from "@/sections/Header/components/DesktopNavLinks";
import { DesktopNavActions } from "@/sections/Header/components/DesktopNavActions";

export const DesktopNavbar = ({ onMenuOpen }: { onMenuOpen?: (open: boolean) => void }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [hoveredItemTitle, setHoveredItemTitle] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback(
    (label: string) => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setActiveMenu(label);
      onMenuOpen?.(true);
    },
    [onMenuOpen]
  );

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      setHoveredItemTitle(null);
      onMenuOpen?.(false);
    }, 120);
  }, [onMenuOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const activeLink = navLinks.find((l) => l.label === activeMenu && l.items);

  const displayFeature = (() => {
    if (!activeLink) return null;
    if (hoveredItemTitle) {
      const item = activeLink.items?.find((i) => i.title === hoveredItemTitle);
      if (item?.feature) return item.feature;
    }
    return activeLink.feature ?? null;
  })();

  return (
    <div onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
      {/* ── Top bar: logo + links + actions ── */}
      <nav className="hidden md:flex items-center w-full pl-5 pr-2 py-0.5 relative">
        <div className="flex items-center w-full max-w-[2000px] mx-auto">
          {/* Logo */}
          <div className="flex-1 flex justify-start min-w-0">
            <NavbarLogo />
          </div>

          {/* Nav links */}
          <div className="flex-shrink-0">
            <DesktopNavLinks
              activeMenu={activeMenu}
              onEnter={openMenu}
              onLeave={scheduleClose}
            />
          </div>

          {/* CTAs */}
          <div className="flex-1 flex justify-end min-w-0">
            <DesktopNavActions />
          </div>
        </div>
      </nav>

      {/* ── Mega-menu panel — renders INSIDE the white pill ── */}
      {activeLink && activeLink.items && (
        <div className="hidden md:block mega-menu-inner-panel">
          {/* Divider */}
          <div className="mega-menu-divider" />

          {/* Content grid — all dropdowns share the services 2-col layout */}
          <div className="mega-menu-body mega-menu-body--services">
            {/* Left: items list */}
            <div className="mega-menu-left">
              <div className="mega-menu-items mega-menu-items--services">
                {activeLink.items.map((item) => {
                  const ItemIcon = item.Icon;
                  const iconContent = (
                    <>
                      <div className={`mega-menu-icon-wrap ${item.iconBg}`}>
                        {item.imageSrc ? (
                          <img src={item.imageSrc} alt={item.title} className="w-5 h-5 object-contain" />
                        ) : ItemIcon ? (
                          <ItemIcon className={`w-5 h-5 ${item.iconColor}`} strokeWidth={2} />
                        ) : null}
                      </div>
                      <div className="mega-menu-item-text">
                        <span className="mega-menu-item-title">{item.title}</span>
                        <span className="mega-menu-item-subtitle">{item.subtitle}</span>
                      </div>
                    </>
                  );
                  const closeMenu = () => { setActiveMenu(null); onMenuOpen?.(false); };

                  if (item.external) {
                    return (
                      <a key={item.title} href={item.href} className="mega-menu-item" target="_blank" rel="noopener noreferrer" onClick={closeMenu} onMouseEnter={() => setHoveredItemTitle(item.title)}>
                        {iconContent}
                      </a>
                    );
                  }
                  return (
                    <Link key={item.title} to={item.href} className="mega-menu-item" onClick={closeMenu} onMouseEnter={() => setHoveredItemTitle(item.title)}>
                      {iconContent}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right: featured card — driven by hovered item, falls back to section default */}
            {displayFeature && (
              <a
                href={displayFeature.href}
                className="mega-menu-feature-card"
                onClick={() => { setActiveMenu(null); onMenuOpen?.(false); }}
                target={displayFeature.href.startsWith("http") ? "_blank" : undefined}
                rel={displayFeature.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <div className={`mega-menu-feature-img bg-gradient-to-b ${displayFeature.gradient}`}>
                  {displayFeature.imageSrc ? (
                    <img
                      src={displayFeature.imageSrc}
                      alt={displayFeature.title}
                      className={displayFeature.imageFit === "cover" ? "mega-menu-feature-screenshot-img" : "mega-menu-feature-logo-img"}
                    />
                  ) : (
                    <span className="mega-menu-feature-caption">{displayFeature.caption}</span>
                  )}
                  <div className="mega-menu-feature-fade" />
                </div>
                <div className="mega-menu-feature-body-inner">
                  <h4 className="mega-menu-feature-title">{displayFeature.title}</h4>
                  <p className="mega-menu-feature-desc">{displayFeature.description}</p>
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
