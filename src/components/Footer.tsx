const links = [
  { label: "GitHub", href: "https://github.com/Dirac1235" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/webi" },
  { label: "LeetCode", href: "https://leetcode.com/Dirac1235" },
  { label: "Telegram", href: "https://t.me/dirac02" },
  { label: "Email", href: "mailto:webimuleta01@gmail.com" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Webi Muleta. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
