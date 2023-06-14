import React from "react";
import dayjs from "dayjs";

import LocationIcon from "../svg/LocationIcon";
import LinkIcon from "../svg/LinkIcon";
import TwitterIcon from "../svg/TwitterIcon";
import CompanyIcon from "../svg/CompanyIcon";

function Main(props) {
  const dateFormated = dayjs(props.created_at).format("DD MMM YYYY");
  const themeStyle = props.styled;
  console.log(props.themeStyles2);
  return (
    <div
      style={themeStyle}
      className="mb-10 flex flex-col w-[730px]  mx-6 rounded-2xl drop-shadow-2xl sm:mx-10 md:mx-20 lg:justify-center font-space"
    >
      <div className="flex flex-row m-6 sm:mx-10 sm:m-0 sm:mt-10 lg:justify-between lg:mx-12 lg:">
        <div className="rounded-full ">
          <img
            src={props.avatar_url}
            className="grid rounded-full w-[70px] sm:w-[117px] md:w-[117px] mr-6 "
          />
        </div>

        <div className="w-[100%]">
          <div className="flex flex-col justify-center items-center sm:ml-10 lg:flex-row lg:justify-between lg:items-start lg:mt-2">
            <div>
              <h1
                style={props.themeStyles2}
                className="text-base font-bold !bg-transparent sm:text-2xl"
              >
                {props.name}
              </h1>
              <h3 className="text-sm sm:text-base text-[#0079FF]">
                @{props.login}
              </h3>
            </div>
            <div
              style={themeStyle}
              className="text-sm sm:text-base text-[#4B6A9B] flex lg:justify-start lg:pt-2"
            >
              <p className="flex">Joined {dateFormated}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center m-6 sm:m-4 md:mx-20 lg:mx-12 lg:w-[65%] lg:self-end">
        <h2 className="flex text-sm leading-6 sm:text-base">
          {props.bio != null
            ? props.bio
            : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
        </h2>
      </div>

      <div
        style={props.themeStyles2}
        className="flex mx-6 rounded-xl justify-start items-center sm:mx-10  lg:mx-12 lg:w-[65%] lg:self-end"
      >
        <div className="flex flex-col justify-center items-center p-3 mr-auto sm:items-start sm:ml-6">
          <h4 className="m-1 text-[13px] text-[#4B6A9B] font-thin  capitalize">
            repos
          </h4>
          <div className="m-1 font-bold sm:text-xl">{props.public_repos}</div>
        </div>
        <div className="flex flex-col justify-center items-center mr-auto sm:items-start">
          <h4 className="m-1 text-[13px] text-[#4B6A9B] capitalize">
            followers
          </h4>
          <div className="m-1 font-bold sm:text-xl">{props.followers}</div>
        </div>
        <div className="flex flex-col justify-center items-center mr-auto sm:items-start">
          <h4 className="m-1 text-[13px] text-[#4B6A9B] capitalize">
            following
          </h4>
          <div className="m-1 font-bold sm:text-xl">{props.following}</div>
        </div>
      </div>

      <div className="flex flex-col m-1 text-sm sm:flex-row sm:m-0 sm:mx-20 sm:my-6 sm:text-base  lg:mx-12 items-center justify-between lg:self-end">
        <div className="flex flex-col sm:w-[240px]">
          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.location !== null ? (
                <div className=" flex flex-row items-center">
                  <LocationIcon />
                  <div className="ml-5">{props.location}</div>
                </div>
              ) : (
                <>
                  <div
                    style={themeStyle}
                    className=" flex flex-row items-center  opacity-50"
                  >
                    <LocationIcon />
                    <div className=" flex ml-5">Not Avaible</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.blog !== null ? (
                <div className=" flex flex-row items-center">
                  <LinkIcon />
                  <a href={props.blog} className="ml-5 hover:underline">
                    {props.blog}
                  </a>
                </div>
              ) : (
                <>
                  <div className=" flex flex-row opacity-50 items-center">
                    <LinkIcon />
                    <div className=" ml-5 flex">Not Avaible</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-2 justify-center mt-2 items-start w-[240px]">
          <div className="flex-row  items-center justify-start">
            <div style={themeStyle}>
              {props.twitter_username !== null ? (
                <div className="m-8 ml-8">
                  <TwitterIcon />
                  <div className="ml-8">{props.twitter_username}</div>
                </div>
              ) : (
                <div
                  style={themeStyle}
                  className="ml-1 flex flex-row items-center justify-center opacity-50"
                >
                  <TwitterIcon />
                  <div className="ml-6 flex">Not Avaible</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.company !== null ? (
                <div className=" flex flex-row items-center justify-center">
                  <CompanyIcon />
                  <div className="ml-4 flex">{props.company}</div>
                </div>
              ) : (
                <>
                  <div className="m-2 flex flex-row items-center justify-start opacity-50">
                    <CompanyIcon />
                    <div className=" ml-5 flex">Not Avaible</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
