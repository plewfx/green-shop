import Articles from "../components/sections/Articles"
import BlogPosts from "../components/sections/BlogPosts"
import Hero from "../components/sections/Hero"
import Plants from "../components/sections/Plants"

const Home = () => {
    return (
        <>
            <Hero />
            <Plants />
            <Articles />
            <BlogPosts />
        </>
    )
}

export default Home