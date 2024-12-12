import AboutVisaAgency from "../components/AboutVisaAgency";
import Banner from "../components/Banner";
import ChooseCountry from "../components/ChooseCountry";
import TestimonialSlider from "../components/TestimonialSlider";
import VisaCategories from "../components/VisaCategories";

export default function Home() {
  return (
    <div>
        <Banner/>
        <VisaCategories/>
        <AboutVisaAgency/>
        <ChooseCountry/>
        <TestimonialSlider/>
    </div>
  )
}
