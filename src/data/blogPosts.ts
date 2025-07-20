export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

export const blogPosts: BlogPostData[] = [
  {
    id: "1",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Exploring best practices for creating robust and scalable REST APIs using Node.js, Express, and modern architectural patterns.",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "scalable-apis-nodejs",
    tags: ["nodejs", "api", "backend", "architecture"]
  },
  {
    id: "2", 
    title: "Docker Containerization Strategies",
    excerpt: "Deep dive into Docker best practices, multi-stage builds, and optimization techniques for production deployments.",
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "docker-strategies",
    tags: ["docker", "devops", "containers", "deployment"]
  },
  {
    id: "3",
    title: "Database Design Patterns for Modern Apps",
    excerpt: "Understanding ACID properties, normalization vs denormalization, and choosing the right database for your use case.",
    date: "2024-01-05",
    readTime: "15 min read", 
    slug: "database-design-patterns",
    tags: ["database", "sql", "nosql", "design"]
  },
  {
    id: "4",
    title: "React Performance Optimization",
    excerpt: "Techniques for optimizing React applications: memoization, code splitting, virtual scrolling, and bundle analysis.",
    date: "2023-12-28",
    readTime: "10 min read",
    slug: "react-performance",
    tags: ["react", "frontend", "performance", "optimization"]
  },
  {
    id: "5",
    title: "Microservices vs Monolith: A Practical Guide",
    excerpt: "When to choose microservices over monolithic architecture, including real-world examples and migration strategies.",
    date: "2023-12-20",
    readTime: "14 min read",
    slug: "microservices-vs-monolith",
    tags: ["architecture", "microservices", "monolith", "system-design"]
  },
  {
    id: "6",
    title: "CI/CD Pipeline with GitHub Actions",
    excerpt: "Setting up automated testing, building, and deployment workflows using GitHub Actions and modern DevOps practices.",
    date: "2023-12-15",
    readTime: "11 min read",
    slug: "cicd-github-actions",
    tags: ["cicd", "github", "automation", "devops"]
  }
];