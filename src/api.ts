import { PetRequests } from "./petRequest";

interface APIRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" ;
  body?: any;
  headers: Record<string,string>;
}

interface pet_info {
  "id": number,
  "name": string,
  "category": {
    "id": number,
    "name": string
  },
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": number,
      "name": string
    }
  ],
  "status": string
}

const petAPI = new PetRequests();
const baseURL = "https://petstore3.swagger.io/api/v3";
const cosmo: pet_info= {
    "id": 1017249723,
    "name": "Cosmo",
    "category": {
      "id": 1,
      "name": "Dogs"
    },
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 8,
        "name": "friendly"
      }
    ],
    "status": "available"
}

export async function makeARequest(endpointURL: string, request: APIRequest): Promise<Response>{
  return await fetch(endpointURL, request);
  // if(response.ok){
  //   // if(request.method == "DELETE"){
  //   //   return await response.text();
  //   // }else{
  //   //   return await response.json();
  //   //  }
  //   return response
  // }else{
  //   return ("API Request Error --> Response:"+response)
  // }
 
}

export async function createANewPet(pet_info:pet_info):Promise<Response>{
  const newPet:APIRequest ={
      method: "POST",
      body: JSON.stringify(pet_info),
      headers: {"Content-Type":"application/json"}
  }
  return await makeARequest(baseURL+"/pet",newPet)
  // console.log("Pet added successfully:", await data.json())
  
  //expect(data).toEqual(pet_info)
//   //const petAPI = new PetRequests();
//   try{
//     const newPet = petAPI.addNewPet({
//       "id": 1017249723,
//       "name": "Cosmo",
//       "category": {
//         "id": 1,
//         "name": "Dogs"
//       },
//       "photoUrls": [
//         "string"
//       ],
//       "tags": [
//         {
//           "id": 8,
//           "name": "friendly"
//         }
//       ],
//       "status": "available"
//   });
//   const data = await petAPI.makeARequest(newPet)
//   console.log("Pet added successfully:", data)
// }catch(error){
//   console.error ( "Error adding pet:", error)
// }
}

async function getAPetById(){
  //const petAPI = new PetRequests();
  try{
    const petById = petAPI.getPetByID(1017249723);
    const data = await petAPI.makeARequest(petById);
    console.log("Pet with pet_id=1017249723 :",data)
  }catch(error){
    console.error("Error getting pet:", error)
  }
}

async function updateAPet(){
  try{
    const updatePet = petAPI.updatePet({
      "id": 1017249723,
      "name": "Cosmo(updated)",
      "category": {
        "id": 1,
        "name": "Dogs"
      },
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 8,
          "name": "friendly"
        }
      ],
      "status": "available"
  })
  const data = await petAPI.makeARequest(updatePet)
  console.log("Pet updated:",data);
  }catch(error){
    console.error("Error updating pet:", error)
  }
}

async function deleteAPet(){
  try{
    const deletePet = petAPI.deletePet(1017249723);
    const data = await petAPI.makeARequest(deletePet);
    console.log("Pet deleted:",data);
  }catch(error){
    console.error("Error Deleting pet:",error)
  }
}

// async function testAPIservice(){
//   await createANewPet(cosmo);
//   // await getAPetById();
//   // await updateAPet();
//   // await getAPetById();
//   // await deleteAPet();
//   // await getAPetById();
// }

// testAPIservice();

//postData();