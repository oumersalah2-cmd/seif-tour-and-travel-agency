"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";

export default function TravelBlog() {
  return (
    <section id="blog" className="section-padding bg-white dark:bg-dark-500">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Travel Insights"
          title="Latest from Our Blog"
          description="Travel tips, destination guides, and inspiring stories to help you plan your next adventure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white dark:bg-dark-300 rounded-2xl overflow-hidden border border-gray-100 dark:border-dark-100 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <Link href={`#blog-${post.id}`} className="relative h-56 overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-dark-300/90 backdrop-blur-sm rounded-full text-xs font-bold text-accent-500 dark:text-accent-400">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent-400" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-accent-400" />
                    {post.readTime}
                  </div>
                </div>

                <Link href={`#blog-${post.id}`} className="block mb-3">
                  <h3 className="font-display font-bold text-xl text-primary-700 dark:text-white group-hover:text-accent-500 dark:group-hover:text-accent-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-100 mt-auto">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                    By {post.author}
                  </span>
                  <Link
                    href={`#blog-${post.id}`}
                    className="flex items-center gap-1.5 text-sm font-bold text-accent-500 dark:text-accent-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
