export interface APIRequest {
  endpointURL: string;
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

export class PetRequests{

private API_URL = "https://petstore3.swagger.io/api/v3";

async makeARequest(request: APIRequest): Promise<any> {
    try{
       const response = await fetch(request.endpointURL, request);
       if(!response.ok){
        throw new Error(`HTTP Error ${response.status}: ${await response.text()}`);
       }
       if(request.method == "DELETE"){
        return await response.text();
       }else{
        return await response.json();
       }
    }catch ( error){
        console.error('API Request Error:',error)
        throw error;
    }
    
}

addNewPet(pet_info: pet_info): APIRequest {
  return{
      endpointURL: `${this.API_URL}/pet`,
      method: "POST",
      body: JSON.stringify(pet_info),
      headers: {"Content-Type":"application/json"}
  }
}

getPetByID(pet_id: number):APIRequest{
  return{
    endpointURL: `${this.API_URL}/pet/${pet_id}`,
    method:"GET",
    headers:{"Content-Type":"application/json"}
  }
}

updatePet(pet_info: pet_info):APIRequest{
  return{
    endpointURL: `${this.API_URL}/pet`,
    method: "PUT",
    body: JSON.stringify(pet_info),
    headers: {"Content-Type":"application/json"}
  }
}

deletePet(pet_id:number): APIRequest{
  return{
    endpointURL: `${this.API_URL}/pet/${pet_id}`,
    method:"DELETE",
    headers:{"Content-Type":"application/json"}
  }
}

}
