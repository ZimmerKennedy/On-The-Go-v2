import{e as b,u as r,a,j as i}from"./index-36e37283.js";const x=({showButton:c})=>{const d=b();r(t=>t.userFlights);const{departingFlight:n,returningFlight:e}=r(t=>t.roundtripFlightData),s=()=>{if(!n||!e)return 0;const t=parseInt(n.price_details.baseline_taxes_and_ppn_fees),o=parseInt(e.price_details.baseline_taxes_and_ppn_fees);return t+o},l=()=>{if(!n||!e)return 0;const t=parseInt(n.price_details.baseline_total_fare_per_ticket),o=parseInt(e.price_details.baseline_total_fare_per_ticket);return t+o},u=()=>{const t=s();return l()+t};return a("section",{children:i("div",{className:"p-6 flex flex-col gap-y-2",children:[a("div",{className:" font-roboto text-xl font-bold border-b-navy-blue border-b-2",children:"Price Summary"}),a("div",{className:" font-roboto font-bold text-lg",children:"Traveler: 1 Adult"}),a("div",{className:" font-thin text-md ",children:`Flight: ${e.price_details.baseline_symbol}${l()}`}),i("div",{className:" font-thin text-md border-b-navy-blue border-b-2",children:["Taxes & Fees: ",e.price_details.baseline_symbol,s()]}),a("div",{className:" font-roboto font-bold text-lg",children:`Trip Total: ${e.price_details.baseline_symbol}${u()}`}),a("div",{className:" font-thin",children:"Rates are quoted in USD"}),c&&a("button",{onClick:()=>{d("/Payments")},className:"my-2 mx-8 xl:mx-0 xl:my-4 bg-deep-blue hover:bg-navy-blue w-56 text-white font-bold py-2 px-4 rounded shadow-md transition duration-200 ease-in-out",children:"Check out"})]})})};export{x as default};
