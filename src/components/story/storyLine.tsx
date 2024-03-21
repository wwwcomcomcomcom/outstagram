import styles from "./story.module.css";
import Story from "./story.tsx";
export default function StoryLine(){
    
    function getStories() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(<Story/>);
        }
        return array;
    }
    
    return <div className={styles.storyWrapper}><div className={styles.storyLine}>
        {...getStories()}
    </div></div>
}