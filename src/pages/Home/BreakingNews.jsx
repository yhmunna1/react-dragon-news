import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex bg-gray-100 py-2 px-3 rounded-md">
      <button className="btn btn-error text-white">Breaking News</button>
      <Marquee pauseOnHover={true} speed={80}>
        <Link to="/" className="font-bold me-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/" className="font-bold me-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to="/" className="font-bold me-6">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
