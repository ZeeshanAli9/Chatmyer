import React, { useState } from "react";
import widgetinfo from "../assets/Images/widgeinfo.svg";
import widgetgallery from "../assets/Images/widgetgallery.svg";
import addimg from "../assets/Images/add_circle.svg";
import { useNavigate } from "react-router-dom";
import { routes } from "../Routes/routes";

const WidgetAppearance = () => {
  const [color, setColor] = useState({
    primary: "#F4F1FF",
    secondary: "#7055DA",
  });
  const [uploadedImage, setUploadedImage] = useState({
    imageUrl: null,
    fileName: "",
  });

  const [greetingText, setGreetingText] = useState(false);

  const navigate = useNavigate();
  const handleColorChange = (e) => {
    const { name, value } = e.target;
    setColor((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(color);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage({
        imageUrl: URL.createObjectURL(file),
        fileName: file.name,
      });
    }
  };

  const HandleSetText = () => {
    setGreetingText(!greetingText);
    navigate(`${routes.WidgetAppearancemessage}`);
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 bg-white   min-w-[700px] border-b border-[#EBEAED]">
        <div>
          <h2 className="text-lg font-medium text-secondary-dark">
            Widget Appearance
          </h2>
        </div>
        <div>
          <span className="border border-[#E8E8E8] rounded px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-primary-lighter group transition-all text-secondary-darker text-xs">
            Test Your Widget
          </span>
        </div>
      </div>
      <div
        className="bg-custom-gradient-sec relative z-40  bg-[#FAFAFA] px-6 py-7 min-w-[700px]"
        style={{ height: `calc(100vh - 110px)` }}
      >
        <div className="grid xl:grid-cols-4 gap-2 grid-cols-2 ">
          {/* primary colorfield */}
          <div className="bg-white px-8 py-6">
            <div className="mb-2">
              <div
                className="p-1 rounded-md border-[3px]  h-[220px] flex justify-between mx-auto flex-col w-[190px] mb-4"
                style={{ borderColor: color.primary }}
              >
                <div className="flex flex-col gap-2">
                  <div
                    className=" rounded-md py-6"
                    style={{ backgroundColor: color.primary }}
                  ></div>
                  <div
                    className=" rounded-md py-6"
                    style={{ backgroundColor: color.primary }}
                  ></div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className=" h-4 w-4 rounded-[50%] basis-[18px]"
                    style={{ backgroundColor: color.primary }}
                  ></div>
                  <div
                    className=" h-5 rounded-full  w-full flex items-center justify-end"
                    style={{ backgroundColor: color.primary }}
                  >
                    <span className="bg-white h-4 w-4 block rounded-full mr-[2px]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-6 my-3">
                <h2 className="text-lg font-medium text-secondary-dark">
                  Primary colour
                </h2>
                <span>
                  <img src={widgetinfo} alt="" className="cursor-pointer" />
                </span>
              </div>
              <div className="w-full border-none h-10 rounded-md cursor-pointer">
                <input
                  type="color"
                  name="primary"
                  id=""
                  className="outline-none w-full border-none h-10 rounded-md cursor-pointer colorfield shadow-none"
                  value={color.primary}
                  onChange={handleColorChange}
                />
              </div>
            </div>
          </div>

          {/* secondary colorfield */}
          <div className="bg-white px-8 py-6">
            <div className="mb-2">
              <div
                className="p-1 rounded-md border-[3px]  h-[220px] flex justify-between mx-auto flex-col w-[190px] mb-4"
                style={{ borderColor: color.secondary }}
              >
                <div className="flex flex-col gap-2">
                  <div
                    className=" rounded-md py-12"
                    style={{ backgroundColor: color.secondary }}
                  ></div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className=" h-4 w-4 rounded-[50%] basis-[18px]"
                    style={{ backgroundColor: color.secondary }}
                  ></div>
                  <div
                    className=" h-5 rounded-full  w-full flex items-center justify-end"
                    style={{ backgroundColor: color.secondary }}
                  >
                    <span className="bg-white h-4 w-4 block rounded-full mr-[2px]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-6 my-3">
                <h2 className="text-lg font-medium text-secondary-dark">
                  Secondary colour
                </h2>
                <span>
                  <img src={widgetinfo} alt="" className="cursor-pointer" />
                </span>
              </div>
              <div className="w-full border-none h-10 rounded-md cursor-pointer">
                <input
                  type="color"
                  name="secondary"
                  id=""
                  className="outline-none w-full border-none h-10 rounded-md cursor-pointer colorfield shadow-none"
                  value={color.secondary}
                  onChange={handleColorChange}
                />
              </div>
            </div>
          </div>

          {/* picture upload */}
          <div className="bg-white px-8 py-6">
            <div className="mb-2">
              <div className="p-1 rounded-md border-[3px] border-[#F4F1FF]  h-[220px] flex justify-between mx-auto flex-col w-[190px] mb-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-[#F4F1FF] rounded-md py-10 flex items-center justify-center">
                    <img src={widgetgallery} alt="" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#F4F1FF] h-4 w-4 rounded-[50%] basis-[18px]"></div>
                  <div className="bg-[#F4F1FF] h-5 rounded-full  w-full flex items-center justify-end">
                    <span className="bg-white h-4 w-4 block rounded-full mr-[2px]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-6 my-3">
                <h2 className="text-lg font-medium text-secondary-dark">
                  Background image
                </h2>
                <span>
                  <img src={widgetinfo} alt="" className="cursor-pointer" />
                </span>
              </div>
              {uploadedImage?.fileName && (
                <div className="my-3">
                  <span className="text-sm text-secondary-lighter">
                    {uploadedImage.fileName}
                  </span>
                </div>
              )}
              <div className="w-full   rounded-md cursor-pointer border border-[#EBEAED] px-2 py-2 text-xs font-medium text-secondary-lighter flex items-center justify-center ">
                <label
                  htmlFor="upload"
                  className="text-sm text-secondary-dark cursor-pointer font-medium "
                >
                  {uploadedImage.imageUrl === null ? (
                    <div className="flex items-center gap-2">
                      <span>
                        <img src={addimg} alt="" />
                      </span>
                      <span className="text-xs font-medium text-secondary-lighter">
                        Upload new picture
                      </span>
                    </div>
                  ) : (
                    "Replace image"
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="cursor-pointer"
                    hidden
                    id="upload"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* custom welcome text */}
          <div className="bg-white px-8 py-6">
            <div className="mb-2">
              <div className="p-1 rounded-md border-[3px] border-[#F4F1FF]  h-[220px] flex justify-between mx-auto flex-col w-[190px] mb-4">
                <div className="flex flex-col gap-2">
                  <div className="bg-[#F4F1FF] rounded-md text-sm text-primary-dark font-medium flex items-center justify-center text-center px-4 py-2 h-[100px]">
                    Write something here that’ll make your reader excited...
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#F4F1FF] h-4 w-4 rounded-[50%] basis-[18px]"></div>
                  <div className="bg-[#F4F1FF] h-5 rounded-full  w-full flex items-center justify-end">
                    <span className="bg-white h-4 w-4 block rounded-full mr-[2px]"></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mt-6 my-3">
                <h2 className="text-lg font-medium text-secondary-dark">
                  Customize greeting text
                </h2>
                <span>
                  <img src={widgetinfo} alt="" className="cursor-pointer" />
                </span>
              </div>
              {greetingText && (
                <div className="my-3">
                  <span className="text-sm text-secondary-lighter">
                    Write something here that’ll make your reader excited...
                  </span>
                </div>
              )}
              <div
                className="w-full   rounded-md cursor-pointer border border-[#EBEAED] px-2 py-2 text-xs font-medium text-secondary-lighter flex items-center justify-center"
                onClick={HandleSetText}
              >
                Customize greeting text
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetAppearance;
