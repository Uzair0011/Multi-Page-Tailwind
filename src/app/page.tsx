import Main from "./Components/Main1/main";
import MacPage from "./Components/MacPage/page";
import Category from "./Components/Category/page";
import New from "./Components/New/page";
import Four from "./Components/four/page";
import New2 from "./Components/New2/page";
import Sale from "./Components/Sale/page";

export default function Home() {
  return (
    <div>
      <Main />
      <MacPage />
      <Category />
      <New />
      <Four />
      <New2 />
      <Sale />
    </div>
  );
}
