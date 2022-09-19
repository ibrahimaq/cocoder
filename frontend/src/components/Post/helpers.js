
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
