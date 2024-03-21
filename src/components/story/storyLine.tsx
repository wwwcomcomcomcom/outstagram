import styles from "./story.module.css";
import Story from "./story.tsx";
export default function StoryLine(){
    
    function getStories() {
        return [
            <Story/>,
            <Story/>,
            <Story/>
        ]
    }
    
    return <div className={styles.storyLine}>
        {...getStories()}
    </div>
}