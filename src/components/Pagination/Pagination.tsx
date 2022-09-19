import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const Pagination = () => {
let [pageNumber, setPageNumber] = useState(1);



  const fetchColors = () => {
    return axios.get<any[]>(`http://localhost:3001/colors?_limit=2&_page=${pageNumber}`);
  };

  const { data } = useQuery(["colors", pageNumber], fetchColors, {
    onSuccess: (): void => console.log(data?.data),
  });

  const onPrevClick = () => {
    setPageNumber(pageNumber--);
    if(pageNumber < 1) {
        pageNumber = 1;
    }
}
const onNextClick = () => {
    const pageCount = 8 / 2;
    if(pageNumber >= pageCount) {
        pageNumber = pageCount;
    } else {
        setPageNumber(pageNumber+1);
    }
}


  return (
    <>
      <h2>Pagination</h2>

      <ul>
        {data?.data.map(({label, id}) => {
            return <li key={id}>{label} </li>
        })}

        <button disabled={pageNumber === 1? true : false} onClick={onPrevClick}>prev</button>
        {pageNumber}
        <button disabled={pageNumber === 4? true : false} onClick={onNextClick}>next</button>
      </ul>
    </>
  );
};

export default Pagination;
