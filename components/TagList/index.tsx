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

const TagList = (props: any) => {
  props.taglist &&
    props.taglist.forEach((item: any) => {
      item.color = colorList[Math.floor(random(0, colorList.length))];
    });

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
          {props.taglist &&
            props.taglist.map((item: any) => {
              return (
                <Link href={`?categroy_id=${item._id}`} key={item._id}>
                  <a>
                    <Tag color={item.color}>
                      {item.name}({item.article_num})
                    </Tag>
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
