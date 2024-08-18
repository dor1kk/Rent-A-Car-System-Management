import React from 'react'

const Blog = () => {
  return (
    <div>
      <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">
          Welcome to Car Rental Blog
        </h2>
        <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
          Lorem ipsum dolor sit amet elit ut aliquam
        </p>
        <div className="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
          <a
            href="#"
            className="relative flex h-[500px] flex-col gap-4 rounded-md px-4 py-8 [grid-area:1/1/2/2] md:p-0 md:[grid-area:1/1/2/4]"
          >
            <div className="absolute bottom-12 left-8 z-20 flex w-56 max-w-lg flex-col items-start rounded-md bg-white p-6 sm:w-full md:bottom-[10px] md:left-[10px]">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-blue-600">
                  TIPS FOR TRAVEL
                </p>
              </div>
              <p className="mb-4 max-w-xs text-xl font-bold md:text-2xl">
              Tips for selecting the perfect rental car based on your travel needs.


              </p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Dorajet Kukaj</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
            <img
              src="https://st2.depositphotos.com/1022214/5248/i/450/depositphotos_52489449-stock-photo-man-offering-a-car-key.jpg"
              alt=""
              className="inline-block h-full w-full object-cover"
            />
          </a>
          <a
            href="#"
            className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
          >
            <img
              src="https://cms-dt.com/images/thrifty/home/Q422_HomeBanner_1900x850px_Hertz_AF_EN.jpeg"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-blue-600">
                    INSURANCE
                </p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">
              Understand your essential insurance options.

</p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Dorajet Kukaj</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
          >
            <img
              src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/rent-a-car-in-Dubai-_-Cover-5-6-23.jpg"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-blue-600">
                    BENEFITS
                </p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">
              Advantages of long-term car rentals.

</p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Dorajet Kukaj</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
          >
            <img
              src="https://www.caryaati.com/erps/images/website/blogs/blogs_24_905.jpg"
              alt=""
              className="inline-block h-60 w-full object-cover"
            />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-gray-100 px-2 py-1.5">
                <p className="text-sm font-semibold text-blue-600">
                FEATURES
                </p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">
              Essential features for your rental car.
              </p>
              <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                <p>Dorajet Kukaj</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Blog
