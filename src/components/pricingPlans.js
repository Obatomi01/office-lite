import styles from "./pricingPlans.module.css";

const PricingPlans = () => {
  return (
    <section className={styles.plans}>
      <div className={styles.plan}>
        <p className={`medium-texts ${styles["plan-type"]}`}>Basic</p>

        <div className={styles["plan--flex__container"]}>
          <div>
            <h1>Free</h1>
            <p className={`medium-texts ${styles["plan-type"]}`}>
              Up to 5 users for free
            </p>
          </div>

          <div className={styles["plan--texts__container"]}>
            <p className="small-texts">Basic document collaboration</p>
            <p className="small-texts">2 gb storage</p>
            <p className="small-texts">Great security and support</p>
          </div>
        </div>

        <button type="button" className="medium-texts normal-btn">
          Try for Free
        </button>
      </div>

      <div className={styles.plan}>
        <p className={`medium-texts ${styles["plan-type"]}`}>Pro</p>

        <div className={styles["plan--flex__container"]}>
          <div>
            <h1>$9.99</h1>
            <p className={`medium-texts ${styles["plan-type"]}`}>
              Per user, billed monthly
            </p>
          </div>

          <div className={styles["plan--texts__container"]}>
            <p className="small-texts">All essential integrations</p>
            <p className="small-texts">50 gb storage</p>
            <p className="small-texts">More control and insights</p>
          </div>
        </div>

        <button type="button" className="medium-texts normal-btn">
          Try for Free
        </button>
      </div>

      <div className={styles.plan}>
        <p className={`medium-texts ${styles["plan-type"]}`}>Ultimate</p>

        <div className={styles["plan--flex__container"]}>
          <div>
            <h1>$19.99</h1>
            <p className={`medium-texts ${styles["plan-type"]}`}>
              Per user, billed monthly
            </p>
          </div>

          <div className={styles["plan--texts__container"]}>
            <p className="small-texts">Robust work management</p>
            <p className="small-texts">100 gb storage</p>
            <p className="small-texts">VIP support</p>
          </div>
        </div>

        <button type="button" className="medium-texts normal-btn">
          Try for Free
        </button>
      </div>
    </section>
  );
};

export default PricingPlans;
