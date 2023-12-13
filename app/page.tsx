import Billboard from "./components/Billboard";
import Movies from "./components/Movies";
import Toprated from "./components/Toprated";
import Footer from "./components/Footer";
import LoadMore from "./components/LoadMore";


export default async function Home() {



  return (
    <main className="cursor-default">
      <Billboard />
      <br />
      <h1 className="p-6 text-white text-xl lg:text-3xl mx-16 font-semibold tracking-wide">Popular on Netflix</h1>
      <br />
      <Movies />
      <br />
      <h1 className="p-6 text-white text-xl lg:text-3xl mx-16 font-semibold tracking-wide">Top Rated</h1>
      <br />
      <LoadMore />
      <Footer />
    </main>
  )
}
