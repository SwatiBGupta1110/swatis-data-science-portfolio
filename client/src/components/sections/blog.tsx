import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { BLOG_POSTS } from '@/lib/constants';

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sharing thoughts and insights on the latest trends in data science, machine learning, and analytics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={post.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={`${post.image}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" className="text-primary font-medium hover:underline p-0">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
