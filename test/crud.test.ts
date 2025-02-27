import exp from "constants"
import { createANewPet, deleteAPet, getAPetById, updateAPet } from "../src/pet_api"
import { pet_info } from "../src/pet_api"
import { faker } from "@faker-js/faker/."


describe('Create, Read, Update and Delete',()=> {
    const photoUrls: string = faker.internet.url();
    const pet_id:number = faker.number.int(1000);
    const pet_category_id: number = faker.number.int(20) 
    const pet_species: string = faker.animal.type();
    const pet_name: string = faker.animal.petName()
    const newPetValues:pet_info = {
        "id": pet_id,
        "name": pet_name,
        "category": {
        "id": pet_category_id,
        "name": pet_species
        },
        "photoUrls": [
        photoUrls
        ],
        "tags": [
        {
            "id": 7,
            "name": "friendly"
        }
        ],
        "status": "available"
    }

    const updatedPetValues:pet_info = {
        "id": pet_id,
        "name": pet_name+"(Updated)",
        "category": {
        "id": pet_category_id,
        "name": pet_species
        },
        "photoUrls": [
            photoUrls
        ],
        "tags": [
        {
            "id": 7,
            "name": "friendly"
        }
        ],
        "status": "available"
    }

    test('Create a new pet', async ()=>{
        const response = await createANewPet(newPetValues);
        const json = await response.json();
        expect(json).toEqual(newPetValues);
    })

    test('Get a pet by ', async ()=>{
        const response = await getAPetById(newPetValues.id);
        const json = await response.json();
        expect(json).toEqual(newPetValues);
    })

    test('Update a pet', async ()=> {
        const response = await updateAPet(updatedPetValues);
        const json = await response.json();
        expect(json).toEqual(updatedPetValues)
    })

    test('Delete a pet', async ()=> {
        const res1 = await deleteAPet(updatedPetValues.id);
        const resText1 = await res1.text();
        expect(resText1).toEqual("Pet deleted");
        const res2 = await getAPetById(updatedPetValues.id);
        const resText2 = await res2.text();
        expect(resText2).toEqual("Pet not found")
    })
})