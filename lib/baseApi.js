const baseApi = async (url = "",data , method) => {
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },

    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const postData = async (url = "", data = {}) => {
  baseApi(url, data, "POST");
};
const getData = async (url = "") => {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    credentials: "same-origin",
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

const patchData = async (url = "", data = {}) => {
  baseApi(url, data, "PATCH");
};

const deleteData = async (url = "", data = {}) => {
  baseApi(url, data, "DELETE");
};

// english digits to Arbic 

const englishToArabic = (englishNumber) => {
  const arabicNumbers = [
    "٠",
    "١",
    "٢",
    "٣",
    "٤",
    "٥",
    "٦",
    "٧",
    "٨",
    "٩",
  ];
  return englishNumber
    .toString()
    .split("")
    .map((number) => arabicNumbers[number])
    .join("");
};


   


export { postData, getData, patchData, deleteData ,englishToArabic};
