
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { FaCheck } from "react-icons/fa";
import "./Dashboard.css"

import React from "react";

interface DropdownItm {
  id: number;
  label: string;
}
interface DropdownItem {
  id: number;
  label: string;
  subItems: SubItem[];
}

interface SubItem {
  id: number;
  label: string;
}
interface DropdownItam {
  id: number;
  label: string;
}

const CreateBlog = () => {
  // online store
  const [inputVaalu, setInputVaalu] = useState<string>("");
  const [selectedItam, setSelectedItam] = useState<number | null>(null);
  const [isDropdownOpan, setIsDropdownOpan] = useState<boolean>(false);

  const droopdownItems: DropdownItam[] = [
    { id: 1, label: "Default Blog Posts" }
  ];

  const haandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVaalu(event.target.value);
    setIsDropdownOpan(true);
  };

  const handleDroopdownClick = (item: DropdownItam) => {
    setInputVaalu(item.label);
    setSelectedItam(item.id);
    setIsDropdownOpan(false);
  };
  const [inputVlue, setInputVlue] = useState<string>("");
  const [selectdItem, setSelectdItem] = useState<number | null>(null);
  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(null);
  const [isDropdwnOpen, setIsDropdwnOpen] = useState<boolean>(false);
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

  const dropdownItems: DropdownItem[] = [
    { id: 1, label: "Blog", subItems: [{ id: 101, label: "News" }] },
    {
      id: 2,
      label: "Action",
      subItems: [{ id: 102, label: "Create new Blog" }],
    },
  ];

  const handleInputChang = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVlue(event.target.value);
    setIsDropdwnOpen(true);
  };

  const handleDropdownClik = (items: DropdownItem) => {
    setExpandedItemId(expandedItemId === items.id ? null : items.id);
    setSelectdItem(items.id);
  };

  const handleSubItemClik = (subItem: SubItem) => {
    setInputVlue(subItem.label);
    setSelectedSubItem(subItem.id);
    setIsDropdwnOpen(false);
  };
  
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const dropdownItem: DropdownItm[] = [
    { id: 1, label: "My Store Admin" },
   
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsDropdownOpen(true);
  };

  const handleDropdownClick = (item: DropdownItm) => {
    setInputValue(item.label);
    setSelectedItem(item.id);
    setIsDropdownOpen(false);
  };

//   add excerpt
const editorRf = useRef(null);
const toolbarRf = useRef(null);
const quilInstance = useRef<Quill | null>(null); 

