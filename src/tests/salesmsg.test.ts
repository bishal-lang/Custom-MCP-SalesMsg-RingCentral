import { describe, it, expect } from "vitest";
import {
  sendTextMessage,
  findContact,
  phoneLookup
} from "../services/salesmsg.services.js";

describe("Salesmsg Service Tests", () => {
  it("should send a text message (real API call)", async () => {
    const result = await sendTextMessage(
      "+10000000000", // replace with test number
      "MCP test message"
    );

    expect(result).toBeDefined();
  });

  it("should lookup phone", async () => {
    const result = await phoneLookup("+10000000000");

    expect(result).toBeDefined();
  });

  it("should attempt contact search", async () => {
    const result = await findContact("+10000000000");

    expect(result).toBeDefined();
  });
});