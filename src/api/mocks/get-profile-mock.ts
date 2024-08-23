import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Joao Doe',
      email: 'johndoe@example.com',
      phone: '19561581518',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
