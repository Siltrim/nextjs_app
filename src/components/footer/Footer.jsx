import Image from 'next/image';
import styles from './page.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>2023. All rights reserverd</div>
      <div className={styles.social}>
        <Image src="/vk.png" width={15} height={15} className={styles.icon} alt="vk" />
        <Image src="/inst.png" width={15} height={15} className={styles.icon} alt="instagram" />
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="twitter" />
        <Image src="/yt.png" width={15} height={15} className={styles.icon} alt="yt" />
      </div>
    </footer>
  );
};

export default Footer;
