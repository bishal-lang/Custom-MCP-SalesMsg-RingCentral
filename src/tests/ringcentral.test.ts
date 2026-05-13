import { describe, it, expect } from "vitest";
import {
  sendSmsMms,
  findContact,
  createVideoMeeting
} from "../services/ringcentral.services.js";

describe("RingCentral Service Tests", () => {
  it("should send SMS", async () => {
    const result = await sendSmsMms(
      "+10000000000", // replace with valid test number
      "RingCentral MCP test message"
    );

    expect(result).toBeDefined();
  });

  it("should search contact", async () => {
    const result = await findContact("test");

    expect(result).toBeDefined();
  });

  it("should create meeting", async () => {
    const result = await createVideoMeeting("MCP Test Meeting");

    expect(result).toBeDefined();
  });
});