import React from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, image_url, author, details, rating, total_view, _id } = news;
  return (
    <div className="border mb-5">
      <div className="flex gap-3 bg-base-200 p-3">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={author.img} alt="" />
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-base text-gray-600">
            {author.name}
          </h5>
          <h5 className="text-sm text-gray-600">{author.published_date}</h5>
        </div>
      </div>
      <div className="card card-compact bg-base-100 my-5 px-3">
        <h2 className="card-title font-bold text-gray-700">{title}</h2>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div>
          {details.length > 200 ? (
            <p className="text-sm text-gray-600 py-3">
              {details.slice(0, 150)}{" "}
              <Link to={`/news/${_id}`} className=" text-blue-600">
                Read More...
              </Link>
            </p>
          ) : (
            <p className="text-sm text-gray-600 py-3">{details}</p>
          )}
          <hr className="my-2" />
          <div className="flex justify-between px-2">
            {/* Rating */}
            <div className="rating rating-sm items-center">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-orange-400"
              />
              <p className="font-medium text-gray-600 ms-1">{rating.number}</p>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <p className="font-medium text-gray-600 ms-1">{total_view}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
