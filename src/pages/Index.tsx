import TerminalHeader from "@/components/TerminalHeader";
import TreeNavigation from "@/components/TreeNavigation";
import BlogList from "@/components/BlogList";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TerminalHeader />
      <main>
        <TreeNavigation />
        <BlogList />
        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
