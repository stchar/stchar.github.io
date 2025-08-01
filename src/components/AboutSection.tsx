import { Github, Twitter, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-prompt mb-8">
            <span className="text-accent font-mono text-xl glow-text">whoami</span>
          </div>

          <Card className="bg-card border-border">
            <div className="p-8">
              <div className="terminal-output mb-6">
                <h2 className="text-2xl font-mono font-semibold mb-4 text-foreground">
                  Software Developer & Tech Enthusiast
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Passionate about building scalable systems, clean code, and exploring
                  the latest technologies. I write about my experiences with modern (and not so modern) Software
                  development, DevOps practices, and system (failures) architecture.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If I'm not coding then I'm sleeping just poke me with a stick.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="terminal-prompt mb-3">
                    <span className="text-primary font-mono">./skills</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      "Java/Groovy",
                      "Erlang/Elixir",
                      "Python",
                      "Go",
                      "Docker/Kubernetes",
                      "Jenkins/Gitlab CI/GitHub Actions",
                      "AWS/Azure/vSphere",
                      "GitOps/IaC"
                    ].map((skill) => (
                      <div key={skill} className="terminal-output">
                        <span className="font-mono text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="terminal-prompt mb-3">
                    <span className="text-primary font-mono">./contact</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Github, label: "github.com/stchar", href: "#" },
                      { icon: MapPin, label: "Remote", href: "#" }
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors blog-link"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="font-mono text-sm">{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;