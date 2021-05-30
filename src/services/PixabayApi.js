import axios from "axios";
const API_KEY = '20761999-824bee718d4a0402875e9ae68';
const fetchImg = async ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  const response = await axios

    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`);
  return response.data.hits;
};
export default  fetchImg;