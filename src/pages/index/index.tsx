import NavigationbarTaro from "@/components/navigationbar-wxTaro";
import { Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <>
      <NavigationbarTaro />
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
