import {
  getActivitiesPage,
  getCountryDestinationPage,
  getCountryEatingPage,
  getCountryStayPage,
  getCountryTravelerPage,
  getDescriptionPage,
  getDesianationHistoryPage,
  getDestinationMountainPage,
  getDestinationSeaPage,
  getEatingHistoryPage,
  getEatingMountainPage,
  getHomePage,
  getStayHistoryPage,
  getStayMountainPage,
  getTravelerChoiceSeaPage,
  getTravelerHistoryPage,
  getTravelerMountainPage,
  getTripPlanPage,
  getWhereToEatingSeaPage,
  getWhereToStaySeaPage,
} from './connect.js';
// ==================== Component: Card Template ====================
function createCard(dest) {
  const card = document.createElement("div");
  card.className = "w-[305px] h-[360px] bg-white rounded-[16px] shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col";

  card.innerHTML = `
    <div class="w-full h-[200px] overflow-hidden">
      <img src="${dest.image}" alt="${dest.title}" class="w-full h-full object-cover rounded-t-[16px]">
    </div>
    <div class="p-3 flex-1">
      <h2 class="text-lg font-bold">${dest.title}</h2>
      <p class="text-sm mt-2 line-clamp-3">${dest.description}</p>
    </div>
    <div class="px-3 pb-3 mb-5 ms-2">
      <a href="../../View/view.html">
        <button class="w-[89px] h-[35px] bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-700 transition cursor-pointer"> 
          View more
        </button>
      </a>
    </div>
  `;
  return card;
}

// ==================== Component: Reusable Card Renderer ====================
function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(data)) return;

  container.innerHTML = "";
  data.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });
}

// ==================== Component: Image Grid Renderer ====================
function renderImageGrid(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || data.length < 4) return;

  container.innerHTML = `
    <div class="w-[50%] h-[464px] rounded-[10px] relative overflow-hidden">
      <img src="${data[0].image}" alt="${data[0].name}" class="w-full h-full object-cover rounded-[10px]">
      <h1 class="absolute text-xl font-bold text-white bottom-3 left-3 bg-black/50 px-2 py-1 rounded">${data[0].name}</h1>
    </div>
    <div class="w-[50%] h-[464px] flex flex-col gap-5">
      <div class="w-full h-1/2 relative overflow-hidden rounded-[10px]">
        <img src="${data[1].image}" alt="${data[1].name}" class="w-full h-full object-cover rounded-[10px]">
        <h1 class="absolute text-xl font-bold text-white bottom-3 left-3 bg-black/50 px-2 py-1 rounded">${data[1].name}</h1>
      </div>
      <div class="flex gap-5 h-1/2">
        <div class="w-1/2 h-full relative overflow-hidden rounded-[10px]">
          <img src="${data[2].image}" alt="${data[2].name}" class="w-full h-full object-cover rounded-[10px]">
          <h1 class="absolute text-xl font-bold text-white bottom-3 left-3 bg-black/50 px-2 py-1 rounded">${data[2].name}</h1>
        </div>
        <div class="w-1/2 h-full relative overflow-hidden rounded-[10px]">
          <img src="${data[3].image}" alt="${data[3].name}" class="w-full h-full object-cover rounded-[10px]">
          <h1 class="absolute text-xl font-bold text-white bottom-3 left-3 bg-black/50 px-2 py-1 rounded">${data[3].name}</h1>
        </div>
      </div>
    </div>
  `;
}

// ==================== Component: Trip Plan Layout Renderer ====================
function renderSiemReapDescription(data) {
  const container = document.getElementById("description_plan");
  if (!container || !Array.isArray(data)) return;

  for (let i = 0; i < data.length; i += 3) {
    const group = data.slice(i, i + 3);
    if (group.length < 3) continue;

    const planDiv = document.createElement("div");
    planDiv.className = "flex w-full h-full gap-3 mb-4";
    planDiv.innerHTML = `
      <div class="w-[50%] h-[420px] gap-3 flex flex-col">
        <div class="w-full h-1/2 rounded-[10px] overflow-hidden">
          <img src="${group[0].image}" class="w-full h-full object-cover rounded-[10px]">
        </div>
        <div class="w-full h-1/2 rounded-[10px] overflow-hidden">
          <img src="${group[1].image}" class="w-full h-full object-cover rounded-[10px]">
        </div>
      </div>
      <div class="w-[50%] h-[420px] rounded-[10px] overflow-hidden">
        <img src="${group[2].image}" class="w-full h-full object-cover rounded-[10px]">
      </div>
    `;
    container.appendChild(planDiv);
  }
}

