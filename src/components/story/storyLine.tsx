import styles from "./story.module.css";
import Story from "./story.tsx";
import StoryScrollButton from "../menuBar/storyScrollButton.tsx";
export default function StoryLine(){
    
    function getStories() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(<Story key={`${i}`}/>);
        }
        return array;
    }
    
    return <div className={styles.storyWrapper}>
        <div className={styles.storyLine}>
            {...getStories()}
        </div>
        <StoryScrollButton direction="left"/>
        <StoryScrollButton direction="right"/>
    </div>
}