import {
  createANewPet,
  deleteAPet,
  getAPetById,
  newPetValues,
  updateAPet,
  updatedPetValues,
} from '../src/pet_api';

describe('Create, Read, Update and Delete', () => {
  test('Create a new pet', async () => {
    const request = newPetValues();
    const response = await createANewPet(request);
    const json = await response.json();
    expect(json).toMatchSnapshot();
    expect(json).toEqual(request);
  });
  test('Get a pet by', async () => {
    const request = newPetValues();
    await createANewPet(request);
    const res2 = await getAPetById(request.id);
    const json2 = await res2.json();
    expect(json2).toMatchSnapshot();
    expect(json2).toEqual(request);
  });
  test('Update a pet', async () => {
    const request = newPetValues();
    const res1 = await createANewPet(request);
    const json1 = await res1.json();
    //console.log(await json1)
    const updatedRes1 = updatedPetValues(json1);
    const response = await updateAPet(updatedRes1);
    const json = await response.json();
    //console.log(await json)
    expect(json).toMatchSnapshot();
    expect(json).toEqual(updatedRes1);
  });
  test('Delete a pet', async () => {
    const request = newPetValues();
    const res1 = await createANewPet(request);
    const json = await res1.json();
    const res2 = await deleteAPet(json.id);
    const resText1 = await res2.text();
    expect(resText1).toEqual('Pet deleted');
    const res3 = await getAPetById(json.id);
    const resText2 = await res3.text();
    expect(resText2).toEqual('Pet not found');
  });
});
