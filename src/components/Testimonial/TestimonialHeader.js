import { Link } from "react-router-dom";

const TestimonialHeader = () => {
  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">Testimonial</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link to={"/testimonial"}>Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={"/testimonial"}>Pages</Link>
        </li>
        <li className="breadcrumb-item active text-white">Testimonial</li>
      </ol>
    </div>
  );
};

export default TestimonialHeader;
