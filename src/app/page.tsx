import Header from "@/components/Header";
import ProjetsList from "@/components/Projets";
import GithubBtn from "@/components/GithubBtn";
import LateralBar from "@/components/LateralBar";
import { InfoBox } from "@/components/InfoBox";
import data from "@/content/main.json";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="App">
        <Header />
        <InfoBox>
          <p>Je suis à la recherche d'un stage et d'une alternance, <a href="mailto:antoine.josset35@gmail.com" target='_blank'>contactez-moi</a> !</p>
        </InfoBox>
        <section id="section1">
          <p className="desc" role="mainDesc" dangerouslySetInnerHTML={{ __html: data.desc }} />
          <div className="btn">
            <Link href="/about">{data.about}</Link>
            <svg
              width="33"
              height="16"
              viewBox="0 0 33 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.7071 8.70711C33.0976 8.31658 33.0976 7.68342 32.7071 7.29289L26.3431 0.928932C25.9526 0.538408 25.3195 0.538408 24.9289 0.928932C24.5384 1.31946 24.5384 1.95262 24.9289 2.34315L30.5858 8L24.9289 13.6569C24.5384 14.0474 24.5384 14.6805 24.9289 15.0711C25.3195 15.4616 25.9526 15.4616 26.3431 15.0711L32.7071 8.70711ZM0 9L32 9V7L0 7L0 9Z"
                fill="#FC4C2D"
              />
            </svg>
          </div>
        </section>
        <section id="section2">
          <ProjetsList />
        </section>
        <section id="section3">
          <GithubBtn
            link="https://github.com/aBgAmeuR"
            text={data["github-text"]}
          />
          <h4>©2023</h4>
        </section>
        <LateralBar text={"Work"} headerHeight={80} topHeight={80}></LateralBar>
      </div>
    </main>
  );
}
