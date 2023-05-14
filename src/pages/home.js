import React, { useEffect, useRef, Fragment } from "react";
import Editor from "../components/Editor";
import { Menu, Transition } from "@headlessui/react";
import { AiFillPicture } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { TiSocialAtCircular } from "react-icons/ti";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="my-20 w-[662px] h-[813px] border border-[#e7f1e9] px-4">
          <div className="text-2xl font-bold mt-16 font-sans mb-4">
            This is the title
          </div>
          <div>
            <Editor />
            <div className="w-[32px] h-[32px] rounded-full bg-[#e7f1e9] flex items-center justify-center text-xl my-2">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex items-center">
                    +
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-left absolute left-0 mt-2 w-[277px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-20">
                    <p className="text-xs p-1">EMBEDS</p>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 hover:bg-[#e7f1e9] cursor-pointer"
                                : "text-gray-700",
                              "flex flex-col px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex items-center font-semibold text-[#010E05]">
                              <span>
                                <AiFillPicture className="mr-2" />
                              </span>
                              Picture
                            </div>
                            <div className="relative left-6 text-[10px]">
                              jpeg,png
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 hover:bg-[#e7f1e9] cursor-pointer"
                                : "text-gray-700",
                              "flex flex-col px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex items-center font-semibold text-[#010E05]">
                              <span>
                                <IoVideocam className="mr-2" />
                              </span>
                              Video
                            </div>
                            <div className="relative left-6 text-[10px]">
                              JW Player, Youtube, Vimeo
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900 hover:bg-[#e7f1e9] cursor-pointer"
                                : "text-gray-700",
                              "flex flex-col px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex items-center font-semibold text-[#010E05]">
                              <span>
                                <TiSocialAtCircular className="mr-2" />
                              </span>
                              Social
                            </div>
                            <div className="relative left-6 text-[10px]">
                              Instagram,Twitter,Tiktok,Snapchat,Facebook
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end">
            <div className="w-full h-[27px] border border-[#e7f1e9] rounded text-xs flex items-end justify-end px-4">
              1/1000 words
            </div>
            <div className="my-4 w-[62px] h-[35px] rounded bg-[#0A7227] flex items-center justify-center py-2 text-white">
              Post
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
