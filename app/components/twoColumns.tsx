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
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full h-full pb-16">
      {columns.map((column, index) => (
        <div
          key={index}
          className="flex-1 flex flex-col items-center justify-center"
        >
          <div
            className="w-full md:max-w-[390px] rounded-lg shadow-lg bg-white flex flex-col p-6 h-full"
          >
            {/* Heading */}
            <h3
              className="flex items-center font-montserrat justify-center text-[#4703a6] font-bold text-xl md:text-2xl leading-tight"
            >
              {column.heading}
            </h3>

            {/* List */}
            <ul className="mt-4 px-4 w-full list-disc flex-1">
              {column.items.map((item, idx) => (
                <li
                  key={idx}
                  className="text-slate-600 font-montserrat font-light text-sm md:text-base mt-2"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Optional Text */}
            {column.optionalText && (
              <p className="text-slate-600 font-montserrat font-light text-sm md:text-base mt-4">
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
