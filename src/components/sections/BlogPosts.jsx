import { useBlogsStore } from "../../useStore"
import Blog from "../Blog"

const BlogPosts = () => {
    const blogs = useBlogsStore(state => state.blogs)

    return (
        <section className="mt-38 mb-100">
            <div className="container flex flex-col gap-34">
                <div className="flex items-center flex-col gap-15">
                    <h3 className="font-bold leading-50 text-30 text-center">Our Blog Posts</h3>
                    <p className="leading-170 text-center">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
                </div>
                <div className="flex gap-40">
                    {
                        blogs.map(blog => {
                            return (
                                <Blog
                                    key={blog.title}
                                    blog={blog}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogPosts