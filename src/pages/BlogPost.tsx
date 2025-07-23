import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!slug) return;

    const loadMarkdown = async () => {
      try {
        const response = await fetch(`/static/${slug}.md`);
        if (!response.ok) {
          throw new Error('Post not found');
        }
        const content = await response.text();
        setMarkdown(content);
      } catch (err) {
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="terminal-prompt mb-8">
              <span className="text-destructive font-mono text-xl">error: post not found</span>
            </div>
            <Link to="/" className="blog-link hover:text-accent transition-colors">
              <ArrowLeft className="h-4 w-4 inline mr-2" />
              back to posts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-prompt mb-8">
            <span className="text-accent font-mono text-lg glow-text">cat ./posts/{slug}.md</span>
          </div>

          <Link 
            to="/" 
            className="inline-flex items-center mb-8 blog-link hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span className="font-mono">cd ..</span>
          </Link>

          {loading && (
            <div className="terminal-output">
              <p className="text-muted-foreground font-mono">Loading post...</p>
            </div>
          )}

          {error && (
            <div className="terminal-output">
              <p className="text-destructive font-mono">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <article className="prose prose-invert max-w-none">
              <header className="mb-8 pb-8 border-b border-border">
                <h1 className="text-3xl font-bold text-foreground mb-4">{post.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground font-mono">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>
              
              <div className="markdown-content">
                <ReactMarkdown 
                  components={{
                    h1: ({children}) => <h1 className="text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0">{children}</h1>,
                    h2: ({children}) => <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{children}</h2>,
                    h3: ({children}) => <h3 className="text-lg font-medium text-foreground mt-4 mb-2">{children}</h3>,
                    p: ({children}) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
                    code: ({children}) => <code className="bg-secondary px-1 py-0.5 rounded text-sm font-mono text-accent">{children}</code>,
                    pre: ({children}) => <pre className="bg-secondary p-4 rounded-md overflow-x-auto mb-4 font-mono text-sm">{children}</pre>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-4">{children}</blockquote>,
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;