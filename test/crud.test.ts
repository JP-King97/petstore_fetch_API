import exp from "constants"
import { createANewPet, deleteAPet, getAPetById, updateAPet } from "../src/pet_api"
import { pet_info } from "../src/pet_api"


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
        "name": "Cosmo(Updated)",
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
        const response = await createANewPet(newPetValues);
        const json = await response.json();
        //console.log(json);
        expect(json).toEqual(newPetValues);
    })

    test('Get a pet by ', async ()=>{
        const response = await getAPetById(newPetValues.id);
        const json = await response.json();
        //console.log(json);
        expect(json).toEqual(newPetValues);
    })

    test('Update a pet', async ()=> {
        const response = await updateAPet(updatedPetValues);
        const json = await response.json();
        //console.log(json);
        expect(json).toEqual(updatedPetValues)
    })

    test('Delete a pet', async ()=> {
        const response = await deleteAPet(updatedPetValues.id);
        const respText = await response.text();
        //console.log(respText);
        expect(respText).toEqual("Pet deleted")
    })
})