import styles from "./post.module.css"
import Post from "./post.tsx";
export default function PostScroll() {
    const testElements = [];
    for (let i = 0; i < 10; i++) {
        testElements.push(<Post key={`${i}`}/>);
    }

    return <div className={styles.postScroll}>
        {testElements}
    </div>
}