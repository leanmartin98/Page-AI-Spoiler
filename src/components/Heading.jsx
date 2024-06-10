import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && (
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
          {text}
        </p>
      )}
    </div>
  );
};

export default Heading;
