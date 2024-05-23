import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import "./app.scss";
import { NavigationbarWxTaro } from "./components/navigationbar-wxTaro/config";

NavigationbarWxTaro.init({
  title: "牛牛牛",
});
function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
