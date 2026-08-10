import Image from "next/image";
import Link from "next/link";

import {
    ArrowRight,
    BookOpen,
    Clock3,
    Newspaper,
    Sparkles,
} from "lucide-react";

import { Course } from "@/types/course";
import { blogs } from "@/data/blogs";

type Props = {
    course: Course;
};

export default function RelatedBlogs({
    course,
}: Props) {

    const relatedBlogs = course.relatedBlogs
        .map((slug) =>
            blogs.find((blog) => blog.slug === slug)
        )
        .filter(Boolean);

    if (relatedBlogs.length === 0) {
        return null;
    }

    return (

        <section className="relative overflow-hidden py-12">

            {/* Background */}

            <div className="absolute inset-0 pointer-events-none">

                <div className="absolute left-[-220px] top-[-120px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                <div className="absolute right-[-220px] bottom-[-120px] h-[470px] w-[470px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-[1450px] px-5">

                {/* Heading */}

                <div className="mx-auto max-w-[920px] text-center">

                    <div
                        className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#D4AF37]/20
              bg-[#D4AF37]/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
                    >

                        <Newspaper className="h-4 w-4" />

                        Knowledge Center

                    </div>

                    <h2
                        className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-white
              md:text-[64px]
            "
                    >
                        Learn Beyond
                        <span className="block text-[#D4AF37]">
                            The Classroom
                        </span>
                    </h2>

                    <p
                        className="
              mx-auto
              mt-8
              max-w-[860px]
              text-[18px]
              leading-[2]
              text-white/65
            "
                    >
                        Strengthen your understanding through carefully curated
                        technical articles, certification guides, networking
                        tutorials and enterprise best practices. These resources
                        help reinforce classroom concepts while preparing you for
                        certifications, interviews and real-world implementation.
                    </p>

                </div>

                {/* Blog Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

                    {relatedBlogs.map((blog) => (

                        <BlogCard
                            key={blog.slug}
                            blog={blog}
                        />

                    ))}

                </div>

                {/* Learning Resources */}

                <div
                    className="
            mt-24
            overflow-hidden
            rounded-[36px]
            border
            border-[#D4AF37]/15
            bg-[#D4AF37]/[0.05]
            p-12
          "
                >

                    <div className="grid gap-12 lg:grid-cols-[420px_1fr]">

                        <div>

                            <div
                                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#D4AF37]/20
                  bg-[#D4AF37]/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-[#D4AF37]
                "
                            >
                                Keep Learning
                            </div>

                            <h3
                                className="
                  mt-8
                  text-[40px]
                  font-black
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
                            >
                                Knowledge Builds
                                <span className="block text-[#D4AF37]">
                                    Technical Confidence
                                </span>
                            </h3>

                        </div>

                        <div>

                            <p
                                className="
                  text-[18px]
                  leading-[2]
                  text-white/72
                "
                            >
                                Great networking professionals never stop learning.
                                Reading technical documentation, industry articles and
                                certification resources helps you stay updated with new
                                technologies while improving troubleshooting,
                                architecture design and interview performance.
                            </p>

                            <div className="mt-10 grid gap-5 md:grid-cols-2">              <ResourcePoint text="Certification Preparation Articles" />

                                <ResourcePoint text="Enterprise Networking Tutorials" />

                                <ResourcePoint text="Career & Interview Guidance" />

                                <ResourcePoint text="Hands-on Lab Resources" />

                                <ResourcePoint text="Technology Trends & Best Practices" />

                                <ResourcePoint text="Continuous Professional Learning" />

                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </section>

    );

}

function BlogCard({
    blog,
}: {
    blog: {
        slug: string;
        title: string;
        excerpt: string;
        image: string;
        category: string;
        readingTime: string;
        publishedAt?: string;
    };
}) {

    return (

        <Link
            href={`/blogs/${blog.slug}`}
            aria-label={`Read ${blog.title}`}
            className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]/30
        hover:shadow-[0_25px_70px_rgba(212,175,55,.12)]
        focus:outline-none
        focus:ring-2
        focus:ring-[#D4AF37]
        focus:ring-offset-2
        focus:ring-offset-[#050505]
      "
        >

            {/* Image */}

            <div className="relative h-60 overflow-hidden">

                <Image
                    src={blog.image}
                    alt={`${blog.title} - NG Cloud Networks`}
                    fill
                    quality={90}
                    sizes="(max-width:768px) 100vw,
                 (max-width:1280px) 50vw,
                 33vw"
                    className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent" />

                <div
                    className="
            absolute
            left-6
            top-6
            inline-flex
            items-center
            rounded-full
            border
            border-[#D4AF37]/30
            bg-black/60
            px-4
            py-2
            backdrop-blur-xl
          "
                >

                    <span
                        className="
              text-xs
              font-semibold
              tracking-wide
              text-[#D4AF37]
            "
                    >
                        {blog.category}
                    </span>

                </div>

            </div>

            {/* Content */}

            <div className="p-8">

                <div className="flex items-center gap-4 text-sm text-white/55">

                    <div className="flex items-center gap-2">

                        <Clock3 className="h-4 w-4 text-[#D4AF37]" />

                        {blog.readingTime}

                    </div>

                    {blog.publishedAt && (

                        <>

                            <span>•</span>

                            <span>{blog.publishedAt}</span>

                        </>

                    )}

                </div>

                <h3
                    className="
            mt-5
            text-[28px]
            font-black
            leading-[1.2]
            tracking-[-0.03em]
            text-white
            transition-colors
            duration-300
            group-hover:text-[#D4AF37]
          "
                >
                    {blog.title}
                </h3>

                <p
                    className="
            mt-5
            line-clamp-3
            text-[16px]
            leading-[1.9]
            text-white/65
          "
                >
                    {blog.excerpt}
                </p>

                <div
                    className="
            mt-8
            inline-flex
            items-center
            gap-3
            font-semibold
            text-[#D4AF37]
            transition-all
            duration-300
            group-hover:gap-5
          "
                >

                    Read Article

                    <ArrowRight
                        className="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                    />

                </div>

            </div>

        </Link>

    );

}

function ResourcePoint({
    text,
}: {
    text: string;
}) {

    return (

        <div
            className="
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
      "
        >

            <div
                className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
        "
            >

                <Sparkles
                    className="h-5 w-5 text-[#D4AF37]"
                />

            </div>

            <p
                className="
          text-[16px]
          font-medium
          text-white/75
        "
            >
                {text}
            </p>

        </div>

    );

}