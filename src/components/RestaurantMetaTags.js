// RestaurantMetaTags.jsx
import React from "react";
import { Helmet } from "react-helmet";

const RestaurantMetaTags = () => {
  return (
    <Helmet>
      <title>
        Little Lemon - Chicago's Fresh and Flavorful Dining Experience
      </title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Little Lemon - A delightful restaurant in Chicago serving fresh and flavorful dishes with a touch of zest. Explore our menu and enjoy a vibrant dining experience."
      />
      <meta
        name="keywords"
        content="Little Lemon, restaurant, Chicago, dining, fresh food, flavorful dishes, cuisine, menu, food, eatery, local, delicious, zest"
      />
      <meta name="author" content="Little Lemon Restaurant" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta
        property="og:title"
        content="Little Lemon - Chicago's Fresh and Flavorful Dining Experience"
      />
      <meta
        property="og:description"
        content="Explore the vibrant menu at Little Lemon, a delightful restaurant in Chicago. We offer fresh and flavorful dishes with a touch of zest."
      />
      {/* <meta property="og:image" content="url-to-your-image.jpg" /> */}
      {/* Replace with the URL of your restaurant image */}
      {/* <meta property="og:url" content="http://www.yourrestaurantwebsite.com" /> */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Little Lemon - Chicago's Fresh and Flavorful Dining Experience"
      />
      <meta
        name="twitter:description"
        content="Explore the vibrant menu at Little Lemon, a delightful restaurant in Chicago. We offer fresh and flavorful dishes with a touch of zest."
      />
      {/* <meta property="twitter:image" content="url-to-your-image.jpg" /> */}
      {/* Replace with the URL of your restaurant image */}
    </Helmet>
  );
};

export default RestaurantMetaTags;
