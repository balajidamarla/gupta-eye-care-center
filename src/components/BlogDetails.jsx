import { useParams } from "react-router-dom";
import { BLOGS } from "../data/blogs.js";

export default function BlogDetails() {
    const { slug } = useParams();
    const blog = BLOGS.find((b) => b.slug === slug);

    if (!blog) return <div className="p-10">Blog not found</div>;
    console.log("BLOG CONTENT:", blog.content);

    return (
        <section className="py-28 px-6 max-w-4xl mx-auto">

            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

            <p className="text-sm text-gray-500 mb-6">
                {blog.author} • {blog.date}
            </p>

            {/* IMPORTANT: render HTML content */}
            <div
                className="text-gray-700 leading-7 space-y-5
  [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4
  [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-6
  [&_p]:text-base
  [&_ul]:list-disc [&_ul]:pl-6
  [&_li]:mb-2"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />


        </section>
    );
}