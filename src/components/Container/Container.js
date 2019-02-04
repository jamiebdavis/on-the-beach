import React, { Component } from "react";
import HolidayCard from "../Card/Card";

class Container extends Component {
  state = {
    destinations: [
      {
        hotelName: "Costa Adeje Gran Hotel",
        location: " Costa Adeje, Tenerife",
        stars: 5,
        price: 1136.5,
        image: "../../assests/image_01.png",
        dateInfo:
          "3 July 2014 7 Days from Each Midlands, 2 Adults, 2 Children & 1 Infant",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        hotelName: "Aguamarina Gold and Hotel Apartments",
        location: " Costa Adeje, Tenerife",
        stars: 4,
        price: 499.99,
        image: "../../assests/image_02.png",
        dateInfo:
          "3 July 2014 for 7 days from Manchester, 2 Adults & 2 children",
        description:
          "Duis convallis convallis tellus id interdum velit laoreet id. Nunc vel risus commodo viverra maecenas accumsan lacus vel."
      },
      {
        hotelName: "Laguna Park II",
        location: " Costa Adeje, Tenerife",
        stars: 3,
        price: 696.8,
        image: "./../../assests/image_03.png",
        dateInfo: "27 May 2014 for 7 days from Liverpool, 2 Adults & 1 Child",
        description:
          "Fusce in lacus ullamcorper turpis pellentesque feugiat. Vivamus pulvinar urna nulla, et egestas magna lacinia non. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  };

  render() {
    let destinations = this.state.destinations.map(dest => {
      return (
        <HolidayCard
          hotelName={dest.hotelName}
          key={dest.hotelName}
          location={dest.location}
          stars={dest.stars}
          price={dest.price}
          image={dest.image}
          dateInfo={dest.dateInfo}
          description={dest.description}
        />
      );
    });

    return <div>{destinations}</div>;
  }
}

export default Container;
