import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { getPostBySlug, blogPosts } from '../data/blogPosts';
import { useSEO } from '../hooks/useSEO';
import { postSEO, notFoundSEO } from '../seo/pages';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug ?? '');

  useSEO(post ? postSEO(post) : notFoundSEO());

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="pt-40 pb-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#8FA69E] hover:text-[#E3A857] transition-colors mb-10 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all guides
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block text-[#E3A857] font-bold tracking-widest uppercase mb-6 text-sm">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F6EFE4] mb-6 leading-[1.1]">
            {post.title}
          </h1>

          <div className="rounded-3xl overflow-hidden mb-10 h-64 md:h-80">
            <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" loading="eager" />
          </div>

          <div className="flex items-center gap-6 text-sm text-[#8FA69E] font-medium uppercase tracking-wider mb-12 pb-12 border-b border-white/5">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="space-y-6">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-2xl md:text-3xl font-bold text-[#F6EFE4] pt-6">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul key={i} className="space-y-3 pl-1">
                    {block.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-lg text-[#B9CFC9] font-light leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#E3A857] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-lg text-[#B9CFC9] font-light leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#0B4F4A] to-[#062420] border border-[#E3A857]/15 rounded-[32px] p-10 text-center">
            <h3 className="text-2xl font-bold text-[#F6EFE4] mb-3">Got a question of your own?</h3>
            <p className="text-[#B9CFC9] font-light mb-6">
              Get in touch and we'll point you toward the right next step for your situation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E3A857] text-[#062420] font-black rounded-full hover:bg-white transition-all"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {otherPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8FA69E] mb-6">Keep Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group block bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.05] transition-all"
                >
                  <h4 className="font-bold text-[#F6EFE4] group-hover:text-[#E3A857] transition-colors">{p.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
