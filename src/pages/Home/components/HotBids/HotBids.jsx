import Container from "../../../../components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import BidsCard from "../../../../components/Cards/BidsCard/BidsCard";
import TestJson from "../../../../test-json/test.json";
import { useState } from "react";

const HotBids = () => {
  const [HotBids, setHotBids] = useState(TestJson.hotBids);
  return (
    <section className="relative py-14">
      <Container>
        <div className="relative text-center mb-10">
          <div className="flex items-center justify-center gap-1">
            <img
              src="/assets/images/icons/fire-ball.png"
              alt="icon"
              className="w-7"
            />
            <h2 className="text-3xl font-semibold">Hot Bids</h2>
          </div>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1240: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {HotBids?.map((bid) => (
              <SwiperSlide key={bid.title}>
                <BidsCard bidData={bid} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HotBids;
