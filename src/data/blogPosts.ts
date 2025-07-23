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
    title: "Collect jenkins agent java versions with Jenkins CLI and groovy",
    excerpt: "Collect jenkins agent java versions with Jenkins CLI and groovy",
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "jenkins-cli-agents-java-version",
    tags: ["jenkins", "cli", "groovy", "java"]
  },
];