import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';
import { blogIndexSEO } from '../seo/pages';

const BlogIndex: React.FC = () => {
  useSEO(blogIndexSEO());

  return (
    <section className="pt-40 pb-32 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <span className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-4 text-sm">
            Guides
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#F6EFE4] mb-6">
            Real Answers, Properly Sourced
          </h1>
          <p className="text-xl text-[#B9CFC9] font-light max-w-2xl mx-auto">
            The questions Australians actually ask before moving to Bali — answered with citations, not vibes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full bg-white/[0.03] border border-white/5 rounded-[32px] overflow-hidden hover:bg-white/[0.05] hover:border-[#E3A857]/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062420] to-transparent" />
                </div>
                <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#E3A857]/10 text-[#E3A857] text-xs font-bold uppercase tracking-widest border border-[#E3A857]/20">
                    {post.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#8FA69E] opacity-0 group-hover:opacity-100 group-hover:text-[#E3A857] transition-all" />
                </div>

                <h2 className="text-2xl font-bold text-[#F6EFE4] mb-3 leading-tight group-hover:text-[#E3A857] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#B9CFC9] font-light mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center gap-5 text-xs text-[#8FA69E] font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogIndex;
