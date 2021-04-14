import React from "react";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper components
import { BANNERS_IMGS } from "../../utils/config";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Banner = () => {
  const [banners] = React.useState(BANNERS_IMGS);

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={500}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        pagination={{ clickable: true }}
      >
        {banners
          ? banners.map((banner, i) =>
              banners.length <= 1 ? (
                <div
                  className="col-12 bannerSlide"
                  style={{ backgroundImage: `url('${banner.img}')` }}
                >
                  <div className="container">
                    <h2>{banner.title}</h2>
                    {banner.description && (
                      <p>
                        {" "}
                        {banner.description.length > 170
                          ? `${banner.description.slice(0, 170)}...`
                          : banner.description}{" "}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <SwiperSlide key={i}>
                  <div
                    className="col-12 bannerSlide"
                    style={{
                      backgroundImage: `url('${banner.img}')`,
                    }}
                  >
                    <div className="blackBlur"></div>
                    <div className="container">
                      <h2>{banner.title}</h2>
                      {banner.description && (
                        <p>
                          {" "}
                          {banner.description.length > 170
                            ? `${banner.description.slice(0, 170)}...`
                            : banner.description}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              )
            )
          : null}
      </Swiper>
    </div>
  );
};

export default Banner;
