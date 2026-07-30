import { notFound } from "next/navigation";

import Link from "next/link";
import Script from "next/script";

import {
  ArrowLeft,
  CalendarDays,
  Clock3,
  User2,
} from "lucide-react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import { blogs } from "@/data/blogs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export async function generateMetadata({
  params,
}: Props) {

  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,

    keywords: blog.tags,

    authors: [
      {
        name: blog.author,
      },
    ],

    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.image],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle,
      description: blog.seoDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Props) {

  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }
  const baseUrl = "https://ngcloudnetworks.com";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.seoDescription,
    image: [`${baseUrl}${blog.image}`],
    datePublished: blog.publishedDate,
    dateModified: blog.publishedDate,
    author: {
      "@type": "Organization",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NG Cloud Networks",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${blog.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${baseUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${baseUrl}/blog/${blog.slug}`,
      },
    ],
  };
  const faqSchema = blog.faq
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: blog.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    }
    : null;

  return (
    <main className="overflow-hidden bg-[#050505] text-white">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          <div className="absolute left-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

          <div className="absolute right-[-120px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[130px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-[1100px] px-5">

          {/* BACK BUTTON */}
          <Link
            href="/blog"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-white/60
              transition-all
              duration-300
              hover:text-[#D4AF37]
            "
          >

            <ArrowLeft className="h-4 w-4" />

            Back to Blogs

          </Link>

          {/* CATEGORY */}
          <div
            className="
              mt-10
              inline-flex
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-4
              py-2
              text-[12px]
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
          >
            {blog.category}
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[68px]
            "
          >
            {blog.title}
          </h1>

          {/* EXCERPT */}
          <p
            className="
              mt-8
              max-w-[900px]
              text-[18px]
              leading-[2]
              text-white/60
            "
          >
            {blog.excerpt}
          </p>

          {/* META */}
          <div className="mt-10 flex flex-wrap gap-4">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
              "
            >

              <CalendarDays className="h-4 w-4 text-[#D4AF37]" />

              <span className="text-sm text-white/75">
                {blog.publishedDate}
              </span>

            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
              "
            >

              <Clock3 className="h-4 w-4 text-[#D4AF37]" />

              <span className="text-sm text-white/75">
                {blog.readTime}
              </span>

            </div>

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
              "
            >

              <User2 className="h-4 w-4 text-[#D4AF37]" />

              <span className="text-sm text-white/75">
                {blog.author}
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="relative pb-28">

        <div className="mx-auto max-w-[1100px] px-5">

          <div
            className="
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-2xl
              md:p-12
            "
          >

            <div
              className="
    prose
    prose-invert
    max-w-none
    prose-a:text-[#D4AF37]
    prose-a:no-underline
    hover:prose-a:underline
  "
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
            />

            {/* TAGS */}
            <div className="mt-12 flex flex-wrap gap-3">

              {blog.tags.map((tag, index) => (

                <div
                  key={index}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-2
                    text-[13px]
                    text-white/70
                  "
                >
                  {tag}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}