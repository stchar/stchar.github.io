import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags?: string[];
}

const BlogPost = ({ title, excerpt, date, readTime, slug, tags }: BlogPostProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
      <div className="p-6">
        <div className="terminal-prompt mb-3">
          <span className="text-muted-foreground font-mono text-sm">head {slug}.md</span>
        </div>

        <h2 className="text-xl font-mono font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h2>

        <div className="terminal-output mb-4">
          <p className="text-muted-foreground leading-relaxed">
            {excerpt}
          </p>
        </div>

        {tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-secondary px-2 py-1 rounded text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span className="font-mono">{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span className="font-mono">{readTime}</span>
            </div>
          </div>

          <Link
            to={`/posts/${slug}`}
            className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-colors group-hover:translate-x-1 transform duration-200">
             <span className="font-mono">read more</span>
             <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;