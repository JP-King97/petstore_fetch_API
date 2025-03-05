import { faker } from '@faker-js/faker/.';

export interface APIRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: string;
  headers: Record<string, string>;
}

export interface pet_info {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
  photoUrls: [string];
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  status: string;
}

const baseURL = 'https://petstore3.swagger.io/api/v3';

export async function makeARequest(
  endpointURL: string,
  request: APIRequest,
): Promise<Response> {
  return await fetch(endpointURL, request);
}

export async function asambleRequest(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: pet_info,
): Promise<APIRequest> {
  return {
    method: method,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
}

export function newPetValues(): pet_info {
  faker.seed(1234);
  const photoUrls: string = faker.internet.url();
  const pet_id: number = faker.number.int(12000);
  const pet_category_id: number = faker.number.int(20);
  const pet_species: string = faker.animal.type();
  const pet_name: string = faker.animal.petName();

  return {
    id: pet_id,
    name: pet_name,
    category: {
      id: pet_category_id,
      name: pet_species,
    },
    photoUrls: [photoUrls],
    tags: [
      {
        id: faker.number.int(10),
        name: 'friendly',
      },
    ],
    status: 'available',
  };
}

export function updatedPetValues(pet_info: pet_info): pet_info {
  return {
    id: pet_info.id,
    name: pet_info.name + '(Updated)',
    category: {
      id: pet_info.category.id,
      name: pet_info.category.name,
    },
    photoUrls: [pet_info.photoUrls[0]],
    tags: [
      {
        id: pet_info.tags[0].id,
        name: pet_info.tags[0].name,
      },
    ],
    status: pet_info.status,
  };
}

export async function createANewPet(pet_info: pet_info): Promise<Response> {
  const newPet: APIRequest = await asambleRequest('POST', pet_info);
  return await makeARequest(baseURL + '/pet', newPet);
}

export async function getAPetById(pet_id: number): Promise<Response> {
  const getPetById: APIRequest = await asambleRequest('GET');
  return await makeARequest(`${baseURL}/pet/${pet_id}`, getPetById);
}

export async function updateAPet(
  updated_pet_info: pet_info,
): Promise<Response> {
  const updatePet: APIRequest = await asambleRequest('PUT', updated_pet_info);
  return await makeARequest(`${baseURL}/pet`, updatePet);
}

export async function deleteAPet(pet_id: number) {
  const deletePet: APIRequest = await asambleRequest('DELETE');
  return await makeARequest(`${baseURL}/pet/${pet_id}`, deletePet);
}
