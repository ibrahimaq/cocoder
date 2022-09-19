
import Select from "react-select";
import { selectStyle } from "../../utils/utils";

import { categoryOptions } from "../../utils/utils";

const SelectFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Select
      value={selectedCategory}
      onChange={(selectedOption) => setSelectedCategory(selectedOption)}
      name="category"
      options={[{ value: "All", label: "All" }, ...categoryOptions]}
      className="mb-5"
      classNamePrefix="select"
      styles={selectStyle}
      menuColor='red'
      
    />
  );
};

export default SelectFilter;
