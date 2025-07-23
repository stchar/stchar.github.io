import { FileText, User, Folder } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";

const TreeNavigation = () => {
  return (
    <section className="py-8 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-prompt mb-4">
            <span className="text-accent font-mono text-lg glow-text">tree -L 2</span>
          </div>

          <div className="font-mono text-sm space-y-1">
            <div className="text-foreground">.</div>
            <div className="flex items-center text-foreground">
              <span className="text-muted-foreground">├── </span>
              <Folder className="h-4 w-4 mr-2 text-primary" />
              <a href="#posts" className="blog-link hover:text-accent transition-colors">posts/</a>
            </div>

            {blogPosts.slice(0, 6).map((post, index) => (
              <div key={post.id} className="flex items-center text-muted-foreground ml-4">
                <span className="text-muted-foreground">
                  {index === blogPosts.slice(0, 6).length - 1 ? "└── " : "├── "}
                </span>
                <FileText className="h-3 w-3 mr-2" />
                <Link
                  to={`/posts/${post.slug}`}
                  className="hover:text-foreground transition-colors cursor-pointer">
                  <span className="font-mono">{post.slug}.md</span>
                </Link>
              </div>
            ))}

            <div className="flex items-center text-foreground">
              <span className="text-muted-foreground">└── </span>
              <User className="h-4 w-4 mr-2 text-accent" />
              <a href="#about" className="blog-link hover:text-accent transition-colors">about.md</a>
            </div>
          </div>

          <div className="terminal-output mt-4">
            <p className="text-muted-foreground font-mono text-sm">
              {blogPosts.length + 1} files, 1 directory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreeNavigation;