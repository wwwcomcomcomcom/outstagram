// import Story from "../components/story/story.tsx";
import StoryLine from "../components/story/storyLine.tsx";
import Post from "../components/posting/post.tsx";
export default function HomePage(){
    return <div className="main">
        <StoryLine/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}