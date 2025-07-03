"use client";

import React, { useEffect, useState } from "react";
import "./Team.css";
import TeamCard from "../../Templates/TeamCard";
import TeamSkeleton from "../Skeletonloaders/TeamSkeleton";
import { getTeam } from "../../DAL/fetch";
import { baseUrl } from "../../Config/Config";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      const response = await getTeam();
      console.log("API Response:", response);
      if (response?.teams) {
        setTeams(response.teams);
      } else {
        throw new Error(response.message || "Failed to fetch teams");
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Team Section Description */}
      <div className="Teams-section-data">
        <h2>
          Meet our <span>team members</span>
        </h2>
        <p>
          At Zemalt, our team is the backbone of our success. We are a group of
          passionate, skilled, and results-driven professionals dedicated to
          delivering top-notch SEO, digital marketing, web development, and
          design solutions. With years of experience and industry expertise, our
          team works collaboratively to craft innovative strategies that drive
          growth, enhance visibility, and maximize ROI.
        </p>
      </div>

      {/* Team List */}
      {loading ? (
        <TeamSkeleton />
      ) : (
        teams.map((teamCategory) => (
          <div key={teamCategory.categoryName}>
            <h2 className="Team-heading">{teamCategory.categoryName}</h2>
            <div className="team-container">
              {teamCategory.members.map((member) => (
                <center key={`${member.name}-${member.role.name}`}>
                  <TeamCard
                    name={member.name}
                    role={member.role.name}
                    description={member.description}
                    image={baseUrl + member.image || "/default-profile.png"}
                    sociallinks={member.socialLinks}
                  />
                </center>
              ))}
            </div>
          </div>
        ))
      )}

      <br />
      <br />

      {/* Footer Section */}
      <center>
        <h1 className="heading-testimonial">
          Guiding Your <span> Customers </span> with <span>Ease </span>
        </h1>
        <p className="p-testimonial">
          At Zemalt, we create seamless digital experiences that help your
          customers navigate your brand effortlessly. From intuitive UI/UX
          designs to optimized SEO strategies, we ensure smooth user journeys,
          increased engagement, and higher conversions. Our expertise ensures
          your audience finds exactly what they need—quickly and efficiently.
          Let’s simplify customer interactions and drive success together!
        </p>
      </center>
      <br />
      <br />
    </>
  );
};

export default Teams;
