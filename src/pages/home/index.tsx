import NavigationbarTaro from "@/components/navigationbar-wxTaro";

const Home = () => {
  return (
    <>
      <NavigationbarTaro />
      Home
    </>
  );
};
export default Home;

definePageConfig({
  navigationStyle: "custom",
});
