import { Avatar, Divider, Icon } from "antd";
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
    <>
      <style jsx>{`
        .author-div {
          text-align: center;
          padding: 14px;
        }

        .author-div div {
          margin-bottom: 14px;
        }

        .author-introduction {
          font-size: 16px;
          color: #999;
        }

        .account-list {
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          width: 70%;
        }
        .account {
          background-color: #999;
        }
      `}</style>
      <div className={cx("comm-box", "author-div")}>
        <div>
          <Avatar
            size={100}
            src="https://avatars2.githubusercontent.com/u/34708197?s=460&v=4"
          />
        </div>
        <div className={cx("author-introduction")}>
          一枚前端程序猿，全栈开发者
          <br />
          JavaScript，Golang爱好者
          <Divider>社区账号</Divider>
          <div className={cx("account-list")}>
            {iconList.map((item, index) => {
              return (
                <Link href="" key={index}>
                  <a>
                    <Avatar
                      size={36}
                      icon={
                        typeof item.icon === "string" ? item.icon : item.icon()
                      }
                      className={cx("account")}
                    />
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
