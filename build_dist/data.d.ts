interface Props {
  /**小程序标题 */
  title?: string;
  /**标题 logo */
  logo?: string;
  /**文字颜色 */
  color?: string;
  /**北京颜色 */
  bgColor?: string;
  /**用图片当背景 */
  bgImg?: string;
  /**icon颜色 */
  iconColor?: "black" | "white";
  /**是否隐藏返回首页 */
  hideHome?: Boolean;
  /**是否隐藏填充 */
  hideSeat?: Boolean;
  /**首页默认路径 */
  homePath?: string;
}
export { Props };
