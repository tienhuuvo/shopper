import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <h1>Get Exclusive Ofeers On Your Email</h1>
        <p>Subscrible to our newsLetter and stay updated</p>
        <div className="input-email">
          <input type="email" placeholder="Your Email id" />
          <button>Subscrible</button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
