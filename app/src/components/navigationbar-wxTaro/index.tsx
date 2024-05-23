import "./index.scss";
import { View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { NavigationbarWxTaro } from "./config";
import Taro from "@tarojs/taro";

const {
  title,
  logo,
  color,
  bgColor,
  bgImg,
  iconColor,
  hideHome,
  hideSeat,
  homePath,
} = NavigationbarWxTaro.config;
const NavigationbarTaro = (props) => {
  const menu = Taro.getMenuButtonBoundingClientRect();
  const [data, setData] = useState({
    menu,
    pages: Taro.getCurrentPages(),
    barH: menu.bottom + 10,
    title: props.title || title,
    logo: props.logo || logo,
    color: props.color || color,
    bgColor: props.bgColor || bgColor,
    bgImg: props.bgImg || bgImg,
    iconColor: props.iconColor || iconColor,
    hideHome: props.hideHome || hideHome,
    hideSeat: props.hideSeat || hideSeat,
    homePath: props.homePath || homePath,
  });
  useEffect(() => {
    setData({
      ...data,
      ...props,
    });
  }, [data, props]);
  return (
    <>
      <View
        className="NavigationBar"
        style={`height:${data.barH}px;${
          data.bgImg
            ? `background: url("${data.bgImg}") 0 0 / 100% auto no-repeat;`
            : data.bgColor
            ? `background:${data.bgColor};`
            : ``
        }`}
      >
        <View
          className="titleBox"
          style={`margin-top:${data.menu?.top}px;height:${data.menu?.height}px;`}
        >
          {data.pages.length > 1 ? (
            <View
              className={`box ${data.iconColor === "white" ? "box1" : ""}`}
              style={`height:${data.menu?.height}px;width:${data.menu?.width}px;border-radius:${data.menu?.height}px;`}
            >
              <View
                className={`back ${
                  data.iconColor === "black" ? "back_black" : ""
                }`}
                onClick={() => {
                  Taro.navigateBack();
                }}
                style={`width:${data.menu?.height}px;height:${data.menu?.height}px;`}
              ></View>
              <View className="line"></View>
              <View
                className={`home ${
                  data.iconColor === "black" ? "home_black" : ""
                }`}
                onClick={() => {
                  Taro.reLaunch({
                    url: data.homePath,
                  });
                }}
                style={`width:${data.menu?.height}px;height:${data.menu?.height}px;`}
              ></View>
            </View>
          ) : (
            ""
          )}
          {!data.hideHome && data.pages.length <= 1 ? (
            <View
              className={`homeBox ${
                data.iconColor === "black" ? "homeBox_black" : ""
              }`}
              onClick={() => {
                Taro.reLaunch({
                  url: data.homePath,
                });
              }}
              style={`width:${data.menu?.height}px;height:${data.menu?.height}px;`}
            ></View>
          ) : (
            ""
          )}
          {!data.title ? (
            <View
              className="logo"
              style={
                data.logo
                  ? ` background: url("${data.logo}") center center / auto 100% no-repeat;`
                  : ""
              }
            ></View>
          ) : (
            <View
              className="centerTi"
              style={data.color ? `color:${data.color};` : ""}
            >
              {data.title}
            </View>
          )}
        </View>
      </View>
      {!data.hideSeat ? (
        <View className="hideSeat" style={`height:${data.barH}px;`}></View>
      ) : (
        ""
      )}
    </>
  );
};

export default NavigationbarTaro;
