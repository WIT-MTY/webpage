import React from "react";

interface Column {
  heading: string;
  items: string[];
  optionalText?: string; // Optional text specific to a column
}

interface TwoColumnsProps {
  columns: Column[];
}

const TwoColumns: React.FC<TwoColumnsProps> = ({ columns }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-[50px] w-full h-full p-[19px_0_19px_19px]">
      {columns.map((column, index) => (
        <div
          key={index}
          className="flex-1 p-0 h-full flex flex-col items-center justify-center"
        >
          <div
            className="w-full h-[320px] w-[390px] rounded-[20px] shadow-[0px_4px_20px_8px_rgba(0,0,0,0.2)] bg-white flex flex-col p-6"
          >
            {/* Heading */}
            <h3
              className="flex items-center font-montserrat justify-center mt-[15px] mb-[-3px] text-[#4703a6] font-bold text-[32px] leading-[38px]"
            >
              {column.heading}
            </h3>

            {/* List */}
            <ul className="mt-[10px] px-[40px] w-full list-disc">
              {column.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-slate-600 font-montserrat font-thin text-base mt-3 ##1a1b1f"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Optional Text */}
            {column.optionalText && (
              <p className="text-slate-600 font-montserrat font-thin text-base mt-3 ##1a1b1f">
                {column.optionalText}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwoColumns;
