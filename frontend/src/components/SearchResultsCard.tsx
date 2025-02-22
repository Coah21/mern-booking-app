import { AiFillStar } from "react-icons/ai";
import { HotelType } from "../../../backend/src/shared/types";
import { Link } from "react-router-dom";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] border border-slate-300 rounded-lg p-4 gap-8">
      {/* Cột 1: Ảnh */}
      <div className="w-full h-[300px]">
        <img
          src={hotel.imageUrls[0]}
          alt={hotel.name}
          className="w-full h-full object-cover object-center rounded"
        />
      </div>

      {/* Cột 2: Thông tin */}
      <div className="flex flex-col justify-between">
        {/* Khối trên: Xếp hạng sao, loại khách sạn, tên khách sạn */}
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, idx) => (
                <AiFillStar key={idx} className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm text-gray-600">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition-colors"
          >
            {hotel.name}
          </Link>
        </div>

        {/* Khối giữa: Mô tả */}
        <div className="mt-2 line-clamp-4 text-gray-600">
          {hotel.description}
        </div>

        {/* Khối dưới: Tiện ích (facilities) và giá phòng */}
        <div className="mt-4 flex justify-between items-center">
          {/* Các tiện ích (facilities) */}
          <div className="flex gap-1 items-center flex-wrap">
            {hotel.facilities.slice(0, 3).map((facility, idx) => (
              <span
                key={idx}
                className="bg-slate-200 px-3 py-1 rounded-lg text-xs font-semibold text-gray-700"
              >
                {facility}
              </span>
            ))}
            {hotel.facilities.length > 3 && (
              <span className="text-xs text-gray-500">
                +{hotel.facilities.length - 3} more
              </span>
            )}
          </div>

          {/* Giá và nút View More nằm ngang nhau */}
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg text-gray-800 whitespace-nowrap text-sm">
              ${hotel.pricePerNight}
              <span className="text-sm">/night</span>
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-blue-600 text-white px-5 py-1 rounded text-sm font-semibold hover:bg-blue-500 transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
