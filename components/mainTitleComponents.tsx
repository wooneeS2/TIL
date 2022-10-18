import Image from 'next/image';
import styles from '../design/mainStyles.module.scss';

function MainTitleComponents() {
    return (
        <>
            <div className={styles.mainTitleDiv}>
                <p className={styles.mainTitle}>Blog</p>
                <p className={styles.subTitle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className={styles.imgDiv}>
                <Image
                    className={styles.mainImg}
                    src="https://cdn.pixabay.com/photo/2016/05/24/18/49/suitcase-1412996__480.jpg"
                    alt="mainPhoto"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </>
    );
}

export default MainTitleComponents;
