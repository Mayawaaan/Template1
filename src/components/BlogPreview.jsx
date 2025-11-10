import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const blogPostsData = [
  {
    category: 'Medical Research',
    title: 'The Future of Artificial Intelligence in Early Disease Detection',
    image: '../../blog/blog1.jpg',
    author: {
      name: 'Dr. Evelyn Reed',
      avatar: '../../doctors/doc2.jpg',
    },
    date: 'Oct 26, 2023',
  },
  {
    category: 'Wellness',
    title: '5 Simple Lifestyle Changes for a Healthier Heart',
    image: '../../blog/blog2.jpg',
    author: {
      name: 'Dr. Marcus Thorne',
      avatar: '../../doctors/doc1.jpg',
    },
    date: 'Oct 22, 2023',
  },
  {
    category: 'Technology',
    title: 'How Advanced Imaging is Revolutionizing Radiology',
    image: '../../blog/blog3.jpg',
    author: {
      name: 'Dr. Lena Petrova',
      avatar: '../../doctors/doc3.jpg',
    },
    date: 'Oct 19, 2023',
  },
];

const BlogPostCard = ({ post }) => (
  <div className="bg-black/30 rounded-xl shadow-lg overflow-hidden flex flex-col group border-2 border-transparent hover:border-royal-blue transition-all duration-300"> 
    <img className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out " src={post.image} alt={`Blog post titled: ${post.title}`} loading="lazy" />
    <div className="p-6 flex flex-col grow">
      <span className="text-sm font-semibold text-royal-blue uppercase">{post.category}</span>
      <h3 className="mt-2 text-xl font-bold text-blue-900 group-hover:text-royal-blue transition-colors duration-300"> 
        <a href="#">{post.title}</a>
      </h3>
      <div className="mt-auto pt-4 flex items-center">
        <img className="h-10 w-10 rounded-full object-cover" src={post.author.avatar} alt={`Avatar of ${post.author.name}`} />
        <div className="ml-3">
          <p className="text-sm font-semibold text-blue-900">{post.author.name}</p>
          <p className="text-sm text-silver-gray/60">{post.date}</p>
        </div>
      </div>
    </div>
  </div>
);

const BlogPreview = () => {
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        }
      });

      tl.from('.blog-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.blog-card', { opacity: 0, y: 50, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="blog-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-silver-gray/80 max-w-3xl mx-auto">
            Stay informed with the latest news, research, and health insights from our team of experts.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPostsData.map((post, index) => (
            <div className="blog-card" key={index}>
                <BlogPostCard post={post} /> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;