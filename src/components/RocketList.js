import useSpaceMission from "./utils/useSpaceMission";
import { useEffect } from "react";
const RocketList = ({filterParams}) => {

    const {fetchMission,loading,error} = useSpaceMission(filterParams);
    useEffect(() => {
     // console.log("Missions:", fetchMission);
  }, [fetchMission]);
    if(loading){
      return <div>Loading</div>
    }
    // if (!fetchMission || fetchMission.length === 0) {
    //     return <div>No data</div>;
    //   }
      if (error) return <p>Error: {error.message}</p>;
    return (<div className="missionlist">
      <div className="mission-header">List Of Missions</div>
    <ul>
      
    {fetchMission ? fetchMission.map ((mission) => (
            <li key={mission.flight_number}>
                  <span className="mission-number">#{mission.flight_number}</span> 
                  <span className="mission-name">{mission.mission_name}</span>
                  <span className="mission-count">({mission.payload_count})</span> 
            </li>
        )): <p>No Data</p>}
    </ul>
    </div>);
}
export default RocketList;