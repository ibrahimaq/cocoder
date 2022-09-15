
export const categoryOptions = [
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Database", label: "Database" },
    { value: "Data", label: "Data" },
    { value: "DevOps", label: "DevOps" },
    { value: "AI and Machine Learning", label: "AI and Machine Learning" },
    { value: "Other", label: "Other" },
  ];

export const convertPostCategoriesfromDbToReactSelectFormat = (dbCategoriesArr) => {

  const newArr = [];

  for (let i = 0; i < dbCategoriesArr.length; i++) {
    newArr.push(
        {
            value: dbCategoriesArr[i],
            label: dbCategoriesArr[i]
        }
    )
  }
  
  return newArr
};
