import React from "react";

interface ProductDetailsTableProps {
  details: {
    label: string;
    value: string;
    type: "text" | "select";
    options?: string[];
  }[];
}

const ProductDetailsTable: React.FC<ProductDetailsTableProps> = ({
  details,
}) => {
  return (
    <table className="mt-5">
      <tbody>
        {details.map((detail, index) => (
          <tr key={index} className="">
            <td className="text-gray-800 font-medium">{detail.label}</td>
            <td className=" py-2">
              {detail.type === "text" ? (
                <span className="text-gray-500">{detail.value}</span>
              ) : detail.type === "select" && detail.options ? (
                <select
                  className="text-gray-500 w-full"
                  defaultValue={detail.value}
                >
                  {detail.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <span className="text-gray-500">No options available</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductDetailsTable;
