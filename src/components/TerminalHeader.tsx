import { Terminal } from "lucide-react";

const TerminalHeader = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Terminal className="h-6 w-6 text-accent glow-text" />
            <h1 className="text-xl font-mono font-semibold">
              <span className="text-muted-foreground">user@solarized:</span>
              <span className="text-primary glow-text">~/blog</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TerminalHeader;