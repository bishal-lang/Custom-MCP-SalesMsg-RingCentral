import { salesmsgClient } from "../clients/salesmsg.client.js";

async function request<T>(fn: () => Promise<any>, attempt = 1): Promise<T> {
  try {
    const res = await fn();
    return res.data;
  } catch (err: any) {
    const status = err?.response?.status;

    const retryable = status === 429 || status >= 500 || !status;

    if (retryable && attempt < 3) {
      await new Promise(r => setTimeout(r, 300 * attempt));
      return request(fn, attempt + 1);
    }

    throw new Error(
      `Salesmsg Error (${status ?? "no-status"}): ${
        err?.response?.data?.message || err.message
      }`
    );
  }
}

/* ---------------- MESSAGING ---------------- */

export async function sendTextMessage(
  phone: string,
  message: string,
  teamId?: number
) {
  return request(() =>
    salesmsgClient.post("/messages", null, {
      params: {
        number: phone,
        message,
        team_id: teamId
      }
    })
  );
}

export async function sendGroupText(
  phones: string[],
  message: string,
  teamId?: number
) {
  return request(() =>
    Promise.all(
      phones.map(phone =>
        salesmsgClient.post("/messages", null, {
          params: {
            number: phone,
            message,
            team_id: teamId
          }
        })
      )
    )
  );
}

/* ---------------- CONTACTS ---------------- */

export async function findContacts(params: {
  phone?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}) {
  return request(() =>
    salesmsgClient.get("/contacts", {
      params: {
        number: params.phone,
        first_name: params.firstName,
        last_name: params.lastName,
        email: params.email
      }
    })
  );
}

export async function getContact(contactId: string) {
  return request(() =>
    salesmsgClient.get(`/contacts/${contactId}`)
  );
}

export async function createContact(
  firstName: string,
  lastName: string,
  phone: string
) {
  return request(() =>
    salesmsgClient.get("/contacts", {
      params: {
        first_name: firstName,
        last_name: lastName,
        number: phone
      }
    })
  );
}

/* ---------------- NOTES ---------------- */

export async function createNote(
  contactId: string,
  text: string
) {
  return request(() =>
    salesmsgClient.post(
      `/contacts/note/${contactId}/create`,
      null,
      { params: { text } }
    )
  );
}

/* ---------------- TAGS ---------------- */

export async function addTag(
  contactId: string,
  tag: string
) {
  return request(() =>
    salesmsgClient.post(
      `/tags/contact/${contactId}/${encodeURIComponent(tag)}`
    )
  );
}

export async function removeTag(
  contactId: string,
  tag: string
) {
  return request(() =>
    salesmsgClient.delete(
      `/tags/contact/${contactId}/${encodeURIComponent(tag)}`
    )
  );
}

export async function getContactsByTag(
  tag: string,
  page = 1,
  limit = 20,
  search?: string
) {
  return request(() =>
    salesmsgClient.get(`/contacts/tags/${tag}`, {
      params: { page, limit, search }
    })
  );
}

/* ---------------- OPT OUT ---------------- */

export async function optOutContact(contactId: string) {
  return request(() =>
    salesmsgClient.post(`/contacts/opt-out/${contactId}`)
  );
}

/* ---------------- LOOKUP ---------------- */

export async function phoneLookup(phone: string) {
  return request(() =>
    salesmsgClient.get("/contacts", {
      params: { number: phone }
    })
  );
}

/* ---------------- GENERIC ---------------- */

export async function apiRequest(
  method: string,
  endpoint: string,
  data?: any
) {
  return request(() =>
    salesmsgClient.request({
      method,
      url: endpoint,
      data
    })
  );
}

/* ---------------- MEMEBR ---------------- */

export async function findMember({
  teamId,
  term,
  assigned,
  limit,
  offset
}: {
  teamId: string;
  term: string;
  assigned?: number;
  limit?: number;
  offset?: number;
}) {
  return request(() =>
    salesmsgClient.get(`/teams/${teamId}/members/search`, {
      params: {
        term,
        assigned,
        limit,
        offset
      }
    })
  );
}