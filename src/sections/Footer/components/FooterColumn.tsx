export type FooterColumnLink = {
  label: string;
  href: string;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-y-3 w-fit">
      <h3 className="text-neutral-600 text-[12.5px] font-[625] leading-none uppercase tracking-[0.08em] w-fit">
        {props.title}
      </h3>
      <ul className="flex flex-col gap-y-2 list-none pl-0">
        {props.links.map((link) => (
          <li className="w-fit" key={`${link.href}-${link.label}`}>
            <a
              href={link.href}
              target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-stone-500 text-[16.25px] leading-snug block w-fit hover:text-indigo-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};