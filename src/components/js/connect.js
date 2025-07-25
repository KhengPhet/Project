// Page
// Home Page
export async function getHomePage() {
  try {
    const response = await fetch('http://localhost:3000/Homepage');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch home page data:", error);
    return null;
  }
}
// Description Page 
export async function getDescriptionPage() {
  try {
    const response = await fetch("http://localhost:3000/Destination");
    const data2 = await response.json();
    return data2;
  } catch (error) {
    console.error("Failed to fetch Description data:", error);
    return null;
  }
}

// Activity Page
export async function getActivitiesPage() {
  try {
    const response = await fetch("http://localhost:3000/Activities");
    const Data3 = await response.json();
    return Data3;
  } catch (error) {
    console.log("Failed to fetch Activities data:", error);
    return null;
  }
}

// TripPlan Page
export async function getTripPlanPage() {
  try {
    const response = await fetch("http://localhost:3000/TripPlan");
    const data4 = await response.json();
    return data4;
  } catch (error) {
    console.log("Failed to fetch TripPlan data:", error);
    return null;
  }
}

// page Sea
//TravelerChoiceSea Page
export async function getTravelerChoiceSeaPage() {
  try {
    const response = await fetch("http://localhost:3000/TravelerChoiceSea");
    const Sea1 = await response.json();
    return Sea1;
  } catch (error) {
    console.log("Failed to fetch Sea data:", error);
    return null;
  }
}

// Destination page Sea

export async function getDestinationSeaPage() {
  try {
    const response = await fetch("http://localhost:3000/DestinationSea");
    const dataSea2 = await response.json();
    return dataSea2;
  } catch (error) {
    console.error("Failed to fetch Sea Traveler data:", error);
    return [];
  }
}

export async function getWhereToEatingSeaPage() {
  try {
    const response = await fetch("http://localhost:3000/WhereToEatingPage");
    const dataSea3 = await response.json();
    return dataSea3;
  } catch (error) {
    console.error("Failed to fetch Sea WhereToEatin data:", error);
    return null;
  }
}

// Where to Stay sea page
export async function getWhereToStaySeaPage() {
  try {
    const response = await fetch("http://localhost:3000/WhereToStayPage");
    const dataSea4 = await response.json();
    return dataSea4;
  } catch (error) {
    console.error("Failed to fetch Sea WhereToEatin data:", error);
    return null;
  }
}


// Page History
export async function getTravelerHistoryPage() {
  try {
    const response = await fetch("http://localhost:3000/TravelerChoiceHistory");
    const dataHistiey1 = await response.json();
    return dataHistiey1;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getDesianationHistoryPage() {
  try {
    const response = await fetch("http://localhost:3000/DestinationHistory");
    const dataHistiey2 = await response.json();
    return dataHistiey2;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getEatingHistoryPage() {
  try {
    const response = await fetch("http://localhost:3000/WhereToEatHistory");
    const dataHistiey3 = await response.json();
    return dataHistiey3;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getStayHistoryPage() {
  try {
    const response = await fetch("http://localhost:3000/WhereToStayHistory");
    const dataHistiey4 = await response.json();
    return dataHistiey4;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

// page Mountain
export async function getTravelerMountainPage() {
  try {
    const response = await fetch("http://localhost:3000/TravelerChoiceMointain");
    const dataMountain1 = await response.json();
    return dataMountain1;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getDestinationMountainPage() {
  try {
    const response = await fetch("http://localhost:3000/DestiantionMountion");
    const dataMountain2 = await response.json();
    return dataMountain2;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getEatingMountainPage() {
  try {
    const response = await fetch("http://localhost:3000/Mountain_Eat");
    const dataMountain3 = await response.json();
    return dataMountain3;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getStayMountainPage() {
  try {
    const response = await fetch("http://localhost:3000/Mountion_Stay");
    const dataMountain4 = await response.json();
    return dataMountain4;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

// page Country
export async function getCountryTravelerPage(){
    try {
    const response = await fetch("http://localhost:3000/Country_TravelerPage");
    const dataCountry1 = await response.json();
    return dataCountry1;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getCountryDestinationPage(){
    try {
    const response = await fetch("http://localhost:3000/Country_Des");
    const dataCountry2 = await response.json();
    return dataCountry2;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getCountryEatingPage(){
   try {
    const response = await fetch("http://localhost:3000/Country_Eating");
    const dataCountry3 = await response.json();
    return dataCountry3;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}

export async function getCountryStayPage(){
    try {
    const response = await fetch("http://localhost:3000/Country_Stay");
    const dataCountry4 = await response.json();
    return dataCountry4;
  } catch (error) {
    console.error("Failed to fetch History data:", error);
    return null;
  }
}


