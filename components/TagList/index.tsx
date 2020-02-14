import { Tag, Divider } from "antd";
import styles from "./style.scss";
import cx from "classnames";
import Link from "next/link";
import { random } from "lodash";

const colorList = [
  "magenta",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "geekblue",
  "purple"
];

const linkList = [
  {
    tag: "vue"
  },
  {
    tag: "react"
  },
  {
    tag: "js"
  }
];

linkList.forEach((item: any) => {
  item.color = colorList[Math.floor(random(0, colorList.length))];
});



const TagList = () => {
  return (
    <div className={cx("comm-box", styles["tag-container"])}>
      <Divider className={cx(styles["tag-title"])}>标签云</Divider>
      <div className={cx(styles["tag-list"])}>
        {linkList.map((item: any) => {
          return (
            <Link href="/?id=dasdsa">
              <a>
                <Tag color={item.color}>{item.tag}</Tag>
              </a>
            </Link>
          );
        })}

        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </div>
    </div>
  );
};

export default TagList;
