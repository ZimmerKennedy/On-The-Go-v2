import{j as d,a as r}from"./index-36e37283.js";const f=({renderReturnLocationInput:y,pickupLocation:o,returnLocation:s,selectedLocation:p,fetchCarRentalLocation:b,handleLocationSelection:l,carLocations:a})=>{var m,u,c,h,g,x;return d("div",{children:[d("div",{className:"flex flex-col",children:[r("label",{className:"font-bold text-sm lg:text-lg pt-4 mb-2 text-white text-shadow-lg font-roboto",children:"Pick-Up Location:"}),r("input",{className:"border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2",type:"text",placeholder:"Enter city or airport",value:o.cityString||o.airportCode,onChange:e=>b(e,"pickup")}),o.length>0&&!p.pickup&&r("div",{className:"absolute bg-white border border-gray-300 rounded-md p-2 mt-24 max-h-64 overflow-y-auto z-10",style:{minWidth:"200px"},children:Object.values(((c=(u=(m=a==null?void 0:a.data)==null?void 0:m.getCarAutoComplete)==null?void 0:u.results)==null?void 0:c.city_data)??{}).map((e,n)=>d("div",{className:"mb-2",children:[r("div",{className:"py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent",onClick:()=>l("pickup",e.city,""),children:e.city}),Object.entries(e.airport_data??{}).map(([i,t])=>r("div",{className:"py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent",onClick:()=>l("pickup",t.airport_name,t.airport_code),children:t.airport_name},i))]},n))})]}),y&&d("div",{className:"flex flex-col mt-2 lg:mt-0",children:[r("label",{className:"font-bold text-sm lg:text-lg lg:pt-4 mb-2 text-white text-shadow-lg font-roboto",children:"Drop-off Location:"}),r("input",{placeholder:"Enter city or airport",type:"text",value:s.cityString||s.airportCode,name:"returnLocation",onChange:e=>b(e,"return"),className:"border rounded-md h-10 focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-inner focus:shadow outline-none w-full max-w-xs px-2"}),s.length>0&&!p.return&&r("div",{className:"absolute bg-white border border-gray-300 rounded-md p-2 mt-24 max-h-64 overflow-y-auto z-10",style:{minWidth:"200px"},children:Object.values(((x=(g=(h=a==null?void 0:a.data)==null?void 0:h.getCarAutoComplete)==null?void 0:g.results)==null?void 0:x.city_data)??{}).map((e,n)=>d("div",{className:"mb-2",children:[r("div",{className:"py-1 px-2 hover:bg-gray-200 cursor-pointer border-2 border-b-navy-blue border-transparent",onClick:()=>l("return",e.city,""),children:e.city}),Object.entries(e.airport_data??{}).map(([i,t])=>r("div",{className:"py-1 px-2 hover:bg-gray-200 cursor-pointer my-1 border-2 border-b-navy-blue border-transparent",onClick:()=>l("return",t.airport_name,t.airport_code),children:t.airport_name},i))]},n))})]})]})};export{f as default};
