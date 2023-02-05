import Link from "next/link";
import { Row } from "./layout/grid";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Row background="accent">
      <p>&copy; 2019–{year}.</p>{" "}
      <p>
        Stork is maintained by{" "}
        <Link href="https://jameslittle.me">James Little</Link>, who&apos;s
        really excited that you&apos;re checking it out.
      </p>
      <p>
        This site is open source. Please{" "}
        <Link href="https://github.com/stork-search/site">file a bug</Link> if
        you see something confusing or incorrect.
      </p>
      <p>
        Logo art by{" "}
        <Link href="https://www.instagram.com/bruno_monts/">Bruno Monts</Link>,
        with special thanks to the{" "}
        <Link href="https://fission.codes">fission.codes</Link> team.
        <br />
        Please contact James Little before using the logo for anything.
      </p>
    </Row>
  );
};
