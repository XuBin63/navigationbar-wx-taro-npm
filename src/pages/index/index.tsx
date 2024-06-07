import NavigationbarTaro from "@/components/navigationbar-wxTaro";
import { Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";
import { useState } from "react";

export default function Index() {
  const [title, setTitle] = useState("1111");
  useLoad(() => {
    console.log("Page loaded.");
    setTimeout(() => {
      setTitle("2222");
    }, 2000);
  });

  return (
    <>
      <NavigationbarTaro title={title} />
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: `/pages/home/index`,
          });
        }}
      >
        下个页面
      </Button>
    </>
  );
}
