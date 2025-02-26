
export interface APIRequest {
  method: "GET" | "POST" | "PUT" | "DELETE" ;
  body?: any;
  headers: Record<string,string>;
}

export interface pet_info {
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

const baseURL = "https://petstore3.swagger.io/api/v3";

export async function makeARequest(endpointURL: string, request: APIRequest): Promise<Response>{
  return await fetch(endpointURL, request);
}

export async function asambleRequest(method: "GET" | "POST" | "PUT" | "DELETE", body?: pet_info): Promise<APIRequest>{
  return  {
        method: method,
        body: JSON.stringify(body),
        headers: {"Content-Type":"application/json"}
  }
}

export async function createANewPet(pet_info:pet_info):Promise<Response>{
  const newPet:APIRequest = await asambleRequest("POST", pet_info);
  // const newPet:APIRequest ={
  //     method: "POST",
  //     body: JSON.stringify(pet_info),
  //     headers: {"Content-Type":"application/json"}
  // }
  return await makeARequest(baseURL+"/pet",newPet)
}

export async function getAPetById(pet_id:number):Promise<Response>{
  const getPetById:APIRequest = await asambleRequest("GET")
  // const getPetById:APIRequest={
  //   method: "GET",
  //   headers:{"Content-Type":"application/json"}
  // }
  return await makeARequest(`${baseURL}/pet/${pet_id}`,getPetById)
}

export async function updateAPet(updated_pet_info:pet_info):Promise<Response>{
  const updatePet:APIRequest = await asambleRequest("PUT", updated_pet_info)
  // const updatePet:APIRequest ={
  //   method: "PUT",
  //   body: JSON.stringify(updated_pet_info),
  //   headers: {"Content-Type":"application/json"}
  // }
  return await makeARequest(`${baseURL}/pet`,updatePet)
}

export async function deleteAPet(pet_id:number){
  const deletePet:APIRequest = await asambleRequest("DELETE");
  // const deletePet:APIRequest = {
  //   method:"DELETE",
  //   headers:{"Content-Type":"application/json"}
  // }
  return await makeARequest(`${baseURL}/pet/${pet_id}`,deletePet)
}