function prepareData(filterParams) {
  const { year, customerName } = filterParams;
  console.log(filterParams);
  //Return function that filter missions
  return function (missions) {
    console.log(missions);

    const filterMissions = missions.filter((mission) => {
      const payloads = mission.rocket?.second_stage?.payloads ?? [];
      if (!payloads) {
        return false; // Handle missing payloads gracefully
      }
      // Debugging logs to inspect payload customers and customerName
      console.log("Payload customers:");
      payloads.forEach((payload) => {
        console.log(payload.customers);
      });
      console.log("Customer name to match:", customerName);
      console.log("Customer name to match:", customerName);
      const isLaunchYearMatch = mission.launch_year === year.toString();
      const isCustomerMatch = payloads.some((payload) =>
        payload.customers.some((customer) =>
          customer.toLowerCase().includes(customerName.toLowerCase())
        )
      );
      console.log(
        `Mission: ${mission.mission_name}, Launch Year Match: ${isLaunchYearMatch}, Customer Match: ${isCustomerMatch}`
      );

      return isLaunchYearMatch && isCustomerMatch;
    });
    // Sort filtered missions: first by payloads count (descending), then by launch_date_utc (descending)
    filterMissions.sort((a, b) => {
      // Sort by payloads count (descending)
      const payloadsCountDiff =
        (b.rocket.second_stage.payloads.length || 0) -
        (a.rocket.second_stage.payloads.length || 0);
      if (payloadsCountDiff !== 0) {
        return payloadsCountDiff;
      }

      // Sort by launch_date_utc (descending)
      return new Date(b.launch_date_utc) - new Date(a.launch_date_utc);
    });
    console.log("filter results", filterMissions);

    return filterMissions.map((mission) => ({
      flight_number: mission.flight_number,
      mission_name: mission.mission_name,
      payload_count: mission.rocket?.second_stage?.payloads.length || 0,
    }));
  };
}

export default prepareData;
