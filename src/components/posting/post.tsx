import styles from "./post.module.css"

export default function Post() {

    // Upload Type Test Case
    const minutesAgo = 36;

    return <div className={styles.post}>
        <div className={styles.title}>
            <div className={styles.profile}>
                <img src="/images/default-profile.png" alt="Profile Not Found"/>
            </div>
            <div className={styles.infoBox}>
                <span className={styles.infoTitle}>nmixx_official • <span style={{fontWeight:400, fontSize:"0.8rem", color:"grey"}}>{minutesAgo}분전</span></span>
            </div>
        </div>
        <div className={styles.image}></div>
        {/*<img src="public/images/default-post.png" alt="Image Loading"/>*/}
    </div>
}