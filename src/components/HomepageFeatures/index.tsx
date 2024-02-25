import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Img?: string;
  description: JSX.Element;
};

const featureList: FeatureItem[] = [
  {
    title: "Easy to build and use!",
    Img: "img/gimbal_home_1.webp",
    description: (
      <>
        Gimbals are complex. We aim to provide a fully functional mechanical, electrical, and control system platform
        for hobbyist open-source gimbals. Complete Bill of Materials (BOM) and assembly instructions for building your
        own gimbal.
      </>
    ),
  },
  {
    title: "Pick your own modules",
    Img: "img/gimbal_home_2.webp",
    description: (
      <>
        Each macro systems is moduralized, but designed to work well together. Want to use the controls system, but
        bring your own mechanics? Go for it. Like the firmware, but want to adapt it to a different architecture? We'll
        try and make that acheivable!
      </>
    ),
  },
  {
    title: "Affordable",
    Img: "img/gimbal_home_3.webp",
    description: (
      <>
        There's no such thing as a hobbyist gimbal. There are industrial gimbals, and ad-hoc designs only. Our designs
        should use commodity harward, commodity electronics, and open software.
      </>
    ),
  },
  {
    title: "Community driven",
    Img: "img/gimbal_home_1.webp",
    description: (
      <>
        Mechatronics need multiple skillsets. The best designs come from community collaboration. Join in the
        conversation.
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description }: FeatureItem) {
  useBaseUrl;
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Img ? (
          <img className={styles.featureSvg} src={useBaseUrl(Img)} alt={title} role="img" />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
