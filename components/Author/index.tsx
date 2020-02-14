import { Avatar, Divider, Icon } from "antd";
import styles from "./style.scss";
import cx from "classnames";
import Link from 'next/link'


const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1639161_p73nzt2oicp.js"
});


const iconList = [
  {
    herf: "https://github.com/timelessover/",
    icon: "github"
  },
  {
    herf: "https://juejin.im/user/5ba431c76fb9a05cdc498586",
    icon: () => <IconFont type="icon-juejin-logo" />
  },
  {
    herf: "https://www.jianshu.com/u/0bffff8fe0d3",
    icon: () => <IconFont type="icon-jianshu1" />
  },
  {
    herf: "https://segmentfault.com/u/liuyanping",
    icon: () => <IconFont type="icon-iconsf-copy" />
  }
];



const Author = () => {
  return (
    <div className={cx("comm-box", styles["author-div"])}>
      <div>
        <Avatar
          size={100}
          src="https://avatars2.githubusercontent.com/u/34708197?s=460&v=4"
        />
      </div>
      <div className={cx(styles["author-introduction"])}>
        一枚前端程序猿，全栈开发者
        <br />
        JavaScript，Golang爱好者
        <Divider>社区账号</Divider>
        <div className={cx(styles['account-list'])}>
          {iconList.map((item,index) => {
            return (
              <Link href="">
                <a>
                  <Avatar
                    key={index}
                    size={36}
                    icon={
                      typeof item.icon === "string" ? item.icon : item.icon()
                    }
                    className={cx(styles["account"])}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Author;
