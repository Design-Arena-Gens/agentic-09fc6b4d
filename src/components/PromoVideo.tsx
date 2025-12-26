"use client";

import styles from "./PromoVideo.module.css";

export default function PromoVideo() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.gradientSecondary} />
      <div className={styles.grid} />
      <div className={styles.glare} />

      <div className={styles.badgeStack}>
        <span className={styles.badgePrimary}>Live verification</span>
        <span className={styles.badgeSecondary}>0 skips detected</span>
      </div>

      <div className={styles.phoneShadow} />

      <div className={styles.phone}>
        <div className={styles.phoneHeader}>
          <span>NoSkip lens</span>
          <span className={styles.timer}>00:12</span>
        </div>

        <div className={styles.screen}>
          <div className={`${styles.scene} ${styles.sceneOne}`}>
            <div className={styles.cameraPreview}>
              <div className={styles.subject} />
              <div className={styles.previewOverlay} />
            </div>

            <div className={styles.sceneFooter}>
              <div>
                <p className={styles.sceneTitle}>Hydration check-in</p>
                <p className={styles.sceneSubtitle}>Pose verified · 6:35 AM</p>
              </div>
              <span className={styles.statusSuccess}>Verified</span>
            </div>
          </div>

          <div className={`${styles.scene} ${styles.sceneTwo}`}>
            <div className={styles.aiPanel}>
              <div className={styles.aiHeatmap} />
              <div className={styles.aiDetails}>
                <p className={styles.sceneTitle}>AI analysis</p>
                <p className={styles.sceneSubtitle}>Confidence score 98%</p>
                <div className={styles.scoreMeter}>
                  <div className={styles.scoreMeterFill} />
                </div>
              </div>
            </div>

            <div className={styles.sceneFooter}>
              <div>
                <p className={styles.sceneTitle}>Consistency streak</p>
                <p className={styles.sceneSubtitle}>21 days on target</p>
              </div>
              <span className={styles.statusInfo}>Synced</span>
            </div>
          </div>

          <div className={`${styles.scene} ${styles.sceneThree}`}>
            <div className={styles.rewardCard}>
              <p className={styles.sceneTitle}>Rewards unlocked</p>
              <div className={styles.rewardRow}>
                <span className={styles.rewardIcon}>Gift</span>
                <div>
                  <p className={styles.rewardTitle}>$25 digital voucher</p>
                  <p className={styles.sceneSubtitle}>Issued after 30 verified sessions</p>
                </div>
              </div>
              <div className={styles.friendsRow}>
                <span className={styles.avatar} />
                <span className={styles.avatar} />
                <span className={styles.avatar} />
                <p className={styles.sceneSubtitle}>Accountability circle cheering you on</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.progress}>
          <div className={styles.progressBar} />
        </div>
      </div>

      <div className={styles.overlayText}>
        <p className={`${styles.overlayLine} ${styles.lineOne}`}>
          Camera-verified habits, guided by AI.
        </p>
        <p className={`${styles.overlayLine} ${styles.lineTwo}`}>
          Micro-learning boosts and accountability partners keep you moving.
        </p>
        <p className={`${styles.overlayLine} ${styles.lineThree}`}>
          Earn tangible rewards when you prove every promise.
        </p>
      </div>
    </div>
  );
}
