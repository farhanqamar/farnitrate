import { FaPenClip } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import React,{ useState } from "react";

export const countryCodes = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahamas", code: "+1-242" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Burundi", code: "+257" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Cape Verde", code: "+238" },
  { name: "Central African Republic", code: "+236" },
  { name: "Chad", code: "+235" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Comoros", code: "+269" },
  { name: "Congo", code: "+242" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Djibouti", code: "+253" },
  { name: "Dominica", code: "+1-767" },
  { name: "Dominican Republic", code: "+1-809" },
  { name: "Ecuador", code: "+593" },
  { name: "Egypt", code: "+20" },
  { name: "El Salvador", code: "+503" },
  { name: "Equatorial Guinea", code: "+240" },
  { name: "Eritrea", code: "+291" },
  { name: "Estonia", code: "+372" },
  { name: "Eswatini", code: "+268" },
  { name: "Ethiopia", code: "+251" },
  { name: "Fiji", code: "+679" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Gabon", code: "+241" },
  { name: "Gambia", code: "+220" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Grenada", code: "+1-473" },
  { name: "Guatemala", code: "+502" },
  { name: "Guinea", code: "+224" },
  { name: "Guinea-Bissau", code: "+245" },
  { name: "Guyana", code: "+592" },
  { name: "Haiti", code: "+509" },
  { name: "Honduras", code: "+504" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Jamaica", code: "+1-876" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kiribati", code: "+686" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Laos", code: "+856" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Lesotho", code: "+266" },
  { name: "Liberia", code: "+231" },
  { name: "Libya", code: "+218" },
  { name: "Liechtenstein", code: "+423" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Madagascar", code: "+261" },
  { name: "Malawi", code: "+265" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mali", code: "+223" },
  { name: "Malta", code: "+356" },
  { name: "Marshall Islands", code: "+692" },
  { name: "Mauritania", code: "+222" },
  { name: "Mauritius", code: "+230" },
  { name: "Mexico", code: "+52" },
  { name: "Micronesia", code: "+691" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Mozambique", code: "+258" },
  { name: "Myanmar", code: "+95" },
  { name: "Namibia", code: "+264" },
  { name: "Nauru", code: "+674" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nicaragua", code: "+505" },
  { name: "Niger", code: "+227" },
  { name: "Nigeria", code: "+234" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palau", code: "+680" },
  { name: "Palestine", code: "+970" },
  { name: "Panama", code: "+507" },
  { name: "Papua New Guinea", code: "+675" },
  { name: "Paraguay", code: "+595" },
  { name: "Peru", code: "+51" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Rwanda", code: "+250" },
  { name: "Saint Kitts and Nevis", code: "+1-869" },
  { name: "Saint Lucia", code: "+1-758" },
  { name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { name: "Samoa", code: "+685" },
  { name: "San Marino", code: "+378" },
  { name: "Sao Tome and Principe", code: "+239" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Senegal", code: "+221" },
  { name: "Serbia", code: "+381" },
  { name: "Seychelles", code: "+248" },
  { name: "Sierra Leone", code: "+232" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "Solomon Islands", code: "+677" },
  { name: "Somalia", code: "+252" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "South Sudan", code: "+211" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sudan", code: "+249" },
  { name: "Suriname", code: "+597" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Tajikistan", code: "+992" },
  { name: "Tanzania", code: "+255" },
  { name: "Thailand", code: "+66" },
  { name: "Togo", code: "+228" },
  { name: "Tonga", code: "+676" },
  { name: "Trinidad and Tobago", code: "+1-868" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Tuvalu", code: "+688" },
  { name: "Uganda", code: "+256" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uruguay", code: "+598" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vanuatu", code: "+678" },
  { name: "Vatican City", code: "+39" },
  { name: "Venezuela", code: "+58" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
  { name: "Zambia", code: "+260" },
  { name: "Zimbabwe", code: "+263" },
];
interface DropDownOption {
  options: string[];
}

const NewCustomer = () => {
  const [isChcked, setIsChcked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChcked(!isChcked);
  };

  const [selectedName, setSelectedName] = useState("");
  const [showDropdonName, setShowDropdonName] = useState(false);

  const handleSelectName = (name: string) => {
    setSelectedName(name);
    setShowDropdonName(false);
  };
  const [selectedCod, setSelectedCod] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelectCod = (code: string) => {
    setSelectedCod(code);
    setShowDropdown(false);
  };

  const [inputValu, setInputValu] = useState("");
  const [showDropdwn, setShowDropdwn] = useState(false);

  const options = ["English [Default]"];
  const [inputValue, setInputValue] = useState("");
  const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!isNaN(Number(value)) && value.trim() !== "") {
      setIsCheckboxEnabled(true);
    } else {
      setIsCheckboxEnabled(false);
    }

    setInputValue(value);
  };

  return (
    <section className=" sm:px-5 pb-24 m-auto">
      <div className="flex justify-center">
        <div className="py-5 w-4/6">
          <h1 className="flex text-lg font-bold items-center text-black">
            <span className="p-[6px] hover:bg-[#D4D4D4] mr-2 rounded-lg cursor-pointer">
              <Link to={"/admin/customer"}>
                <MdArrowBack />
              </Link>
            </span>
            Create Customer
          </h1>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row justify-center gap-4">
        <div className="xl:w-2/5 space-y-4">
          <div className="">

            <section>
              <div>
                <div className="font-medium bg-white flex flex-col sm:rounded-t-xl p-6 border space-y-4 py-4">
                  <div>
                    <h1 className="text-base font-semibold text-black">Customer Overview</h1>
                  </div>
                  <div className="flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0">
                    <div className="flex flex-col w-full">
                      <label className="text-sm p-1" htmlFor="">
                        First Name
                      </label>
                      <input
                        className=" border border-black rounded-lg p-2 font-normal text-sm"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="text-sm p-1" htmlFor="">
                        Last Name
                      </label>
                      <input
                        className=" border border-black rounded-lg p-2 font-normal text-sm"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm p-1 " htmlFor="">
                      Language
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="border border-black rounded-lg p-2 font-normal text-sm w-full text-gray"
                        value={inputValu}
                        onClick={() => setShowDropdwn(!showDropdwn)}
                        placeholder="Select an Option"
                        readOnly
                      />
                      {showDropdwn && (
                        <div className="absolute bg-white w-full p-2 space-y-2 ">
                          {options.map((option: string, index: any) => (
                            <div
                              className="hover:bg-blue-500 border px-2 text-sm py-2 hover:text-black p-1 rounded-lg"
                              key={index}
                              onClick={() => {
                                setInputValu(option);
                                setShowDropdwn(false);
                              }}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-sm font-normal text-[#737373] text-medium">
                      This customer will receive notifications in this language
                    </p>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className="text-sm p-1" htmlFor="">
                      Email
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2"
                      type="email"
                    />
                  </div>
                  <div className="">
                    <label className="text-sm p-1" htmlFor="">
                      Phone
                    </label>
                    <div className="flex space-x-2 ">
                      <div className="relative w-[80px]">
                        <input
                          type="text"
                          value={selectedCod}
                          onClick={() => setShowDropdown(!showDropdown)}
                          readOnly
                          placeholder=" code"
                          className="border border-black rounded-lg w-full p-2"
                        />

                        {showDropdown && (
                          <div className="absolute top-full left-0 w-full max-h-[200px] overflow-y-auto border border-gray-300 bg-white z-10">
                            {countryCodes.map((country, index) => (
                              <div
                                key={index}
                                onClick={() => handleSelectCod(country.code)}
                                style={{
                                  padding: "8px",
                                  cursor: "pointer",
                                  borderBottom: "1px solid #ddd",
                                }}
                              >
                                ({country.code})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        type="text"
                        className=" w-full border border-black p-1 rounded-lg"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter a number"
                      />
                    </div>
                    <div className="py-4">
                      <input
                        type="checkbox"
                        disabled={!isCheckboxEnabled}
                        id="checkbox"
                      />
                      <label
                        htmlFor="checkbox"
                        className="ml-2 text-sm text-[#737373]"
                      >
                        Customer agreed to receive SMS marketing text messages.
                      </label>
                    </div>
                  </div>
                </div>
                <div className="bg-[#F7F7F7] p-5 sm:rounded-b-xl">
                  <p className="text-sm">
                    You should ask your customers for permission before you
                    subscribe them to your marketing emails or SMS.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="">
            <section className="">
              <div className="space-y-4 p-6 sm:rounded-xl bg-white text-sm">
                <div >
                  <h1 className="text-base font-semibold text-black">Default Address</h1>
                  <p className="text-sm">The primary address of this customer</p>
                </div>
                <div className="text-sm">
                  <label className="text-sm p-1" htmlFor="">
                    Country/region
                  </label>
                  <div className="flex space-x-2 ">
                    <div className=" w-full relative space-y-4">
                      <input
                        type="text"
                        value={selectedName}
                        onClick={() => setShowDropdonName(!showDropdonName)}
                        readOnly
                        placeholder="Pakistan"
                        className="w-full p-2 border border-black rounded-lg"
                      />

                      <div className="flex flex-col w-full p-1">
                        <label htmlFor="">Harmonized System (HS) Code</label>
                        <input
                          type="text"
                          placeholder="Search By Product KeyWord Or Code"
                          className="w-full p-2 border border-black rounded-lg"
                        />
                      </div>

                      {showDropdonName && (
                        <div
                          style={{
                            position: "absolute",
                            top: "25px",
                            left: 0,
                            width: "100%",
                            maxHeight: "200px",
                            overflowY: "auto",
                            border: "1px solid #ccc",
                            backgroundColor: "#fff",
                            zIndex: 1,
                          }}
                        >
                          {countryCodes.map((country, index) => (
                            <div
                              key={index}
                              onClick={() => handleSelectName(country.name)}
                              style={{
                                width: "100%",
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              {country.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm p-1" htmlFor="">
                      First Name
                    </label>
                    <input
                      className="border border-black rounded-lg p-2"
                      type="text"
                      placeholder="e.g. Summer collection, Under $100, Staff picks"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-sm p-1" htmlFor="">
                      Last Name
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2"
                      type="text"
                      placeholder="e.g. Summer collection, Under $100, Staff picks"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col space-y-3">
                  <div className="flex flex-col">
                    <label className="text-sm p-1" htmlFor="">
                      Company
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm p-1" htmlFor="">
                      Address
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm p-1" htmlFor="">
                      Apartment, suite, etc.
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col md:space-x-2 space-y-4 md:space-y-0">
                  <div className="flex flex-col w-full">
                    <label className="text-sm p-1" htmlFor="">
                      City
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2 text-sm"
                      type="text"
                      placeholder="e.g. Summer collection, Under $100, Staff picks"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-sm p-1" htmlFor="">
                      Postal Code
                    </label>
                    <input
                      className=" border border-black rounded-lg p-2 text-sm"
                      type="text"
                      placeholder="e.g. Summer collection, Under $100, Staff picks"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm p-1" htmlFor="">
                    Phone
                  </label>
                  <div className="flex space-x-2 ">
                    <div className="relative w-[80px]">
                      <input
                        type="text"
                        value={selectedCod}
                        onClick={() => setShowDropdown(!showDropdown)}
                        readOnly
                        placeholder="country code"
                        className="border border-black rounded-lg w-full p-2"
                      />

                      {showDropdown && (
                        <div className="absolute top-full left-0 w-full max-h-[200px] overflow-y-auto border border-gray-300 bg-white z-10">
                          {countryCodes.map((country, index) => (
                            <div
                              key={index}
                              onClick={() => handleSelectCod(country.code)}
                              style={{
                                padding: "8px",
                                cursor: "pointer",
                                borderBottom: "1px solid #ddd",
                              }}
                            >
                              ({country.code})
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="text"
                      className="w-full border border-black rounded-lg p-1"
                      placeholder="Enter a number"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section>
              <div className=" font-semibold bg-white sm:rounded-xl p-4 space-y-4">
                <div>
                  <input
                    type="checkbox"
                    checked={isChcked}
                    onChange={handleCheckboxChange}
                    id="toggleCheckbox"
                  />
                  <label htmlFor="toggleCheckbox" className="p-2 text-base font-semibold">
                    Collect tax
                  </label>
                </div>

                {isChcked && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Enter some text"
                      className="p-2 border border-black outline-none w-full rounded-lg"
                    />
                    <p className="text-[#9D9D9D] text-sm">
                      Tax exemptions labeled as (N/A) are not applicable because
                      you're not collecting taxes in that region.
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>

        <div className="xl:w-1/4 space-y-4">
          <div className="bg-white p-4 sm:rounded-lg space-y-6">
            <div className="flex justify-between">
              <h1 className="text-black font-semibold">Notes</h1>
              <FaPenClip />
            </div>
            <p className="text-sm ">Notes are private and won't be shared with the customer.</p>
          </div>
          <div className="bg-white p-4 sm:rounded-lg space-y-6">
            <div className="flex justify-between">
              <h1 className="text-black font-semibold">Tags</h1>
              <FaPenClip />
            </div>
            <input
              type="text"
              className="rounded-lg w-full p-2 border border-black"
            />
          </div>

          <div className="text-end">
            <button className="bg-black text-white p-2 rounded-lg ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewCustomer;
