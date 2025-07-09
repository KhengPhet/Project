
fetch('https://khengphet.github.io/data/api.json').then(response => response.json()).then(data => {
  const topDestinations = data.Homepage.Destinations;
  const container = document.getElementById("Destination_homepage");

  topDestinations.forEach(dest => {
    const div = document.createElement("div");
    div.innerHTML = `
              <div class="w-[305px] h-[460px] bg-white rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div class="w-[100%] h-[300px] rounded-t-[10px] flex justify-center items-center">
                    <div class="w-full h-full rounded-[10px] p-3">
                        <img src="${dest.image}" alt="" class="w-full h-full rounded-[10px]">
                    </div>
                </div>
                <div class="w-[100%] h-[160px] rounded-b-[10px]">
                    <div class="w-[90%] h-[95%] m-auto ">
                        <div class="w-[100%] h-[35px] ">
                            <h3 class="text-[20px] font-bold">${dest.title}</h3>
                        </div>
                        <div class="w-full h-[70px] ">
                            <p class="text-[15px]">${dest.description}</p>
                        </div>
                        <button class="w-[89px] h-[27px] bg-red-600 mt-3">View more</button>
                    </div>
                </div>
            </div>
          `;
    container.appendChild(div);
  });
})