export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.github.com/dirac1235" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="webimuleta01@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Email
            </a>
            <a href="https://t.me/dirac02" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
