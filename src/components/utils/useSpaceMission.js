import { useEffect, useState,useCallback } from "react";
import prepareData from "./prepareData";
import axios from "axios";
import { SPACE_API_URL } from "./constants"
import mockMissions from "./mockdata";

//axios.defaults.baseURL = SPACEX_API_URL;
const useSpaceMission = (filterParams) => {
  const [fetchMission, setFetchMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSpaceList = useCallback(async () => {
    try {
    //   const response = await axios.get(SPACE_API_URL);
    //   console.log("Fetched missions:", response.data); // Log the fetched data to verify structure

     // const filteredMissions = prepareData(filterParams)(response.data);
     // console.log("Filtered missions:", filteredMissions); // Log the filtered data to verify the filtering process
     //setFetchMission(filteredMissions);

     const filterMissions = prepareData(filterParams);
     const processedData = filterMissions(mockMissions);
     setFetchMission(processedData);
    } catch (err) {
      console.error("Error fetching missions:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  },[filterParams]);

  useEffect(() => {
    fetchSpaceList();
  }, [fetchSpaceList]);

  return { fetchMission, loading, error };
};

export default useSpaceMission;
