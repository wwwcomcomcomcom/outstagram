import styles from "./story.module.css";
import Story from "./story.tsx";
import StoryScrollButton from "../menuBar/storyScrollButton.tsx";
import {getPlatformType} from "../../utils/os.ts";
import { JSX } from "react/jsx-runtime";

export default function StoryLine() {

    function getStories() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(<Story key={`${i}`}/>);
        }
        return array;
    }

    let buttons:JSX.Element[] = [];
    if(getPlatformType() === "PC"){
        buttons = [
            <StoryScrollButton direction="left"/>,
            <StoryScrollButton direction="right"/>
        ];
    }
    
    return <div className={styles.storyWrapper}>
        <div className={styles.storyLine}>
            {...getStories()}
        </div>
        {...buttons}
    </div>
}