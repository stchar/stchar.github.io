import BlogPost from "./BlogPost";
import { blogPosts } from "@/data/blogPosts";

const BlogList = () => {
  return (
    <section id="posts" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-prompt mb-8">
            <span className="text-accent font-mono text-xl glow-text">ls -la ./posts/</span>
          </div>
          
          <div className="terminal-output mb-8">
            <p className="text-muted-foreground">
              total {blogPosts.length} posts found
            </p>
          </div>
          
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;