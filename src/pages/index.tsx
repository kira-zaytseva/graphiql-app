import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <p>Hi</p>
      <Button onClick={() => {}} size="large">
        Get Started
      </Button>
      <Button onClick={() => {}} size="small">
        Get Started
      </Button>
      <Button onClick={() => {}} size="small" isTransparent>
        Transparent
      </Button>
      <Button onClick={() => {}} isIcon>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H18.75"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.3333 35.4166L43.75 25L33.3333 14.5833"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.75 25H18.75"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Button onClick={() => {}} size="large" isLoading>
        Get Started
      </Button>
      <Button onClick={() => {}} size="small" isLoading>
        Get Started
      </Button>
      <Button onClick={() => {}} size="small" isTransparent isLoading>
        Transparent
      </Button>
      <Button onClick={() => {}} isIcon isLoading>
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833V10.4167C6.25 9.3116 6.68899 8.25179 7.47039 7.47039C8.25179 6.68899 9.3116 6.25 10.4167 6.25H18.75"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.3333 35.4166L43.75 25L33.3333 14.5833"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.75 25H18.75"
            stroke="#E10098"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
      <Footer />
    </>
  );
};

export default Home;
