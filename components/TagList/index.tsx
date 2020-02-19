import { Tag, Divider } from "antd";
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
  },
  {
    tag: "vue"
  },
  {
    tag: "react"
  },
  {
    tag: "js"
  },
  {
    tag: "vue"
  },
  {
    tag: "react"
  },
  {
    tag: "js"
  },
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
    <>
      <style jsx>{`
        .tag-container {
          margin-top: 20px;
          padding: 10px;
        }
        .tag-container div {
          border-radius: 6px;
          overflow: hidden;
        }

        .tag-list {
          display: flex;
          flex-wrap: wrap;
        }
        .tag-list a {
          margin: 8px;
        }

        .tag-container :global(.ant-tag) {
          font-size: 18px;
          line-height: 29px;
          cursor: pointer;
        }
      `}</style>
      <div className={cx("comm-box", "tag-container")}>
        <Divider className={cx("tag-title")}>标签云</Divider>
        <div className={cx("tag-list")}>
          {linkList.map((item: any) => {
            return (
              <Link href="/?id=dasdsa">
                <a>
                  <Tag color={item.color}>{item.tag}</Tag>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TagList;
