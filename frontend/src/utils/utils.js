export const categoryOptions = [
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Database", label: "Database" },
    { value: "Data", label: "Data" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI and Machine Learning", label: "AI and Machine Learning" },
    { value: "Other", label: "Other" },
  ];

  export const categoryBgColor = {
    'Frontend': 'bg-green-300',
    'Data': 'bg-red-300',
    'Backend': 'bg-green-500',
    'DevOps': 'bg-teal-300',
    'Database': 'bg-fuchsia-300',
    'AI and Machine Learning': 'bg-indigo-300',
    'Other': 'bg-amber-300'
  }

 export const selectStyle = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      padding: 5,
      color: "red",
      fontWeight: '500'
    }),
    option: (base, {isFocused, isSelected, isDisabled}) => ({
      ...base,
      backgroundColor: isSelected? 'rgb(51 65 85)' : isFocused? 'rgb(236 253 245)' : undefined
    }),
    // menu: (provided, state) => ({
    //   ...provided,
    //   color: state.selectProps.menuColor,
    // })
  };