useEffect(() => {
  if (editorRf.current && toolbarRf.current && !quilInstance.current) {
    const toolbarOptions = [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],        
      [{ 'color': [] }, { 'background': [] }], 
      [{ 'align': [] }],                      
      ['blockquote', 'code-block'],           
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['image', 'video'],                     
      ['clean']                               
    ];

    quilInstance.current = new Quill(editorRf.current, {
      theme: 'snow',  
      modules: { toolbar: toolbarRf.current },
    });
  }

  return () => {
    if (quilInstance.current) {
      quilInstance.current = null; 
    }
  };
}, []);

  const editorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const toolbarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quillInstances = useRef<(Quill | null)[]>([]); 
  useEffect(() => {
    toolbarRefs.current.forEach((toolbarRef, index) => {
      if (
        editorRefs.current[index] &&
        toolbarRef &&
        !quillInstances.current[index]
      ) {
        quillInstances.current[index] = new Quill(editorRefs.current[index]!, {
          theme: "snow",
          modules: { toolbar: toolbarRef },
        });
      }
    });

    return () => {
      quillInstances.current.forEach((quillInstance) => {
        if (quillInstance) {
          quillInstance = null;
        }
      });
    };
  }, []);

  const createRefCallback =
    (refsArray: (HTMLDivElement | null)[], index: number) =>
    (el: HTMLDivElement | null) => {
      refsArray[index] = el;
    };

  const [editor, setEditor] = useState(false);
  const [editWebsite, setEditWebsite] = useState(false);
  return (
    <section className="flex lg:flex-row flex-col justify-center lg:space-x-3 lg:space-y-0 space-y-3">
      <div className="lg:w-2/5 space-y-3">
        <div className="flex items-center space-x-2 py-4">
          <Link to={"/admin/blog-post"}>
            <MdArrowBack className="text-xl" />
          </Link>
          <h1 className="text-xl font-bold text-black">Create Blog Post</h1>
        </div>

        <div className="bg-white px-3 py-4 rounded-lg space-y-4 border">
          <div className="flex flex-col space-y-1">
            <label htmlFor="" className="text-sm ">
              Title
            </label>
            <input type="text" className="p-2 border border-black rounded-lg" />
          </div>
          <div className="text-sm space-y-1 ">
            <h1 className=" text-black">Content</h1>
            <div className="h-auto rounded-lg shadow-md">
        <div ref={createRefCallback(toolbarRefs.current, 0)} id="toolbar-0" className="rounded-t-lg">
          <span className="ql-formats">
            <select className="ql-header">
              <option value="1"></option>
              <option value="2"></option>
              <option selected></option>
            </select>
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-image"></button>
            <button className="ql-video"></button>
            <button className="ql-clean"></button>
          </span>
        </div>
        <div ref={createRefCallback(editorRefs.current, 0)} className="h-auto rounded-b-lg"></div>
      </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg space-y-4 border">
          <div className="flex justify-between">
            <h1 className="text-base font-semibold text-black">Excerpt</h1>
            <button
              onClick={() => setEditor(!editor)}
              className="text-blue-500 text-sm font-semibold"
            >
              Add Excerpt
            </button>
          </div>
          <p className="text-sm">
            Add a summary of the post to appear on your home page or blog.
          </p>
          <div>
            {editor && (
              <div className="flex flex-col space-y-2 mt-4">
              <label className='font-semibold' htmlFor="description">Description</label>
              <textarea
                id="description-input"
                className="p-2 border border-black rounded-lg"
                rows={4}
                placeholder="Enter product description here"
              />
            </div>
            )}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg space-y-4 border">
          <div className="flex justify-between">
            <h1 className="text-base font-semibold text-black">
              Search engine listing preview
            </h1>
            <button
              onClick={() => setEditWebsite(!editWebsite)}
              className="text-blue-500 text-sm font-semibold"
            >
              Edit Website SEO
            </button>
          </div>
          <p className="text-sm border-b py-2">
            Add a title and description to see how this Blog post might appear
            in a search engine listing.
          </p>
          <div>
            {editWebsite && (
              <div className="space-y-4 text-sm">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Title</label>
                  <input
                    type="text"
                    className="p-2 border border-black rounded-lg"
                  />
                  <p className="text-sm">0 of 70 characters used</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="">Description</label>
                  <textarea
                    rows={4}
                    className="p-2 border border-black rounded-lg"
                  />
                  <p className="text-sm">0 of 320 characters used</p>
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="">URL and Handle</label>
                  <input
                    type="text"
                    className="p-2 border border-black rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:py-16 space-y-3">
        <div className="bg-white p-4 rounded-lg border space-y-1">
          <h1 className="text-sm font-semibold text-black">Featured Image</h1>
          <div className="py-2 px-0 rounded-lg border border-dashed border-black">
            <input type="file" className="py-6 px-5" />
          </div>
        </div>

        <div className="bg-[#F7F7F7] p-2 py-6 rounded-lg border space-y-3">
          <h1 className="text-sm font-semibold text-black">Organization</h1>
          <div>
            <div className="relative">
              <label className="text-sm" htmlFor="">
                Auther
              </label>
              <input
                type="text"
                className="w-full p-1 border border-black rounded-lg"
                value={inputValue}
                onChange={handleInputChange}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                placeholder="Select an option"
              />
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
                  {dropdownItem.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleDropdownClick(item)}
                      className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${
                        selectedItem === item.id ? "#f0f0f0" : "#fff"
                      }`}
                    >
                      {item.label}
                      {selectedItem === item.id && <FaCheck />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <div className="relative">
              <label className="text-base" htmlFor="">
                Blog
              </label>
              <input
                type="text"
                className="w-full p-1 border border-black rounded-lg"
                value={inputVlue}
                onChange={handleInputChang}
                onClick={() => setIsDropdwnOpen(!isDropdwnOpen)}
                placeholder="Select an option"
              />
              {isDropdwnOpen && (
                <ul className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
                  {dropdownItems.map((item) => (
                    <li key={item.id} style={{ padding: "8px" }}>
                      <div
                        onClick={() => handleDropdownClik(item)}
                        className={`p-1 cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${
                          selectdItem === item.id ? "bg-gray-200" : "bg-white"
                        }`}
                      >
                        {item.label}
                        {selectdItem === item.id && <FaCheck />}
                      </div>
                      {expandedItemId === item.id && (
                        <ul className="list-none p-0 m-0 mt-2 border-l rounded-lg border">
                          {item.subItems.map((subItem) => (
                            <li
                              key={subItem.id}
                              onClick={() => handleSubItemClik(subItem)}
                              className={`p-1 pl-6 cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${
                                selectedSubItem === subItem.id
                                  ? "bg-gray-200"
                                  : "bg-white"
                              }`}
                            >
                              {subItem.label}
                              {selectedSubItem === subItem.id && <FaCheck />}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border px-2 py-4 space-y-4">
          <h1 className="text-sm font-semibold text-black">Online Store</h1>
          <div>
            <div className="relative">
              <label className="text-sm" htmlFor="">
                Theme template
              </label>
              <input
                type="text"
                className="w-full p-1 border border-black rounded-lg"
                value={inputVaalu}
                onChange={haandleInputChange}
                onClick={() => setIsDropdownOpan(!isDropdownOpan)}
                placeholder="Select an option"
              />
              {isDropdownOpan && (
                <ul className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
                  {droopdownItems.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleDroopdownClick(item)}
                      className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${
                        selectedItam === item.id ? "#f0f0f0" : "#fff"
                      }`}
                    >
                      {item.label}
                      {selectedItam === item.id && <FaCheck />}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Link to="/admin/blogtable">
            <button className="flex m-auto bg-black/75 hover:bg-black text-sm font-bold rounded-lg px-3 py-2 text-white">
              Save
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CreateBlog;
