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
      className="mb-10 flex flex-col max-w-[730px]  mx-6 rounded-2xl drop-shadow-2xl sm:mx-10 md:mx-20 lg:justify-center"
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
          <h4 className="m-1 text-[13px] font-extralight  capitalize">repos</h4>
          <div className="m-1 font-bold sm:text-xl">{props.public_repos}</div>
        </div>
        <div className="flex flex-col justify-center items-center mr-auto sm:items-start">
          <h4 className="m-1 text-[13px]  capitalize">followers</h4>
          <div className="m-1 font-bold sm:text-xl">{props.followers}</div>
        </div>
        <div className="flex flex-col justify-center items-center mr-auto sm:items-start">
          <h4 className="m-1 text-[13px]  capitalize">following</h4>
          <div className="m-1 font-bold sm:text-xl">{props.following}</div>
        </div>
      </div>

      <div className="flex flex-col m-6 text-sm sm:flex-row sm:m-0 sm:mx-10 sm:my-6 sm:text-base  lg:mx-12 lg:w-[65%] lg:self-end">
        <div className="flex flex-col sm:w-[50%]">
          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.location !== null ? (
                <div className="h-[20px] flex flex-row items-center">
                  <LocationIcon />
                  <div className="ml-5">{props.location}</div>
                </div>
              ) : (
                <>
                  <div
                    style={themeStyle}
                    className="h-[20px] flex flex-row items-center  opacity-50"
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
                <div className="h-[20px] flex flex-row items-center">
                  <LinkIcon />
                  <a href={props.blog} className="ml-5 hover:underline">
                    {props.blog}
                  </a>
                </div>
              ) : (
                <>
                  <div className="h-[20px] flex flex-row opacity-50 items-center">
                    <LinkIcon />
                    <div className=" ml-5 flex">Not Avaible</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.twitter_username !== null ? (
                <div className="mr-5 w-[20px] h-[20px]">
                  <TwitterIcon />
                  <div className="ml-5">{props.twitter_username}</div>
                </div>
              ) : (
                <>
                  <div
                    style={themeStyle}
                    className="h-[20px] flex flex-row items-center opacity-50"
                  >
                    <TwitterIcon />
                    <div className="ml-5 flex">Not Avaible</div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex m-2 items-center justify-start">
            <div style={themeStyle}>
              {props.company !== null ? (
                <div className="h-[20px] flex flex-row items-center">
                  <CompanyIcon />
                  <div className="ml-5">{props.company}</div>
                </div>
              ) : (
                <>
                  <div className="h-[20px] flex flex-row items-center opacity-50">
                    <CompanyIcon />
                    <div className="text-[#FFFFFF] ml-5 flex">Not Avaible</div>
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
