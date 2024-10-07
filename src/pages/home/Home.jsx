import Book from "../../components/Book/Book.jsx";
import Featured from "../../components/Featured/Featured.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Section from "../../components/Section/Section.jsx";
import "./home.css";
const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[#ffffff]">
      <Section />
      <hr />
      <Featured />
      <Book />
    </div>
  );
};
export default Home;
