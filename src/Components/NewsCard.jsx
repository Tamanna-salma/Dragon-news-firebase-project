import React from "react";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    id,
    others,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-600">
          <FaShareAlt />
        </button>
      </div>

      {/* Body */}
      <div className="card-body py-3">
        <h3 className="card-title text-lg leading-snug hover:text-primary cursor-pointer">
          {title}
        </h3>

        <figure className="my-2">
          <img
            src={thumbnail_url}
            alt="news thumbnail"
            className="w-full h-48 object-cover rounded-md"
          />
        </figure>

        <p className="text-sm text-gray-600">
          {details.slice(0, 160)}...
          <Link to={`/newsDetails/${id}`} className="font-medium text-orange-500 cursor-pointer hover:underline">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-3">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < Math.round(rating ?.number) ? "text-orange-500" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-gray-600 font-medium text-sm">
            {rating?.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
