import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <a className="github-link" href="https://github.com/eys-man" target="_blank" rel="noreferrer">
        eys-man
      </a>
      <a className="github-link" href="https://github.com/kubana6" target="_blank" rel="noreferrer">
        kubana6
      </a>
      <a
        className="github-link"
        href="https://github.com/kira-zaytseva"
        target="_blank"
        rel="noreferrer"
      >
        kira-zaytseva
      </a>
      <a
        className="footer__school-link"
        href="https://rs.school/js/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/rs_school_js1.png"
          className="footer__school-img"
          alt=""
          width={102}
          height={38}
        />
      </a>
      <span className="footer__year">2023</span>
    </footer>
  );
};

export default Footer;
