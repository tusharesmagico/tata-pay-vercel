import FAQ from "./page-components/home/FAQ";
import Hero from "./page-components/home/Hero";
import NewWithTataPay from "./page-components/home/NewWithTataPay";
import ScanToDownload from "./page-components/home/ScanToDownload";
import HomeLayout from "./HomeLayout";
import ScrollToTop from "./common-components/ScrollToTop";


export default function Home() {
  return (
    <>
    
      <HomeLayout>
        <ScrollToTop/>
        <div>
          <Hero />
          <div className="max-w-[1440px] m-auto">
            <NewWithTataPay />
            <div className="px-[16px] lg:px-[149px]">
              <ScanToDownload />
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  );
}
