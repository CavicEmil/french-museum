const API_BASE_URL = 'http://localhost:8080/api/';

/* READ: get the data from server */
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; 
  }
};

/* call to get exhibits */
export const getExhibits = async () => {
  return fetchData('exhibits');
};

/* CREATE: post request to create new data entries */
export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

/* HERE BE UPDATE AND DELETE */