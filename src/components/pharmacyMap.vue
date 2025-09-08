<script setup>

import DataTable from "@/components/tables/DataTable.vue";
import { ref } from "vue";
import Table from "@/components/Table.vue";
import ExpandableTableRow from "./ExpandableTableRow.vue";
import TablePage from "@/components/TablePage.vue";

const columnHeaders = ref([
  "detail",
  "Physician Name",
  "Mobile Phone",
  // "Address",
  "email",
  "Action",
]);
const columns = ref([
  "detail",
  "Location",
  "mobilePhone",
  // "Address",
  "email",
  "action",
]);
const hasActions = ref(false);
const hasFooter = ref(true);
const textMessage = ref("");
const entries = ref([
 
  {
    Pharmacydetail: " Kenema Pharmacy, No.5 ከነማ መድኃኒት ቤት ቁ.5 (መድሃኒት ቤት)",
    Location: "Gotera",
    mobilePhone: "+0114653339",
    
    email: "info@kenemapharmacy.com",
    latitude:8.984783146177843, 
    longitude: 38.74978976654747,
  },
  {
    Pharmacydetail: " Kenema Pharmacy,No. 7 ከነማ መድሃኒት ቤት ቁ 7",
    Location: "Saris",
    mobilePhone: "+0114423175",
    
    email: "info@kenemapharmacy.com",
    latitude: 8.974017198633828, 
    longitude: 38.760694887916834,
  },
  
  {
    Pharmacydetail: " Kenema Pharmacy,No. 18",
    Location: "Shola",
    mobilePhone: "+0114423175",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.0265150589028, 
    longitude: 38.79686896748762,
  },
  {
    Pharmacydetail: " Kenema Pharmacy, lideta condominium block 41",
    Location: "Ledeta",
    mobilePhone: "+0111566018",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.016266952320276, 
    longitude: 38.73789844696694,
  },
  {
    Pharmacydetail: " Kenema Pharmacy,  Number 8",
    Location: "Ledeta",
    mobilePhone: "+0913706970",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.027169437917687, 
    longitude: 38.79614906935321,
  },
  {
    Pharmacydetail: " Kenema Pharmacy,  Number 17",
    Location: "Menelik",
    mobilePhone: "+0911874157",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.015535138037157, 
    longitude: 38.76656234787673, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy,  merkato",
    Location: "merkato",
    mobilePhone: "+0112132006",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.029098135194726, 
    longitude: 38.78699005133013, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy,   Number 7",
    Location: "Shola",
    mobilePhone: "+0944229932",
    
    email: "info@kenemapharmacy.com",
    latitude: 9.028250462810908, 
    longitude: 38.78784835819792, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy,  Number 5",
    Location: "Denberua",
    mobilePhone: "+0913368701",
    
    email: "info@kenemapharmacy.com",
    latitude:9.024520680651904, 
    longitude: 38.788020019571476, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy, Number 9",
    Location: "Addis Ababa",
    mobilePhone: "+0911080034",
    
    email: "info@kenemapharmacy.com",
    latitude:9.004345281849222, 
    longitude: 38.75094116288295, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy, Number 12",
    Location: "Mechare",
    mobilePhone: "+0930014763",
    
    email: "info@kenemapharmacy.com",
    latitude:9.0046843734906, 
    longitude: 38.74252975557861, 
  },
  {
    Pharmacydetail: " Kenema Pharmacy, Abado Ena Tafou 20/21",
    Location: "Stadium",
    mobilePhone: "+0111566018",
    
    email: "info@kenemapharmacy.com",
    latitude:9.049289426194287,
    longitude:  38.87967035986613 , 
  },
  {
    Pharmacydetail: " Kenema Pharmacy,Sub City, Nifas Silk L",
    Location: "Nifas silk",
    mobilePhone: "+0913072806",
    
    email: "info@kenemapharmacy.com",
    latitude:9.023348525526949,
    longitude: 38.78673389162476 , 
  },
  {
    Pharmacydetail: " Kenema Pharmacy,Arada Arada Sub City",
    Location: "Addis Ababa",
    mobilePhone: "+0911239250",
    
    email: "info@kenemapharmacy.com",
    latitude:9.074715, 
    longitude: 38.737810 , 
    
  },
  {
    Pharmacydetail: " Kenema Pharmacy, No. 19",
    Location: "Addis Ababa",
    mobilePhone: "+0111566018",
    
    email: "info@kenemapharmacy.com",
    latitude:9.06651960551578,  
    longitude: 38.872324666733924 ,
  },
 
  {
    Pharmacydetail: " Kenema Pharmacy, Number 14 ",
    Location: "Addis Ababa",
    mobilePhone: "+0932354518",
    
    email: "info@kenemapharmacy.com",
    latitude:9.059569686802346, 
    longitude: 38.71989604398679  ,
  },




  
]);
</script>

<template>
  <button    @click="$router.push('/')" class="hover:bg-yellow-400 p-4 flex items-center gap-2">
    <img src="../assets/img/BackButton.svg" alt="">
          <span>Home</span>
           
           
          </button>
  <TablePage>
    <Table
      :headers="{
        head: [
          'Pharmacydetail',
          'Location',
          // 'Address',
          'contact',
          'Email',
          'action',
        ],
        row: [
          'Pharmacydetail',
          'Location',
          // 'Address',
          'mobilePhone',
          'email',
         
        ],
      }"
      :rows="entries"
      :row-com="ExpandableTableRow"
    />
  </TablePage>
</template>
