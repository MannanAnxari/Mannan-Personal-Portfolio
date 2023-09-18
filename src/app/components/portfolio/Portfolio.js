"use client";
import React, { useEffect, useState } from "react";
import "./portfolio.css";
// import IMG1 from "../../assets/portfolio1.jpg";
// import IMG2 from "../../assets/portfolio2.jpg";
// import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";
import { Octokit } from "octokit";
import Image from "next/image";

export const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    octokit
      .request("GET /user/repos", {
        // 100 Max
        per_page: 100,

        // use page: 2,3 for next page repos
      })
      .then((res) => {
        setRepos(res.data);
      });

  }, []);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      {repos.length ? (
        <div className="container portfolioContainer">
          {repos.map((item) => {
            return (
              <>
                {item.homepage && (
                  <>
                    <article className="portfolioItem" key={item.id}>
                      <div className="portfolioItemImg">
                        <img
                          src={`https://image.thum.io/get/auth/66698-eliteblue/https://${
                            !item.homepage.includes("https://")
                              ? item.homepage
                              : item.homepage.split("https://")[1]
                          }`}
                          alt={item.name ? item.name : "A-Mannan Repo"}
                        />
                      </div>
                      <h3>
                        {item.name
                          ?.replace(/-/gi, " ")
                          .charAt(0)
                          .toUpperCase() +
                          item.name?.replace(/-/gi, " ").slice(1)}
                      </h3>

                      <div className="portfolioItemCta">
                        <a
                          href={item.svn_url ? item.svn_url : "#"}
                          target={"_blank"}
                          className="btn view"
                        >
                          Github
                        </a>
                        <a
                          href={`https://${
                            !item.homepage.includes("https://")
                              ? item.homepage
                              : item.homepage.split("https://")[1]
                          }`}
                          target={"_blank"}
                          className="btn view btn-primary"
                        >
                          Live Demo
                        </a>
                      </div>
                    </article>
                  </>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}

      <div className="center mt-3">
        <a
          className="btn btn-primary view"
          href="//github.com/MannanAnxari"
          target="_blank"
        >
          See More
        </a>
      </div>
    </section>
  );
};
