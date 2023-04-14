const DashboardComponent = (props) =>{
    return(
        <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src={props.cover} alt="content"/>
            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">{props.venue}</h3>
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{props.name}</h2>
            <p class="leading-relaxed text-base">{props.description}</p>
          </div>
        </div>

      </div>
    )
}

export default DashboardComponent;