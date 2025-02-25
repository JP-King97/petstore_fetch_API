import { PetRequests } from "./petRequest";

const petAPI = new PetRequests();

async function createANewPet(){
  //const petAPI = new PetRequests();
  try{
    const newPet = petAPI.addNewPet({
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
  });
  const data = await petAPI.makeARequest(newPet)
  console.log("Pet added successfully:", data)
}catch(error){
  console.error ( "Error adding pet:", error)
}
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

async function testAPIservice(){
  await createANewPet();
  await getAPetById();
  await updateAPet();
  await getAPetById();
  await deleteAPet();
  await getAPetById();
}

testAPIservice();

//postData();