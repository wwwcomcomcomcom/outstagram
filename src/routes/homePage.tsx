// import Story from "../components/story/story.tsx";
import StoryLine from "../components/story/storyLine.tsx";
import PostScroll from "../components/posting/postScroll.tsx";
import styles from "./home.module.css";

export default function HomePage(){
    return <div className={styles.main}>
        <StoryLine/>
        <PostScroll/>
    </div>
}