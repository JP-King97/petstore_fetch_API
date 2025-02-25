import { createANewPet } from "../src/api"
import { pet_info } from "../src/petRequest"


describe('Create, Read, Update and Delete',()=> {
    const newPetValues:pet_info = {
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

    const updatedPetValues:pet_info = {
        "id": 1017249723,
        "name": "Cosmo(Updated",
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


    test('Create a new pet', async ()=>{
        const response = await createANewPet(newPetValues)
        const json = await response.json();
        console.log(json);
        expect(json).toEqual(newPetValues)
    })
})