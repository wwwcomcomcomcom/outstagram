import styles from "./post.module.css"
import LikeButton from "./postComponents/likeButton.tsx";
import CommentButton from "./postComponents/commentButton.tsx";
import ShareButton from "./postComponents/shareButton.tsx";
import BookmarkButton from "./postComponents/bookmarkButton.tsx";

export default function Post() {

    // Upload Type Test Case
    const minutesAgo = 36;
    const likesAmount = 126;
    const userName = "nmixx_official";
    const explanation = "str";


    return <div className={styles.post}>
        <div className={styles.title}>
            <div className={styles.profile}>
                <img src="/images/default-profile.png" alt="Profile Not Found"/>
            </div>
            <div className={styles.infoBox}>
                <span className={styles.infoTitle}>{userName} • <span style={{fontWeight:400, fontSize:"0.8rem", color:"grey"}}>{minutesAgo}분전</span></span>
            </div>
        </div>
        <div className={styles.image}></div>
        <div className={styles.postFootBar}>
            <div className={styles.transactionBar}>
                <LikeButton className={styles.likeButton}/>
                <CommentButton className={styles.commentButton}/>
                <ShareButton className={styles.shareButton}/>
                <div className={styles.bookmarkButtonWrapper}>
                    <BookmarkButton className={styles.bookmarkButton}/>
                </div>
            </div>
            <div className={styles.likesAmount}>좋아요 {likesAmount}개</div>
            <div className={styles.explanationBox}>
                <span className={styles.userName}>{userName} </span>
                <span className={styles.explanation}>{explanation}</span>
            </div>
        </div>
        {/*<img src="public/images/default-post.png" alt="Image Loading"/>*/}
    </div>
}