import Image from "next/image";
import styles from "./page.module.css";
import Baselayout from "./components/layout/Baselayout";
import AboutOne from "./components/home/AboutOne";
import MainSlider from "./components/home/MainSlider";
import FeatureOne from "./components/home/FeatureOne";
import OurServices from "./components/home/OurServices";
import WhyChoose from "./components/home/WhyChoose";
import GetInsurance from "./components/home/GetInsurance";
import CounterOne from "./components/home/CounterOne";
import TeamOne from "./components/home/TeamOne";
import Testimonials from "./components/home/Testimonials";
import RecentNews from "./components/home/RecentNews";
import Tracker from "./components/home/Tracker";
import Slider from "./components/Slider";

export default function Home() {
  const slides = [
    {
      image: '/img/about-four-img-1.jpg',
      alt: 'Slide 1',
      title: 'Welcome to Our Service',
      description: 'We offer the best solutions for your needs.'
    },
    {
      image: '/img/about-one-bg.png',
      alt: 'Slide 2',
      title: 'Our Expertise',
      description: 'Years of experience in delivering quality results.'
    },
    {
      image: '/img/main-slider-1-1.jpg',
      alt: 'Slide 3',
      title: 'Customer Satisfaction',
      description: 'Our top priority is your satisfaction.'
    }
  ];
  return (
   <Baselayout>
   <Slider slides={slides}/>
   <FeatureOne/>
    <AboutOne/>
    <OurServices/>
    <WhyChoose/>
    <GetInsurance/>
    <CounterOne/>
    <TeamOne/>
    <Testimonials/>
    <RecentNews/>
    <Tracker/>
   </Baselayout>
  );
}