// ==================== Component: Title Renderer ====================
function renderTitleDescription(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !Array.isArray(data)) return;

  data.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h1 class="text-4xl font-bold">${item.titleHeader1}<p>${item.titleHeader2}</p></h1>
      <p>${item.description}</p>
    `;
    container.appendChild(div);
  });
}

// ==================== Main Page Initialization ====================
document.addEventListener("DOMContentLoaded", async () => {
  try {

    // Page introll dastion
    const homeData = await getHomePage();
    renderImageGrid(homeData.topDestinations, "home_Destinations");
    renderCards(homeData.Destinations, "descriptionPage");
    renderCards(homeData.Eating, "Eat_homepage");
    renderCards(homeData.Stay, "Stay_Trip");
    renderImageGrid(homeData.LocationTopTrip, "locationTrip");

    const descData = await getDescriptionPage();
    renderCards(descData.Top_Destinations, "DescriptionPage2");
    renderImageGrid(descData.TopDestinations, "locationTrip2");

    const activitiesData = await getActivitiesPage();
    renderCards(activitiesData.ThingToDo, "ThingToDo");
    renderCards(activitiesData.WhereToStay, "WhereToStay");
    renderCards(activitiesData.WhereToEat, "WhereToEat");
    renderImageGrid(activitiesData.TopDestinations, "locationTrip3");

    const tripPlanData = await getTripPlanPage();
    renderSiemReapDescription(tripPlanData.WelcomeToSiemReap);
    renderTitleDescription(tripPlanData.locationTripPlan, "plan");
    renderCards(tripPlanData.WhereToStay, "StayTripPlan");
    renderCards(tripPlanData.WhereToEat, "ToEating");
    renderCards(tripPlanData.ThingToDo, "ThingToDoTripPlan");
    renderImageGrid(tripPlanData.Destination, "Destination");

    const PageSeaTraveler = await getTravelerChoiceSeaPage();
    renderCards(PageSeaTraveler.SeaTopDestinatioTraveler, "SeaDestination");
    renderCards(PageSeaTraveler.SeaWhereToEat, "SeaEat1");
    renderCards(PageSeaTraveler.SeaWhereToStay, "SeaStay1");

    const PageDestinationSea = await getDestinationSeaPage();
    renderCards(PageDestinationSea.SeaTopDestinatio, "SeaDestination2");
    renderCards(PageDestinationSea.SeaAllDestinations?.Row1, "row1");
    renderCards(PageDestinationSea.SeaAllDestinations?.Row2, "row2");

    const seaEat = await getWhereToEatingSeaPage();
    renderCards(seaEat?.SeaTopWhereToEat, "SeaEating");
    renderCards(seaEat?.SeaAllWhereToEating?.RowEat1, "rowEating1");
    renderCards(seaEat?.SeaAllWhereToEating?.RowEat2, "rowEating2");

    const seaStay = await getWhereToStaySeaPage();
    renderCards(seaStay?.SeaTopWhereToStay, "SeaStay");
    renderCards(seaStay?.SeaAllWhereToStay?.RowStay1, "rowStay1");
    renderCards(seaStay?.SeaAllWhereToStay?.RowStay2, "rowStay2");

    const HistoryTraveler = await getTravelerHistoryPage();
    renderCards(HistoryTraveler?.HistoryTopDestination, "HistoryTopDestination");
    renderCards(HistoryTraveler?.HistorytWhereToEat , "HistoryEating");
    renderCards(HistoryTraveler?.HistoryWhereToStay , "HistoryStay");

    const HistoryDes = await getDesianationHistoryPage();
    renderCards(HistoryDes?.HistoryTopDestinations, "desHistory");
    renderCards(HistoryDes?.HistoryAllDestinations?.RowHistory1, "rowHistory1");
    renderCards(HistoryDes?.HistoryAllDestinations?.RowHistory2, "rowHistory2");
    
    const HistoryEating = await getEatingHistoryPage();
    renderCards(HistoryEating?.HistoryTopWhereToEat, "HistoryEating");
    renderCards(HistoryEating?.HistoryAllWhereToEat?.RowHistory1, "historyrow1");
    renderCards(HistoryEating?.HistoryAllWhereToEat?.RowHistory1, "historyrow2");
    
    const History_Stay_Page = await getStayHistoryPage();
    renderCards(History_Stay_Page?.HistoryTopWhereToStayPage, "History_Stay");
    renderCards(History_Stay_Page?.HistoryAllWhereToStayPage?.Row_Stay1, "history_row_Stay1");
    renderCards(History_Stay_Page?.HistoryAllWhereToStayPage?.Row_Stay1, "history_row_Stay2");
    
    const MountainTravelerPage = await getTravelerMountainPage();
    renderCards(MountainTravelerPage?.SeaNewTourPackages, "MountionPackagesNew");
    renderCards(MountainTravelerPage?.SeaPopularTourPackages , "MountionPackagesPopular");
    renderCards(MountainTravelerPage?.SeaAllTourPackages , "MountionPackagesAll");
    
    const MountainDes = await getDestinationMountainPage();
    renderCards(MountainDes?.MountainToDestinations, "MountainTopDestinations");
    renderCards(MountainDes?.MountainAllDestinations?.MountainRow1, "MountainRow1");
    renderCards(MountainDes?.MountainAllDestinations?.MountainRow2, "MountainRow2");
    
    const MountainEating = await getEatingMountainPage();
    renderCards(MountainEating?.MountainTopWhereToEat, "eatMountion");
    renderCards(MountainEating?.MountainAllWhereToEat?.Eat_mountion_row1, "Eat_mountion_row1");
    renderCards(MountainEating?.MountainAllWhereToEat?.Eat_mountion_row2, "Eat_mountion_row2");
    
    const MountainStay = await getStayMountainPage();
    renderCards(MountainStay?.MountainTopWhereToStay, "Mountion_Stay");
    renderCards(MountainStay?.MountainAllWhereToStay?.Mountion_Stay_row1, "Mountion_Stay_row1");
    renderCards(MountainStay?.MountainAllWhereToStay?.Mountion_Stay_row2, "Mountion_Stay_row2");
    
    const CounntryTraveler = await getCountryTravelerPage();
    renderCards(CounntryTraveler?.Country_New, "Country_New");
    renderCards(CounntryTraveler?.Country_Popular , "Country_Popular");
    renderCards(CounntryTraveler?.Country_All , "Country_All");
    
    const CountryDes = await getCountryDestinationPage();
    renderCards(CountryDes?.Country_Side_Top_Destinations, "desCountry");
    renderCards(CountryDes?.Country_Side_All_Destinations?.RowDesCountry1, "row_Des_country1");
    renderCards(CountryDes?.Country_Side_All_Destinations?.RowDesCountry2, "row_Des_country2");
    
    const CountryEating = await getCountryEatingPage() ;
    renderCards(CountryEating?.Country_Side_Top_Destinations_Eat, "CountryEating");
    renderCards(CountryEating?.Country_Side_All_Destinations_Eat?.Row_Eat_Country1, "country_eat_row1");
    renderCards(CountryEating?.Country_Side_All_Destinations_Eat?.Row_Eat_Country2, "country_eat_row2");
    
    const CountryStay = await getCountryStayPage() ;
    renderCards(CountryStay?.Country_Side_Top_Destinations_Stay, "Country_Stay");
    renderCards(CountryStay?.Country_Side_All_Destinations_Stay?.Row_Stay_Country1, "country_row_Stay1");
    renderCards(CountryStay?.Country_Side_All_Destinations_Stay?.Row_Stay_Country2, "country_row_Stay2");
    
  } catch (err) {
    console.error("Data loading error:", err);
  }

});
